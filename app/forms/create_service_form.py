from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, TextAreaField,FloatField, BooleanField
from wtforms.validators import DataRequired, NumberRange,Length

class ServiceForm(FlaskForm):
    name=StringField('Name', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    price= FloatField('Price')
    city=StringField('City', validators=[DataRequired()])
    state=StringField('State', validators=[DataRequired()])
    availability=BooleanField('Availability')
    service_type_id=IntegerField('Service Type')