import { pool } from "../config/database";

const getEvents = async (req: any, res: any) => {
    try {
        const result = await pool.query('SELECT * FROM events')
        res.status(200).json(result.rows)
    } catch (err) {
        res.status(400).json({ error: (err as Error).message })   
    }
}

const getEventById = async (req: any, res: any) => {
    try {
        const eventId = req.params.eventId
        const selectQuery = `
            SELECT *
            FROM events
            WHERE id = ${eventId}
        `
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows[0])
    } catch (err) {
        res.status(400).json({ error: (err as Error).message })
    }
}

export default {  getEvents, getEventById  }