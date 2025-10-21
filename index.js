const cakesData = [
    {
        id: 1,
        title: "Шоколадний рай",
        price: 550,
        imageUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23D2691E'/%3E%3Ccircle cx='150' cy='100' r='60' fill='%23654321'/%3E%3Ctext x='150' y='110' text-anchor='middle' fill='white' font-size='16'%3E🍰%3C/text%3E%3C/svg%3E",
        weight: "1.2",
        category: 3,
        description: "Розкішний шоколадний торт з ніжним кремом та бельгійським шоколадом",
        rating: 9.5
    },
    {
        id: 2,
        title: "Полуничне диво",
        price: 480,
        imageUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23FFB6C1'/%3E%3Ccircle cx='150' cy='100' r='60' fill='%23FF1493'/%3E%3Ctext x='150' y='110' text-anchor='middle' fill='white' font-size='16'%3E🍓%3C/text%3E%3C/svg%3E",
        weight: "1.0",
        category: 1,
        description: "Літний торт з свіжими полуницями та вершковим муссом",
        rating: 9.2
    },
    {
        id: 3,
        title: "Ванільна класика",
        price: 420,
        imageUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23FFF8DC'/%3E%3Ccircle cx='150' cy='100' r='60' fill='%23F5DEB3'/%3E%3Ctext x='150' y='110' text-anchor='middle' fill='%23654321' font-size='16'%3E🍰%3C/text%3E%3C/svg%3E",
        weight: "1.1",
        category: 2,
        description: "Класичний ванільний торт для справжніх цінувальників традицій",
        rating: 8.8
    },
    {
        id: 4,
        title: "Лимонна свіжість",
        price: 390,
        imageUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23FFFACD'/%3E%3Ccircle cx='150' cy='100' r='60' fill='%23FFD700'/%3E%3Ctext x='150' y='110' text-anchor='middle' fill='%23654321' font-size='16'%3E🍋%3C/text%3E%3C/svg%3E",
        weight: "0.9",
        category: 1,
        description: "Освіжаючий лимонний торт з цитрусовим ароматом та лимонним кремом",
        rating: 8.9
    },
    {
        id: 5,
        title: "Тірамісу делюкс",
        price: 620,
        imageUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23D2B48C'/%3E%3Ccircle cx='150' cy='100' r='60' fill='%238B4513'/%3E%3Ctext x='150' y='110' text-anchor='middle' fill='white' font-size='16'%3E☕%3C/text%3E%3C/svg%3E",
        weight: "1.3",
        category: 3,
        description: "Італійський десерт з маскарпоне, савоярді та ароматною кавою",
        rating: 9.7
    },
    {
        id: 6,
        title: "Медовик особливий",
        price: 510,
        imageUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23DAA520'/%3E%3Ccircle cx='150' cy='100' r='60' fill='%23B8860B'/%3E%3Ctext x='150' y='110' text-anchor='middle' fill='white' font-size='16'%3E🍯%3C/text%3E%3C/svg%3E",
        weight: "1.4",
        category: 2,
        description: "Традиційний медовик з ніжним сметанним кремом та медовим ароматом",
        rating: 9.1
    },
    {
        id: 7,
        title: "Чорничний блюз",
        price: 460,
        imageUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%239370DB'/%3E%3Ccircle cx='150' cy='100' r='60' fill='%234B0082'/%3E%3Ctext x='150' y='110' text-anchor='middle' fill='white' font-size='16'%3E🧁%3C/text%3E%3C/svg%3E",
        weight: "1.0",
        category: 1,
        description: "Ніжний торт з лісовими чорницями та вершковим кремом",
        rating: 9.0
    },
    {
        id: 8,
        title: "Карамельний сон",
        price: 540,
        imageUrl: "data:image/svg+xml,%3Csvg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23DEB887'/%3E%3Ccircle cx='150' cy='100' r='60' fill='%23CD853F'/%3E%3Ctext x='150' y='110' text-anchor='middle' fill='white' font-size='16'%3E🍮%3C/text%3E%3C/svg%3E",
        weight: "1.2",
        category: 2,
        description: "Вишуканий торт з карамельним кремом та солоною карамеллю",
        rating: 9.3
    }
];

