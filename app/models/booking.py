from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Booking(db.Model):
    __tablename__ = "bookings"
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    service_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("services.id")), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    start_date = db.Column(db.DateTime, nullable=False)
    end_date = db.Column(db.DateTime, nullable=False) 

    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(
        db.DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False
    )

    service = db.relationship("Service", back_populates="bookings")
    user=db.relationship('User', back_populates='bookings')

    def to_dict(self):
        return {
            'id': self.id,
            'service_id': self.service_id,
            'user_id':self.user_id,
            'start_date':self.start_date,
            'end_date':self.end_date,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
    def __repr__(self):
        return f'<Booking {self.id}>'