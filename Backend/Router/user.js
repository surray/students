const router =require('express').Router();
const { compare } = require('bcrypt');
const studDB =require('../DB-model/user');

//signup
router.post('/register',async(req,res)=>{
    try{
        const stud =new studDB({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password,
        });
        const sstud =await stud.save();
        res.status(200).json((sstud._id));
       }
    catch(err){
        res.status(500).json(err)
    }
})

//login
router.post('/login',async(req,res)=>{
    try{
        const nstud =await studDB.findOne({username:req.body.username});
        !nstud && res.status(400).json("wrong username or password");
        
        const validPassword= (req.body.password ===nstud.password);
        !validPassword && res.status(400).json("wrong username or password");
         res.status(200).json({_id: nstud._id,username: nstud.username})
       }catch(err){
        res.status(500).json(err)
    }
})





module.exports=router;

