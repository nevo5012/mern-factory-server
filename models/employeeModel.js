import  mongoose  from "mongoose";

let appSchema = mongoose.Schema;

let emploeeySchema = new appSchema(
    {
        _id : String,
        first_name : String,
        last_name : String,
        role: []
         
       
    }
)

export default mongoose.model('employee', emploeeySchema);