document.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelectorAll('.product');
  const cartProducts = document.querySelector('.cart__products');

  products.forEach(product => {
    const quantityControls = product.querySelector('.product__quantity-controls');
    const quantityValue = product.querySelector('.product__quantity-value');
    const addButton = product.querySelector('.product__add');

    quantityControls.addEventListener('click', (event) => {
      const target = event.target;
      let currentValue = parseInt(quantityValue.textContent);

      if (target.classList.contains('product__quantity-control_dec')) {
        if (currentValue > 1) {
          quantityValue.textContent = currentValue - 1;
        }
      } else if (target.classList.contains('product__quantity-control_inc')) {
        quantityValue.textContent = currentValue + 1;
      }
    });

    addButton.addEventListener('click', () => {
      const productId = product.dataset.id;
      const productImage = product.querySelector('.product__image').src;
      const quantity = parseInt(quantityValue.textContent);

      const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

      if (existingProduct) {
        const existingCount = existingProduct.querySelector('.cart__product-count');
        existingCount.textContent = parseInt(existingCount.textContent) + quantity;
      } else {
        const cartProduct = document.createElement('div');
        cartProduct.className = 'cart__product';
        cartProduct.dataset.id = productId;
        cartProduct.innerHTML = `
          <img class="cart__product-image" src="${productImage}">
          <div class="cart__product-count">${quantity}</div>
        `;
        cartProducts.appendChild(cartProduct);
      }

      quantityValue.textContent = '1';
    });
  });
});