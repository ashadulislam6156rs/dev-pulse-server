import express, { type Application, type Request, type Response } from 'express'
import { userRouter } from './modules/user/user.route';
const app : Application = express()

// ------->>>> Middelware >>>>-------
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRouter);


app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    "message": "DevPulse server",
    "author": "DevPulse"
  })
})




export default app;