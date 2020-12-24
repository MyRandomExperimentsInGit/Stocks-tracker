import sys 
import json 
from yahoofinancials import YahooFinancials

def get_net_income(company):
    yahoo_fin = YahooFinancials(company)
    net_income= yahoo_fin.get_net_income()
    send_output(net_income)
    return net_income

def get_balance_sheet_data(company):
    yahoo_fin = YahooFinancials(company)
    financial_statememt= yahoo_fin.get_financial_stmts('quarterly', 'balance')
    send_output(financial_statememt)
    return financial_statememt

#this is required because the data will be with single quotes but json format doesnt allow single quotes 
#TODO: I think this is causing the data to be downloaded as well, find a workaround  
def send_output(data):
    print(json.dumps(data))

#TODO: Move this to a seperate file after moving this script to Algos folder
ticker = sys.argv[1]
if sys.argv[1]== "netincome":
    get_net_income(sys.argv[2])
elif sys.argv[1]== "balancesheet":
    get_balance_sheet_data(sys.argv[2])
else:
    print(sys.argv[1])
    print("operation invalid")


