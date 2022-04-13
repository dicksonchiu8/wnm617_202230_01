const checkLoginForm = async() => {
   //let user = $("#signup-username").val();
   //let pass = $("#signup-password").val();
   let user = $("#login-username").val();
   let pass = $("#login-password").val();  
   
   let founduser = await query({
       type:'check_signin',
       params: [user,pass]
       
   })
  
   console.log(user,pass)

   if (founduser.result.length > 0) {
      // logged in
      console.log('success');
      sessionStorage.userId = founduser.result[0].id;
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