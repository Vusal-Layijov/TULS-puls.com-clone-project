from flask import Blueprint, jsonify,request
from flask_login import login_required,current_user
from app.models import User,Service,db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):

    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:userId>/current')
@login_required
def current_user_services(userId):
    allservices=Service.query.filter_by(owner_id = current_user.id).all()

    servvie_dict= [service.to_dict() for service in allservices]

    return jsonify({"servicess":servvie_dict})

@user_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_user(id):
    user= User.query.get(id)
    data= request.get_json()
    print('dattttatatataatat', data)
    user.membership_id=data
    db.session.commit()
    return user.to_dict()
    