# workshop_nodejs_api
Simple REST API build with NodeJS, Express, and MongoDB as part of an OpenClassroom exercise


## Goals
the exercise consisted of creating a REST API (as a CRUD app) with NodeJS and Express to communicate with a MongoDB database.  
More details and tests instructions can be found here [here](https://github.com/OpenClassrooms-Student-Center/fullstack-activity/blob/1fd358bc732123b8e7de80e43c8176b517d0e539/README.md).


### Requirements
  - nodejs and npm (https://nodejs.org/)
  - npm packages **express**, **body-parser**, **nodemon**, **dotenv**, **mongoose**
  - a MongoDB server (https://www.mongodb.com/)
  - a .env file in the api directory with **NODE_ENV**, **PORT**, and **MONGO_URL** variables ([example](https://github.com/sebkzn/workshop_nodejs_api/blob/master/api/.env.example))


### Installation
```bash
$ npm install -g nodemon # may be run as sudo
$ git clone https://github.com/sebkzn/workshop_nodejs_api.git
$ cd workshop_nodejs_api/api
$ npm install
```


### Run
To start the API, just run the command below from the **api** directory :
```bash
$ nodemon server
```
The service will now run on localhost, listening on the port you specified in your **.env** file

