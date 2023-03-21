import random
from app import db
from app.models import Business, BusinessImage, SCHEMA, environment

# Seed the database with 25 business images, with one preview image per business
def seed_business_images():
    # Retrieve all of the businesses from the database
    businesses = Business.query.all()

    # Create some business images
    images = [
        {'url': 'https://images.unsplash.com/photo-1587241321921-91a834d6d191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'preview': True},
        {'url': 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80', 'preview': False},
        {'url': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'preview': False},
        {'url': 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80', 'preview': False},
        {'url': 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'preview': False},
    ]

    # Create 5 images for each business, with one preview image per business
    for biz in businesses:
        random.shuffle(images)
        preview_added = False

        for i in range(5):
            img = BusinessImage(business_id=biz.id, url=images[i]['url'], preview=False)

            # If this is the first image, set it as the preview image
            if not preview_added and images[i]['preview']:
                img.preview = True
                preview_added = True

            db.session.add(img)

    db.session.commit()


def undo_business_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
