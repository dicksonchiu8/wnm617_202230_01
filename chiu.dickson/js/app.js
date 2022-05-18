
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
            case "add-dog-location-page": AddDogLocation(); break;
            case "map-page": MapPage(); makeFilterList(); addMostRecent(); break;
            case "add-location-page": makeExistingFilterList(); break;
            case "user-edit-photo-page": UserEditPhotoPage(); break;
            case "animal-edit-photo-page": AnimalEditPhotoPage(); break;            

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
    
    .on("click", ".js-submit-password", function(){
        submitPassword();
    })

    .on("click", ".js-submit-signup-part1", function(){
        signup1();
    })
    
    .on("click", ".js-submit-signup-part2", function(){
        signup2();
    })
    
    .on("click", ".js-submit-user-signup-upload", function(e){
        signupImage();
    })   

    .on("click", ".js-delete-dog", function(){
        submitDeleteDog();
    })
    
    .on("click", ".js-submit-location-add", function(e){
        submitLocationAdd();
    })
    
    .on("click", ".js-choose-animal-location", function(e){
        $("#location-animal").val(sessionStorage.animalId);
        console.log($("#location-animal").val());
    })
    
    .on("click", ".js-check-filter", function(e){
        checkFilter();
    })
    
    .on("click", ".js-add-dog-location", function(e){
        submitExistingDog();
    })
    
   .on("change",".imagepicker input", function(e){
      checkUpload(this.files[0])
      .then(d=>{
         console.log(d)
         let filename = `uploads/${d.result}`;
         console.log(filename)
         $(this).parent().prev().val(filename)
         $(this).parent().css({
            "background-image":`url(${filename})`
         })
      })
   })
   
    .on("change",".take-photo input", function(e){
      checkUpload(this.files[0])
      .then(d=>{
         console.log(d)
         let filename = `uploads/${d.result}`;
         console.log(filename)
         $(this).parent().prev().val(filename)
         $(this).parent().css({
            "background-image":`url(${filename})`
         })
      })
   })
   .on("click", ".js-submit-user-upload", function(e) {
      let image = $("#user-edit-photo-image").val();
      query({
         type: "update_user_image",
         params: [image, sessionStorage.userId]
      }).then(d=>{
         if(d.error) throw(d.error);
         history.go(-1);
      })
   })
   .on("click", ".js-submit-animal-upload", function(e) {
      let image = $("#animal-edit-photo-image").val();
      query({
         type: "update_animal_image",
         params: [image, sessionStorage.animalId]
      }).then(d=>{
         if(d.error) throw(d.error);
         history.go(-1);
      })
   })
 
    
    
       // ACTIVATE TOOLS
   .on("click", "[data-activate]", function() {
      let target = $(this).data("activate");
      $(target).addClass("active")
   })
   .on("click", "[data-deactivate]", function() {
      let target = $(this).data("deactivate");
      $(target).removeClass("active")
   })
   .on("click", "[data-toggle]", function() {
      let target = $(this).data("toggle");
      $(target).toggleClass("active")
   })
   .on("click", "[data-activateone]", function() {
      let target = $(this).data("activateone");
      $(target).addClass("active")
         .siblings().removeClass("active")
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