from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

transaction_model = SQLAlchemy()

class Transaction(transaction_model.Model):
  __tablename__ = 'transactions'

  id = transaction_model.Column(transaction_model.Integer, primary_key=True)
  amount = transaction_model.Column(transaction_model.Float, nullable=False)
  # tambahkan kolom-kolom lain sesuai kebutuhan

  # Relasi Many-to-One dari Transaksi ke User
  user_id = transaction_model.Column(transaction_model.Integer, transaction_model.ForeignKey('users.id'), nullable=False)