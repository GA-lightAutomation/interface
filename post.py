import requests

url = 'http://192.168.0.229/'
headers = {'Command':'ON'}
r = requests.get(url,headers=headers)
print(r.text)