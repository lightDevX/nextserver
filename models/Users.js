import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Anonymous",
        min: 2,
        max: 100
    },
    email: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        required: 'Email address is required',
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
    }
})

const User = mongoose.models.User || mongoose.model("User", UserSchema);


export default User;