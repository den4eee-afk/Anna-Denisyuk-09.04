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

let cart = [];
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// 1. Додавання в кошик
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const name = card.getAttribute('data-name');
        const price = parseInt(button.innerText); // Беремо число з кнопки "189 грн"

        cart.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `<span>${item.name}</span> <span>${item.price} грн</span>`;
        cartItemsContainer.appendChild(itemDiv);
    });

    totalPriceElement.innerText = total;
}

// 2. Логіка модального вікна
const modal = document.getElementById('payment-modal');
const checkoutBtn = document.getElementById('checkout-btn');
const closeBtn = document.getElementById('close-modal');
const confirmBtn = document.getElementById('confirm-payment');
const cardInput = document.getElementById('card-number');

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Кошик порожній!");
        return;
    }
    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

confirmBtn.addEventListener('click', () => {
    if (cardInput.value.trim() === "") {
        alert("Помилка: Заповніть поле!");
    } else {
        alert(`Ви успішно купили товарів на суму ${totalPriceElement.innerText} грн! Дякуємо!`);
        cart = []; // Очищуємо кошик
        updateCart();
        cardInput.value = "";
        modal.style.display = 'none';
    }
});

const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCartBtn = document.getElementById('close-cart');
const cartCount = document.getElementById('cart-count');

// Відкрити кошик при кліку на іконку
cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('open');
});

// Закрити кошик при кліку на хрестик
closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// У функцію updateCartUI обов'язково додай цей рядок в кінці:
function updateCartUI() {
    // ... твій код створення списку товарів ...
    
    // Оновлюємо лічильник на іконці
    cartCount.innerText = cart.length;
}
