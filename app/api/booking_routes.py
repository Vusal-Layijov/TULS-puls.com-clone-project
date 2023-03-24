from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required, current_user
from sqlalchemy import func
from app.models import Service, ServiceType,Booking, db
from app.forms import ServiceForm, BookingForm, UpdateBookingForm


booking_routes=Blueprint('bookings', __name__)

@booking_routes.route('/current')
def get_bookings():
    bookings = Booking.query.filter_by(user_id=current_user.id).all()

    booking_dict=[booking.to_dict() for booking in bookings]
    return jsonify({'bookings':booking_dict})


@booking_routes.route('', methods=["POST"])
@login_required
def create_booking():
    form = BookingForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data=request.get_json()
        booking=Booking(
            service_id=data.get('service_id'),
            user_id=current_user.id,
            date=form.date.data,
            notes=form.notes.data,
            address=form.address.data,
            city=form.city.data
        )
        db.session.add(booking)
        db.session.commit()
        return jsonify(booking.to_dict())
    return jsonify({'errors':form.errors})

@booking_routes.route('/<int:id>', methods =["PUT"])
@login_required
def update_booking(id):
    booking = Booking.query.get(id)
    form = UpdateBookingForm()
    if not booking:
        return jsonify({"message":"Booking not found"}), 404
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        data = request.get_json()
        if form.date.data:
            booking.date = form.date.data
        booking.city=data.get('city', booking.city)
        booking.address= data.get('address',booking.address)
        booking.notes=data.get('notes',booking.notes)
        db.session.commit()
        return jsonify(booking.to_dict()), 200
    return jsonify({"errors":form.errors})