const appState = {
    currentCategory: 0,
    cartItems: [],
    currentPage: 'home',
    isSearching: false,
    searchQuery: ''
};

const dom = {
    homePage: null,
    cartPage: null,
    productPage: null,
    itemsContainer: null,
    cartContent: null,
    productDetails: null,
    cartTotal: null,
    cartCount: null,
    title: null,
    searchInput: null
};

document.addEventListener('DOMContentLoaded', initializeApp);

function showHome() {
    updatePageVisibility('home');
    appState.currentPage = 'home';
    displayItems();
}

function showCart() {
    updatePageVisibility('cart');
    appState.currentPage = 'cart';
    displayCart();
}

function showProduct(productId) {
    const product = cakesData.find(cake => cake.id === productId);
    if (product) {
        updatePageVisibility('product');
        appState.currentPage = 'product';
        displayProductPage(product);
        trackProductView(productId);
    }
}

function updatePageVisibility(activePage) {
    const pages = ['home', 'cart', 'product'];
    pages.forEach(page => {
        const element = dom[`${page}Page`];
        if (element) {
            element.classList.toggle('hidden', page !== activePage);
        }
    });
}

function setupSearchInput() {
    if (!dom.searchInput) return;

    dom.searchInput.addEventListener('input', handleSearchInput);
    dom.searchInput.addEventListener('keydown', handleSearchKeydown);

    dom.searchInput.addEventListener('focus', function() {
        if (this.value === 'Пошук...') {
            this.value = '';
        }
    });
}

function handleSearchInput(e) {
    const query = e.target.value.trim();
    appState.searchQuery = query;

    clearTimeout(appState.searchTimeout);
    appState.searchTimeout = setTimeout(() => {
        performSearch(query);
    }, 300);
}

function handleSearchKeydown(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        performSearch(e.target.value.trim());
    }
}

function performSearch(searchTerm) {
    if (!dom.itemsContainer) return;

    appState.isSearching = Boolean(searchTerm);

    if (!searchTerm) {
        displayItems();
        updateTitle();
        return;
    }

    const results = searchCakes(searchTerm);

    if (results.length === 0) {
        dom.itemsContainer.innerHTML = `
            <div class="no-results">
                <p>За запитом "${searchTerm}" нічого не знайдено</p>
                <button class="button button--primary" onclick="clearSearch()">Показати всі торти</button>
            </div>
        `;
        return;
    }

    dom.itemsContainer.innerHTML = results.map(createItemHTML).join('');
}

function searchCakes(searchTerm) {
    const term = searchTerm.toLowerCase();
    return cakesData.filter(cake =>
        cake.title.toLowerCase().includes(term) ||
        cake.description.toLowerCase().includes(term)
    );
}

function clearSearch() {
    if (dom.searchInput) {
        dom.searchInput.value = '';
    }

    appState.isSearching = false;
    appState.searchQuery = '';
    appState.currentCategory = 0;

    // Reset category selection
    document.querySelectorAll('.categories li').forEach(li => li.classList.remove('active'));
    const firstCategory = document.querySelector('.categories li');
    if (firstCategory) {
        firstCategory.classList.add('active');
    }

    displayItems();
    updateTitle();
    showHome();
}

function filterCategory(categoryId, element) {
    if (appState.isSearching) {
        clearSearch();
        return;
    }

    appState.currentCategory = categoryId;

    document.querySelectorAll('.categories li').forEach(li => li.classList.remove('active'));

    if (element) {
        element.classList.add('active');
    } else {
        const categoryItems = document.querySelectorAll('.categories li');
        if (categoryItems[categoryId]) {
            categoryItems[categoryId].classList.add('active');
        }
    }

    displayItems();
    updateTitle();

    // If called from footer, navigate to home
    if (!element) {
        showHome();
        scrollToTop();
    }
}

