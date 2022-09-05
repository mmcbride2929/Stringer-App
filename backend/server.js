import * as dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import connectDB from './db/connect.js'
import postRoutes from './routes/posts.js'

// initiate app and env file
const app = express()
dotenv.config({ path: '../.env' })

// routes
app.use('/posts', postRoutes)

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
