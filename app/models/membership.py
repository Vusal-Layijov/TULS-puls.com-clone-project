from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Membership(db.Model):
    __tablename__ = 'memberships'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    benefits = db.Column(db.String(200), nullable=False)

    users = db.relationship('User', back_populates='membership', cascade='all, delete')

    def to_dict(self):
        return {
            'id':self.id,
            'type':self.type,
            'price':self.price,
            'benefits':self.benefits
        }

    def __repr__(self):
        return f'<Membership {self.name}>'