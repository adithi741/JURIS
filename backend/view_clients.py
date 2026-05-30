import sqlite3

conn = sqlite3.connect("juris.db")
cursor = conn.cursor()

cursor.execute("SELECT * FROM clients")

for row in cursor.fetchall():
    print(row)

conn.close()