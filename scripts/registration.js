//            0,   1   ,  2
let names = ["Brad","Lisa","Alex"];
let ages =[3,6,15];


names[0];
console.log(names[0]);
ages[0]=3;
console.log(ages[0]);

names[1];//Lisa
console.log(names[1]);
ages[1]=6;
console.log(ages[1]);

names[2];//Alex
console.log(names[2]);
ages[2]=15;
console.log(ages[2]);

names.length;
console.log(names.length);

for(let i=0; i<names.length; i++){
    console.log(names[i]);
}


let pet1 = {
    name:"Brad",
    age:3,
    gender: "Male",
    service: "Hair Trim",
    breed: "Pug"
};

let pet2 = {
    name:"Lisa",
    age:6,
    gender: "Female",
    service: "Yearly Shots",
    breed: "BullDog"
};

let pet3 = {
    name:"Alex",
    age:15,
    gender: "Female",
    service: "Prescriptions",
    breed: "Beagle"
};

let pet4 = {
    name:"Jay",
    age:5,
    gender: "Male",
    service:"PlayDate",
    breed: "Gold Retirver"
};

let pet5 = {
    name:"Crystal",
    age:1,
    gender:"Male",
    service:"PlayDate",
    breed:"Bull Dog",
};

let pet6= { 
    name:"Jessica",
    age:12,
    gender:"Female",
    service:"Hair Trim",
    breed: "Pug"
}


let petList = [pet1, pet2, pet3,pet4,pet5,pet6];

console.log(petList[0]);
console.log(petList[1]);
console.log(petList[2]);


function displayPets() {
    console.log("...........");
    
    let petListTable = document.getElementById("petList");
    let result = "";

    for(i=0; i<petList.length; i++){
        console.log(petList[i].name);
        result+=`
            <tr id="${i}">
                <td>${petList[i].name}</td>
                <td>${petList[i].age}</td>
                <td>${petList[i].gender}</td>
                <td>${petList[i].service}</td>
                <td>${petList[i].breed}</td>
                <td><button class="btn btn-danger" onclick="deletePet(${i})">Delete</button></td>
            </tr>
        `;
    } 
    petListTable.innerHTML = result;
}


function deletePet(petId) {
    document.getElementById(petId).remove()
    petList.splice(petId, 1)
    displayPets()
}

displayPets();

function newPet(valueName,valueAge,valueGender,valueService,valueBreed){
    this.name= valueName;
    this.age= valueAge;
    this.gender= valueGender;
    this.service= valueService;
    this.breed= valueBreed;
}


function registerPetsList(event){
    console.log("Connected");
    event.preventDefault();
    console.log("Clicked");

    let petName = document.getElementById("petName").value;
    let petAge = document.getElementById("petAge").value;
    let petGender = document.getElementById("petGender").value;
    let petService = document.getElementById("petService").value;
    let petBreed = document.getElementById("petBreed").value;

    let newPetlist = new newPet(petName,petAge,petGender,petService,petBreed);
    //console.log("new pet " +newPetList);       
    const container = document.getElementById("petList");

    container.innerHTML +=`
        <tr>
            <td>${newPetlist.name}</td>
            <td>${newPetlist.age}</td>
            <td>${newPetlist.gender}</td>
            <td>${newPetlist.service}</td>
            <td>${newPetlist.breed}</td>
            <td><button class="btn btn-danger">Delete</button></td>
        </tr>
    `;
    
};

:root{
    --background-color: #f4f4fb; url(`../images/images.jpg2.jpg);
    --surface-color: red;
    --accent-color: #008fff;
    --text-color: #1a2744;
}

/* Dark Mode Colors - When applying the class */
.dark-mode{
    --background-color: #1a2744; url(`../images/images.jpg2.jpg);
    --surface-color: #23345a;
    --accent-color: #f4f4fb;
    --text-color: #45adff;  
}




