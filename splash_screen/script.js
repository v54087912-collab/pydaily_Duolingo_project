document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.bg-primary.shadow-\\[0_0_12px_rgba\\(48\\,232\\,122\\,0\\.6\\)\\]');
    const loadingText = document.querySelector('.text-primary\\/80');

    if (progressBar) {
        // Start animation
        progressBar.style.width = '0%';
        progressBar.style.transition = 'width 2s ease-in-out';

        // Force reflow
        progressBar.offsetHeight;

        // Animate to full width
        setTimeout(() => {
            progressBar.style.width = '100%';
        }, 100);

        // Animate text dots
        let dots = 0;
        const interval = setInterval(() => {
            dots = (dots + 1) % 4;
            if (loadingText) {
                loadingText.textContent = '.'.repeat(dots);
            }
        }, 500);

        // Redirect after animation
        setTimeout(() => {
            clearInterval(interval);
            window.location.href = '../login_screen/code.html';
        }, 2500);
    }
});