function updateTitle() {
    if (appState.isSearching) return;

    const titles = {
        0: "Всі торти",
        1: "Фруктові торти",
        2: "Ванільні торти",
        3: "Шоколадні торти"
    };

    if (dom.title) {
        dom.title.textContent = titles[appState.currentCategory] || "Всі торти";
    }
}

function displayItems() {
    if (!dom.itemsContainer) return;

    if (appState.isSearching) {
        performSearch(appState.searchQuery);
        return;
    }

    const filteredItems = appState.currentCategory === 0
        ? cakesData
        : cakesData.filter(item => item.category === appState.currentCategory);

    if (filteredItems.length === 0) {
        dom.itemsContainer.innerHTML = '<div class="no-items"><p>Торти не знайдено 😕</p></div>';
        return;
    }

    dom.itemsContainer.innerHTML = filteredItems.map(createItemHTML).join('');
}

function createItemHTML(item) {
    return `
        <div class="item-block-wrapper">
            <div class="item-block">
                <img class="item-block__image" 
                     src="${item.imageUrl}" 
                     alt="${item.title}" 
                     onclick="showProduct(${item.id})"
                     onerror="handleImageError(this)">
                <h4 class="item-block__title" onclick="showProduct(${item.id})">${item.title}</h4>
                <div class="item-block__weight">${item.weight} кг</div>
                <div class="item-block__bottom">
                    <div class="item-block__price-wrapper">
                        <div class="item-block__price">${item.price} грн</div>
                        <button onclick="addToCart(${item.id})" class="button button--outline button--add">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="currentColor"/>
                            </svg>
                            <span>Додати</span>
                            <i>${getItemCount(item.id)}</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function getSpecificationByCategory(category, type) {
    const specifications = {
        1: { // Фруктові
            base: 'Бісквітна з фруктовими нотками',
            filling: 'Свіжі фрукти та ягоди, легкий крем',
            decor: 'Свіжі ягоди, фруктові елементи'
        },
        2: { // Ванільні
            base: 'Класична ванільна бісквітна',
            filling: 'Ванільний крем, масло вершкове',
            decor: 'Ванільна глазур, декоративні елементи'
        },
        3: { // Шоколадні
            base: 'Шоколадна бісквітна з какао',
            filling: 'Шоколадний крем, горіхи',
            decor: 'Шоколадна глазур, какао-декор'
        }
    };

    const spec = specifications[category] || specifications[2];
    return spec[type] || 'Класичне оформлення';
}

function addToCart(productId) {
    const product = cakesData.find(cake => cake.id === productId);
    if (!product) return;

    const existingItem = appState.cartItems.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        appState.cartItems.push({
            id: productId,
            name: `Торт "${product.title}"`,
            price: product.price,
            quantity: 1
        });
    }

    updateCartUI();
    displayItems();
    showNotification(`${product.title} додано до кошика!`, 'success');
    trackAddToCart(productId, 1);
}

function removeFromCart(productId) {
    const itemIndex = appState.cartItems.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    appState.cartItems.splice(itemIndex, 1);
    updateCartUI();
    displayCart();
    displayItems();
    showNotification('Товар видалено з кошика', 'warning');
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }

    const item = appState.cartItems.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
        displayCart();
        displayItems();
    }
}

function getItemCount(productId) {
    const item = appState.cartItems.find(item => item.id === productId);
    return item ? item.quantity : 0;
}

function updateCartUI() {
    const total = appState.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = appState.cartItems.reduce((sum, item) => sum + item.quantity, 0);

    if (dom.cartTotal) dom.cartTotal.textContent = `${total} ₴`;
    if (dom.cartCount) dom.cartCount.textContent = totalItems;
}

function displayCart() {
    if (!dom.cartContent) return;

    if (appState.cartItems.length === 0) {
        dom.cartContent.innerHTML = createEmptyCartHTML();
        return;
    }

    const total = appState.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = appState.cartItems.reduce((sum, item) => sum + item.quantity, 0);

    dom.cartContent.innerHTML = createCartHTML(appState.cartItems, total, totalItems);
}

function createEmptyCartHTML() {
    return `
        <div class="cart--empty">
            <div class="empty-cart-icon">🛒</div>
            <h2>Кошик порожній</h2>
            <p>Схоже, ви ще не додали жодного смачного торта до свого кошика. Час це виправити!</p>
            <button class="button button--primary" onclick="showHome()">Обрати торт</button>
        </div>
    `;
}

function createCartHTML(items, total, totalItems) {
    return `
        <div class="cart__header">
            <span>Товар</span>
            <span>Кількість</span>
            <span>Ціна</span>
            <span>Сума</span>
            <span></span>
        </div>

        ${items.map(item => `
            <div class="cart__item">
                <div class="cart__item-info">
                    <h3>${item.name}</h3>
                </div>
                <div class="cart__item-quantity">
                    <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="button button--circle plus-btn">-</button>
                    <span>${item.quantity} шт.</span>
                    <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="button button--circle minus-btn">+</button>
                </div>
                <div class="cart__item-price">${item.price} грн</div>
                <div class="cart__item-total">
                    <b>${item.price * item.quantity} грн</b>
                </div>
                <div class="cart__item-remove">
                    <button onclick="removeFromCart(${item.id})" class="button button--circle">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9 9M1 9L9 1" stroke="#0d3b66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        `).join('')}

        <div class="cart__summary">
            <div class="cart__summary-row">
                <span>Усього товарів:</span>
                <b>${totalItems} шт.</b>
            </div>
            <div class="cart__summary-row total">
                <span>Сума замовлення:</span>
                <b>${total} грн</b>
            </div>
        </div>

        <div class="cart__actions">
            <button class="button button--back" onclick="showHome()">
                <svg width="10" height="10" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 7L7 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Повернутись назад
            </button>
            <button class="button button--primary" onclick="showOrderForm()">Оформити замовлення</button>
        </div>
    `;
}

function displayProductPage(product) {
    if (!dom.productDetails) return;

    const specifications = {
        base: getSpecificationByCategory(product.category, 'base'),
        filling: getSpecificationByCategory(product.category, 'filling'),
        decor: getSpecificationByCategory(product.category, 'decor')
    };

    dom.productDetails.innerHTML = createProductHTML(product, specifications);
}

function createProductHTML(product, specifications) {
    return `
        <h1 class="product-title">Торт "${product.title}" ${product.weight} кг</h1>

        <div class="product-image">
            <img src="${product.imageUrl}" alt="${product.title}" onerror="handleImageError(this)" />
        </div>

        <div class="price-badge">
            <span>Ціна: ${product.price} грн</span>
        </div>

        <div class="specifications">
            <h2>Характеристики торта</h2>
            <table>
                <tbody>
                    <tr><td>Вага</td><td>${product.weight} кг</td></tr>
                    <tr><td>Основа</td><td>${specifications.base}</td></tr>
                    <tr><td>Начинка</td><td>${specifications.filling}</td></tr>
                    <tr><td>Декор</td><td>${specifications.decor}</td></tr>
                    <tr><td>Рейтинг</td><td>⭐ ${product.rating}/10</td></tr>
                    <tr><td>Термін зберігання</td><td>48 годин (в холодильнику)</td></tr>
                </tbody>
            </table>
        </div>

        <div class="product-description">
            <h2>Опис торта "${product.title}"</h2>
            <p>${product.description}</p>
        </div>

        <div class="product-features">
            <div class="feature-block">
                <h3>🏆 Переваги</h3>
                <ul>
                    <li>Використання натуральних інгредієнтів</li>
                    <li>Індивідуальний дизайн</li>
                    <li>Без штучних барвників</li>
                    <li>Свіжа випічка щодня</li>
                </ul>
            </div>

            <div class="feature-block">
                <h3>⭐ Рейтинг</h3>
                <div class="rating">${product.rating || 9.0}/10 (127 відгуків)</div>
            </div>
        </div>

        <div class="order-notice">
            <p>* Замовлення приймаються за 3 дні до дати отримання.<br>* Можливість індивідуального оформлення.</p>
        </div>

        <div class="cart__actions" style="margin-top: 30px;">
            <button class="button button--back" onclick="showHome()">
                <svg width="10" height="10" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 7L7 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Повернутись назад
            </button>
            <button class="button button--primary" onclick="addToCart(${product.id})">
                Додати в кошик
            </button>
        </div>
    `;
}

function showOrderForm() {
    if (appState.cartItems.length === 0) {
        showNotification('Ваш кошик порожній! Додайте товари перед оформленням замовлення.', 'warning');
        return;
    }

    const total = appState.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = appState.cartItems.reduce((sum, item) => sum + item.quantity, 0);

    if (dom.cartContent) {
        dom.cartContent.innerHTML = createOrderFormHTML(appState.cartItems, total, totalItems);
    }
}

function createOrderFormHTML(items, total, totalItems) {
    return `
        <div class="checkout-container">
            <div class="checkout-header">
                <h1>Оформити замовлення</h1>
            </div>
            
            <div class="checkout-content">
                <div class="cart-items-table">
                    <div class="table-header">
                        <span class="column product">Товар</span>
                        <span class="column quantity">Кількість</span>
                        <span class="column price">Ціна</span>
                        <span class="column total">Сума</span>
                    </div>
                    
                    ${items.map(item => `
                        <div class="table-row">
                            <span class="column product">${item.name}</span>
                            <span class="column quantity">${item.quantity} шт.</span>
                            <span class="column price">${item.price} грн</span>
                            <span class="column total">${item.price * item.quantity} грн</span>
                        </div>
                    `).join('')}
                    
                    <div class="table-footer">
                        <div class="total-row">
                            <span>Усього товарів:</span>
                            <span>${totalItems} шт.</span>
                        </div>
                        <div class="total-row">
                            <span>Сума замовлення:</span>
                            <span class="total-amount">${total} грн</span>
                        </div>
                    </div>
                </div>
                
                <div class="delivery-details">
                    <h2>Деталі доставки</h2>
                    <p class="required-fields">* Всі поля мають бути заповнені</p>
                    
                    <form class="delivery-form" onsubmit="submitOrder(event)">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Ім'я*</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="city">Місто*</label>
                                <input type="text" id="city" name="city" required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="surname">Прізвище*</label>
                                <input type="text" id="surname" name="surname" required>
                            </div>
                            <div class="form-group">
                                <label for="address">Адреса*</label>
                                <input type="text" id="address" name="address" required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="email">E-mail*</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="postalCode">Поштовий індекс*</label>
                                <input type="text" id="postalCode" name="postalCode" required>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone">Телефон*</label>
                                <input type="tel" id="phone" name="phone" required>
                            </div>
                            <div class="form-group">
                                <label for="comments">Коментарі до замовлення</label>
                                <textarea id="comments" name="comments" rows="3" placeholder="Додаткові побажання..."></textarea>
                            </div>
                        </div>
                        
                        <div class="form-actions">
                            <button type="button" class="back-button" onclick="showCart()">Повернутись назад</button>
                            <button type="submit" class="order-button">Замовити!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function submitOrder(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const orderData = Object.fromEntries(formData.entries());

    // Validate required fields
    const requiredFields = ['name', 'surname', 'email', 'phone', 'city', 'address', 'postalCode'];
    const emptyFields = requiredFields.filter(field => !orderData[field]?.trim());

    if (emptyFields.length > 0) {
        showNotification(`Будь ласка, заповніть всі обов'язкові поля`, 'error');
        return;
    }

    // Validate email
    if (!isValidEmail(orderData.email)) {
        showNotification('Будь ласка, введіть коректну електронну адресу', 'error');
        return;
    }

    // Validate phone
    if (!isValidPhone(orderData.phone)) {
        showNotification('Будь ласка, введіть коректний номер телефону', 'error');
        return;
    }

    if(!isValidPostalCode(orderData.postalCode)) {
        showNotification('Будь ласка, введіть коректний поштовий індекс', 'error');
        return;
    }

    if(!isValidTextualField(orderData.name)) {
        showNotification('Будь ласка, введіть коректне ім\'я', 'error');
        return;
    }

    if(!isValidTextualField(orderData.surname)) {
        showNotification('Будь ласка, введіть коректне прізвище', 'error');
        return;
    }

    if(!isValidTextualField(orderData.city)) {
        showNotification('Будь ласка, введіть коректне місто', 'error');
        return;
    }


    const total = appState.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Process order
    showNotification(`Дякуємо за замовлення, ${orderData.name}! Замовлення на суму ${total} грн оформлено успішно. Ми зв'яжемося з вами найближчим часом.`, 'success');

    trackPurchase(orderData, total);

    // Clear cart and return to home
    appState.cartItems = [];
    updateCartUI();
    showHome();
}

// Validation functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/;
    return phoneRegex.test(phone);
}

