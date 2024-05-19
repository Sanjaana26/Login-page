$(document).ready(function() {
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email');

  if (email) {
      const userData = JSON.parse(localStorage.getItem(email));
      if (userData) {
          $('#profile-email').val(userData.email);
          $('#profile-age').val(userData.age);
          $('#profile-dob').val(userData.dob);
          $('#profile-contact').val(userData.contact);
      } else {
          alert('User not found.');
          window.location.href = 'login.html';
      }
  } else {
      alert('No user specified.');
      window.location.href = 'login.html';
  }

  $('#profileForm').submit(function(e) {
      e.preventDefault();
      const age = $('#profile-age').val();
      const dob = $('#profile-dob').val();
      const contact = $('#profile-contact').val();

      const userData = JSON.parse(localStorage.getItem(email));
      userData.age = age;
      userData.dob = dob;
      userData.contact = contact;

      localStorage.setItem(email, JSON.stringify(userData));
      alert('Profile updated successfully!');
  });
});
