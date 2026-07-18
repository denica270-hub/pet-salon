$("#servicesForm").submit(function(event){
    event.preventDefault();

//get the values for jqery, finding the functon by Id, to remove spaces the user might put in add trim
let serviceName = $("#serviceName").val().trim();
let serviceDescription= $("#serviceDescription").val().trim();
let servicePrice=$("#servicePrice").val().trim();
})
// use the value

// if you want to make sure the user is filling in all places  &&=and ||= or
if (serviceName=="" || serviceDescription=="" || servicePrice == ""){
    alert("You have pending required fields.");   
}else{
    alert("You have completed the form.");   
}

if(serviceName =="" || serviceDescription == "" || servicePrice ==""){
$("#serviceName").css("border", "2px soild red");
$("#servicDescription").css("border", "2px soild red");
$("#servicePrice").css("border", "2px soild red");
}else{
    alert("The service is been registered.");
    $("#serviceName").css("border", "");
    $("#serviceDescription").css("border", "");
    $("#servicePrice").css("border", "");
};    
// only at the end if the function will you use the dasses

$("#changeModeButton").click(function(){
    $("body").toggleClass("darkMode");

   /// ask the body has the dark-mode class
    const isDark = $("body").hasClass("darkmode");

   //change the button text
   // if is dark--> show the moon
if(isDark){
    $("#changeModeButton").text("☀️ Change mode");
}else{
    $("#changeModebutton").text("🌙 Change Mode");
}


});
