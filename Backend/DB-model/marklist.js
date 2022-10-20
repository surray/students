const mongoose =require('mongoose');

const markSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true,
            min:4,
        },
        subject:{
            type:String,
            require:true,
        },
        marks:{
            type:Number,
            require:true,
            min:8,
        },

    }
);

module.exports=mongoose.model("userMarks",markSchema);