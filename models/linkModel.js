import mongoose from "mongoose";
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
        }
    }]
})
export default mongoose.model("link", LinkSchema)