//this file  is where we use mongoose to connect to MongoDb. Mongoose has a super convenient connect method -- mongoose.connect!

//const mongoose = require('mongoose'); this is a common way to import mongoose in Node.js, but it doesn't work in TypeScript. 

//Instead, we'll use the ES6 import syntax. We'll also use the new URL string parser, and the new Server Discover and Monitoring engine. 
//These are all options that you can pass to the connect method to avoid deprecation warnings. You can read more about them in the Mongoose docs.

import mongoose from 'mongoose'; //importing mongoose in a way that works in TypeScript or vite

const mongooseConfig = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/name_of_your_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
};

export default mongooseConfig; //exporting the mongooseConfig function so that we can use it in other files