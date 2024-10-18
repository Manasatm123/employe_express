import employeeSchema from './models/employee.model.js'

export async function addEmployee(req,res) {

    console.log(req.body);

    const{...employees}=req.body

    await employeeSchema.create({...employees}).then(()=>{
        res.status(201).send({msg:"Successfull"})
    }).catch((error)=>{
        res.status(404).send({error:error})
    })  
    
}

export async function getEmployees(req, res) {
    console.log("get employee");

    const data = await employeeSchema.find();
    console.log(data);
    res.status(200).send(data); 
}

export async function getemploye(req,res) {
    console.log(req.params);
    const {id}=req.params;
    const data=await employeeSchema.findOne({_id:id})
    console.log(data);

    res.status(200).send(data)
    
    
}

export async function update(req,res) {
    console.log(req.params);
    console.log(req.body);
    const {...employees}=req.body
    await employeeSchema.updateOne({_id:req.params.id},{$set:{...employees}}).then(()=>{
        res.status(201).send({msg:"updated"})
    }).catch((error)=>{
        res.status(500).send({error:error})
        
    })
    
    
    
}

export async function deleteemp(req, res) {
    console.log(req.params); 
    const { id } = req.params;  
    const data = await employeeSchema.deleteOne({ _id: id })
        .then(() => {
            res.status(201).send({ msg: "Deleted" });
        })
        .catch((error) => {
            res.status(500).send({ error });
        });
}
