from flask import Flask, jsonify, request, json 
from flask_pymongo import PyMongo 
from bson.objectid import ObjectId 
from datetime import datetime 
from flask_bcrypt import Bcrypt 
from flask_cors import CORS
from flask_jwt_extended import JWTManager 
from flask_jwt_extended import create_access_token

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'lesandiprueba'
app.config['MONGO_URI'] = 'mongodb://localhost:27017/lesandiprueba'
app.config['JWT_SECRET_KEY'] = 'secret'

mongo = PyMongo(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

CORS(app)

@app.route('/users/register', methods=["POST"])
def register():
    users = mongo.db.users 
    name = request.get_json()['name']
    user_name = request.get_json()['user_name']
    password = bcrypt.generate_password_hash(request.get_json()['password']).decode('utf-8')
    grade = request.get_json()['grade']
    institution = request.get_json()['institution']

    user_id = users.insert({
        'name': name,
        'user_name': user_name,
        'grade': grade,
        'password': password,
        'institution': institution 
    })

    new_user = users.find_one({'_id': user_id})

    result = {'user_name': new_user['user_name'] + ' registered'}

    return jsonify({'result' : result})

@app.route('/users/login', methods=['POST'])
def login():
    users = mongo.db.users 
    user_name = request.get_json()['user_name']
    password = request.get_json()['password']
    result = ""

    response = users.find_one({'user_name': user_name})

    if response:
        if bcrypt.check_password_hash(response['password'], password):
            access_token = create_access_token(identity = {
                'name': response['name'],
                'user_name': response['user_name'],
                'grade': response['grade']
            })
            result = jsonify({'token':access_token})
        else:
            result = jsonify({"error":"Invalid username and password"})
    else:
        result = jsonify({"result":"No results found"})
    return result 

if __name__ == '__main__':
    app.run(debug=True)
