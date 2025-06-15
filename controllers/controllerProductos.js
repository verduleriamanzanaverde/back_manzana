import { modelProductos } from "../models/modelProducto.js"

export const getControllerProducto = async (req, res) =>{ // obtiene todos
    try{
        const productos = await modelProductos.find()
        res.status(200).json(productos)
    }
    catch{

    }

}

export const getOneControllerProducto = async (req, res) =>{ // obtiene uno 
        const id = req.params.id
        console.log(id)
        const producto = await modelProductos.findById(id)
        console.log(producto)
        res.status(200).json(producto)
    
}


export const createControllerProducto = async (req, res) =>{// crea un producto
    const {nombre, clase, precio} = req.body
    if (!nombre || !clase || !precio){
       return res.status(400).json({message:"faltan datos"})
    }
    else{
        const nuevoProducto = {
        nombre,
        clase,
        precio
        }
        const producto = await modelProductos.create(nuevoProducto,{new:true})
        res.status(201).json(producto)
    }
    
}

export const updateControllerProducto = async (req, res) =>{ // actualiza un producto
    const id = req.params.id
    const {nombre, clase, precio} = req.body
    const update = {
        nombre,
        clase,
        precio
    }
    if (!nombre || !clase || !precio){
       return res.status(400).json({message:"faltan datos"})
    }
    else{
        try{
            const producto = await modelProductos.findByIdAndUpdate(id,update,{new:true})
            res.status(201).json(producto)
        }catch{(error)=>{console.error(`el error es ${error}`)}}
        

        
    }
    
}