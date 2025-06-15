import mongoose from "mongoose"

const ProductosSchema = new mongoose.Schema({
        nombre:{type:String, require:true, unique:true},
        clase:{type:String,require:true}, 
        precio:{type:String,require:true}

}) 

export const modelProductos = mongoose.model("productos",ProductosSchema)