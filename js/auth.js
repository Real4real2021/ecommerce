document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm'); 
    const loginForm = document.getElementById('loginForm'); 
    const dashboardLink = document.getElementById('dashboardLink'); 
  
    if (registerForm) {
      registerForm.addEventListener('submit', handleRegistration);
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
    }
  
    checkLoginStatus(); 
  });
  
  function handleRegistration(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('regPassword').value;
    const isMerchant = document.getElementById('isMerchant').checked; 
  
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({ username, email, password, isMerchant }); 
    localStorage.setItem('users', JSON.stringify(users));
  
    localStorage.setItem('currentUser', JSON.stringify({ username, email, isMerchant }));
  
    window.location.href = 'index.html';
  }
  
  function handleLogin(event) {
    event.preventDefault();
    
    const identifier = document.getElementById('identifier').value; 
    const password = document.getElementById('password').value;
  
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    
    const user = users.find(u => u.username === identifier || u.email === identifier);
  
    
    if (user && user.password === password) {
      
      localStorage.setItem('currentUser', JSON.stringify(user));
  
      
      if (user.isMerchant) {
        window.location.href = 'dashboard.html'; 
      } else {
        window.location.href = 'index.html'; 
      }
    } else {
      
      alert('Invalid username/email or password.');
    }
  }
  
  function checkLoginStatus() {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const merchantMenu = document.getElementById('merchant-menu');
      const userMenu = document.getElementById('user-menu');
      const authMenu = document.getElementById('auth-menu');
  
      if (currentUser) {
          
          if (currentUser.isMerchant) {
              if (merchantMenu) merchantMenu.style.display = 'block';
              if (userMenu) userMenu.style.display = 'none';
          } else {
              
              if (userMenu) userMenu.style.display = 'block';
              if (merchantMenu) merchantMenu.style.display = 'none';
          }
          if (authMenu) authMenu.style.display = 'none';
      } else {
          
          if (authMenu) authMenu.style.display = 'block';
          if (userMenu) userMenu.style.display = 'none';
          if (merchantMenu) merchantMenu.style.display = 'none';
      }
  }
  
  function logout() {
    localStorage.removeItem('currentUser');
    checkLoginStatus(); 
    window.location.href = 'index.html'; 
  }