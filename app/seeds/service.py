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
        service_type_id=1
    )
    service2 = Service(
        name='Gardening',
        description='Gardening and landscaping services',
        price=100.0,
        availability=True,
        owner_id=2,
        service_type_id=2
    )

    service3 = Service(
        name='Plumbing',
        description='Plumbing and water repair services',
        price=75.0,
        availability=True,
        owner_id=1,
        service_type_id=3,
    )

    service4 = Service(
        name='Device Repair',
        description='Electrical installation and repair services',
        price=80.0,
        availability=True,
        owner_id=3,
        service_type_id=4,
    )

    service5 = Service(
        name='Mounting',
        description='Tv mounting services for home and businesses',
        price=150.0,
        availability=True,
        owner_id=2,
        service_type_id=5,
    )
    # Add the businesses to the database
    db.session.add_all([service1,service2,service3,service4,service5])
    db.session.commit()


def undo_services():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.services RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM services"))

    db.session.commit()
