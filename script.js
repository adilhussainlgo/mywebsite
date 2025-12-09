// Small JS for footer year and local form handling
document.addEventListener('DOMContentLoaded', function(){
  // Set current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Profile link placeholder
  const profileLink = document.getElementById('profileLink');
  if (profileLink) {
    profileLink.textContent = 'Add your GitHub / LinkedIn';
    profileLink.href = '#';
  }

  // Simple local form handler (no server)
  const form = document.getElementById('messageForm');
  if (form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const message = document.getElementById('message').value.trim();
      const payload = { name, message, time: new Date().toISOString() };

      // Store in localStorage (for demo)
      const messages = JSON.parse(localStorage.getItem('messages') || '[]');
      messages.push(payload);
      localStorage.setItem('messages', JSON.stringify(messages));

      console.log('Saved message (localStorage):', payload);
      alert('Message saved locally. Check console or localStorage.');
      form.reset();
    });
  }
});
