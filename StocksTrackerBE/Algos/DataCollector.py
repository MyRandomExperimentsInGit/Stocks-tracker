# from yahoofinancials import YahooFinancials
# import sys 

# def get_net_income(company):
#     yahoo_fin = YahooFinancials(company)
#     net_income= yahoo_fin.get_net_income()
#     print(net_income)
#     return net_income

# def get_balance_sheet_data(company):
#     yahoo_fin = YahooFinancials(company)
#     financial_statememt= yahoo_fin.get_financial_stmts()
#     print(financial_statememt)
#     return financial_statememt

# get_net_income(sys.argv[1])

from yahoofinancials import YahooFinancials
ticker = 'AAPL'
yahoo_financials = YahooFinancials(ticker)
balance_sheet_data_qt = yahoo_financials.get_financial_stmts('quarterly', 'balance')
print("balance sheet data qt")
print(balance_sheet_data_qt)