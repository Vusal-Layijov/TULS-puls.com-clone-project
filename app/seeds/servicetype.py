from app.models import db, ServiceType, environment, SCHEMA
from sqlalchemy.sql import text

def seed_service_types():
    cleaning = ServiceType(type_name='Cleaning')
    home_repair = ServiceType(type_name='Home Repair')
    handy_man = ServiceType(type_name='Handyman services')
    phone_repair = ServiceType(type_name='Phone Repair')
    tv_mounting = ServiceType(type_name='TV Mounting')

    db.session.add_all([cleaning, home_repair, handy_man, phone_repair, tv_mounting])
    db.session.commit()


def undo_service_types():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.service_types RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM service_types"))

    db.session.commit()
