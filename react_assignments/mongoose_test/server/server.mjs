import express from 'express'; //importing express
import mongooseConfig from "./config/mongoose.config.mjs"; //importing the mongooseConfig function from mongoose.config.js
import AllMyUserRoutes from "./routes/user.routes.mjs"; //importing the AllMyUserRoutes function from user.routes.js

const app = express(); //creating an express app instance 

mongooseConfig(); //this will execute the code from mongoose.config.js

app.use(express.json(), express.urlencoded({ extended: true })); //this will allow our app to parse json and use url encoded values

AllMyUserRoutes(app); //this will execute the code from user.routes.js

app.listen(8000, () => console.log("The server is all fired up on port 8000")); //this will fire up our server to port 8000