/* 
- This file  will house all of our logic for creating, retrieving, updating, and deleting users. 
- Notice at the top of the file, we do not have a require("mongoose") or import("mongoose") statement. 
- Instead we have a require("../models/user.model") statement which is importing the User variable that we exported from the user.model.js file.
-  In our controller file, we export different functions that perform the basic CRUD operations using our User model.
 */

import User from '../models/user.model.mjs'; //importing the User variable that we exported from the user.model.js file.

export const findAllUsers = (req, res) => {
User.find()
    .then((allDaUsers) => { //.then only executes omce the data is successfully retrieved from the database
    res.json({ users: allDaUsers });
    })
    .catch((err) => { //.catch only executes if there is an error when trying to retrieve data from the database
    res.json({ message: 'Something went wrong', error: err });
    });
};

export const findOneSingleUser = (req, res) => {
User.findOne({ _id: req.params.id })
    .then((oneSingleUser) => {
    res.json({ user: oneSingleUser });
    })
    .catch((err) => {
    res.json({ message: 'Something went wrong', error: err });
    });
};

export const createNewUser = (req, res) => {
User.create(req.body)
    .then((newlyCreatedUser) => { //.then only executes once the data is successfully inserted in the database
    res.json({ user: newlyCreatedUser });
    })
    .catch((err) => { //.catch only executes if there is an error when trying to insert into the database
    res.json({ message: 'Something went wrong', error: err });
    });
};

export const updateExistingUser = (req, res) => {
User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, runValidators: true }
)
    .then((updatedUser) => {
    res.json({ user: updatedUser });
    })
    .catch((err) => {
    res.json({ message: 'Something went wrong', error: err });
    });
};

export const deleteAnExistingUser = (req, res) => {
User.deleteOne({ _id: req.params.id })
    .then((result) => {
    res.json({ result: result });
    })
    .catch((err) => {
    res.json({ message: 'Something went wrong', error: err });
    });
};