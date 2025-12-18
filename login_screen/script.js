document.addEventListener('DOMContentLoaded', () => {
    // 1. Target Elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const startLearningBtn = document.querySelector('button:has(span.material-symbols-outlined[class*="visibility_off"]) + div + div + button') || Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Start Learning'));
    const forgotPasswordLink = document.querySelector('a[href="#"]'); // "Forgot Password?"
    const signUpLink = document.querySelector('p.text-text-muted > a');
    const backButton = document.querySelector('button.rounded-full > span.material-symbols-outlined').parentElement;
    const passwordToggleBtn = document.querySelector('button.absolute.right-6');
    const continueGoogleBtn = document.querySelector('button:has(svg)');
    const errorMsg = document.querySelector('.text-red-400');

    // 2. Navigation Logic
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }

    if (signUpLink) {
        signUpLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '../signup_screen/code.html';
        });
    }

    if (continueGoogleBtn) {
        continueGoogleBtn.addEventListener('click', () => {
             // Mock Google login -> Dashboard
            window.location.href = '../home_dashboard_3/code.html';
        });
    }

    // Forgot Password Mock
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Reset password link sent to your email!');
        });
    }

    // 3. Password Toggle Logic
    if (passwordToggleBtn && passwordInput) {
        passwordToggleBtn.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            const icon = passwordToggleBtn.querySelector('span');
            if (icon) {
                icon.textContent = isPassword ? 'visibility' : 'visibility_off';
            }
        });
    }

    // 4. Form Submission Logic
    if (startLearningBtn) {
        startLearningBtn.addEventListener('click', (e) => {
            e.preventDefault();

            // Simple validation
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (email && password) {
                 // Success: Redirect to Dashboard
                 if (errorMsg) errorMsg.classList.add('hidden');
                 window.location.href = '../home_dashboard_3/code.html';
            } else {
                // Error
                if (errorMsg) {
                    errorMsg.classList.remove('hidden');
                    errorMsg.textContent = 'Please enter both email and password.';
                }
            }
        });
    }
});
