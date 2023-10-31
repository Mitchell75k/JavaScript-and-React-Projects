import express from 'express';
import { fakerDE as faker } from '@faker-js/faker'

const app = express()
//const faker = new faker(); removed because it was causing errors. I imported fakerDE from faker instead.
const port = 8000;

//functions that call the objects
const createUser = () => {
    const user = [
        { 
            id: faker.number.int(), 
            first_name: faker.person.firstName(), 
            last_name: faker.person.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(), 
            phone_number: faker.phone.number(),
        }
    ];
    return user;
};

const createCompany = () => {
    const company = 
    [{ 
        id: faker.number.int(), 
        name: faker.company.name(),
        address: 
            { 
                street: faker.location.streetAddress(), 
                city: faker.location.city(),
                state: faker.location.state(),
                zip: faker.location.zipCode(), 
                country: faker.location.country()
            },
    }];
    return company;
}


//Route to create a new user
app.get('/api/users/new', (req, res) => {
    res.json({ //res is short for response of the route
        user: createUser()
    });
});

//Route to create a new company
app.get('/api/companies/new', (req, res) => {
    res.json({
        company: createCompany()
    });
});

//Route to create a new user and company
app.get('/api/user/company', (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
