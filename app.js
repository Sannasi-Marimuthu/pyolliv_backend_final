const express = require('express')
const app = express()
const errorMiddleware = require('./middlewares/error')
const cookieParser = require('cookie-parser')
app.use(express.json()); 
app.use(cookieParser())

const auth = require('./routes/auth')
const commonRouter = require('./routes/common.route');
const policyRouter = require('./routes/policy.route');
const propertyRouter = require('./routes/property.route');
const webRouter = require('./routes/web.route');

app.use('/api/v1',auth)
app.use('/api/v1/common',commonRouter)
app.use('/api/v1/policy',policyRouter)
app.use('/api/v1/property',propertyRouter)
app.use('/api/v1/web',webRouter)

app.use(errorMiddleware)

module.exports = app