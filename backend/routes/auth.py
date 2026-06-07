from flask import Blueprint, request, jsonify
from database import get_db_connection
import bcrypt
import jwt
import datetime

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/signup", methods=["POST"])
def signup():

    data = request.json

    name = data["name"]
    email = data["email"]
    password = data["password"]
    role = data["role"]

    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    )

    conn = get_db_connection()
    cursor = conn.cursor()

    try:

        cursor.execute(
            """
            INSERT INTO users
            (name,email,password,role)
            VALUES (?,?,?,?)
            """,
            (
                name,
                email,
                hashed_password,
                role
            )
        )

        conn.commit()

        return jsonify({
            "message": "User Registered Successfully"
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 400

    finally:
        conn.close()

@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.json

    email = data["email"]
    password = data["password"]

    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE email=?",
        (email,)
    )

    user = cursor.fetchone()

    conn.close()

    if not user:
        return jsonify({
            "message": "User Not Found"
        }), 404

    if bcrypt.checkpw(
    password.encode("utf-8"),
    user["password"]
    ):

        token = jwt.encode(
            {
                "email": email,
                "role": user["role"],
                "exp": datetime.datetime.utcnow()
                + datetime.timedelta(hours=2)
            },
            "juris_secret_key",
            algorithm="HS256"
        )

        return jsonify({
            "message": "Login Successful",
            "role": user["role"],
            "token": token
        })

    return jsonify({
        "message": "Invalid Password"
    }), 401