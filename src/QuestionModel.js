const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    questionNumber: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    a: {
        type: String,
        required: true
    },
    b: {
        type: String,
        required: true
    },
    c: {
        type: String,
        required: true
    },
    d:{
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: false
    }

})

const QuestionModel = mongoose.model('Question', QuestionSchema);

module.exports = QuestionModel