from flask.cli import AppGroup
from .users import seed_users, undo_users
from .service import seed_services, undo_services
from .reviews import seed_reviews, undo_reviews
from .servicetype import seed_service_types, undo_service_types
from .booking import seed_bookings, undo_bookings
from .membership import seed_memberships, undo_memberships
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_bookings()
        undo_reviews()
        undo_services()
        undo_service_types()
        undo_users()
        undo_memberships()
    seed_memberships()
    seed_users()
    seed_service_types()
    seed_services()
    seed_reviews()
    seed_bookings()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # undo_users()
    # Add other undo functions here
    undo_bookings()
    undo_reviews()
    undo_services()
    undo_service_types()
    undo_users()
    undo_memberships()
