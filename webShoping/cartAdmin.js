var products = [
    { id: 1, category: 'Cà phê', name: 'Bạc Xỉu', price: 3.79 },
    { id: 2, category: 'Cà phê', name: 'Cà Phê Đen', price: 3.99 },
    { id: 3, category: 'Cà phê', name: 'Cà Phê Sữa', price: 4.49 },
    { id: 4, category: 'PhinDi', name: 'PhinDi Choco', price: 3.99 },
    { id: 5, category: 'PhinDi', name: 'PhinDi Kem Sữa', price: 3.79 },
    { id: 6, category: 'PhinDi', name: 'PhinDi Hạnh Nhân', price: 4.19 },
    { id: 7, category: 'Trà', name: 'Trà Đào', price: 3.49 },
    { id: 8, category: 'Trà', name: 'Trà Lá Sen', price: 2.79 },
    { id: 9, category: 'Trà', name: 'Trà Xanh', price: 2.99 },
    // ... Thêm sản phẩm khác vào đây
];

var nextId = products.length + 1;

function displayProducts() {
    var productList = document.getElementById('product-list');
    productList.innerHTML = '';

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var productItem = document.createElement('div');
        productItem.innerHTML = `<p>ID: ${product.id}, Tên: ${product.name}, Giá: $${product.price.toFixed(2)} <button onclick="deleteProduct(${product.id})">Xóa</button></p>`;
        productList.appendChild(productItem);
    }
}

function addProduct(name, price) {
    var newProduct = {
        id: nextId,
        name: name,
        price: price
    };

    nextId++;
    products.push(newProduct);
    displayProducts();
}

function deleteProduct(productId) {
    var index = products.findIndex(product => product.id === productId);

    if (index !== -1) {
        products.splice(index, 1);
        displayProducts();
    }
}

function editPrice(productId, newPrice) {
    var product = products.find(product => product.id === productId);

    if (product) {
        product.price = newPrice;
        displayProducts();
    }
}

document.getElementById('add-product-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var productName = document.getElementById('productName').value;
    var productPrice = parseFloat(document.getElementById('productPrice').value);
    addProduct(productName, productPrice);
});

document.getElementById('delete-product-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var deleteProductId = parseInt(document.getElementById('deleteProductId').value);
    deleteProduct(deleteProductId);
});

document.getElementById('edit-price-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var productId = parseInt(document.getElementById('productId').value);
    var newPrice = parseFloat(document.getElementById('newPrice').value);
    editPrice(productId, newPrice);
});

displayProducts();
