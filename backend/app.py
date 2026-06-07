import sqlite3
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask import request
from werkzeug.utils import secure_filename
import os
from flask import send_from_directory
from routes.auth import auth_bp
from flask import send_from_directory
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet
from flask import send_file

app = Flask(__name__)
app.config["SECRET_KEY"] = "juris_secret_key"
CORS(app)

app.register_blueprint(auth_bp)

@app.route("/")
def home():
    return {
        "message": "Backend Running Successfully"
    }

@app.route("/cases", methods=["GET"])
def get_cases():

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("""
    SELECT * FROM cases
    """)

    data = cursor.fetchall()

    conn.close()

    return {"cases": data}

@app.route("/add-case", methods=["POST"])
def add_case():

    data = request.json

    case_number = data["case_number"]
    client_name = data["client_name"]
    case_type = data["case_type"]
    status = data["status"]

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute(
    """
    INSERT INTO cases
    (
        case_number,
        client_name,
        case_type,
        status
    )
    VALUES (?, ?, ?, ?)
    """,
    (
        case_number,
        client_name,
        case_type,
        status
    )
    )
    cursor.execute(
    """
    INSERT INTO activity_logs(activity)
    VALUES (?)
    """,
    (f"New case {case_number} added",)
)

    conn.commit()
    conn.close()

    return {
        "message": "Case Added Successfully"
    }

@app.route("/delete-case/<int:id>", methods=["DELETE"])
def delete_case(id):

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM cases WHERE id=?",
        (id,)
    )

    conn.commit()
    conn.close()

    return {
        "message": "Case Deleted Successfully"
    }

@app.route("/update-case/<int:id>", methods=["PUT"])
def update_case(id):

    data = request.json

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("""
    UPDATE cases
    SET
    case_number=?,
    client_name=?,
    case_type=?,
    status=?
    WHERE id=?
    """,
    (
        data["case_number"],
        data["client_name"],
        data["case_type"],
        data["status"],
        id
    ))

    conn.commit()
    conn.close()

    return {
        "message": "Case Updated Successfully"
    }

@app.route("/dashboard-stats")
def dashboard_stats():

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM cases")
    total_cases = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM clients")
    total_clients = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM hearings")
    total_hearings = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(*) FROM documents")
    total_documents = cursor.fetchone()[0]

    conn.close()

    return {
        "cases": total_cases,
        "clients": total_clients,
        "hearings": total_hearings,
        "documents": total_documents
    }

@app.route("/clients")
def get_clients():

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM clients")

    data = cursor.fetchall()

    conn.close()

    return {"clients": data}

@app.route("/add-client", methods=["POST"])
def add_client():

    data = request.json

    name = data["name"]
    email = data["email"]
    phone = data["phone"]
    status = data["status"]

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("""
    INSERT INTO clients
    (
        name,
        email,
        phone,
        status
    )
    VALUES (?, ?, ?, ?)
    """,
    (
        name,
        email,
        phone,
        status
    ))

    conn.commit()
    conn.close()

    return {
        "message": "Client Added Successfully"
    }

@app.route("/delete-client/<int:id>", methods=["DELETE"])
def delete_client(id):

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM clients WHERE id=?",
        (id,)
    )

    conn.commit()
    conn.close()

    return {
        "message": "Client Deleted Successfully"
    }


@app.route("/update-client/<int:id>", methods=["PUT"])
def update_client(id):

    data = request.json

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("""
    UPDATE clients
    SET
    name=?,
    email=?,
    phone=?,
    status=?
    WHERE id=?
    """,
    (
        data["name"],
        data["email"],
        data["phone"],
        data["status"],
        id
    ))

    conn.commit()
    conn.close()

    return {
        "message": "Client Updated Successfully"
    }

@app.route("/hearings")
def get_hearings():

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM hearings")

    data = cursor.fetchall()

    conn.close()

    return {"hearings": data}

