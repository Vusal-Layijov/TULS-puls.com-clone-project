from app.models import Booking,db, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime

def seed_bookings():
    booking1= Booking(
        service_id = 2,
        user_id=1,
        start_date = datetime(2023, 4, 5, 9, 0, 0),
        end_date = datetime(2023, 4, 6, 9, 0, 0)
    )
    booking_2 = Booking(
        service_id=2,
        user_id=1,
        start_date=datetime(2023, 4, 26, 14, 0, 0),
        end_date=datetime(2023, 4, 27, 16, 0, 0),
    )

    booking_3 = Booking(
        service_id=3,
        user_id=2,
        start_date=datetime(2023, 4, 27, 10, 0, 0),
        end_date=datetime(2023, 4, 28, 12, 0, 0),
    )

    booking_4 = Booking(
        service_id=4,
        user_id=1,
        start_date=datetime(2023, 4, 28, 13, 0, 0),
        end_date=datetime(2023, 4, 29, 16, 0, 0),
    )

    booking_5 = Booking(
        service_id=5,
        user_id=1,
        start_date=datetime(2023, 4, 29, 9, 0, 0),
        end_date=datetime(2023, 4, 30, 11, 0, 0),
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
