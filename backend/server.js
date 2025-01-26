import express from "express"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"
import { connectDB } from "./LIB/db.js"
import authRoutes from '../backend/routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import groupRoutes from './routes/group.routes.js'
const app = express()
dotenv.config()

const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use('/v1/api/auth',authRoutes)
app.use('/v1/api/user',userRoutes)
app.use('/v1/api/group',groupRoutes)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDB()
})