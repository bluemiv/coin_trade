# -*- coding: utf-8 -*-

from strategy.installment_purchase import InstallmentPurchase

doc = '''
 __   __             __   __  ___ 
/  ` /  \ | |\ |    |__) /  \  |  
\__, \__/ | | \|    |__) \__/  |  


Strategy
    1. 분할매수(installment parchase)
'''

if __name__ == '__main__':
    print(doc)
    while True:
        strategy_number = input('Input strategy number: ')

        if strategy_number == '1':
            break
        else:
            print("Invalid input.")

    black_list = ['KRW-BTT', 'KRW-NU', 'KRW-LTC', 'KRW-XEM']

    if strategy_number == '1':
        installmentPurchase = InstallmentPurchase(init_krw=10100, black_list=black_list)
        installmentPurchase.run()
