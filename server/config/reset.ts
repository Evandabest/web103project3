import { pool } from "./database"
import { locations } from "./data"

export const deleteAllData = async () => {
    //drop events table
    const dropEventsTable = `
        DROP TABLE IF EXISTS locations
    `
    const data = await pool.query(dropEventsTable)
    console.log(data)
}


export const makeTable = async () => {
    const table = `
        CREATE TABLE Locations {
            Id int primary not null,
            Name text,
            Type text,
            Leader text,
            BadgeNum int
        };
    `
    const data = await pool.query(table)
    console.log(data)
}

export const makeRows = async () => {

    let rows = `INSERT INTO Locations (Id, Name, Type, Leader, BadgeNum) VALUES`

    for (const location of locations) {
        rows += `(${location.Id}, ${location.Name}, ${location.Type}, ${location.Leader}, ${location.BadgeNum}),`
    }

    const data = pool.query(rows)
}
