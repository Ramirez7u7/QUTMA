import { Schema, model } from "mongoose";

interface IOptions{
    tittle: string,
    questionId:Schema.Types.ObjectId | string;
}

const OptionsSchema = new Schema<IOptions>({
    tittle:{
        type: String,
        required:true
    },
    questionId:{
        type:Schema.Types.ObjectId,
        ref:"questions",
        required:true
    }
});

export const OptionsModel = model ("opctions", OptionsSchema);