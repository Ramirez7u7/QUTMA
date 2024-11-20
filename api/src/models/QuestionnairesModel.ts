import { Schema, model } from "mongoose";
import { IQuestionnaires } from "../GlobalTypes";




const QuestionnnairesSchema = new Schema<IQuestionnaires>({
    tittle:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        raf: "users",
        required:true
    }
});

export const QuestionnaireModel = model ("questionnaires", QuestionnnairesSchema);