from flask import Flask , jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

#root API route
@app.route("/")
def home():
    return "Home"


# Members API route
@app.route("/members")
def members():
    return jsonify({"members" : ["Member1" , "Member2" , "Member3" ]})


if __name__ == "__main__":
    app.run(debug=True)