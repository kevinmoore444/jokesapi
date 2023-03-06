const express = require("express")
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

require('./config/mongoose.config')

const Routes = require('./routes/joke.routes')
Routes(app)


app.listen(port, () => console.log(`Welcome to the Death Star Bridge: ${port} `))