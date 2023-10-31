// eslint-disable-next-line no-unused-vars
import React, { useState } from  'react';


//here we pass the state variables to the FormDataDisplay component as parameters and assign them to their own variables
// eslint-disable-next-line react/prop-types
const FormDataDisplay = ({ firstName, lastName, email, password, confirmPassword }) => { 
  return (
    <div style={{paddingBottom: '45px'}}>
      <h2 className='text-primary' >Form Data:</h2>
      <p style={{marginBottom: '15px'}} > <strong>First Name:</strong> {firstName}</p>
      <p style={{marginBottom: '15px'}} > <strong>Last Name:</strong> {lastName}</p>
      <p style={{marginBottom: '15px'}} ><strong>Email:</strong> {email}</p>
      <p style={{marginBottom: '15px'}} ><strong>Password:</strong> {password}</p>
      <p> <strong>Confirm Password:</strong> {confirmPassword}</p>
    </div>
  );
};
// eslint-disable-next-line no-unused-vars
const Form = (props) => { 
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false); //this is to check if the user has submitted the form or not
    //validations for the form
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
      if (e.target.value.length < 2 && e.target.value.trim() !== "") { //checking if the value of the input field is less than 2 characters or if it is not empty
          setFirstNameError("Name must be at least 2 characters!");
        }
        setFirstname(e.target.value); 
      }

    const handleLastName = (e) => {
      if (e.target.value.length < 2 && e.target.value.trim() !== "") {
          setLastNameError("Name must be at least 2 characters!");
        }
        setLastname(e.target.value);
    }
    const handleEmail = (e) => {
      if (e.target.value.length < 5 && e.target.value.trim() !== "") {
          setEmailError("Email must be at least 5 characters!");
        }
        setEmail(e.target.value);
    }
    
    const handlePassword = (e) => {
      if (e.target.value.length < 8 && e.target.value.trim() !== "") {
          setPasswordError("Password must be at least 8 characters!");
        }
        else if (e.target.value !== confirmPassword) {
          setPasswordError("Passwords do not match!");
        }
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
      if (e.target.value !== password) {
          setConfirmPasswordError("Passwords do not match!");
        }
        setConfirmPassword(e.target.value);
    }

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        console.log("Prevented default refresh of browser");
    
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome" + newUser.firstName + "!"); 
        setFirstname(""); //we are resetting the state of the variables to clear the form after the user submits
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setHasBeenSubmitted(true); //changing the state to true to display the thank you message after the user submits the form
    };
    
    return(
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '700px', flexDirection: 'column', margin: '45px'}}>
        <div style={{marginBottom: '15px'}} >
          {
          hasBeenSubmitted ? 
          <h3 className='text-success'>Thank you for submitting the form!</h3> :
          <h3 className='text-danger'>Welcome, please submit the form.</h3> 
          }
        </div>
        <form onSubmit={ createUser }  style={{marginBottom: '25px'}}>
          <div style={{ marginBottom: '15px'}}>
              <label> <strong> First Name:</strong> </label> 
              <input style={{borderRadius: '5px', border: '1px solid black'}} type="text" value = { firstName } onChange={ handleFirstName } /> 
              {
              firstNameError ?
              <p style={{color: 'red'}}>{ firstNameError }</p> :
              ''
              }
          </div>
          <div style={{ marginBottom: '15px'}}>
              <label> <strong>Last Name: </strong> </label> 
              <input style={{borderRadius: '5px', border: '1px solid black'}} type="text" value = { lastName } onChange={ handleLastName } />
              {
              lastNameError ?
              <p style={{color: 'red'}}>{ lastNameError }</p> :
              ""
              }
          </div>
          <div style={{ marginBottom: '15px'}}>
              <label> <strong>Email Address: </strong>  </label> 
              {/* we are using 'value = { email }' to clean up the form after the user submits, this is bc we are assigning the value of the input field to the previous state of the email variable */}
              <input style={{borderRadius: '5px', border: '1px solid black'}} type="text" value = { email } onChange={ handleEmail } />
              {
              emailError ?
              <p style={{color: 'red'}}>{ emailError }</p> :
              ""
              }
          </div>
          <div style={{ marginBottom: '15px'}}>
              <label> <strong>Password:</strong> </label>
              <input style={{borderRadius: '5px', border: '1px solid black'}} type="text" value = { password } onChange={ handlePassword } />
              {
              passwordError ?
              <p style={{color: 'red'}}>{ passwordError }</p> :
              ""
              }
          </div>
          <div style={{ marginBottom: '15px'}}>
              <label> <strong> Confirm Password:</strong> </label>
              <input style={{borderRadius: '5px', border: '1px solid black'}} type="text" value = { confirmPassword } onChange={ handleConfirmPassword } />
              {
              confirmPasswordError ?
              <p style={{color: 'red'}}>{ confirmPasswordError }</p> :
              ""
              }
          </div>
          <button style={{marginTop: '10px'}} type="submit" className='btn btn-success'>Create User</button>
        </form>
        <div style={{marginTop: '35px'}} >
            <FormDataDisplay //here we are passing the props down to the FormDataDisplay component to display in real time
            firstName={firstName}
            lastName={lastName}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
          />
        </div>
      </div>
    );
};
    
export default Form;