document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.invitation-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Here you can add functionality to show a modal with more details
            alert('More details about ' + card.querySelector('h2').innerText);
        });
    });
});
