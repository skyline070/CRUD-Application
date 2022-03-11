const express = require('express')
const employeeController = require('./controllers/employeeController')

const db = require('./models/db')
const exphbs = require('express-handlebars')
const Handlebars = require('handlebars')
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))   //Middleware

app.engine('handlebars', exphbs.engine({handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'handlebars');

app.use('/employee',employeeController)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))