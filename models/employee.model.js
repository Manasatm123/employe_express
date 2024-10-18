import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    id: { type: Number },  
    name: { type: String },
    designation: { type: String },
    experience: { type: Number },
    salary: { type: Number },
    email: { type: String },
    phone: { type: Number },
    pic:{type : String}
});


export default mongoose.model.Employee||mongoose.model('Employee',employeeSchema)