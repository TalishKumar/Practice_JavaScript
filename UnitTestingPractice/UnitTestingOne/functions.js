//Import fetch/axios
const axios = require('axios');

//Variable that holds multiple functions
const functions = {
    add: (num1, num2) => num1 + num2, //Adds two values
    isNUll: () => null, //Returns null
    checkValue: (x) => x, //Returns passed value

    //Function that returns a user object
    createUser: () => {
        const user = { firstName: 'Brad'} //Set property first name to 'Brad'
        user['lastName'] = 'Traversy'; //Add to user object property 'lastName' with value 'Traversy'
        return user; //Return the user object
    },

    //FAKE API function
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data) //Return the data from the promise
        .catch(err => 'error')
    //Making a request to an API and getting data
};

module.exports  = functions;