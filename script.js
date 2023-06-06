document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var rememberMe = document.getElementById('rememberMe').checked;
  
    // Perform validation
    if (username === 'admin' && password === 'password') {
      if (rememberMe) {
        // Store username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        // Clear stored username and password from localStorage
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }
      alert('Login successful!');
      // Redirect to dashboard.html
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid username or password!');
    }
  });
  
  // Check if rememberMe checkbox was previously checked
  if (localStorage.getItem('username') && localStorage.getItem('password')) {
    document.getElementById('username').value = localStorage.getItem('username');
    document.getElementById('password').value = localStorage.getItem('password');
    document.getElementById('rememberMe').checked = true;
  }
  
  document.getElementById('forgotLink').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    alert('Please contact the administrator to reset your username/password.');
  });
  

  document.getElementById('nextButton').addEventListener('click', function() {
    window.location.href = 'page2.html';
  });
  
  document.getElementById('page-3').addEventListener('click', function() {
    window.location.href = 'page3.html';
  });

 document.getElementById('inputPassword').addEventListener('click',function(e){
  alert('thank you!')
 })
  