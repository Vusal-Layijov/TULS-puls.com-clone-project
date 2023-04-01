from flask import Blueprint, jsonify, request, redirect
from flask_login import login_required, current_user
from app.models import Review, Service, db
from app.forms import ReviewForm

review_routes = Blueprint("reviews", __name__)

@review_routes.route('')
def get_reviews():
    type_id=request.args.get('service_type_id')
    reviews = Review.query.join(Service).filter_by(service_type_id=type_id).all()
    review_dict= [review.to_dict() for review in reviews]
    return jsonify({'reviews':review_dict})

@review_routes.route('/<int:id>', methods=["PUT"])
def update_review(id):
    review = Review.query.get(id)
    data= request.get_json()
    review.review=data.get('review', review.review)
    review.stars=data.get('stars', review.stars)
    db.session.commit()
    return review.to_dict()
@review_routes.route('/<int:id>', methods=["DELETE"])
def delete_review(id):
    review = Review.query.get(id)
    if review:
        db.session.delete(review)
        db.session.commit()
        return jsonify({'message':"succcesfullu ddeleted"}), 200
    return jsonify({'message':"sikilib"})