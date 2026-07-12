
studentList = [];

function registration(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    let selectGender = document.querySelector('input[name = "gender"]:checked').value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let number = document.getElementById("number").value;

    if(firstName == "" || lastName == "" || selectGender == null || email == "" || password == "" || number == ""){
        alert("Please fill all the fields");
        return;
    }
     
    student ={
        firstName : firstName,
        lastName : lastName,
        selectGender : selectGender,
        email : email,
        password : password,
        number : number
    }

    studentList.push(student);
    loadTableStudentDetails();
    console.log(studentList);

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("number").value = "";

   
    selectGender.checked = false;


    alert("Registration Successful!");

}

function loadTableStudentDetails(){
   let tableBody = document.getElementById("tableBody");

   let body = "";

   for(let i = 0 ; i < studentList.length ; i++){
    body += `<tr>
      <th scope="col">${studentList[i].firstName}</th>
      <th scope="col">${studentList[i].lastName}</th>
      <th scope="col">${studentList[i].selectGender}</th>
      <th scope="col">${studentList[i].email}</th>
      <th scope="col">${studentList[i].password}</th>
      <th scope="col">${studentList[i].number}</th>
    </tr>`;
   }

   tableBody.innerHTML = body;
}