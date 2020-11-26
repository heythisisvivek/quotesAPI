const mongo = require("mongoose");

const quotes = new mongo.Schema({
    quote: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
        default: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
    }
});

module.exports = mongo.model("quotes", quotes);