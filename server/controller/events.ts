import { pool } from "../config/database";
import { events } from "../config/data";

const getEvents = async (req: any, res: any) => {
    try {
        const result = await pool.query('SELECT * FROM events')
        res.status(200).json(result.rows)
    } catch (err) {
        res.status(400).json({ error: (err as Error).message })   
    }
    //res.status(200).json(events)
}



const getEventById = async (req: any, res: any) => {
    const eventId = parseInt(req.params.eventId, 10);
    try {
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
    //const eventId = parseInt(req.params.eventId, 10);
    //const event = events.find(event => event.Id === eventId);
    //if (event) {
    //    res.status(200).json(event);
    //} else {
    //    res.status(404).json({ error: "Event not found" });
    //}
}

export default {  getEvents, getEventById  }