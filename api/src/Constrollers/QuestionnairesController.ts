import {QuestionnaireModel} from "../models/QuestionnairesModel";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";


export const CreateQuestionnaires =async (req:Request,res:Response):Promise<any>=>{
    try {
        //validad que los datos existen
        const tittle = req.body.tittle
        const questionnaireId = req.body.questionnaireId
        const description = req.body.description
        const userId = req.body.userId
        const ObjectId = mongoose.Types.ObjectId
          
          if (!ObjectId.isValid(questionnaireId)){
            return res.status(400).json({
                msg:"Los admnis no pueden crear"
            })
        }
        if( !tittle|| !description || !userId || !questionnaireId){
            return res.status(400).json({
                msg:"faltan datos para la creacion el cuestionario"
            })
        }
           const user = await QuestionnaireModel.create({
                tittle:tittle,
                description:description,
                userId:userId,
                questionnaireId:questionnaireId
            })
            const token = jwt.sign(JSON.stringify(userId),"pocoyo");
            return res.status(200).json({msg:"Cuestionario creado con exito",token})

    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"hubo en error al crear el cuestionario"})
        
    }
}
