from flask_bcrypt import Bcrypt
from flask import Blueprint, jsonify, request
from Models.UserModel import Transaction, User, db

transaction_bp = Blueprint('transaction_bp', __name__)
bcrypt = Bcrypt()

@transaction_bp.route('/create_transaction', methods=['POST'])
def create_transaction():
    data = request.json
    
    # Implementasikan logika untuk membuat transaksi
    new_transaction = Transaction(type=data['type'], user_id=data['user_id'], status=data['status'])
    
    db.session.add(new_transaction)
    db.session.commit()
    
    return jsonify({'message': 'Transaction created successfully'}), 201

@transaction_bp.route('/get_transactions/<int:user_id>', methods=['GET'])
def get_transactions_by_user(user_id):
    try:
        user = User.query.get(user_id)
        if user:
            transactions = Transaction.query.filter_by(user_id=user_id).all()
            transaction_list = [{"status": t.status, "type": t.type} for t in transactions]
            return jsonify({"user_id": user.id, "transactions": transaction_list})
        else:
            return jsonify({"error": "User not found"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@transaction_bp.route('/get_transactions_all_users', methods=['GET'])
def get_transactions_all_users():
    try:
        search_username = request.args.get('username', default=None, type=str)
        search_user_id = request.args.get('user_id', default=None, type=int)

        query = db.session.query(User, Transaction) \
            .join(Transaction) \
            .order_by(Transaction.id.desc())

        if search_username:
            query = query.filter(User.username.ilike(f"%{search_username}%"))

        if search_user_id is not None:
            query = query.filter(User.id == search_user_id)

        result = query.all()

        data = []
        for user, transaction in result:
            data.append({
                "user_id": user.id,
                "username": user.username,
                "email": user.email,  
                "role": user.role,    
                "transaction_status": transaction.status,
                "transaction_type": transaction.type,
            })

        return jsonify({"data": data})
    except Exception as e:
        return jsonify({"error": str(e)}), 500
