
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
    console.log(studentList);

}