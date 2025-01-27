const submitAnimalAdd = async () => {
    let name = $("#dog-fullname").val();
    let breed = $("#dog-breed-select :selected").text();
    let description = $("#dog-description").val();
    let img = $("#add-dog-photo-image").val();
    
    if(img === ""){
        img = "https://via.placeholder.com/400/780/fff/?text=DOG";
    }
   
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
        console.log({name,breed,description,img});

        let {id,error} = await query({
            type: 'insert_animal',
            params: [sessionStorage.userId, name, breed, description, img]
        });
        
        if(error) throw(error);
        
        sessionStorage.animalId = id;
        history.go(-1);
        //$.mobile.navigate("#add-dog-location-page")
    }
    
}

const submitAnimalEdit = async () => {
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

        let {result,error} = await query({
            type: 'update_animal',
            params: [name, breed, description, sessionStorage.animalId]
        });
        
        if(error) throw(error);
        history.go(-1);        
    }   
}

const submitUserEdit = async () => {
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
        let {result,error} = await query({
            type: 'update_user',
            params: [name, age, description, sessionStorage.userId]
        });
        
        if(error) throw(error);
        //sessionStorage.animalId = $(this).data('id');
        //$.mobile.navigate("#user-profile-page-info")
        history.go(-1);
    }    
    console.log({name,age,description});
}

const submitPassword = async () => {
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
        let {result,error} = await query({
            type: 'update_password',
            params: [new_password, sessionStorage.userId]
        });
        if(error) throw(error);
        
        $("#change-password-success-message").html("Your Password has been updated!");
          $("#change-password-success-message").addClass("visible");
          $("#change-password-success-message").removeClass("no-display");
         
          // remove error message after some time
          setTimeout(function() {
            $("#change-password-success-message").addClass("no-display");
            $("#change-password-success-message").removeClass("visible");
          }, 4000); 
          history.go(-1);
    }       
    
}

const submitDeleteDog = async () => {
        let {result,error} = await query({
            type: 'delete_animal',
            params: [sessionStorage.animalId]
        });
        if(error) throw(error);
        $.mobile.navigate("#home-page");
}

const signup1 = async () => {
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
        let {id,error} = await query({
            type: 'insert_user1',
            params: [email, username, password]
        });  
        if(error){
            $("#signup1-error-message").html("Username or Email has been taken");
            $("#signup1-error-message").addClass("visible");
            $("#signup1-error-message").removeClass("no-display");    
            
            // remove error message after some time
            setTimeout(function() {
                $("#signup1-error-message").addClass("no-display");
                $("#signup1-error-message").removeClass("visible");
            }, 4000);                     
            throw(error);  
        } 
        //saving the values in local storage
        localStorage.setItem("emailValue", email);
        localStorage.setItem("userValue", username);
        localStorage.setItem("passValue", password);
        //$.mobile.navigate("#signup-page-part2");
        $.mobile.navigate("#signup-page-part2");
    }
}

const signup2 = async () => {

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

        //saving the values in local storage
        localStorage.setItem("fullnameValue", fullname);
        localStorage.setItem("ageValue", age);
        localStorage.setItem("descValue", description);
        
        //sessionStorage.userId = id;
        $.mobile.navigate("#signup-user-photo-page")
    }    
}

const signupImage = async () => {
    
    let email = localStorage.getItem("emailValue");
    let user = localStorage.getItem("userValue");
    let pass = localStorage.getItem("passValue");
    let fullname = localStorage.getItem("fullnameValue");
    let age = localStorage.getItem("ageValue");
    let description = localStorage.getItem("descValue");
    let img = $("#signup-user-photo-image").val();
    
    if(img === ""){
        img = "https://via.placeholder.com/400/780/fff/?text=USER";
    }
    
    console.log({email,user,pass,fullname,age,description,img});
        
    let {id,error} = await query({
        type: 'insert_user',
        params: [fullname, user, email, pass, age, description, img]
    });
        
    if(error) throw(error);
    
    $.mobile.navigate("#login-page");
}

const submitLocationAdd = async () => {
    let animal = $("#location-animal").val();
    let lat = $("#location-lat").val();
    let lng = $("#location-lng").val();
    let description = $("#location-description").val();
    
    if(description.length < 1){
        $("#description-error-message").html("Please fill out the Description.");
        $("#description-error-message").addClass("visible");
        $("#description-error-message").removeClass("no-display");    
            
        // remove error message after some time
        setTimeout(function() {
            $("#description-error-message").addClass("no-display");
            $("#description-error-message").removeClass("visible");
        }, 4000);                     
    } else {
        console.log(animal,lat,lng,description)
        let {result,error} = await query({
            type: 'insert_location',
            params: [animal, lat, lng, description]
        });    
        
        if(error) throw(error);
        history.go(+$("#location-start").val());        
    }
}


const submitLocationEdit = async () => {
    let description = $("#edit-location-description").val();
    if(description.length < 1){
        $("#edit-description-error-message").html("Please fill out the Description.");
        $("#edit-description-error-message").addClass("visible");
        $("#edit-description-error-message").removeClass("no-display");    
            
        // remove error message after some time
        setTimeout(function() {
            $("#description-error-message").addClass("no-display");
            $("#description-error-message").removeClass("visible");
        }, 4000);                     
    } else {
        console.log(description)
        let {result,error} = await query({
            type: 'update_location',
            params: [description, sessionStorage.locationId]
        });    
        
        if(error) throw(error);
        history.go(-1);        
    }    
    
}

const submitMapLocationEdit = async () => {
    let lat = $("#edit-location-lat").val();
    let lng = $("#edit-location-lng").val();
    
    let {result,error} = await query({
        type: 'update_map_location',
        params: [lat, lng, sessionStorage.locationId]
    });    
        
    if(error) throw(error);
    history.go(-1);     
    
}

const submitDeleteLocation = async () => {
        let {result,error} = await query({
            type: 'delete_location',
            params: [sessionStorage.locationId]
        });
        if(error) throw(error);
        $.mobile.navigate("#dog-profile-page-recent");    
}

const submitExistingDog = async () => {
    let animal = $("#existing-dog-select option:selected").val();
    $("#location-animal").val(animal);
    $("#location-start").val("-3");
    console.log(animal);
    //console.log($("#location-existing-animal").val());
    $.mobile.navigate("#add-dog-location-page");
}
