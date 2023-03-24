from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required, current_user
from sqlalchemy import func
from app.models import Service, ServiceType, Booking, db
from app.forms import ServiceForm


service_routes=Blueprint('services', __name__)


@service_routes.route('')
def get_services():
    type_id=request.args.get('service_type_id')
    services=Service.query.filter_by(service_type_id=type_id).all()
    service_dict=[service.to_dict() for service in services]

    return jsonify({'services' :service_dict})

@service_routes.route('', methods=["POST"])
@login_required
def create_service():
    form=ServiceForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        service=Service(
            name=form.name.data,
            description=form.description.data,
            price=form.price.data,
            city=form.city.data,
            state=form.state.data,
            owner_id=current_user.id,
            service_type_id=form.service_type_id.data
        )
        db.session.add(service)
        db.session.commit()
        return jsonify(service.to_dict())
    return jsonify({'errors':form.errors})

@service_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_service(id):
    service=Service.query.get(id)

    if not service:
        return jsonify({'message':'BUsiness not found'}), 404
    data=request.get_json()
    service.name=data.get('name', service.name)
    service.description=data.get('description', service.description)
    service.price=data.get('price', service.price)
    service.availability=data.get('availability', service.availability)
    service.service_type_id=data.get('service_type_id',service.service_type_id)
    service.city=data.get('city', service.city)
    service.state=data.get('state',service.state)

    db.session.commit()

    return jsonify(service.to_dict()), 200

@service_routes.route('/<int:id>',methods=['DELETE'])
def delete_service(id):
    service=Service.query.get(id)
    if not service:
        return jsonify({'message':'Service not found'}), 404
    
    db.session.delete(service)
    db.session.commit()
    return jsonify({'message':'successfully deleted'})


# Get All BOOKINGS OF SERVICE

@service_routes.route('/<int:id>/bookings')
@login_required
def get_services_bookings(id):
    service=Service.query.get(id)
    bookings=[booking.to_dict() for booking in service.bookings]
    return jsonify({'bookings':bookings})