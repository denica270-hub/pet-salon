$("#saveButton").click(function(){
    alert(" You do it");


let Email = $("#storageButton").val();
alert(email);

localStorage.setItem("emailKey",email);

});