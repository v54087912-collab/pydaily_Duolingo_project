document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  // Find the button within the same container
  const toggleButton = passwordInput ? passwordInput.parentElement.querySelector('button') : null;

  if (passwordInput && toggleButton) {
    toggleButton.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      const newType = isPassword ? 'text' : 'password';

      // Toggle input type
      passwordInput.setAttribute('type', newType);

      // Toggle icon
      const icon = toggleButton.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = isPassword ? 'visibility' : 'visibility_off';
      }

      // Update ARIA label
      toggleButton.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
  }
});
