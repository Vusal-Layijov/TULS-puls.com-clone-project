from app.models import db, User, environment, SCHEMA, Membership
from sqlalchemy.sql import text

def seed_memberships():
    membership_1= Membership(
        type='Bronze',
        price=9.99,
        benefits='Basic access to all services'
    )
    membership_2 = Membership(
        type='Silver',
        price=19.99,
        benefits='Unlimited access to all services'
    )

    membership_3 = Membership(
        type='Gold',
        price=29.99,
        benefits='Unlimited access to all services, priority support'
    )
    db.session.add_all([membership_1,membership_2,membership_3])
    db.session.commit()
def undo_memberships():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.memberships RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM memberships"))

    db.session.commit()