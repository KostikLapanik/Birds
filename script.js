document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const fact = document.querySelector('.fact');
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            const isCorrect = e.currentTarget.hasAttribute('correct');
            if (isCorrect) {
                e.currentTarget.classList.add('correct');
                fact.classList.remove('hidden');
            } else {
                e.currentTarget.classList.add('incorrect');
                document.querySelector('[correct]').classList.add('correct');
                fact.classList.remove('hidden');
            }
            options.forEach(option => {
                option.style.pointerEvents = 'none';
            });
        });
    });
});
