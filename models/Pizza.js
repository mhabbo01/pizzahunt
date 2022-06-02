const { Schema, model } = require('mongoose');

// we dont have to define the fields but we should regulate what the data will look like
const PizzaSchema = new Schema({
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now //if the user doesnt provide a date this function will execute and create a timestamp
    },
    size: {
        type: String,
        default: 'Large'
    },
    toppings: [] // this can also be Array
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;