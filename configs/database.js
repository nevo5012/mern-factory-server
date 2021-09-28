import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/factoryDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
 });