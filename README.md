# Student-Results-App
Student Results Management App for ShyftLabs

### Screenshots
![swa](https://github.com/jaybihola/Student-Results-App/assets/39041724/48134eef-9553-479e-9268-ce5a6a48edb9)

### Videos
https://capture.dropbox.com/lt5mdtdcgmVHPQEf

# Setup Instructions
## Dependencies
- Node
  - Refer to https://nodejs.org/en/download
- MongoDB (please ensure you have MongoDB running locally)
  - Refer to https://www.mongodb.com/docs/manual/administration/install-community/
  - Select the operating system you have to install



## Setup Procedure
1. Clone the repo (or download it) locally
2. Optional, create .env files (one in frontend folder and one in backend folder)
  - Inside the backend folder, set the following variable: PORT: <any port> -- if unset, default port of 3030 will be used
  - Inside the backend folder, set thet the following variable: MONGODB_URI: <uri> -- if unset, default will be used
  - Inside the frontend folder, set the following variable: VITE_API_URL: <http://localhost:port> where port is the port selected above -- if unset, default url will be used for API calls
    - Front end will always run on port 5173 when run locally
3. Via terminal, cd into frontend and run
```
npm install
npm run build
```
4. Open a second terminal and cd into frontend and run
```
npm install
npm run dev
```
5. Navigate to localhost:3030 to view the app


Note, if you wish to run the front end on a dev environment, that can also be done using npm run dev. Then, the FE and BE will be decoupled and the react app can be accessed at localhost:5173.

## Technologies
1. MongoDB
2. Express
3. React
4. Node

## Libraries Used
1. react-router
2. dayjs
3. ant design
4. axios
5. react-query
6. styled-components
