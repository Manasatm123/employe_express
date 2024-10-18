let pic;
async function getEmployeeDetails() {
    const res = await fetch(`http://localhost:3001/api/getemployee/${id}`);
    const employee = await res.json();

    document.getElementById('main_2').innerHTML = `
        <div>
            <div class="card"><img src="${employee.pic}" alt="Employee Image" style=" width: 200px; height: 200px"; ></div>
            <input type="text" placeholder="ID" id="id" value="${employee.id}">
            <input type="text" placeholder="Name" id="name" value="${employee.name}">
            <input type="text" placeholder="Designation" id="designation" value="${employee.designation}">
            <input type="text" placeholder="Salary" id="salary" value="${employee.salary}">
            <input type="text" placeholder="Experience" id="experience" value="${employee.experience}">
            <input type="text" placeholder="Email" id="email" value="${employee.email}">
            <input type="text" placeholder="Phone" id="phone" value="${employee.phone}">
            <input type="file" placeholder="pic" id="pic" name="pic" onchange="picture()">
                <div style="width: 200px; height: 200px;">
                    <img src="${employee.pic}" style="width: 100%; height: 100; object-fit: cover;" id="img" alt="">
                </div>
        </div>
        <button onclick="updateEmployee()">Save</button>
    `;
}

async function updateEmployee() {
    const updatedData = {
        id: document.getElementById('id').value,
        name: document.getElementById('name').value,
        designation: document.getElementById('designation').value,
        salary: document.getElementById('salary').value,
        experience: document.getElementById('experience').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        pic:pic
    };

    const res = await fetch(`http://localhost:3001/api/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData)
    });

    const data = await res.json();
    if (res.status === 201) {
        alert(data.msg);
        window.location.href = "/index.html";
    } else {
        alert(data.error);
    }
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

getEmployeeDetails();

async function picture() {
    const file=document.getElementById("pic").files[0]

    pic=await convertBase64(file)
    console.log(pic);
    document.getElementById('img').src=pic
    
    
 }


 function convertBase64(file){
    return new Promise((resolve, reject) => {
       const fileReader=new FileReader()
       fileReader.readAsDataURL(file)
       fileReader.onload=()=>{

        resolve(fileReader.result)
       }

       fileReader.onerror=(error)=>{
        reject(error)
       }
    })
 }

