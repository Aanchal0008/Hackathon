document.getElementById('signup-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    alert('Signup successful! Redirecting to login...');
    window.location.href = 'login.html';
  });
  
  document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email === 'user@example.com' && password === 'password') {
      alert('Login successful! Redirecting to dashboard...');
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid email or password');
    }
  });
  
  document.getElementById('send-chat')?.addEventListener('click', () => {
    const userInput = document.getElementById('chat-input').value;
    document.getElementById('chat-response').innerText = `AI Bot: I have noted your query: "${userInput}"`;
  });
  
  document.getElementById('book-appointment')?.addEventListener('click', () => {
    const appointmentType = document.getElementById('appointment-type').value;
    document.getElementById('appointment-status').innerText = `Your ${appointmentType} appointment has been booked!`;
  });
  
  document.getElementById('logout')?.addEventListener('click', () => {
    alert('You have been logged out!');
    window.location.href = 'login.html';
  });
  