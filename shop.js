const carousel=document.querySelector('.carousel-inner');
carousel.addEventListener('mouseover',()=>{
carousel.classList.add('bulge');
})

// Add event listener to the login form
$('#loginForm').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
    var rememberMe = $('#rememberMe').is(':checked');
    
    // TO DO: Add your login logic here
    console.log('Login form submitted:', email, password, rememberMe);
  });