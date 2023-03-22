from flask import Blueprint, jsonify
from flask_login import login_required,current_user
from app.models import User,Service

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:userId>/current')
@login_required
def current_user_services(userId):
    allservices=Service.query.filter_by(owner_id = current_user.id).all()

    servvie_dict= [service.to_dict() for service in allservices]

    return jsonify({"servicess":servvie_dict})