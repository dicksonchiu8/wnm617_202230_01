const submitAnimalAdd = () => {
    let name = $("#dog-fullname").val();
    let breed = $("#dog-breed-select :selected").text();
    let description = $("#dog-description").val();
   
   //FORM VALIDATION
    if(name.length < 1 && breed === "Select a dog breed"){
        $("#add-dog-error-message").html("Please Enter the Dog's Name.<br>Please Pick a Dog Breed.");
          $("#add-dog-error-message").addClass("visible");
          $("#add-dog-error-message").removeClass("no-display");
         
          // remove error message after some time
          setTimeout(function() {
            $("#add-dog-error-message").addClass("no-display");
            $("#add-dog-error-message").removeClass("visible");
          }, 4000);         
    } else if(name.length < 1 ){
        $("#add-dog-error-message").html("Please Enter the Dog's Name.");
          $("#add-dog-error-message").addClass("visible");
          $("#add-dog-error-message").removeClass("no-display");
         
          // remove error message after some time
          setTimeout(function() {
            $("#add-dog-error-message").addClass("no-display");
            $("#add-dog-error-message").removeClass("visible");
          }, 4000);           
    } else if(breed === "Select a dog breed"){
        $("#add-dog-error-message").html("Please Pick a Dog Breed.");
          $("#add-dog-error-message").addClass("visible");
          $("#add-dog-error-message").removeClass("no-display");
         
          // remove error message after some time
          setTimeout(function() {
            $("#add-dog-error-message").addClass("no-display");
            $("#add-dog-error-message").removeClass("visible");
          }, 4000);           
    } else{
        console.log({name,breed,description});
        sessionStorage.animalId = $(this).data('id');
        $.mobile.navigate("#add-dog-location-page")
    }
    
}

const submitAnimalEdit = () => {
    let name = $("#edit-dog-fullname").val();
    let breed = $("#edit-dog-breed-select :selected").text();
    let description = $("#edit-dog-description").val();
  
   //FORM VALIDATION
    if(name.length < 1 && breed === "Select a dog breed"){
        $("#edit-dog-error-message").html("Dog's Name can't be Empty.<br>Please Pick a Dog Breed.");
          $("#edit-dog-error-message").addClass("visible");
          $("#edit-dog-error-message").removeClass("no-display");
         
          // remove error message after some time
          setTimeout(function() {
            $("#edit-dog-error-message").addClass("no-display");
            $("#edit-dog-error-message").removeClass("visible");
          }, 4000);         
    } else if(name.length < 1 ){
        $("#edit-dog-error-message").html("Dog's Name can't be Empty.");
          $("#edit-dog-error-message").addClass("visible");
          $("#edit-dog-error-message").removeClass("no-display");
         
          // remove error message after some time
          setTimeout(function() {
            $("#edit-dog-error-message").addClass("no-display");
            $("#edit-dog-error-message").removeClass("visible");
          }, 4000);           
    } else if(breed === "Select a dog breed"){
        $("#edit-dog-error-message").html("Please Pick a Dog Breed.");
          $("#edit-dog-error-message").addClass("visible");
          $("#edit-dog-error-message").removeClass("no-display");
         
          // remove error message after some time
          setTimeout(function() {
            $("#edit-dog-error-message").addClass("no-display");
            $("#edit-dog-error-message").removeClass("visible");
          }, 4000);           
    } else{
        console.log({name,breed,description});
        sessionStorage.animalId = $(this).data('id');
        $.mobile.navigate("#dog-profile-page-info")
    }   
}

const submitUserAdd = () => {

}


