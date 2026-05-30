import sqlite3

conn = sqlite3.connect("juris.db")
cursor = conn.cursor()

cases = [
    ("LC-2026-001", "Emma Watson", "Corporate", "Active"),
    ("LC-2026-004", "John Smith", "Property", "Pending"),
    ("LC-2026-009", "Robert Downey", "Criminal", "Closed")
]

cursor.executemany(
    "INSERT INTO cases (case_number, client_name, case_type, status) VALUES (?, ?, ?, ?)",
    cases
)

conn.commit()
conn.close()

print("Sample Cases Added")