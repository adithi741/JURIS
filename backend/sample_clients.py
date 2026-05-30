import sqlite3

conn = sqlite3.connect("juris.db")
cursor = conn.cursor()

clients = [
    ("Emma Watson", "emma@gmail.com", "9876543210", "Active"),
    ("John Smith", "john@gmail.com", "9876543211", "Pending"),
    ("Robert Downey", "robert@gmail.com", "9876543212", "VIP"),
]

cursor.executemany(
    """
    INSERT INTO clients
    (name,email,phone,status)
    VALUES (?,?,?,?)
    """,
    clients,
)

conn.commit()
conn.close()

print("Clients Added")