from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
# from models import business_category

class Service(db.Model):
    __tablename__ = 'services'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    description = db.Column(db.String(), nullable=False)
    price = db.Column(db.Float,)
    city=db.Column(db.String(), nullable=False)
    state=db.Column(db.String(), nullable=False)
    availability=db.Column(db.Boolean, default=True, nullable=False)
    
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    service_type_id=db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('service_types.id')), nullable=False)

    owner = db.relationship("User", back_populates="services")
    type=db.relationship('ServiceType', back_populates='services')
    reviews = db.relationship("Review", back_populates='service', cascade="all,delete")
    bookings=db.relationship('Booking',back_populates='service',cascade="all,delete")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False
    )
    def to_dict(self):
        return {
            'id': self.id,
            'ownerId': self.owner_id,
            'name': self.name,
            'description': self.description,
            'availability':self.availability,
            'price':self.price,
            'city':self.city,
            'state':self.state,
            'owner':self.owner.to_dict(),
            'reviews':[review.to_dict() for review in self.reviews],
            'numReviews':len(self.reviews),
            'avgRating':sum(review.stars for review in self.reviews)/len(self.reviews) if len(self.reviews) >0 else 0,
            'type':self.type.to_dict(),
            'service_type_id':self.service_type_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            # 'images': self.images
        }
    def to_dict_without(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'availability':self.availability,
            'price':self.price,
            'city':self.city,
            'state':self.state,
            'reviews':[review.to_dict() for review in self.reviews],
            'numReviews':len(self.reviews),
            'avgRating':sum(review.stars for review in self.reviews)/len(self.reviews) if len(self.reviews) >0 else 0,
            'type':self.type.to_dict(),
            'service_type_id':self.service_type_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at,
            # 'images': self.images
        }
