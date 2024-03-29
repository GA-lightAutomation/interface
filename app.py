import os
from flask import Flask, send_from_directory, request
from flask_cors import CORS
import sqlite3
import requests

url = 'http://192.168.100.105/' #IP for ESP32

con = sqlite3.connect('door.db', check_same_thread=False)
cur = con.cursor()

app = Flask(__name__, static_folder='frontend/build')

if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)

CORS(app)
# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route("/test")
def test():
    return {"test":"Hello Gearbox Academy"}

@app.route("/db")
def testDB():
    data = request.args
    texts = []
    for row in cur.execute(f"SELECT * FROM {data.get('table')}"):
        texts.append(row[0])
    return {"db":texts}

@app.route("/command")
def command():
    data = request.args
    headers = {'Command':data.get('command')}
    r = requests.get(url,headers=headers)
    print(r.text)
    return {"response":"OK"}

@app.route("/esp") #receive requests from ESP32
def esp():
    data = request.args
    authenticate(data.get('command'),data.get('payload'))
    return {'response':'OK'}

def authenticate(access,key): #check if user credentials exist
    user=0
    for row in cur.execute(f"SELECT * FROM users WHERE {access}='{key}'"):
        print(row)
        user+=1
    if user:
        headers = {'Command':"authenticate"}
        r = requests.get(url,headers=headers)
        print(r.text)
    else :
        print("DENIED ACCESS")
        headers = {'Command':"denied"}
        r = requests.get(url,headers=headers)
        print(r.text)