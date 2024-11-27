import { Request, Response } from "express";
import { UserModel } from "../models/UsersModel";
import jwt from "jsonwebtoken";



export const registerUsers =async (req:Request,res:Response):Promise<any>=>{
    try {
        //validad que los datos existen
        const name = req.body.name
        const email = req.body.email
        const lastNames = req.body.lastNames
        const password = req.body.password
        const rol = req.body.rol
          //Administrador no pueden crear clientes xd
          if (req.user?.rol === "administrador" && rol === "client"){
            return res.status(400).json({
                msg:"Los admnis no pueden crear"
            })
        }
        if( !name || !email || !lastNames || !password || !rol){
            return res.status(400).json({
                msg:"faltan datos para la creacion de usuario"
            })
        }
        //validar que el usuario es admnistrador si el usuario a crear es admin
        if(rol === "admnistrator" && req.user?.rol!="administrador")
            return res.status(400).json({
                msg:"no puedes crear un admin si no lo eres tambien"
            })

           const user = await UserModel.create({
                name:name,
                lastNames:lastNames,
                email:email,
                password:password,
                rol:rol
            })
            const token = jwt.sign(JSON.stringify(user),"pocoyo");
            return res.status(200).json({msg:"usuario cargado con exito",token})

    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"hubo en error al crear el usuario"})
        
    }
}

export const singin = async (req:Request, res:Response): Promise<any>=>{
        try {
            const user = await UserModel.findOne({email:req.body.email, password:req.body.password})
            
           if(!user){
            return res.status(400).json({
                msg:"no hay coinciedencia en el sistema"
            })
            
           }
           const token = jwt.sign(JSON.stringify(user),"pocoyo");
           return res.status(200).json({msg:"Inicio de sesion correcto",token})

        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg:"Hubo un error al iniciar sesion"
            })
        }
    
    
    }