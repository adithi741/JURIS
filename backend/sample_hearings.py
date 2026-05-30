import sqlite3

conn = sqlite3.connect("juris.db")
cursor = conn.cursor()

hearings = [

    (
        "Courtroom A",
        "LC-2026-001",
        "Justice Anderson",
        "10:30 AM",
        "Upcoming"
    ),

    (
        "Courtroom B",
        "LC-2026-004",
        "Justice Robert",
        "01:00 PM",
        "In Progress"
    ),

    (
        "Courtroom C",
        "LC-2026-009",
        "Justice Emma",
        "03:00 PM",
        "Completed"
    )

]

cursor.executemany(
"""
INSERT INTO hearings
(
    courtroom,
    case_number,
    judge_name,
    hearing_time,
    status
)
VALUES (?, ?, ?, ?, ?)
""",
hearings
)

conn.commit()
conn.close()

print("Hearings Added")