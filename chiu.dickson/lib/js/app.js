
$(() => {
    
    // EVENT DELEGATION
    $(document)
    
    // FORM SUBMISSIONS
    .on("submit", "#login-form", function(e){
        e.preventDefault();
        console.log(e);
        checkLoginForm();
    })
    
    // CLICKS
    .on("click", ".js-logout", function() {
      sessionStorage.removeItem("userId");
      checkUserId();
   })
});