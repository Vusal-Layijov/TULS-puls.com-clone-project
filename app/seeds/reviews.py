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
        user_id=4,
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
    review7 = Review(
        user_id=3,
        service_id=1,
        stars=3,
        review="The cleaning was excellent, and the service was great too. Higly recommended!"
    )
    review8 = Review(
        user_id=2,
        service_id=1,
        stars=5,
        review="The cleaning was excellent, and the service was great too. Higly recommended!, The cleaning was excellent, and the service was great too. Higly recommended!Just I will order again so happy for service , my friends also liked it , I am so glad........."
    )
    review9 = Review(
        user_id=2,
        service_id=7,
        stars=4,
        review="The tv mounting was excellent, and the service was great too. Higly recommended!, The cleaning was excellent, and the service was great too. Higly recommended!Just I will order again so happy for service , my friends also liked it , I am so glad........."
    )
    review10 = Review(
        user_id=5,
        service_id=6,
        stars=5,
        review="I had an amazing experience with this service. The technician was very professional and did an excellent job. Highly recommend!"
    )

    review11 = Review(
        user_id=5,
        service_id=7,
        stars=3,
        review="The service was average, nothing special. The technician was polite, but the work was not very impressive."
    )

    review12 = Review(
        user_id=5,
        service_id=8,
        stars=4,
        review="I had a good experience with this service. The technician was prompt and efficient, and the work was done well."
    )

    review13 = Review(
        user_id=5,
        service_id=9,
        stars=2,
        review="I was disappointed with this service. The technician was late and did a mediocre job. I would not recommend this service."
    )

    review14 = Review(
        user_id=5,
        service_id=10,
        stars=5,
        review="This service was amazing! The technician was friendly and professional, and the work was impeccable. Highly recommend!"
    )

    review15 = Review(
        user_id=4,
        service_id=11,
        stars=3,
        review="The service was okay, but not great. The technician seemed a bit inexperienced, and there were some issues with the work."
    )

    review16 = Review(
        user_id=4,
        service_id=12,
        stars=4,
        review="I had a positive experience with this service. The technician was knowledgeable and efficient, and the work was done well."
    )

    review17 = Review(
        user_id=4,
        service_id=13,
        stars=5,
        review="This service was amazing! The technician was prompt, professional, and did an excellent job. Highly recommend!"
    )

    review18 = Review(
        user_id=4,
        service_id=14,
        stars=4,
        review="I had a good experience with this service. The technician was friendly and professional, and the work was done well."
    )

    review19 = Review(
        user_id=4,
        service_id=15,
        stars=2,
        review="I was disappointed with this service. The technician did not seem to know what they were doing, and the work was not done well."
    )
    review20 = Review(
        user_id=6,
        service_id=15,
        stars=5,
        review="The painting service was excellent, and the staff were very professional. I am extremely happy with the result and would highly recommend this service to anyone looking for a reliable and efficient painting service."
    )

    review21 = Review(
        user_id=6,
        service_id=14,
        stars=3,
        review="The handyman service was average. The staff were friendly, but I expected more from the repair work. It was satisfactory, but not outstanding."
    )

    review22 = Review(
        user_id=6,
        service_id=13,
        stars=4,
        review="I was very happy with the window installation service I received. The staff were professional and efficient, and the end result was exactly what I wanted. I would definitely use this service again."
    )

    review23 = Review(
        user_id=6,
        service_id=12,
        stars=5,
        review="This was an amazing experience. The staff were very professional and friendly, and they did an excellent job with my home theater installation. I would highly recommend this service to anyone looking for a reliable and efficient installation service."
    )

    review24 = Review(
        user_id=6,
        service_id=11,
        stars=2,
        review="I was disappointed with the landscaping service I received. The staff were not very professional, and the work was subpar. I would not recommend this service."
    )

    review25 = Review(
        user_id=6,
        service_id=10,
        stars=4,
        review="I had a good experience with this pet grooming service. The staff were friendly and efficient, and they did a good job with my pet's grooming. I would consider using this service again in the future."
    )

    review26 = Review(
        user_id=6,
        service_id=9,
        stars=5,
        review="I was very impressed with this catering service. The food was delicious and the staff were very professional and friendly. I would highly recommend this service to anyone looking for a reliable and efficient catering service."
    )

    review27 = Review(
        user_id=6,
        service_id=8,
        stars=3,
        review="The furniture assembly service was satisfactory. The staff were friendly, but some of the work was not done to my satisfaction. Overall, it was a decent service, but I would not use it again."
    )

    review28 = Review(
        user_id=6,
        service_id=7,
        stars=4,
        review="The plumbing service was excellent. The staff were professional and efficient, and they fixed the issue quickly. I would recommend this service to anyone looking for a reliable and efficient plumbing service."
    )

    review29 = Review(
        user_id=6,
        service_id=6,
        stars=5,
        review="The electrical service was excellent. The staff were knowledgeable and efficient, and they fixed the problem quickly. I am extremely satisfied with the service and would highly recommend it to anyone in need of electrical work."
    )

    db.session.add_all([review1,review2,review3,review4,review5,review6, review7, review8, review9,review10,review11,review12,review13,review14,review15,review16,review17,review18,review19,review20,review21,review22,review23,review24,review25,review26,review27,review28,review29])
    db.session.commit()
def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
