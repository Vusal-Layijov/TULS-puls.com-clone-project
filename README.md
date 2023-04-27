# TULS

## About The Project

TULS, is a puls.com clone. Users can use website to create service, also book service, users can join memberships. Also can add review to the service. With using AWS S3 buckets user can upload profile picture, enjoj search functionality, can get email notification once logged in or signed up.

## Deployed Live Link

[Tuls-com](https://tuls-com.onrender.com)


## Built With

* [Flask](https://flask.palletsprojects.com/en/2.2.x/)

* [React](https://reactjs.org/)

## Technologies/Frameworks Used

* Flask, Python, Sqlalchemy

* React, Redux

* Flask Dependencies

	* click = ==8.1.3
	* gunicorn = ==20.1.0
	* itsdangerous = ==2.1.2
	* python-dotenv = ==0.21.0
	* six = ==1.16.0
	* Flask = ==2.2.2
	* Flask-Cors = ==3.0.10
	* Flask-SQLAlchemy = ==3.0.2
	* Flask-WTF = ==1.1.1
	* Jinja2 = ==3.1.2
	* MarkupSafe = ==2.1.2
	* SQLAlchemy = ==1.4.46
	* Werkzeug = ==2.2.2
	* WTForms = ==3.0.1
	* Flask-Migrate = ==4.0.2
	* Flask-Login = ==0.6.2
	* alembic = ==1.9.2
	* python-dateutil = ==2.8.2
	* python-editor = ==1.0.4
	* greenlet = ==2.0.1
	* Mako = ==1.2.4
	* boto3>=1.15.0
	* flask_mail==0.9.1

* React Dependencies

	* bootstrap: ^5.2.3
    * http-proxy-middleware: ^1.0.5
    * mapbox-gl: ^2.13.0
    * react: ^17.0.2
    * react-bootstrap: ^2.7.2
    * react-dom: ^17.0.2
    * react-map-gl: ^7.0.21
    * react-redux: ^7.2.4
    * react-router-dom: ^5.2.0
    * react-scripts: ^4.0.3
    * redux: ^4.1.0
    * redux-logger: ^3.0.6
    * redux-thunk: ^2.3.0
	* react-slick: "^0.29.0"
	* slick-carousel: "^1.8.1"

## MVP Core Features

* Users

	* Create, Read

* Services

	* Create, Read, Update, Delete

* Reviews

	* Create, Read, Update, Delete
* Memberships

	* Create, Read, Update, Delete

* Bookings

	* Create, Read, Update, Delete


* Search/Filter

	* Read

* Google Maps

	* Create, Read, Update

## Future Implementation Goals

- [ ] Make site responsive to phone devices

## Getting Started

After you clone this project you will need to follow the next steps:

1. Install dependencies by running pipenv install using the requirements.txt file

	```bash
	pipenv install -r requirements.txt
	```
2. Create a .env file based your environments

	This file should include:
	* A SECRET_KEY so csrf calls can be made
	* A SCHEMA unique to your database
	* The DATABASE_URL where your database is located

3. You can enter the pipenv, migrate the database, and run the flask app by running the follow commands

	```bash
	pipenv shell
	```

	```bash
	flask db upgrade
	```

	```bash
	flask seed all
	```

	```bash
	flask run
	```

4. In order to run the React App, run the following commands

	```bash
	cd react-app
	```

	```bash
	npm install
	```

	```bash
	npm start
	```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

## Contact

Vusal Layijov - https://github.com/Vusal-Layijov


Project Link: https://github.com/Vusal-Layijov/TULS-puls.com-clone-project

## Acknowledgments

* [Font Awesome](https://fontawesome.com/)

* [AWS](https://aws.amazon.com/)


