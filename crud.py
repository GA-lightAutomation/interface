"""
        Complete CRUD operations
"""

#CREATE TABLE users (userID INTEGER primary key  autoincrement, firstName char, lastName char, rfid INTEGER, keypad VARCHAR);
#CREATE TABLE logs (userID INTEGER, time TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
#CREATE TABLE test (text varchar);


import sqlite3
con = sqlite3.connect('door.db', check_same_thread=False)
cur = con.cursor()

def insert(data):
    print(f"inserting {data} into test")
    cur.execute("INSERT INTO test (text) VALUES (?)",(data,))
    con.commit()

insert("me")

def retrieve(table):
    print("Listing data from:",table,'\n')
    for row in cur.execute(f"SELECT * FROM {table}"):
        print(row)

retrieve('test')

def delete(table):
    print("Deleting data from:",table,'\n')
    cur.execute(f"DELETE FROM {table} WHERE text='me'")
    con.commit()

delete('test')