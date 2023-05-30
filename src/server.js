/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
// Libs
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { hostname } from 'os'
import express from 'express'
import morgan from 'morgan'
import router from './routes/routes.js'
dotenv.config()

// region  Initialice functions

// region  Initialice functions
const app = express()

// app.use(express.static(__dirname+ "/public"));
app.set('api_name', process.env.API_NAME)
app.set('port', process.env.PORT || 3000)
app.use(express.json())
app.use(morgan(process.env.API_LOG_LEVEL))
app.use(router)

// code
app.listen(app.get('port'), () => {
    console.log(`api-${app.get('api_name')} started on http://${hostname}:${app.get('port')}`)
})
