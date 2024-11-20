import { Schema, model } from "mongoose";

interface IAnswer{
    questionnairedId:Schema.Types.ObjectId | string;
    questionId:Schema.Types.ObjectId | string;
    answer:string;
}

const AnswerSchema = new Schema<IAnswer>({
    questionnairedId:{
        type: Schema.Types.ObjectId,
        ref:"questionnaires",
        required:true
    },
    questionId:{
        type:Schema.Types.ObjectId,
        ref:"questions",
        required:true
    },
    answer:{
        type:String,
        required:true
    }
});

export const AnwerModel = model ("answers", AnswerSchema);