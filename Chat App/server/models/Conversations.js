const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema({
    members: {
        type: Array,
        required: true,
    },
    type: {
        type: String,
        default: "DM",
    }
});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;