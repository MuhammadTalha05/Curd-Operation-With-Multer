const user = require('../Model/userSchema')

const alldata = async(req,res)=>{
    try{
        const data = await user.find();
        res.status(201).json({status:201 ,data})
    }   
    catch(error)
    {
        res.status(404).json({status:404, message:error.message})
    }
}

const register = async(req,res)=>{
    const {filename} = req.file;
    const {userName} = req.body;

    if(!userName || !filename){
        res.status(404).json({status:404, message: "All Fields Are Required"})
    }
    try{
        const userdata = new user({
            userName:userName,
            imagePath:filename
        });
    
        await userdata.save()
        res.status(201).json({status:201, userdata})
    }
    catch(error){
        res.status(404).json({status:404, message:error.message})
    }
}

const deletedata = async(req, res)=>{
    const {id} = req.params;
    const users = req.body;
    try{
       const data = await user.findByIdAndDelete(id,users)
       res.status(201).json({status: 201, data});
    }
    catch(error){
        res.status(404).json({status: 404, message:error.message});
    }
}

module.exports = {
    alldata,
    register,
    deletedata,
};