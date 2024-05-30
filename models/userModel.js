import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    idNumber: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        default: "anonymous"
    },
    email: {
        type: String,
        required: false,
        default: "r055672978@gmail.com"
    },
    password: {
        type: String,
        required: true,
        default: "1234"
    },
    links: {
        type: Array,
        default: []
    }
})
export default mongoose.model("user", UserSchema)