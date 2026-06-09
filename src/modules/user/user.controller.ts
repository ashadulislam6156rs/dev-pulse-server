import type { Request, Response } from "express";
import pool from "../../config/db";
import { userService } from "./user.service";

const userCreate =  async (req: Request, res: Response) => {
    
    try {

       const result = await userService.createUserDB(req.body)
        
         res.status(200).json({
              "success": true,
  "message": "User registered successfully",
            "data": result.rows[0],
    })
        
    } catch (error) {
        res.status(201).json({
            "success": false,
            "message": "user not created",
            "Error": error,
    })
        
    }

  
}

export const userController = { userCreate };