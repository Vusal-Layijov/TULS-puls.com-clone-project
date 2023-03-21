from app.models import db, User, environment, SCHEMA, Review
from sqlalchemy.sql import text

def seed_reviews():
    review1 = Review(
        user_id=2,
        service_id=1,
        stars=5,
        review="The cleaning was excellent, and the service was great too. Would definitely recommend!"
    )
    review2 = Review(
        user_id=2,
        service_id=1,
        stars=3,
        review="The cleaning was good, but the service was a bit slow."
    )
    review3 = Review(
        user_id=1,
        service_id=2,
        stars=3,
        review="The job was good, but the service was a bit slow. But I loved the my flowers after"
    )
    review4 = Review(
        user_id=3,
        service_id=3,
        stars=4,
        review="This was amazing job but a little slow."
    )
    review5 = Review(
        user_id=2,
        service_id=4,
        stars=1,
        review="I was really disappointed with the result. Reapair was very bad, service was terrible."
    )
    review6 = Review(
        user_id=1,
        service_id=5,
        stars=4,
        review="The job was great, they came lkittle wait but I dont want give low review "
    )

    db.session.add_all([review1,review2,review3,review4,review5,review6])
    db.session.commit()
def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
