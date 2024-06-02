import mongoose from "mongoose";

const TargetValueSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})

const LinkSchema = mongoose.Schema({
    originUrl: {
        type: String,
        default: ''
    },
    clicks: [{
        insertedAt: {
            type: Date,
            default: Date.now()
        },
        ipAddress: {
            type: String,
            default: "0.0.0.0"
        },
        targetParamValues: {
            type: String,
            required: false
        }
    }],
    targetParamName: "t",
    targetValues: [TargetValueSchema],
    default: [
        { name: "Facebook", value: "fb" },
        { name: "Google", value: "gg" },
        { name: "Twitter", value: "tw" }
    ]
})
export default mongoose.model("link", LinkSchema)