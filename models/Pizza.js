const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// we dont have to define the fields but we should regulate what the data will look like
const PizzaSchema = new Schema(
{
    pizzaName: {
        type: String
    },
    createdBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now, //if the user doesnt provide a date this function will execute and create a timestamp
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    size: {
        type: String,
        default: 'Large'
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    toppings: [] // this can also be Array
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

PizzaSchema.virtual('commentCount').get(function() {
    return this.comments.reduce((total, comment) => total + comment.replies.length + 1, 0);
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;