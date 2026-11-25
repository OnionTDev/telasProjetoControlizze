document.addEventListener('DOMContentLoaded', () => {
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.querySelector('.btn-toggle-password');

  if (passwordInput && togglePasswordBtn) {
    togglePasswordBtn.addEventListener('click', () => {
      togglePasswordBtn.classList.add('is-blinking');

      setTimeout(() => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';

        togglePasswordBtn.classList.toggle('is-visible', isPassword);
        togglePasswordBtn.classList.remove('is-blinking');
      }, 120);
    });
  }
});
