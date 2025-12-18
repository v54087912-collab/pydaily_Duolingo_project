document.addEventListener('DOMContentLoaded', () => {
    // 1. Target Elements
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    const startLearningBtn = document.querySelector('button.bg-primary');
    const signUpGoogleBtn = document.querySelector('button:has(svg)');
    const loginLink = document.querySelector('a[href="#"]'); // "Log in" in header
    const backButton = document.querySelector('button > span.material-symbols-outlined').parentElement; // arrow_back_ios_new
    const passwordToggleBtn = document.querySelector('button[type="button"]'); // visibility_off btn
    const errorMsgs = document.querySelectorAll('.text-red-400'); // Error Placeholders

    // 2. Navigation
    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = '../login_screen/code.html';
        });
    }

    if (loginLink) {
        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '../login_screen/code.html';
        });
    }

    if (signUpGoogleBtn) {
        signUpGoogleBtn.addEventListener('click', () => {
             // Mock Google signup -> Dashboard
             window.location.href = '../home_dashboard_3/code.html';
        });
    }

    // 3. Password Toggle
    if (passwordToggleBtn && passwordInputs[0]) {
        passwordToggleBtn.addEventListener('click', () => {
            const isPassword = passwordInputs[0].type === 'password';
            passwordInputs.forEach(input => {
                input.type = isPassword ? 'text' : 'password';
            });
            const icon = passwordToggleBtn.querySelector('span');
            if (icon) {
                icon.textContent = isPassword ? 'visibility' : 'visibility_off';
            }
        });
    }

    // 4. Form Validation & Submission
    if (startLearningBtn) {
        startLearningBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let isValid = true;

            // Hide all errors first
            errorMsgs.forEach(el => el.classList.add('hidden'));

            const email = emailInput.value.trim();
            const pass1 = passwordInputs[0].value;
            const pass2 = passwordInputs[1].value;

            // Simple Email Validation
            if (!email || !email.includes('@')) {
                // Assuming the first error message corresponds to email
                if (errorMsgs[0]) errorMsgs[0].classList.remove('hidden');
                isValid = false;
            }

            // Password Length Validation
            if (pass1.length < 8) {
                if (errorMsgs[1]) errorMsgs[1].classList.remove('hidden');
                isValid = false;
            }

            // Password Match Validation
            if (pass1 !== pass2) {
                 if (errorMsgs[2]) errorMsgs[2].classList.remove('hidden');
                 isValid = false;
            }

            if (isValid) {
                window.location.href = '../home_dashboard_3/code.html';
            }
        });
    }
});
