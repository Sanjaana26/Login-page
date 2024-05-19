$(document).ready(function() {
  $('#loginForm').submit(function(e) {
      e.preventDefault();
      const email = $('#login-email').val();
      const password = $('#login-password').val();

      const userData = JSON.parse(localStorage.getItem(email));
      if (userData && userData.password === password) {
          window.location.href = 'profile.html?email=' + encodeURIComponent(email);
      } else {
          alert('Invalid email or password.');
      }
  });
});
