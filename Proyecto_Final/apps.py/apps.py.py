from flask import Flask, jsonify, render_template, request, redirect, url_for
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SECRET_KEY'] = 'tu_clave_secreta'  # Cambia esto a una clave segura

login_manager = LoginManager(app)

# Datos simulados
usuarios = [
    {"id": 1, "nombre": "diego", "contraseña": generate_password_hash("1234")},
    {"id": 2, "nombre": "admin", "contraseña": generate_password_hash("admin1")},
    # Agrega más datos según sea necesario
]

# Definición de clase Usuario
class Usuario(UserMixin):
    pass

@login_manager.user_loader
def cargar_usuario(usuario_id):
    usuario = Usuario()
    usuario.id = usuario_id
    return usuario

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        nombre = request.form['nombre']
        contraseña = request.form['contraseña']
        usuario = next((u for u in usuarios if u['nombre'] == nombre), None)
        if usuario and check_password_hash(usuario['contraseña'], contraseña):
            usuario_obj = Usuario()
            usuario_obj.id = usuario['id']
            login_user(usuario_obj)
            return redirect(url_for('index'))
    return render_template('login.html')

@app.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('index'))

@app.route('/')
@login_required
def index():
    return f'Bienvenido, {current_user.nombre}!'

socket.AF.NET,socket.SOCK STREAM.connect(("localhost",31088))