function isValidPostalCode(postalCode) {
    const postalCodeRegex = /^\d{5}$/;
    return postalCodeRegex.test(postalCode);
}

function isValidTextualField(text) {
    const textRegex = /^[А-Яа-яІіЇїЄєA-Za-z]+$/;
    return textRegex.test(text);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;

    const styles = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '5px',
        color: 'white',
        zIndex: '1000',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease',
        maxWidth: '350px',
        wordWrap: 'break-word',
        fontSize: '14px'
    };

    Object.assign(notification.style, styles);

    // Set background color based on type
    const bgColors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#0d3b66'
    };

    notification.style.background = bgColors[type] || bgColors.info;
    if (type === 'warning') notification.style.color = '#333';

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    });

    // Animate out and remove
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function handleImageError(img) {
    img.src = "data:image/svg+xml,%3Csvg viewBox='0 0 300 200' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='200' fill='%23f8f9fa'/%3E%3Ctext x='150' y='100' text-anchor='middle' fill='%23666' font-size='16'%3EЗображення недоступне%3C/text%3E%3C/svg%3E";
}

function trackEvent(eventName, data) {
    console.log('Event tracked:', eventName, data);
}

function trackProductView(productId) {
    trackEvent('product_view', { product_id: productId });
}

function trackAddToCart(productId, quantity) {
    trackEvent('add_to_cart', { product_id: productId, quantity: quantity });
}

function trackPurchase(orderData, total) {
    trackEvent('purchase', { order_data: orderData, total: total });
}

function cacheDOMElements() {
    dom.homePage = document.getElementById('home-page');
    dom.cartPage = document.getElementById('cart-page');
    dom.productPage = document.getElementById('product-page');
    dom.itemsContainer = document.getElementById('items-container');
    dom.cartContent = document.getElementById('cart-content');
    dom.productDetails = document.getElementById('product-details');
    dom.cartTotal = document.getElementById('cart-total');
    dom.cartCount = document.getElementById('cart-count');
    dom.searchInput = document.getElementById('search__input');
    dom.title = document.querySelector('.content__title');

}

function initializeApp() {
    cacheDOMElements();

    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    displayItems();
    updateCartUI();
    updateTitle();

    document.addEventListener('keydown', handleKeyboardShortcuts);

    console.log('Cake shop application initialized successfully');
}

function handleKeyboardShortcuts(e) {
    if (e.key === 'Escape') {
        showHome();
    }
}

