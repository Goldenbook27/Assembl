import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
    {   
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required: true
        },
        email:{
            type: String,
            required: true,
            unique:true
        },
        groupName: {
            type: String,
            required: true,
        },
        members: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "User",
            required: true
        },
        theme: {
            type: String,
            required: true
        },
        skillsRequired: {
            type: String,
            required: true
        }
    }
)

const Group = mongoose.model("Group",groupSchema)
export default Group