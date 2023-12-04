from flask import Flask, jsonify

app = Flask(__name__)

# Datos simulados
equipos = [
    {"id": 1, "nombre": "Equipo 1", "ciudad": "Ciudad 1"},
    {"id": 2, "nombre": "Equipo 2", "ciudad": "Ciudad 2"},
    # Agrega más datos según sea necesario
]

jugadores = [
    {"id": 1, "nombre": "Jugador 1", "posicion": "Base"},
    {"id": 2, "nombre": "Jugador 2", "posicion": "Escolta"},
    # Agrega más datos según sea necesario
]

@app.route('/api/equipos')
def obtener_equipos():
    return jsonify(equipos)

@app.route('/api/jugadores')
def obtener_jugadores():
    return jsonify(jugadores)

if __name__ == '__main__':
    app.run(debug=True)