import pymysql
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def create_db_connection():
    return pymysql.connect(
        host='localhost',
        user='root',
        password='',
        database='potterXnahida',
        cursorclass=pymysql.cursors.DictCursor
    )
