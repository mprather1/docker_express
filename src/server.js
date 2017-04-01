import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import httpervert from 'httpervert'
import router from './routes'
import winston from 'winston'

const options = {
  app: express(),
  port: process.env.PORT || 8000,
  environment: process.env.NODE_ENV || 'development',
  logger: winston
}

const {app, environment, logger} = options

if (environment === 'development') {
  logger.info('environment: development')
  app.use(morgan('dev'))
}

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api', router)

const server = httpervert(options)

export default server