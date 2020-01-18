const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, trim: true },
    nickname: String,
    point: { type: Number, default: 0 },
    uploadPhoto: mongoose.Schema.Types.ObjectId,
    purchasePhoto: mongoose.Schema.Types.ObjectId,
});

const User = mongoose.model('User', userSchema);

exports.User = User;
