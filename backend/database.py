import sqlite3


def get_db_connection():
    conn = sqlite3.connect("juris.db")
    conn.row_factory = sqlite3.Row
    return conn


conn = sqlite3.connect("juris.db")
cursor = conn.cursor()

# USERS TABLE
cursor.execute("""
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT
)
""")

# CASES TABLE
cursor.execute("""
CREATE TABLE IF NOT EXISTS cases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    case_number TEXT,
    client_name TEXT,
    case_type TEXT,
    status TEXT
)
""")

# CLIENTS TABLE
cursor.execute("""
CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    status TEXT
)
""")

# HEARINGS TABLE
cursor.execute("""
CREATE TABLE IF NOT EXISTS hearings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    courtroom TEXT,
    case_number TEXT,
    judge_name TEXT,
    hearing_time TEXT,
    status TEXT
)
""")

# DOCUMENTS TABLE
cursor.execute("""
CREATE TABLE IF NOT EXISTS documents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    document_name TEXT,
    document_type TEXT,
    file_size TEXT,
    upload_date TEXT,
    status TEXT
)
""")

conn.commit()
conn.close()

print("Database Created Successfully")