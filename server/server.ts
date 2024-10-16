import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import eventsRouter from './routes/eventData'
import locationsRouter from './routes/locations'
//import { deleteAllData } from './config/reset'
import './config/dotenv.ts'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use(express.json())


app.use('/events', eventsRouter)
app.use('/locations', locationsRouter)

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the event management API')
})

//app.get("/test", async (req, res) => {
//    console.log(process.env.DATABASE_URL)
//    await deleteAllData()
//    res.status(200).send("Data deleted")
//})

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:3000`)
})