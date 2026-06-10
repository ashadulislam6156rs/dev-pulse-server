import pool from "../../config/db"

const createUserDB = async (paylode: any) => {
    const { name, email, password, role } = paylode;
    const result = await pool.query(`
            INSERT INTO users (name, email, password, role)
            VALUES ($1, $2, $3, $4)
            RETURNING *;

            `, [name, email, password, role]);
    
    return result;
}

const getAllUserDB = async () => {
    const result = await pool.query(`
        SELECT * FROM users;
        `)
    return result;
}

const getSingleUserDB = async (email : any) => {
    const result = await pool.query
        (`
            SELECT * FROM users WHERE email = $1
        
            `, [email])
    
    return result;
}

const updateSingleUserDB = async (paylode: any, id : any) => {

    const { name, email, password, role } = paylode;

    const result = await pool.query(`
          UPDATE users
        SET
            name = $1,
            email = $2,
            password = $3,
            role = $4,
            updated_at = CURRENT_TIMESTAMP
        WHERE id = $5
        RETURNING *;
        
        `,[ name, email, password, role, id] )

    return result;
}

export const userService = {createUserDB, getAllUserDB, getSingleUserDB, updateSingleUserDB};