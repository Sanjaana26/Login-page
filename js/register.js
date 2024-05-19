$(document).ready(function() {
  $('#registerForm').submit(function(e) {
      e.preventDefault();
      const email = $('#register-email').val();
      const password = $('#register-password').val();
      const age = $('#register-age').val();
      const dob = $('#register-dob').val();
      const contact = $('#register-contact').val();

      const userData = {
          email: email,
          password: password,
          age: age,
          dob: dob,
          contact: contact
      };

      localStorage.setItem(email, JSON.stringify(userData));
      alert('Registration successful! You can now log in.');
      window.location.href = 'login.html';
  });
});
