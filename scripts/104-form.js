

function product(valueName,valuePrice,valueCategory)
this.productName=value
this. price= valuePrice


function registerProduct(){
    //testing function and button connection
   // console.log("connection");

    // prevent refreshing the browser
    event.preventDefault();
    //console.log(event);
//Testing function and button
 //console



//1. get the values
let productName = document.getElementById("productName").value;
let productPrice = document.getElementById("producctPrice").value;
let productCategory= document.getElementById("produtCategory").value;

//2. Use the values
// 2.1 creat the object by using your function 
let newProduct = new product(produce)


    displayCard(newProduct);}
    
    //2.2 display the product-object in the broswer ()
const container =document.getElementById("productsList");

//add the card to the container
container.innerHTML  +=`
    <div class="card" style="width: 18rem;">
      <div class="card-header">
       ${newProduct.name}
    <div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${newProduct.price}</li>
        <li class="list-group-item">${newProduct.Category</li>
        <li class="list-group-item">A third item</li>
    </ul>
        }