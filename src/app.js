import 'dotenv/config'
import path from 'path'
import express from 'express'
import cors from 'cors'
import sass from 'node-sass-middleware'
import { auth } from 'express-openid-connect'
import { PORT, SASS_CONFIG, AUTH_CONFIG } from './config'
import routes from './routes'

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(sass(SASS_CONFIG))
app.use(auth(AUTH_CONFIG))
app.use(express.static(path.join(__dirname, 'public')))

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.locals.env = process.env

// bootstrap
const jquery = path.join(__dirname, '../node_modules/jquery/dist')
const axios = path.join(__dirname, '../node_modules/axios/dist')
const auth0 = path.join(__dirname, '../node_modules/auth0-js/dist')

app.use('/jquery', express.static(jquery))
app.use('/axios', express.static(axios))
app.use('/auth0', express.static(auth0))

// routes
app.use('/', routes)

app.listen(PORT, () => console.log(`App running on port ${PORT}`))
