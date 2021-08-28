const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

const ArticleSchema = new mongoose.Schema({
    Title:{type:"String"},
    Description:{type:"String", maxlength:50 },
    ArticleAuthor: {type:"String"},
    CreationDate: {type: "Date"},
    

    
});

const Atricle = mongoose.model('Atricle', ArticleSchema);




module.exports = Atricle;