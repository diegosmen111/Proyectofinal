from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SECRET_KEY'] = 'tu_clave_secreta'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'  # Cambia a tu configuración de base de datos

db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Definición de modelos
class Equipo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    ciudad = db.Column(db.String(50), nullable=False)

class Jugador(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    posicion = db.Column(db.String(50), nullable=False)
