from flask import Flask
from flask_cors import CORS
from controllers import index, auth

app = Flask(__name__)
app.register_blueprint(index.app)
app.register_blueprint(auth.app)
CORS(app)

if __name__ == "__main__":
    app.run(port=5000, debug=True)
