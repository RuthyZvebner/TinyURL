import mongoose from "mongoose";
const LinkSchema = mongoose.Schema({
    originUrl: {
        type: String,
        default: ''
    }
})
export default mongoose.model("link", LinkSchema)