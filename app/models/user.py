from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    image = db.Column(db.String())
    membership_id= db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('memberships.id')))

    services = db.relationship("Service", back_populates="owner", cascade="all,delete")
    reviews = db.relationship("Review", back_populates="user", cascade="all,delete")
    bookings=db.relationship('Booking',back_populates='user', cascade='all,delete')
    membership = db.relationship('Membership', back_populates='users')
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        user_dict = {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'image':self.image,
            'bookings':[{'id':booking.id,"address":booking.address,"city":booking.city, 'service_id':booking.service_id,'date':booking.date,'notes':booking.notes,'service':booking.service.name} for booking in self.bookings],
            'services':[service.to_dict_without() for service in self.services]
        }
        if self.membership is not None:
            user_dict['membership'] = self.membership.to_dict()
        return user_dict
