import { Schema } from "mongoose";

export interface IUser {
    name:string;
    email:string;
    lastNames:string;
    password:string;
    rol:"administrador" | "client"
}

export interface IQuestion{
    tittle: String;
    type: "radio" | "checkbox" | "select" | "text",
    isMandatory: boolean,
    questionnairedId: Schema.Types.ObjectId | String;
}

export interface IQuestionnaires{
    tittle: string;
    description: string;
    userId: Schema.Types.ObjectId | String;
}

export interface IOptions{
    tittle: string,
    questionId:Schema.Types.ObjectId | string;
}

export interface IAnswer{
    questionnairedId:Schema.Types.ObjectId | string;
    questionId:Schema.Types.ObjectId | string;
    answer:string;
}