function updates(){
    //Testing the functions and the button connection
   // alert("Connected");

   //1. Get the title (h1)
    let title =  document.getElementById("title");

 //1.1 /update the text
// innerHtml
// textContent
//title.innerHTML = "<i> Hello,class! </i>"; //well put the text on display
title.textContent ="<i> hello,class! </i>";  // it well just writes the text

//2. Get the text elements (p)
let plist = document.getElementsByClassName("text"); //adding (s) to the element to get more of them
  console.log(pList);                                     // id you need uqique element
                                         //class more elements/list element
                                         //.getElememt will gave yo array
//2.1 Change the p1 color red, and p2 to blue
pList[0].style.color = "red";
pList[1].style.color = "blue";}

function addItems(){
 // let addItems = document.getElementsByClassName("text");
let item = document.getElementById("itemValue").value;


//functions addItems(){
 //let item = docment.getElementById("item/value").value;
// alert(item);

let list = document.getElementById("addItems");
list.innerHTML = `<li> ${item}</li>`;
}