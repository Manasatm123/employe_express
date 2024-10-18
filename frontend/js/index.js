async function getEmployees() {
    const res = await fetch("http://localhost:3001/api/getemployee");
    const employees = await res.json();
    console.log(employees);

    let str = '';
    employees.forEach((employe) => {
        str += `
         <div class="card1">
                <div class="card-image">
                    <img src="${employe.pic}" alt="Employee Image"> <!-- Default image if no URL is provided -->
                </div>
                <div class="card-content" id="card-content">
                    <div id="id"><strong>ID:</strong>${employe.id} </div>
                    <div id="name"><strong>Name:</strong> ${employe.name}</div>
                    <div id="designation"><strong>Designation:</strong>${employe.designation} </div>
                    <div id="experience"><strong>Experience:</strong>${employe.experience} </div>
                    <div id="salary"><strong>Salary:</strong> ${employe.salary}</div>
                </div>
                <div class="card-actions">
                    <a href="../pages/edit.html?id=${employe._id}">
                    <button class="edit-btn">Edit</button>
                </a>
                <a href="../pages/index.html" onclick="deleteemp('${employe._id}')"><button>Delete</button></a>
                </div>
            </div>
        `;
    });
    document.getElementById('card').innerHTML = str;
}

getEmployees();


function deleteemp(id) {
    fetch(`http://localhost:3001/api/deleteEmp/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"}
    })
    .then((res)=>{
        console.log(res);
        if(res.status == 201) {
            alert("success");
             window.location.href="./index.html"
        }
        else{
            alert("error");
        }
    });
    
}