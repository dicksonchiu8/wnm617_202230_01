const checkLoginForm = () => {
   //let user = $("#signup-username").val();
   //let pass = $("#signup-password").val();
   let user = $("#login-username").val();
   let pass = $("#login-password").val();   

   console.log(user,pass)

   if (user === 'user' && pass === 'pass') {
      // logged in
      console.log('success');
      sessionStorage.userId = 3;
      $("#login-form")[0].reset();
   } else {
      // not logged in
      console.log('failure');
      
      // show error message
      $("#error-message").addClass("visible");
      $("#error-message").removeClass("hidden");
      
      sessionStorage.removeItem('userId');
      
      // remove error message after some time
      setTimeout(function() {
        $("#error-message").addClass("hidden");
        $("#error-message").removeClass("visible");
      }, 4000); 
     
   }

   checkUserId();
}

const checkUserId = () => {
   let p = ["#login-page","#signup-page",""];

   if (sessionStorage.userId === undefined) {
      // not logged in
      if(!p.some(o => o === window.location.hash))
         $.mobile.navigate("#login-page");
   } else {
      // logged in
      if(p.some(o => o === window.location.hash))
         $.mobile.navigate("#home-page");
   }
} 