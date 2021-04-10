import express, { Application, Response, Request, NextFunction } from 'express'

import { Home } from './routes'

const app: Application = express()

app.use('/', Home)

const PORT = process.env.PORT || 1337
const SERVER_ADRESS = 'http://localhost'

app.listen(PORT, () => {
  console.info(`Services active on  ${SERVER_ADRESS}:${PORT}`)
})
