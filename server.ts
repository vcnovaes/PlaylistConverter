import Express from "express";
import dotenv from "dotenv"


dotenv.config()
const PORT = process.env.PORT

const app: Express.Application = Express()

app.get("/", (req: Express.Request, res: Express.Response) => {
    res.send("Hello Dude")
})

app.listen(PORT, () => console.log(`Server is listing on ${PORT}`))