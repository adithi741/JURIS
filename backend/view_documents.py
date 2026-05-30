import sqlite3

conn = sqlite3.connect("juris.db")
cursor = conn.cursor()

cursor.execute("SELECT * FROM documents")

for row in cursor.fetchall():
    print(row)

conn.close()