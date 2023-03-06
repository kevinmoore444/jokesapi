const mongoose = require("mongoose")

const database = "jokesApi"

// Can interpolate database or just insert fullstackdemo23 into that function

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a DB Connection to: ${database}`))
    .catch((error) => console.log("Abort something is wrong...ABORT!!!", error))

