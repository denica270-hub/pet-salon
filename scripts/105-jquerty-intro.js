// javaSvript Approach
//1. create the function
//2. connect the function and the button with the onclick
//*function sayHello({

//function sayHello(){
   // alert(Hello Class!);}



//Query = Event Handling
// select the button . action
$("#triggertEventButton").click(function(){});
  //  alert("hello cohort 69");}  //when no specify name its anonymous//

    //Practicing jQuery Actions
    //1. function to hide the paragraph
$("#hideButton").click(function(){
    $("p").hide();
});

//2. Function to show the pargraph
$("#showButton").click(function(){
    $("p").show();
});

//3. function to Toggle the paragraph
//Action .toogle(;
$("#toggleButton").click(function(){
    $("p").toogle();
});

//4.function to change text the paragraph
//Action .text("new text"); or .html("<b> new text <b>");
$("#ChangeTextButton").click(function(){
    $("p").text("<b> new text</b>");
});

//5. function to add css to the paragraph java scripts
//action: $("#mybutton").text("newtext).css("background-color","red").addClass("my-class") to bring function
$("#addCSSButton").click(function(){
    $("p")
        .css("color", "red")
        .css("border", " solid 2px green")
        .css("padding", "20px");      
});

// function to add a CSS class to the paragraph
$("#applyCSSClassButton").click(function(){
    $("p").addclass("my-class");
});



//alert(serviceName);

 //when adding the value  to push the alert to tell the user to put an  service name 
/*if (serviceName == ""){
    alert("The Service name is Required");
}else{
    alert(`The service name is: ${serviceName}.`);
}

if (serviceDescription == ""){
    alert("The Description infor is Required");
}else{
    alert(`The Description infor is: ${serviceDescription}.`);
}

if (servicePrice == ""){
    alert("The Price number is Required");
}else{
    alert(`The Price number is: ${servicePrice}.`);
}/*  

