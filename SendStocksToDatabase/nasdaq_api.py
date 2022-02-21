import certifi
import requests, json, pymongo
from pytz import timezone
from datetime import datetime

def getStocks():
    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Host': 'api.nasdaq.com',
        'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.1 Safari/605.1.15',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding':'gzip, deflate, br',
        'Connection':'keep-alive'
        
    }
    r = requests.get('https://api.nasdaq.com/api/screener/stocks?tableonly=true&limit=25&offset=0&download=true', headers=headers)
    j = json.loads(r.text)
    t = [{k: v for k, v in d.items() if k in ['symbol','name','lastsale']} for d in j["data"]["rows"]]
    result = [dict(item, **{'datetime':datetime.now(timezone('EST')).strftime('%Y-%m-%d-%H:%M:%S')}) for item in t]
    return result

def getCreds():
    with open('database.json') as f:
        creds = json.loads(f.read())
    return creds



def insert():
    stocks = getStocks()
    dbCreds= getCreds()
    myclient = pymongo.MongoClient(dbCreds["connectionString"], tlsCAFile=certifi.where())
    mydb = myclient[dbCreds["databaseName"]]
    mycol = mydb[dbCreds["collectionName"]]
    mycol.delete_many({})
    mycol.insert_many(stocks)
    dbCreds["collectionName"] = 'historical_stocks'
    mydb = myclient[dbCreds["databaseName"]]
    mycol = mydb[dbCreds["collectionName"]]

    mycol.insert_many(stocks)

def main():
    insert()
    print('Database Updated')
 
if __name__ == "__main__":
    main()