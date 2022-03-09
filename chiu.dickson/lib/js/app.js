
$(() => {
    
    // EVENT DELEGATION
    $(document)
    
    // FORM SUBMISSIONS
    .on("submit", "#signin-form", function(e){
        e.preventDefault();
        console.log(e);
        checkLoginForm();
    })
    
    // CLICKS
});