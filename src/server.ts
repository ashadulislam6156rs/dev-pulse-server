import express, { type Application, type Request, type Response } from 'express'
const app : Application = express()
const port = 5000

// ------->>>> Middelware >>>>-------
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    "message": "DevPulse server",
    "author": "DevPulse"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})