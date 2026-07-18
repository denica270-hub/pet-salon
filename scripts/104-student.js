function Student(studentName,studentAge,studentCourse){
    this.name= studentName;
    this.age= studentAge;
    this.course= studentCourse;

}
function registerStudent(event){
    event.preventDefault();

    let Name = document.getElementById("studentName").value;
    let Age = document.getElementById("studentAge").value;
    let Course= document.getElementById("studentCourse").value;


    let newStudent = new Student(studentName,studentAge,studentCourse);
    console.log(newStudent);
}

// c. use the object to display the new student in the table

let body = document.getElementById("body");
let row = document.cteateElement("tr");

row.innerHTML= `
    <td> ${newStudent.name}</td>
    <td> ${newStudent.age}</td>
    <td> ${newStudent.course}</td>`;
    <td> <button class="btn btn-danger"> Delete </button></td>
    or <td> <button class="btn btn-danger-btn deltete">delete</button>
    `;


//delete functionality
    row.querySelector(".delete-btn").addEventListener("click,function(){
    alert("Clicked");

   // add const confirm("Are you sure you want to delete this row?");
   if(confirmation){
row.remove():}


    body.appendChild(row);
}



















