/* Mongoose provides more structure to MongoDB by adding schemas that we can create that turn into models for our collections. 
These models specify keys, types, and even validations for documents in a specific collection. 
Mongoose also handles appropriate naming for us when it communicates with MongoDB! */

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const UserModel = mongoose.model('User', UserSchema);
/*/ mongoose.model() creates a model for us. its job is to take a blueprint object and, in turn, create the necessary database collection out of the model. 
We get this blueprint by making a new schema instance from the mongoose.Schema() object constructor.*/

export default UserModel;