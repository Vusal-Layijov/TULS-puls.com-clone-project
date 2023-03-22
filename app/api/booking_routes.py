from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required, current_user
from sqlalchemy import func
from app.models import Service, ServiceType,Booking, db
from app.forms import ServiceForm

booking_routes=Blueprint('bookings', __name__)

@booking_routes.route('/current')
def get_bookings():
    bookings = Booking.query.filter_by(user_id=current_user.id).all()

    booking_dict=[booking.to_dict() for booking in bookings]
    return jsonify({'bookings':booking_dict})
