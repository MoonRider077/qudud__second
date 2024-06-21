document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plusButton = this.querySelector('.plus__button img');

            accordionButtons.forEach(btn => {
                if (btn !== this) {
                    btn.classList.add('collapsed');
                    const otherPlusButton = btn.querySelector('.plus__button img');
                    otherPlusButton.src = './assets/icons/Plus.svg';
                }
            });

            if (this.classList.contains('collapsed')) {
                this.classList.add('collapsed');
                plusButton.src = './assets/icons/Plus.svg';
            } else {
                this.classList.remove('collapsed');
                plusButton.src = './assets/icons/Minus.svg';
            }
        });
    });
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
