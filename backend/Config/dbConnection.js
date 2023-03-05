const mongoose = require('mongoose');

const connection = async(dbusername,dbpassword)=>{
    const URI = `mongodb+srv://${dbusername}:${dbpassword}@curs-web-application.6588msl.mongodb.net/multer?retryWrites=true&w=majority` 
    try{
        await mongoose.connect(URI, {useUnifiedTopology:true, useNewUrlParser:true})
        console.log(`DB Connected`);
    }
    catch(err){
        console.log(`Error Found: ${err}`);
    }

}

module.exports = connection;