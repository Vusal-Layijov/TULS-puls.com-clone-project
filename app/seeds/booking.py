from app.models import Booking,db, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import date

def seed_bookings():
    booking1= Booking(
        service_id = 2,
        user_id=1,
        date = date(2023, 4, 5),
        notes='Use the front door',
        city='Los Angeles',
        address='1200 n Mansfield ave'
    )
    booking_2 = Booking(
        service_id=2,
        user_id=1,
        date=date(2023, 4, 26),
        notes='Use the front door',
        city='Los Angeles',
        address='1210 n Mansfield ave'
    )

    booking_3 = Booking(
        service_id=3,
        user_id=2,
        date=date(2023, 4, 27),
        notes='Use the front door',
        city='Los Angeles',
        address='1220 n Mansfield ave'
    )

    booking_4 = Booking(
        service_id=4,
        user_id=1,
        date=date(2023, 4, 28),
        notes='Use the front door',
        city='Los Angeles',
        address='1230 n Mansfield ave'
    )

    booking_5 = Booking(
        service_id=5,
        user_id=1,
        date=date(2023, 4, 29),
        notes='Use the front door',
        city='Los Angeles',
        address='1240 n Mansfield ave'
    )
    db.session.add_all([booking1, booking_2, booking_3, booking_4, booking_5])
    db.session.commit()
def undo_bookings():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.bookings RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM bookings"))

    db.session.commit()
