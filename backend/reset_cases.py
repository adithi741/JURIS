import sqlite3

conn = sqlite3.connect("juris.db")
cursor = conn.cursor()

cursor.execute("DROP TABLE IF EXISTS cases")

cursor.execute("""
CREATE TABLE cases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    case_number TEXT,
    client_name TEXT,
    case_type TEXT,
    status TEXT
)
""")

conn.commit()
conn.close()

print("Cases table recreated successfully")