import sqlite3

conn = sqlite3.connect("juris.db")
cursor = conn.cursor()

documents = [

    (
        "Corporate_Agreement.pdf",
        "PDF",
        "2.4 MB",
        "10 Jun 2026",
        "Verified"
    ),

    (
        "Evidence_Report.docx",
        "DOCX",
        "1.1 MB",
        "12 Jun 2026",
        "Pending"
    ),

    (
        "Lease_Contract.pdf",
        "PDF",
        "3.2 MB",
        "15 Jun 2026",
        "Verified"
    ),

    (
        "Court_Notice.docx",
        "DOCX",
        "850 KB",
        "18 Jun 2026",
        "Rejected"
    )

]

cursor.executemany(
"""
INSERT INTO documents
(document_name,document_type,file_size,upload_date,status)
VALUES (?,?,?,?,?)
""",
documents
)

conn.commit()
conn.close()

print("Documents Added")