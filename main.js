document.querySelectorAll(".carousel").forEach(carousel => {

    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel__button"></span>`;
    });

    carousel.insertAdjacentHTML("beforeend",`
    <div class="carousel__nav">
        ${ buttonsHtml.join("") }
    `);

    const buttons = carousel.querySelectorAll(".carousel__button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach (item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selected" ));

            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
        });

    });

    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
});

function filterProducts(category) {
    const categories = document.querySelectorAll('.categories a');
    categories.forEach(cat => {
        cat.classList.remove('active');
    });

    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productCategory = product.dataset.category;
        if (category === 'all' || productCategory === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });

    const activeCategory = document.querySelector('.categories a[href="#"][onclick*="' + category + '"]');
    if (activeCategory) {
        activeCategory.classList.add('active');
    }
}

let cart = {};

// Function to add an item to the cart
function addToCart(productName, price) {
    if (cart[productName]) {
        cart[productName].quantity += 1;
    } else {
        cart[productName] = { price: price, quantity: 1 };
    }
    displayCart(); // Update cart items
    displayCartTotal(); // Update cart total
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    for (const productName in cart) {
        const item = cart[productName];
        const li = document.createElement('li');
        
        // Create image element for the product photo
        const img = document.createElement('img');
        img.src = getProductImage(productName); // Set the image source dynamically
        img.alt = productName;
        img.classList.add('cart-item-image');
        li.appendChild(img);
        
        // Create span element for the product name
        const nameSpan = document.createElement('span');
        nameSpan.textContent = productName;
        nameSpan.classList.add('cart-item-name');
        li.appendChild(nameSpan);
        
        // Create span element for the product price
        const priceSpan = document.createElement('span');
        priceSpan.textContent = `$${item.price.toFixed(2)}`;
        priceSpan.classList.add('cart-item-price');
        li.appendChild(priceSpan);
        
        // Create span element for the product quantity
        const quantitySpan = document.createElement('span');
        quantitySpan.textContent = `x${item.quantity}`;
        quantitySpan.classList.add('cart-item-quantity');
        li.appendChild(quantitySpan);
        
        // Append the list item to the cart items list
        cartItems.appendChild(li);
    }
}

// Function to get the product image dynamically based on the product name
function getProductImage(productName) {
    // Add your logic here to map product names to image URLs
    if (productName === 'Uji Matcha A Grade 1') {
        return "/assets/mockupbee-ghsa1586bVU-unsplash.jpg";
    } else if (productName === 'Uji Matcha A Grade 2') {
        return "/assets/mockupbee-ghsa1586bVU-unsplash.jpg";
    } else if (productName === 'Uji Matcha A Grade 3') {
        return "/assets/mockupbee-ghsa1586bVU-unsplash.jpg";
    } else if (productName === 'Uji Hojicha 1') {
        return "/assets/ffaf8eb8-a54a-4604-997b-01407c844bdb.jpg";
    } else if (productName === 'Uji Hojicha 2') {
        return "/assets/ffaf8eb8-a54a-4604-997b-01407c844bdb.jpg";
    } else if (productName === 'Uji Hojicha 3') {
        return "/assets/ffaf8eb8-a54a-4604-997b-01407c844bdb.jpg";
    } else if (productName === 'Tea Gift Set 1') {
        return "/assets/mildlee-8N6z4yXUkwY-unsplash.jpg";
    } else if (productName === 'Tea Gift Set 2') {
        return "/assets/mildlee-8N6z4yXUkwY-unsplash.jpg";
    } else if (productName === 'Tea Gift Set 3') {
        return "/assets/mildlee-8N6z4yXUkwY-unsplash.jpg";
    }
    // Add more product name to image URL mappings as needed
}


// Function to calculate total price of items in the cart
function calculateCartTotal() {
    let total = 0;
    for (const productName in cart) {
        const item = cart[productName];
        total += item.price * item.quantity;
    }
    return total.toFixed(2); // Return total rounded to 2 decimal places
}

// Function to display cart total in the sidebar
function displayCartTotal() {
    const cartTotalElement = document.getElementById('cart-total');
    if (cartTotalElement) {
        cartTotalElement.textContent = `Total: $${calculateCartTotal()}`;
    }
}


function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}