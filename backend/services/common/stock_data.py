import yfinance as yf
from pandas_datareader import data as pdr


class StockData:
    def fetch_stock_data(self, ticker):
        yf.pdr_override()
        df = pdr.get_data_yahoo(ticker)

        return df
