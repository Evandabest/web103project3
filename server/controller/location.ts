import { pool } from "../config/database";

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
    }`x`
}

const getLocationById =  async (req: any, res: any) => {
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
}

export default { getLocations, getLocationById }