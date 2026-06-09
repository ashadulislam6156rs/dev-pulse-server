import { request, response, Router, type Request, type Response } from "express";
import pool from "../../config/db";
import { userController } from "./user.controller";



const router = Router();


router.post('/create-users', userController.userCreate);


export const userRouter = router;