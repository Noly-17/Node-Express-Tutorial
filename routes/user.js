import express from 'express'
import { uuid } from 'uuidv4';

const route = express.Router();

// imagine this is the database
let users = []

// create
route.post('/create-user', (req, res) => {
    const newUser = {...req.body, id: uuid()}
    if(newUser){
         users.push(newUser)
    }
})

// read
route.get('/', (req, res) => {
    res.send(users)
})

// update
route.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const updateUser = users.find(user => user.id === id)

        if(firstName) updateUser.firstName === firstName;
        if(lastName) updateUser.lastName === lastName;
        if(age) updateUser.age === age;


    res.send(`User with the id ${id} has been updated`);   
})

// delete 
route.delete('/:id', (req, res) => {
    const { id } = req.params;
    const deleteUser = users.filter(user => user.id !== id)

    res.send(`User with the id ${id} has been deleted`);   
})




export default route