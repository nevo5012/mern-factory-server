import express from 'express';
import cors from 'cors';
import './configs/database.js';

import employeeControler from './models/employeeControler.js';
import dotenv from 'dotenv';
dotenv.config()


let app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/employee',employeeControler);

app.listen(process.env.PORT|| 8000);
console.log('Server is up on localhost, listening to port 8000');