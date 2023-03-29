# TULS

## About The Project

TULS, is a puls.com clone. Users can use website to create service, also book service, users can join memberships. Also can add review to the service. With using AWS S3 buckets user can upload profile picture, enjoj search functionality, can get email notification once logged in or signed up.


## Built With

* [Flask](https://flask.palletsprojects.com/en/2.2.x/)

* [React](https://reactjs.org/)

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


