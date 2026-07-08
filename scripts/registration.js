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
    service:"Play Date",
    breed: "Gold Retirver"
};

let pet5 = {
    name:"Crystal",
    age:1,
    gender:"Male",
    service:"Play Date",
    breed:"Bull Dog",
};

let pet6= { 
    name:"Jessica",
    age:12,
    gender:"Female",
    service:"Hair Trim",
    breed: "Pug"
}


let petsList = [pet1, pet2, pet3,pet1,pet5,pet6];

console.log(petsList[0]);
console.log(petsList[1]);
console.log(petsList[2]);


function displayPets() {
    let petList = document.getElementById("PetList");
    let result = "";

    for(i=0; i<petsList.length; i++){
        console.log(petsList[i].name);
        result+=`<li> ${petsList[i].name} </li>`;
    } 
    petList.innerHTML = result;
}

displayPets();

function Product(valueName,valueAge,valueGender,valueService,valueBreed){
    this.name= valueName;
    this.age= valueAge;
    this.gender= valueGender;
    this.service= valueService;
    this.breed= valueBreed;
}

function registerProduct(event){
    console.log("Connected");
        event.preventDefault();
        console.log(event);

let productName = document.getElementById("productName").value;
let productAge = document.getElementById("productAge").value;
let producGender = document.getElementById("productGender").value;
let productService = document.getElementById("productService").value;
let productBreed = document.getElementById("productBreed").value;

let newProduct = new Product(productName,productAge,productGender,productService,productBreed);
    console.log(newProduct);

const container = document.getElelmentById("productList") ;  
    container.innerHTML +=`           `;
}
