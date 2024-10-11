import pg from 'pg'


const config = {
    connectionString: process.env.DATABASE_URL,
}

const pool = new pg.Pool(config)

export { pool }