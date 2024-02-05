from flask import Blueprint

app = Blueprint("index", __name__)


@app.route("/", methods=["GET", "POST"])
def index():
    return "Hello from Flask!"
