from flask import Blueprint, request, abort, jsonify
from services.common import stock_data

app = Blueprint("index", __name__)


@app.route("/", methods=["GET", "POST"])
def index():
    try:
        if request.method == "GET":
            return "GET!"
        elif request.method == "POST":
            params = request.json
            if "ticker" not in params:
                return

            ticker = params["ticker"]
            stockData = stock_data.StockData()
            response = stockData.fetch_stock_data(ticker)

            return "POST"
        else:
            return abort(400)
    except Exception as e:
        return str(e)
