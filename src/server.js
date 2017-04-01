import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import router from './routes'
import winston from 'winston'
import {Server} from 'http'

const options = {
  app: express(),
  port: process.env.PORT || 8000,
  environment: process.env.NODE_ENV || 'development',
  logger: winston
}

const {app, environment, logger, port} = options

app.use(morgan('dev'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)
  
const server = Server(app).listen(port, function () {
    logger.info('Environment:', environment)
    logger.info('Listening on port', port + '...')
})
server.timeout = 12000

server.on('request', function (req, res) {
  logger.info(("processing..."))
})

export default server
