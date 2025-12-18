document.addEventListener('DOMContentLoaded', () => {
    // 1. Target Elements
    const closeBtn = document.querySelector('header button');
    const continueBtn = document.querySelector('div.fixed.bottom-0 button');

    // 2. Navigation
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            window.location.href = '../home_dashboard_3/code.html';
        });
    }

    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
             // Go to Quiz
             window.location.href = '../quiz_screen/code.html';
        });
    }

    // Optional: Interactive "Explain Again" button logic
    const explainAgainBtn = document.querySelector('button.group.flex');
    if (explainAgainBtn) {
        explainAgainBtn.addEventListener('click', () => {
            alert('AI Tutor is analyzing... (This is a mock feature)');
        });
    }
});
