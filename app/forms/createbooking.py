from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField,FloatField, BooleanField, DateField
from wtforms.validators import DataRequired, NumberRange,Length

class BookingForm(FlaskForm):
    notes= TextAreaField('Description')
    date=DateField('Date', validators=[DataRequired()])
    address=StringField('Address')
    city=StringField('City')

   