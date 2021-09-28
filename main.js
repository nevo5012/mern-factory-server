import express from 'express';
import cors from 'cors';
import './configs/database.js';
import employeeModel from './models/employeeModel.js';
import employeeControler from './models/employeeControler.js';
import dotenv from 'dotenv';
dotenv.config()


let app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/employee',employeeControler);

app.listen(process.env.PORT || 8000)
console.log('Server is up on localhost, listening to port 8000');

app.get("/read",(req, res) =>{
    employeeModel.find({}, (err,result)=>
    {
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    })
})


app.get('/', (req, res) => {res.send('Hello from Express!')});