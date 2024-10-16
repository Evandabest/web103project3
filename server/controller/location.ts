import { pool } from "../config/database";
import { locations } from "../config/data";

const getLocations = async (req: any, res: any) => {
    try {
        const result = await pool.query('SELECT * FROM locations')
        res.status(200).json(result.rows)
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
    //res.status(200).json(locations)
}

const getLocationById =  async (req: any, res: any) => {
    const locationId = req.params.locationId
    try {
        const locationId = req.params.locationId
        const selectQuery = `
            SELECT *
            FROM locations
            WHERE id = ${locationId}
        `
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows[0])
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
    //const location = locations.find(location => location.Id == locationId)
    //res.status(200).json(location)
}

export default { getLocations, getLocationById }