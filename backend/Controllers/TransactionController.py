from flask_bcrypt import Bcrypt
from flask import Blueprint, jsonify, request
from Models.UserModel import Transaction, db

transaction_bp = Blueprint('transaction_bp', __name__)
bcrypt = Bcrypt()

@transaction_bp.route('/create_transaction', methods=['POST'])
def create_transaction():
    data = request.json
    
    # Pastikan semua data yang diperlukan tersedia
    # if 'amount' not in data or 'user_id' not in data:
    #     return jsonify({'error': 'Missing required data'}), 400

    # Implementasikan logika untuk membuat transaksi
    new_transaction = Transaction(type=data['type'], user_id=data['user_id'], status=data['status'])
    
    db.session.add(new_transaction)
    db.session.commit()
    
    return jsonify({'message': 'Transaction created successfully'}), 201