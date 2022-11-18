import 'dotenv/config'
import path from 'path'
import express from 'express'
import sass from 'node-sass-middleware'
import { PORT, SASS_CONFIG } from './config'
import routes from './routes'

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(sass(SASS_CONFIG))
app.use(express.static(path.join(__dirname, 'public')))

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.locals.env = process.env

// routes
app.use('/', routes)

app.listen(PORT, () => console.log(`App running on port ${PORT}`))
