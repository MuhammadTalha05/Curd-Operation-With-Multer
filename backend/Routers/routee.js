const express = require("express");
const multer = require("multer");
const {alldata,register,deletedata} = require('../Controllers/userControllers')
const router = express.Router();


// Storing Image To Destination and rename File

const imgconfig = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './uploads')
    },
    filename: (req,file, cb)=>{
        cb(null, `image-${Date.now()}.${file.originalname}`)
    }
})

// Check File Type if Image Then Ok Otherwise Error
const isImage = (req,file,cb)=>{
    if(file.mimetype.startsWith('image')){
        cb(null, true)
    }
    else{
        cb(new Error("Only Allow Image Type"))
    }
}

const upload = multer({
    storage: imgconfig,
    fileFilter:isImage,
})


router.post('/register',upload.single('imageUpload'), register)

// router.route('/alldata').get(alldata)
router.get('/alldata', alldata);

router.delete('/:id',deletedata)




module.exports = router;