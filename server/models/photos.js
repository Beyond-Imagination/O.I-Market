const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    path: { type: String, required: true, unique: true },
    uploader: mongoose.Schema.Types.ObjectId,
    downloadTimes: Number,
    tag: [{ type: String }],
});

const Photo = mongoose.model('Photo', photoSchema);

exports.Photo = Photo;
