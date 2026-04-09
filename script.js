// 1. Пошук
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const name = card.getAttribute('data-name');
        if (name.includes(filter)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
});

// 2. Купівля
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const pizzaName = button.parentElement.getAttribute('data-name');
        alert(`Ви успішно купили: ${pizzaName}!`);
    });
});