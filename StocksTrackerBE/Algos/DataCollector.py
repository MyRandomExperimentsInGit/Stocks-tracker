from yahoofinancials import YahooFinancials

class DataCollector:
    def __init__(self,company):
        self._yahooFin = YahooFinancials(company)

    def get_net_income(self):
        net_income= self._yahooFin.get_net_income()
        print(net_income)
        return net_income

apple_data_collector= DataCollector('AAPL')
apple_data_collector.get_net_income()