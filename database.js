const mongo = require("mongoose");

mongo.connect("mongodb://localhost/quotesAPI", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Established");
}).catch((e) => {
    console.log(e);
});