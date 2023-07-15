const express = require('express')
const app = express()
const port = 8080 



require('dotenv').config()

require('./config/mongoose.config')

app.use(express.json() );
app.use( express.urlencoded({extended: true}));

const routeAttacher = require('./routes/joke.routes')

routeAttacher(app)


app.listen( port, () => console.log(`Server Live on Port: ${port}`));
