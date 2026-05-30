import sqlite3

conn = sqlite3.connect("juris.db")
cursor = conn.cursor()

cursor.execute("PRAGMA table_info(cases)")
print(cursor.fetchall())

conn.close()