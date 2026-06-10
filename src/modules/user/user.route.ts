import { request, response, Router, type Request, type Response } from "express";
import pool from "../../config/db";
import { userController } from "./user.controller";



const router = Router();


router.post('/create-users', userController.userCreate);
router.get('/get-users', userController.getAllUser);
router.get('/get-single-user', userController.getSingleUser);
router.put('/update-single-user/:id', userController.updateSingleUser);


export const userRouter = router;