@app.route("/add-hearing", methods=["POST"])
def add_hearing():

    data = request.json

    courtroom = data["courtroom"]
    case_number = data["case_number"]
    judge_name = data["judge_name"]
    hearing_time = data["hearing_time"]
    status = data["status"]

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("""
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
    (
        courtroom,
        case_number,
        judge_name,
        hearing_time,
        status
    ))
    cursor.execute(
    """
    INSERT INTO activity_logs(activity)
    VALUES (?)
    """,
    (f"Hearing scheduled in {courtroom}",)
)

    conn.commit()
    conn.close()

    return {
        "message": "Hearing Added Successfully"
    }

@app.route("/delete-hearing/<int:id>", methods=["DELETE"])
def delete_hearing(id):

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM hearings WHERE id=?",
        (id,)
    )

    conn.commit()
    conn.close()

    return {
        "message": "Hearing Deleted Successfully"
    }


@app.route("/update-hearing/<int:id>", methods=["PUT"])
def update_hearing(id):

    data = request.json

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("""
    UPDATE hearings
    SET
    courtroom=?,
    case_number=?,
    judge_name=?,
    hearing_time=?,
    status=?
    WHERE id=?
    """,
    (
        data["courtroom"],
        data["case_number"],
        data["judge_name"],
        data["hearing_time"],
        data["status"],
        id
    ))

    conn.commit()
    conn.close()

    return {
        "message": "Hearing Updated Successfully"
    }


@app.route("/documents")
def get_documents():

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM documents")

    data = cursor.fetchall()

    conn.close()

    return {"documents": data}

@app.route("/add-document", methods=["POST"])
def add_document():

    data = request.json

    name = data["name"]
    document_type = data["type"]
    size = data["size"]
    uploaded = data["uploaded"]
    status = data["status"]

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("""
    INSERT INTO documents
    (
        document_name,
        document_type,
        file_size,
        upload_date,
        status
    )
    VALUES (?, ?, ?, ?, ?)
    """,
    (
        name,
        document_type,
        size,
        uploaded,
        status
    ))

    conn.commit()
    conn.close()

    return {
        "message": "Document Added Successfully"
    }

@app.route("/delete-document/<int:id>", methods=["DELETE"])
def delete_document(id):

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM documents WHERE id=?",
        (id,)
    )

    conn.commit()
    conn.close()

    return {
        "message": "Document Deleted Successfully"
    }


@app.route("/update-document/<int:id>", methods=["PUT"])
def update_document(id):

    data = request.json

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("""
    UPDATE documents
    SET
    document_name=?,
    document_type=?,
    file_size=?,
    upload_date=?,
    status=?
    WHERE id=?
    """,
    (
        data["name"],
        data["type"],
        data["size"],
        data["uploaded"],
        data["status"],
        id
    ))

    conn.commit()
    conn.close()

    return {
        "message": "Document Updated Successfully"
    }

@app.route("/upload-document", methods=["POST"])
def upload_document():

    file = request.files["file"]

    filename = secure_filename(file.filename)

    file.save(
        os.path.join(
            "uploads",
            filename
        )
    )

    return {
        "message": "File Uploaded Successfully",
        "filename": filename
    }

@app.route("/ask-ai", methods=["POST"])
def ask_ai():

    data = request.json

    question = data["question"].lower()

    # Search existing documents first
    if "nda" in question:

        conn = sqlite3.connect("juris.db")
        cursor = conn.cursor()

        cursor.execute("""
        SELECT document_name
        FROM documents
        WHERE LOWER(document_name) LIKE '%nda%'
        LIMIT 1
        """)

        doc = cursor.fetchone()

        conn.close()

        if doc:

            return {
                "type": "document",
                "filename": doc[0]
            }

        else:

            reply = """
NON-DISCLOSURE AGREEMENT

This Agreement is entered into between Party A and Party B.

Both parties agree not to disclose confidential information
shared during the business relationship.

This agreement remains valid for 2 years.
"""

    elif "employment" in question:

        reply = """
EMPLOYMENT AGREEMENT

Employee shall perform assigned duties and comply with company policies.

Employer shall provide salary and benefits.
"""

    elif "legal notice" in question:

        reply = """
LEGAL NOTICE

This notice is issued regarding breach of contractual obligations.

You are required to respond within 15 days.
"""

    else:

        reply = """
AI Legal Assistant

Draft template not found.

Try:
- NDA
- Employment Agreement
- Legal Notice
"""

    return {
        "type": "text",
        "reply": reply
    }

@app.route("/uploads/<filename>")
def get_file(filename):

    return send_from_directory(
        "uploads",
        filename
    )

@app.route("/profile/<email>", methods=["GET"])
def get_profile(email):

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT name,email,phone
        FROM users
        WHERE email=?
        """,
        (email,)
    )

    user = cursor.fetchone()

    conn.close()

    return jsonify({
        "name": user[0],
        "email": user[1],
        "phone": user[2]
    })

@app.route("/update-profile", methods=["PUT"])
def update_profile():

    data = request.json

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute(
        """
        UPDATE users
        SET name=?,
            phone=?
        WHERE email=?
        """,
        (
            data["name"],
            data["phone"],
            data["email"]
        )
    )

    conn.commit()
    conn.close()

    return jsonify({
        "message":"Profile Updated Successfully"
    })

@app.route("/upcoming-hearings")
def upcoming_hearings():

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("""
    SELECT case_number,
           hearing_time,
           courtroom
    FROM hearings
    WHERE status IN ('Upcoming','In Progress')
    ORDER BY id DESC
    LIMIT 5
    """)

    data = cursor.fetchall()

    conn.close()

    return {
        "hearings": data
    }

@app.route("/activities")
def get_activities():

    conn = sqlite3.connect("juris.db")
    cursor = conn.cursor()

    cursor.execute("""
    SELECT activity
    FROM activity_logs
    ORDER BY id DESC
    LIMIT 5
    """)

    data = cursor.fetchall()

    conn.close()

    return {
        "activities": data
    }

@app.route("/generate-pdf", methods=["POST"])
def generate_pdf():

    data = request.json

    content = data["content"]

    pdf_file = "legal_document.pdf"

    doc = SimpleDocTemplate(pdf_file)

    styles = getSampleStyleSheet()

    story = []

    for line in content.split("\n"):
        story.append(
            Paragraph(line, styles["BodyText"])
        )

    doc.build(story)

    return send_file(
        pdf_file,
        as_attachment=True
    )

if __name__ == "__main__":
    app.run(debug=True)