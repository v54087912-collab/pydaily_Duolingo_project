document.addEventListener('DOMContentLoaded', () => {
    // 1. Target Elements
    const options = document.querySelectorAll('input[name="quiz-answer"]');
    const submitBtn = document.querySelector('button.w-full');
    const closeBtn = document.querySelector('header button');
    const questionText = document.querySelector('div.mb-6 > p'); // To display feedback if needed

    // Correct answer for print(x[-1]) where x = [1, 2, 3] is '3'.
    // In HTML: Option 2 value="3"
    const CORRECT_ANSWER = '3';

    // 2. Selection Logic (Visual Update)
    options.forEach(option => {
        option.addEventListener('change', () => {
            // Reset all labels to unselected state
            options.forEach(opt => {
                const label = opt.closest('label');
                const radioCircle = label.querySelector('div.rounded-full');
                const checkmark = label.querySelector('.material-symbols-outlined');

                // Remove selected styles
                label.classList.remove('border-primary', 'bg-primary/5', 'dark:bg-primary/10');
                label.classList.add('border-gray-200', 'dark:border-[#3e3226]', 'hover:bg-gray-50', 'dark:hover:bg-[#2c241b]');

                // Update circle
                radioCircle.classList.remove('border-primary', 'bg-primary', 'shadow-sm', 'shadow-primary/30');
                radioCircle.classList.add('border-gray-300', 'dark:border-gray-500');
                radioCircle.querySelector('div').classList.remove('opacity-100');
                radioCircle.querySelector('div').classList.add('opacity-0'); // or use peer-checked logic if rely on CSS

                // Remove checkmark if exists
                if (checkmark) checkmark.remove();
            });

            // Add selected styles to current
            const label = option.closest('label');
            const radioCircle = label.querySelector('div.rounded-full');

            label.classList.remove('border-gray-200', 'dark:border-[#3e3226]', 'hover:bg-gray-50', 'dark:hover:bg-[#2c241b]');
            label.classList.add('border-primary', 'bg-primary/5', 'dark:bg-primary/10');

            radioCircle.classList.remove('border-gray-300', 'dark:border-gray-500');
            radioCircle.classList.add('border-primary', 'bg-primary', 'shadow-sm', 'shadow-primary/30');
            radioCircle.querySelector('div').classList.remove('opacity-0');
            radioCircle.querySelector('div').classList.add('opacity-100');

            // Add checkmark
            if (!label.querySelector('.material-symbols-outlined')) {
                const check = document.createElement('span');
                check.className = 'material-symbols-outlined text-primary';
                check.textContent = 'check_circle';
                label.appendChild(check);
            }
        });
    });

    // 3. Submit Logic
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const selected = document.querySelector('input[name="quiz-answer"]:checked');
            if (!selected) {
                alert('Please select an answer!');
                return;
            }

            if (selected.value === CORRECT_ANSWER) {
                // Correct!
                alert('Correct! Well done.');
                // Redirect back to Home (completed)
                window.location.href = '../home_dashboard_3/code.html';
            } else {
                // Incorrect
                alert('Incorrect. Try again!');
            }
        });
    }

    // 4. Close Logic
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            window.location.href = '../home_dashboard_3/code.html';
        });
    }
});
