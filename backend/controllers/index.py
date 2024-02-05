from flask import Blueprint
from services.common import stock_data

app = Blueprint("index", __name__)


@app.route("/", methods=["GET", "POST"])
def index():
    stockData = stock_data.StockData()
    df = stockData.fetch_stock_data("AAPL")

    return "Hello from Flask!"
