from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
# IMPORT MODEL
from Models.UserModel import db
# IMPORT CONTROLLER
from Controllers.UserController import main_bp

app = Flask(__name__)
CORS(app)
# Menambahkan path proyek ke dalam sys.path

# Konfigurasi database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost:3306/potterxnahidadb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Inisialisasi objek SQLAlchemy
db.init_app(app)
migrate = Migrate(app, db)



# Registrasi blueprint
app.register_blueprint(main_bp)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
