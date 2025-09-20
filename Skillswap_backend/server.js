const express =require('express');
const cors=require('cors');
const mongoose=require('mongoose');

const app=express();
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/skillswap',
    {useNewUrlParser:true,
    useUnifiedTopology:true
    });
const SkillSchema=new mongoose.Schema({
    name:String,
    description:String,
    teacher:String

});
const Skill=mongoose.model('Skill',SkillSchema);
const SessionSchema = new mongoose.Schema({
  skillId: mongoose.Types.ObjectId,
  student: String,
  date: Date
});
const Session = mongoose.model('Session', SessionSchema);
app.post("/skills",async(req,res)=>{
    const skill=new Skill(req.body);
    await skill.save();
    res.json(skill);
});

app.get("/skills",async(req,res)=>{
    res.json(await Skill.find())
});
app.put("/skills/:id",async(req,res)=>{
    res.json(await Skill.findByIdAndUpdate(req.params.id,req.body,{new:true}));
});
app.delete("/skills/:id",async(req,res)=>{
    await Skill.findByIdAndDelete(req.params.id);
    res.json({success:true});
});
//sessions
app.post("/sessions",async(req,res)=>{
    const session=new Session(req.body);
    await session.save();
    res.json(session);
});
app.get("/sessions",async(req,res)=>{
    res.json(await Session.find())
});
app.put("/sessions/:id",async(req,res)=>{
    res.json(await Session.findByIdAndUpdate(req.params.id,req.body,{new:true}));
});
app.delete("/sessions/:id",async(req,res)=>{
    await Session.findByIdAndDelete(req.params.id);
    res.json({success:true});
});

app.listen(5000,()=>console.log(`Server running at ${5000}`));


