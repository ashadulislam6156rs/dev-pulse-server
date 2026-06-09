import pool from "../../config/db"

const createUserDB = async (paylode: any) => {
    const { name, email, password, role } = paylode;
     const result = await pool.query(`
            INSERT INTO users (name, email, password, role)
            VALUES ($1, $2, $3, $4)
            RETURNING *;

            `, [name, email, password, role])
    
    return result;
}

export const userService = {createUserDB};