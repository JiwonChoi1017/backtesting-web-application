from flask import Blueprint

app = Blueprint("auth", __name__)


@app.route("/login")
def login():
    return "Login!"


@app.route("/register")
def register():
    return "Register!"


@app.route("/mypage")
def mypage():
    return "My Page!"
