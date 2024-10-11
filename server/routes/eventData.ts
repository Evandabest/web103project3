import express from 'express'

import Eventcontroller from '../controller/events'


const eventsRouter = express.Router()


eventsRouter.get('/', Eventcontroller.getEvents)

eventsRouter.get('/:eventId', Eventcontroller.getEventById)

export default eventsRouter