const express = require("express");
require('dotenv').config();

const fs = require("fs");
const app = express();
const reader = require('any-text');
const xlsx = require('xlsx');
const cors = require('cors');
const morgan = require("morgan");
const { connectDB } = require("./db");
const mongoose =require("mongoose");
const QuestionModel = require("./QuestionModel");


app.use(express.urlencoded({extended: false}));
app.disable("etag");

// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: true
// }));

app.use(morgan("dev"));



 async function connect () {
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDb Connected");

    }catch(err){
        console.log(err);
    }
  
 }

 connect();


app.get('/getQuestions', async (req,res) => {
    try{
        const questions = await QuestionModel.find({});
        res.send(questions);
    }catch(err){
        res.status(500).send(err);
        console.log(err);
    }
  
    // const wb = xlsx.readFile('./Book1.xlsx');
    // const ws = wb.Sheets['Sheet2'];
    // const rightAnswers = wb.Sheets['Sheet7'];
    // const answersJSON = xlsx.utils.sheet_to_json(rightAnswers);
    // const exceldata  = xlsx.utils.sheet_to_json(ws);
    // // console.log(parsedData['data'][0])
    
    // const  getTextBeforeDot = (str) => {
    //     const dotIndex = str.indexOf('.');
    //     if (dotIndex !== -1) {
    //       return str.substring(0, dotIndex).trim();
    //     }
    //     return '';
    //   }
    //   const getTextAfterDot = (str) => {
    //     const dotIndex = str.indexOf('.');
    //     if (dotIndex !== -1) {
    //       return str.substring(dotIndex + 1).trim();
    //     }
    //     return '';
    //   }
    //   const getTextAfterPattern = (fullString, pattern) => {
    //     const patternIndex = fullString.indexOf(pattern);
    //     if (patternIndex !== -1) {
    //       return fullString.substring(patternIndex + pattern.length).trim();
    //     }
    //     return '';
    //   }
    

    // const questions = [];
    // const answers = [];
    // const A = []  ;
    // const B = [];
    // const C = [];
    // const D = [];




    // for(let i = 0; i<exceldata.length;i++){
    //     const item = exceldata[i]['Row:']
    //     if(parseInt(getTextBeforeDot(item)) >= 1000 && parseInt(getTextBeforeDot(item)) <= 9999){
    //     const question = "Question "+getTextBeforeDot(item);
    //         questions.push({
    //             "question": getTextAfterDot(item),
    //             "questionNumber": getTextBeforeDot(item)
    //         })
    //     }
       
    //     if(item.startsWith('a)')){

    //         A.push({
    //             "a": getTextAfterPattern(item,"a)")
    //         })
    //     }else if(item.startsWith('b)')){
    //         B.push({
    //             "b": getTextAfterPattern(item,"b)")
    //         })
    //     }else if(item.startsWith('c)')){
    //         C.push({
    //             "c": getTextAfterPattern(item,"c)")
    //         })
    //     }else if(item.startsWith('d)')){
    //         D.push({
    //             "d": getTextAfterPattern(item,"d)")
    //         })
    //     }
       
    // };

    // for(let j = 0;j<answersJSON.length;j++){
    //     const correctAnswer = answersJSON[j]['Answer'];
    //     answers.push({
    //         "answer": getTextAfterDot(correctAnswer)
    //     })
    // }

    // const fullQuestionsArray = questions.map((question, index) => {
    //     return {
    //       ...question,
    //       ...A[index],
    //       ...B[index],
    //       ...C[index],
    //       ...D[index],
    //       ...answers[index]
    //     };
    //   });

    //   fullQuestionsArray.map(async question => {
    //     const newQuestion = new QuestionModel({
    //         questionNumber: question.questionNumber,
    //         question: question.question,
    //         a: question.a,
    //         b: question.b,
    //         c: question.c,
    //         d: question.d,
    //         answer: question.answer

    //     })
    //     await newQuestion.save();
    //     console.log("Question Created")
    //   })
 
    
    // res.send(fullQuestionsArray);


});

app.get('/', async (req,res) => {
    res.send("HEllo")
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})