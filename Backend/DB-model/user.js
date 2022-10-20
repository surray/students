const mongoose =require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            require:true,
            min:4,
        },
        email:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
            min:8,
        },

    }
);

module.exports=mongoose.model("Suser",studentSchema);