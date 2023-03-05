const express = require('express')
const dotenv = require('dotenv')
const connection = require('./Config/dbConnection');
const bodyParser = require('body-parser');
const router = require('./Routers/routee')
const cors = require('cors')
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
  };

app.use(cors(corsOptions));

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', router);

app.use('/uploads',express.static('./uploads'));


dotenv.config();
const dbusername = process.env.DB_USERNAME;
const dbpassword = process.env.DB_PASSWORD;
const PORT = process.env.PORT;

connection(dbusername,dbpassword);


app.listen(PORT, ()=>{
    console.log(`Our Server Is Listng On PORT ${PORT}`);
})