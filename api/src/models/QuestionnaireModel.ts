import { Schema, model } from "mongoose";



interface IQuestionnaire{
    tittle: string;
    description: string;
    userId: Schema.Types.ObjectId | String;
}

const QuestionnnaireSchema = new Schema<IQuestionnaire>({
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
        raf: "Users",
        required:true
    }
});

export const QuestionnaireModel = model ("questionnaire", QuestionnnaireSchema);