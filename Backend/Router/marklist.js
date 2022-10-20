const router =require('express').Router();
const studMarkDB =require('../DB-model/marklist');

//signup
router.post('/marks',async(req,res)=>{
    try{
        var studMark =new studMarkDB({
            name:req.body.name,
            subject:req.body.subject,
            marks:req.body.marks,
        });
        var sstudmark =await studMark.save();
        res.status(200).json((sstudmark.name));
       }
    catch(err){
        res.status(500).json(err)
    }
})

// router.get("/all",async(req,res)=>{
//     var findData =await studMarkDB.find();
//     res.json(findData);
// })

//update
router.put("/update",async(req,res)=>{
    var update =await studMarkDB.updateOne({_id:req.body._id},{$set:{
        name:req.body.name,
        subject:req.body.subject,
        marks:req.body.marks,
    }});
    res.json(update);
})


//Delete
router.delete("/del/:id",async(req,res)=>{
    var delStud =await studMarkDB.findByIdAndRemove(req.params.id).then(e=>{
        res.json({message:"Deleted Successfully"})
    })
})

//findone
router.get("/find/:name",async(req,res)=>{
    var foundStu =await studMarkDB.find({name:req.params.name});
    res.json(foundStu);
})

//find again
router.get("/search/:key",async(req,res)=>{
    var foundSub =await studMarkDB.find({
        "$or":[
            {subject:{$regex:req.params.key}},
            ]})
        res.json(foundSub);})



module.exports=router;
