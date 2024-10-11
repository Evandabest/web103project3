import express from 'express'

import locationController from '../controller/location'

const locationsRouter = express.Router()

locationsRouter.get('/', locationController.getLocations)

locationsRouter.get('/:locationId', locationController.getLocationById)

export default locationsRouter;