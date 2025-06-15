import express from "express"
import env from "dotenv"
import mongoose from "mongoose"
import routerProducto from "./routers/routerProductos.js"
import cors from "cors"

env.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000
app.use(cors())


app.listen(PORT,console.log(`el servicio de verduleria está en ejecución en puerto ${PORT} ` ))

app.get("/",(req, res)=>{
    res.status(200).send("servicio de verduleria en ejecución")
    console.log("servicio de verduleria en ejecución")

})

app.use("/productos",routerProducto)

mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("conectado a mongo")})
.catch((e)=>{console.log(`el error es ${e}`)})

app.use("/",(req, res)=>{
    res.status(400).send("ruta no encontrada")
})