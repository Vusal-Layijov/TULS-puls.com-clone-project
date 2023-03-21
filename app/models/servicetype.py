from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class ServiceType(db.Model):
    __tablename__ = "service_types"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    type_name = db.Column(db.String(), nullable=False)

    services = db.relationship("Service", back_populates='type', cascade="all,delete")

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type_name
        }
