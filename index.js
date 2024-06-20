document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plusButton = this.querySelector('.plus__button p');

            accordionButtons.forEach(btn => {
                if (btn !== this) {
                    btn.classList.add('collapsed');
                    const otherPlusButton = btn.querySelector('.plus__button p');
                    otherPlusButton.textContent = '+';
                }
            });

            if (this.classList.contains('collapsed')) {
                this.classList.add('collapsed');
                plusButton.textContent = '+';
            } else {
                this.classList.remove('collapsed');
                plusButton.textContent = '-';
            }
        });
    });
});
