import sqlite3

conn = sqlite3.connect("juris.db")
cursor = conn.cursor()

cursor.execute("ALTER TABLE users ADD COLUMN phone TEXT")

conn.commit()
conn.close()

print("Phone column added successfully")