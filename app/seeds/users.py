from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password',membership_id=1, image="https://images.wisegeek.com/electrician.jpg")
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', image="http://photos.demandstudios.com/getty/article/240/28/80510142.jpg")
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password',membership_id=3, image="https://richmondcc.edu/sites/default/files/public/Photos/electronics_engineering_technicianhd.jpg")
    loli=User(username="Loli", email="loli@gmail.com",password="password",image="https://intellitec.edu/wp-content/uploads/2018/04/EverythingComputerSystemesTech.jpg")
    qaqa=User(username="Qaqa Hamza", email="qaqa@gmail.com", password="password", image="https://images.wisegeek.com/computer-technician.jpg")
    maqa=User(username="Maqa Eliyev",email="maqa@gmail.com", password="password",image="https://afterhoursheatandcool.com/wp-content/uploads/2019/10/commercial-hvac-repair-technician.jpg")
    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(loli)
    db.session.add(qaqa)
    db.session.add(maqa)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))
        
    db.session.commit()