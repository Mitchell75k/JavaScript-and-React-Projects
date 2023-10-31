// eslint-disable-next-line no-unused-vars
import React, { useState } from  'react';
    
// eslint-disable-next-line no-unused-vars
const UserForm = (props) => { //here we are destructuring the props passed to the UserForm component from the App component and assigning them to their own variables
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        console.log("Starting to create a new user...");
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        console.log("Prevented default refresh of browser");
    
        // create a javascript object to hold all of the values so we can pass it to the parent component
        const newUser = { 
            username: username,             //we can also just use shorthand syntax here, like so: const newUser = { username, email, password };
            email: email,                   //the name of the key in the object will be the same as the name of the variable holding the value
            password: password 
        };
        console.log("Welcome" + newUser.username + "!"); 
        setUsername(""); //we are resetting the state of the variables to clear the form after the user submits
        setEmail("");
        setPassword("");
    };
    
    return(                           //e.target.value is the value of the input field that the user types in
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" value = { username } onChange={ (e) => setUsername(e.target.value) } /> 
            </div>
            <div>
                <label>Email Address: </label> 
               {/* we are using 'value = { email }' to clean up the form after the user submits, this is bc we are assigning the value of the input field to the previous state of the email variable */}
                <input type="text" value = { email } onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value = { password } onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;