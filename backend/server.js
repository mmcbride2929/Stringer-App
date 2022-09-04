import * as dotenv from 'dotenv'
dotenv.config({ path: '../.env' })
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import connectDB from './db/connect.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

// listening for requests
const start = async () => {
  try {
    await connectDB(process.env.CONNECTION_URL)
    app.listen(process.env.PORT, () => {
      console.log(`server is listening on port: ${process.env.PORT} `)
    })
  } catch (error) {
    console.log(error)
  }
}


start()
