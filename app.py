import os
from flask import Flask, send_from_directory, request
from flask_cors import CORS
import sqlite3

con = sqlite3.connect('door.db', check_same_thread=False)
cur = con.cursor()

app = Flask(__name__, static_folder='frontend/build')

if __name__ == '__main__':
    context = ('server.crt', 'server.key')#certificate and key files
    app.run(use_reloader=True, port=5000, threaded=True,ssl_context=context)

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
    print(data)
    texts = []
    for row in cur.execute(f"SELECT * FROM {data.get('table')}"):
        texts.append(row[0])
    return {"db":texts}