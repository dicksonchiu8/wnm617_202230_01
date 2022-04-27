
$(() => {
    
    // EVENT DELEGATION
    $(document)
    
    .on("pagecontainerbeforeshow", function(event, ui){
        console.log(ui.toPage[0].id);
        
        // PAGE ROUTING
        switch(ui.toPage[0].id){
            case "home-page": HomePage(); break;
            case "add-dog-page": AddDogPage(); break;
            case "user-profile-page-info": UserProfilePage(); break;
            case "user-profile-page-recent": UserProfilePageRecent();UserProfilePageRecentPins(); break;
            case "dog-profile-page-info": DogProfilePage(); break;
            case "dog-profile-page-recent": DogProfilePageRecent(); break;
            case "edit-user-page": EditUserPage(); break;
            case "edit-dog-page": EditDogPage(); break;

        }
    })
        
    
    
    // FORM SUBMISSIONS
    .on("submit", "#login-form", function(e){
        e.preventDefault();
        console.log(e);
        checkLoginForm();
    })
    
    // CLICK FORM SUBMISSION
    .on("click", ".js-submit-dog-add", function(){
        submitAnimalAdd();
    })
    
    .on("click", ".js-submit-dog-edit", function(){
        submitAnimalEdit();
    })
    
    .on("click", ".js-submit-user-edit", function(){
        submitUserEdit();
    })
    
    
    // CLICKS
    .on("click", ".js-logout", function() {
      sessionStorage.removeItem("userId");
      checkUserId();
   })
   
    .on("click", ".js-animal-jump", function() {
        try{
            sessionStorage.animalId = $(this).data('id');
            $.mobile.navigate("#dog-profile-page-info")
        } catch(e){
            throw("No id detected")
        }
   })   
   
   
   
   $(".test").css({ 'margin' : '0' });
});