from flask import Flask, render_template, request, redirect, url_for, session, flash
from pymongo import MongoClient
import datetime
from urllib.parse import urlparse

app = Flask(__name__)
app.secret_key = 'super_secret_key_for_this_app'

# Setup MongoDB
# Assuming default local MongoDB server
client = MongoClient('mongodb://localhost:27017/')
db = client['flask_auth_logger_db']

@app.before_request
def capture_request():
    log = {
        "ip": request.remote_addr,
        "url": request.url,
        "method": request.method,
        "headers": dict(request.headers),
        "payload": request.get_data().decode("utf-8"),
        "timestamp": datetime.datetime.now()
    }
    db.logs.insert_one(log)

@app.route("/")
def home():
    if 'username' in session:
        return render_template('home.html', username=session['username'])
    return redirect(url_for('login'))

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        
        user = db.users.find_one({"username": username})
        if user and user["password"] == password: # Note: Storing plain text pass for simple minimal requirement, but usually we should hash.
            session["username"] = username
            return redirect(url_for('home'))
        else:
            flash("Invalid username or password")
            return redirect(url_for('login'))
            
    return render_template("login.html")

@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        
        # Check if user already exists
        if db.users.find_one({"username": username}):
            flash("Username already exists")
            return redirect(url_for('signup'))
            
        # Create new user
        db.users.insert_one({"username": username, "password": password})
        flash("Signup successful! Please login.")
        return redirect(url_for('login'))
        
    return render_template("signup.html")

@app.route("/logout")
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))

@app.route("/api/data")
def data():
    return {"data": "example", "status": "success"}

if __name__ == "__main__":
    app.run(debug=True, port=5000)