const submitUserEdit = () => {
    let name = $("#user-fullname").val();
    let age = $("#user-age-select :selected").text();
    age = parseInt(age, 10);
    let description = $("#user-about").val();


   //FORM VALIDATION
    if(name.length < 1 && age === 0){
        $("#edit-user-error-message").html("Your Name can't be Empty.<br>Age can't be 0.");
          $("#edit-user-error-message").addClass("visible");
          $("#edit-user-error-message").removeClass("no-display");
         
          // remove error message after some time
          setTimeout(function() {
            $("#edit-user-error-message").addClass("no-display");
            $("#edit-user-error-message").removeClass("visible");
          }, 4000);         
    } else if(name.length < 1 ){
        $("#edit-user-error-message").html("Your Name can't be Empty.");
          $("#edit-user-error-message").addClass("visible");
          $("#edit-user-error-message").removeClass("no-display");
         
          // remove error message after some time
          setTimeout(function() {
            $("#edit-user-error-message").addClass("no-display");
            $("#edit-user-error-message").removeClass("visible");
          }, 4000);           
    } else if(age === 0){
        $("#edit-user-error-message").html("Age can't be 0.");
          $("#edit-user-error-message").addClass("visible");
          $("#edit-user-error-message").removeClass("no-display");
         
          // remove error message after some time
          setTimeout(function() {
            $("#edit-user-error-message").addClass("no-display");
            $("#edit-user-error-message").removeClass("visible");
          }, 4000);           
    } else{
        console.log({name,age,description});
        //sessionStorage.animalId = $(this).data('id');
        $.mobile.navigate("#user-profile-page-info")
    }    
    console.log({name,age,description});
}

const submitPassword = () => {
    let new_password = $("#new-password").val();
    let confirm_new_password = $("#confirm-new-password").val();
    
   //FORM VALIDATION
    if(new_password !== confirm_new_password){
        $("#change-password-error-message").html("Passwords Do Not Match!");
          $("#change-password-error-message").addClass("visible");
          $("#change-password-error-message").removeClass("no-display");
         
          // remove error message after some time
          setTimeout(function() {
            $("#change-password-error-message").addClass("no-display");
            $("#change-password-error-message").removeClass("visible");
          }, 4000);         
    } else if (new_password.length < 1 && confirm_new_password.length < 1 ){
        $("#change-password-error-message").html("Passwords Can't Be Empty!");
          $("#change-password-error-message").addClass("visible");
          $("#change-password-error-message").removeClass("no-display");
         
          // remove error message after some time
          setTimeout(function() {
            $("#change-password-error-message").addClass("no-display");
            $("#change-password-error-message").removeClass("visible");
          }, 4000);            
    } else{
        $("#change-password-success-message").html("Your Password has been updated!");
          $("#change-password-success-message").addClass("visible");
          $("#change-password-success-message").removeClass("no-display");
         
          // remove error message after some time
          setTimeout(function() {
            $("#change-password-success-message").addClass("no-display");
            $("#change-password-success-message").removeClass("visible");
          }, 4000); 
    }       
    
}

const signup1 = () => {
    let email = $("#signup-email").val();
    let username = $("#signup-username").val();
    let password = $("#signup-password").val();
    
    //FORM VALIDATION
    if(email.length < 1 || username.length < 1 || password.length < 1){
        $("#signup1-error-message").html("Please Fill in All Fields.");
        $("#signup1-error-message").addClass("visible");
        $("#signup1-error-message").removeClass("no-display");    
        
        // remove error message after some time
        setTimeout(function() {
            $("#signup1-error-message").addClass("no-display");
            $("#signup1-error-message").removeClass("visible");
        }, 4000);          
    } else {
        //saving the values in local storage
        localStorage.setItem("emailValue", email);
        localStorage.setItem("userValue", username);
        localStorage.setItem("passValue", password);
        $.mobile.navigate("#signup-page-part2")
    }
}

const signup2 = () => {
    let email = localStorage.getItem("emailValue");
    let user = localStorage.getItem("userValue");
    let pass = localStorage.getItem("passValue");
    
    let fullname = $("#signup-fullname").val();
    let age = $("#signup-user-age-select :selected").text();
    age = parseInt(age, 10);
    let description = $("#signup-user-description").val();
    
    //FORM VALIDATION
    if(fullname.length < 1 || age.length < 1 || description.length < 1){
        $("#signup2-error-message").html("Please Fill in All Fields.");
        $("#signup2-error-message").addClass("visible");
        $("#signup2-error-message").removeClass("no-display");    
        
        // remove error message after some time
        setTimeout(function() {
            $("#signup2-error-message").addClass("no-display");
            $("#signup2-error-message").removeClass("visible");
        }, 4000);          
    } else {
        console.log({email,user,pass,fullname,age,description});
        $.mobile.navigate("#login-page")
    }    
}
