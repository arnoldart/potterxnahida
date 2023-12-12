from flask_bcrypt import Bcrypt
from flask import Blueprint, jsonify, request
from Models.UserModel import User, db

main_bp = Blueprint('main', __name__)
bcrypt = Bcrypt()

@main_bp.route('/add_user', methods=['POST'])
def add_user():
    data = request.json  # Mengambil data JSON dari body permintaan
    
    # Memeriksa keberadaan username dan password dalam data JSON
    if 'username' not in data or not data['username'] or \
       'password' not in data or not data['password'] or \
       'email' not in data or not data['email']:
        return jsonify({'error': 'Username, password, and email cannot be empty'}), 400
    
    username = data['username']
    password = data['password']
    email = data['email']
    role = 'user'
    
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    
    new_user = User(username=username, password=hashed_password, email=email, role=role)
    db.session.add(new_user)

    try:
        # Melakukan commit untuk menyimpan data ke dalam database
        db.session.commit()
        return jsonify({'message': 'User added successfully'}), 201
    except Exception as e:
        # Jika terjadi kesalahan, batalkan transaksi dan kirim respons kesalahan
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
    finally:
        # Selalu tutup sesi database setelah penggunaan
        db.session.close()

@main_bp.route('/login', methods=['POST'])
def login():
    data = request.json

    if 'username' not in data or 'password' not in data:
        return jsonify({'error': 'Missing username or password'}), 400

    user = User.query.filter_by(username=data['username']).first()

    if user and user.check_password(data['password']):
        # Menambahkan pemeriksaan peran di sini
        if user.role == 'admin':
            return jsonify({'message': 'Admin login successful', 'token': "token admin", 'role': user.role}), 200
        else:
            return jsonify({'message': 'User login successful', 'token': "token user", 'role': user.role}), 200
    else:
        return jsonify({'error': 'Invalid username or password'}), 401

@main_bp.route('/get_users', methods=['GET'])
def get_users():
    users = User.query.all()
    user_list = [{'id': user.id, 'username': user.username} for user in users]
    return jsonify({'users': user_list})
