/* 
- This file  will be responsible for all of our routes dealing with the user model. 
- Notice at the top of the file, this time, we have a require("../controllers/user.controller") statement 
- which is importing everything we exported from the controller file. */

import { findAllUsers, findOneSingleUser, updateExistingUser, createNewUser, deleteAnExistingUser } from '../controllers/user.controller.mjs';

export default app => {
app.get('/api/users', findAllUsers);
app.get('/api/users/:id', findOneSingleUser);
app.patch('/api/users/:id', updateExistingUser);
app.post('/api/users', createNewUser);
app.delete('/api/users/:id', deleteAnExistingUser);
}

/* 
- NOTE: The order of these routes matter! If you have a route that uses a wildcard (like :id) 
before a path with a specific name, the wildcard route will always run. 
Move specific routes to the top to ensure they are followed.

- For example, if you wanted to create a get route with a specific path, 
it would have to go before your get route for a single document. 
The following would never make it to the allusers route 
because the :id route would also match the string allusers:

const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.get('/api/users/:id', UserController.findOneSingleUser);
    app.get('/api/users/allusers', UserController.findAllUsers);
} 
*/