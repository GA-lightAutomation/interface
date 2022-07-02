#CREATE TABLE users (userID INTEGER primary key  autoincrement, firstName char, lastName char, rfid INTEGER, keypad VARCHAR);
#CREATE TABLE logs (userID INTEGER, time TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

import sqlite3
con = sqlite3.connect('door.db')
cur = con.cursor