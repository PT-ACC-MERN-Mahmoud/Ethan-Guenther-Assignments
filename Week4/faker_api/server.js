const {faker} = require("@faker-js/faker");

const express = require("express");
const { response } = require("express");

const app = express();
const port = 8000;

//id, firstname, lastname, phonenumber, email, password

const createUser = () => (
    {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    });
console.log(createUser());

//id, name, address, street, city, state, zipcode, country

const createCompany = () => (
    {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipcode: faker.address.zipCode(),
            country: faker.address.country(),
        }

    }

);
console.log(createCompany());


app.get("/api/users/new", (request, response)=> {
    const newUser = createUser();
    response.json(newUser);
})

app.get("/api/companies/new", (request, response) => {
    const newCompany= createCompany();
    response.json(newCompany);
})

app.get("/api/user/company", (request, response) => {
    const newUser= createUser();
    const newCompany= createCompany();
    const responseObject = {
        User: newUser,
        Company: newCompany

    };
    response.json(responseObject);
})

app.listen(port, () => console.log(`Listening on port: ${port}`) );


