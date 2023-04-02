from app import db
from app.models import Service, SCHEMA, environment

# Seed the database with 5 businesses
def seed_services():
    # Retrieve the existing categories from the database
    service1=Service(
        name='Home Cleaning',
        description='Cleaning sservice for homes and offices',
        price=50,
        availability=True,
        owner_id=1,
        service_type_id=1,
        city='Los Angeles',
        state='CA'
    )
    service2 = Service(
        name='Gardening',
        description='Gardening and landscaping services',
        price=100.0,
        availability=True,
        owner_id=2,
        service_type_id=2,
        city='Los Angeles',
        state='CA'
    )

    service3 = Service(
        name='Plumbing',
        description='Plumbing and water repair services',
        price=75.0,
        availability=True,
        owner_id=1,
        service_type_id=3,
        city='Los Angeles',
        state='CA'
    )

    service4 = Service(
        name='Device Repair',
        description='Electrical installation and repair services',
        price=80.0,
        availability=True,
        owner_id=3,
        service_type_id=4,
        city='Los Angeles',
        state='CA'
    )

    service5 = Service(
        name='Mounting',
        description='Tv mounting services for home and businesses',
        price=150.0,
        availability=True,
        owner_id=2,
        service_type_id=5,
        city='Los Angeles',
        state='CA'
    )
    service6 = Service(
        name='Home services by Loli',
        description='Outdorr, busines, home services for home and businesses',
        price=140.0,
        availability=True,
        owner_id=4,
        service_type_id=1,
        city='Los Angeles',
        state='CA'
    )
    service7 = Service(
        name='Tv mounting by Loli',
        description='Outdorr, busines, home Tv services for home and businesses',
        price=130.0,
        availability=True,
        owner_id=4,
        service_type_id=5,
        city='Los Angeles',
        state='CA'
    )
    service8 = Service(
        name='The Home',
        description='Home  services very professinal, We design home, built from scratch',
        price=120.0,
        availability=True,
        owner_id=4,
        service_type_id=2,
        city='Los Angeles',
        state='CA'
    )
    service9 = Service(
        name='The HANDY',
        description='Appliance, sink and everything.Home  services very professinal, built from scratch',
        price=110.0,
        availability=True,
        owner_id=4,
        service_type_id=3,
        city='Los Angeles',
        state='CA'
    )
    service10 = Service(
        name='Tv Phonee',
        description='Phone and electronical  services very professinal.',
        price=120.0,
        availability=True,
        owner_id=4,
        service_type_id=4,
        city='Los Angeles',
        state='CA'
    )
    service11 = Service(
        name='We clean',
        description='Home cleaning services very professinal',
        price=50.0,
        availability=True,
        owner_id=5,
        service_type_id=1,
        city='Los Angeles',
        state='CA'
    )
    service12 = Service(
        name='We repair',
        description='Home repair services very professinal',
        price=440.0,
        availability=True,
        owner_id=5,
        service_type_id=2,
        city='Los Angeles',
        state='CA'
    )
    service13 = Service(
        name='We Handy',
        description='Home handyman services very professinal',
        price=60.0,
        availability=True,
        owner_id=5,
        service_type_id=3,
        city='Los Angeles',
        state='CA'
    )
    service14 = Service(
        name='We Repair',
        description='Phone repair services very professinal, done in second',
        price=67.0,
        availability=True,
        owner_id=5,
        service_type_id=4,
        city='Los Angeles',
        state='CA'
    )
    service15 = Service(
        name='Tv clean',
        description='Tv mounting services very professinal',
        price=90.0,
        availability=True,
        owner_id=5,
        service_type_id=5,
        city='Los Angeles',
        state='CA'
    )
    service16 = Service(
        name='Tv DO',
        description='Tv mounting services very professinal, done in seconds',
        price=99.0,
        availability=True,
        owner_id=6,
        service_type_id=5,
        city='Los Angeles',
        state='CA'
    )
    service17 = Service(
        name='Run Repair',
        description='Your phone is our phone, Phone repair services very professinal, done in second',
        price=57.0,
        availability=True,
        owner_id=6,
        service_type_id=4,
        city='Los Angeles',
        state='CA'
    )
    service18 = Service(
        name='Run Handy',
        description='Your home our home. Home handyman services very professinal',
        price=70.0,
        availability=True,
        owner_id=6,
        service_type_id=3,
        city='Los Angeles',
        state='CA'
    )
    service19 = Service(
        name='Run repair',
        description='Everything by us.Home repair services very professinal',
        price=340.0,
        availability=True,
        owner_id=6,
        service_type_id=2,
        city='Los Angeles',
        state='CA'
    )
    service20 = Service(
        name='Run clean',
        description='We run ...Home cleaning services very professinal',
        price=70.0,
        availability=True,
        owner_id=6,
        service_type_id=1,
        city='Los Angeles',
        state='CA'
    )
    # Add the businesses to the database
    db.session.add_all([service1,service2,service3,service4,service5,service6,service7,service8,service10,service11,service12,service13,service14,service15,service9,service16,service17,service18,service19,service20])
    db.session.commit()


def undo_services():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.services RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM services"))

    db.session.commit()
