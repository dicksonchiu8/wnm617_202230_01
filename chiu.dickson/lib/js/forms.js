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
    let description = $("#user-about").val();
   
    console.log({name,age,description});
}
