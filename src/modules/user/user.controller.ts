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

const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getAllUserDB();

         res.status(200).json({
              "success": true,
  "message": "User get successfully",
            "data": result.rows,
    })
        
    } catch (error) {

         res.status(201).json({
            "success": false,
            "message": "user get field!",
            "Error": error,
    })
        
    }
    
}

const getSingleUser = async (req: Request, res: Response) => {
    try {
        const email = req.query.email;

        const result = await userService.getSingleUserDB(email);

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User get success",
            data: result.rows[0]
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error
        });
    }
}

const updateSingleUser = async (req: Request, res: Response) => {
    try {

        const id = req.params.id;

        const result = await userService.updateSingleUserDB(req.body, id );

        res.status(200).json({
             success: true,
            message: "User update success",
            data: result.rows[0]
        })

        
    } catch (error) {

         res.status(500).json({
            success: false,
            message: "Something went wrong",
            error
        });
        
    }
    
}

export const userController = { userCreate, getAllUser,getSingleUser, updateSingleUser};