import { Schema, model } from "mongoose";
import { IQuestion } from "../GlobalTypes";

const QuestionSchema = new Schema<IQuestion>({
    tittle:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum: ["radio","checkbox","select","text"],
        required:true
    },
    isMandatory:{
        type:Boolean,
        required:true
    },
    questionnairedId:{
        type: Schema.Types.ObjectId,
        raf: "questionnaires",
        requeried:true
    }
});


export const QuestionModel = model ("questions", QuestionSchema);