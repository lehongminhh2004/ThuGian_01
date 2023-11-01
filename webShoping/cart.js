// Khởi tạo biến lưu trữ giỏ hàng và tổng tiền
var cart = [];
var totalPrice = 0.00;

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    totalPrice += price;
    updateCart();
}

// Hàm cập nhật giỏ hàng và tổng tiền
function updateCart() {
    var cartList = document.getElementById("cart-items");
    var totalDisplay = document.getElementById("total-price");
    
    while (cartList.firstChild) {
        cartList.removeChild(cartList.firstChild);
    }

    cart.forEach(function (item, index) {
        var li = document.createElement("li");
        li.textContent = item.name + " - $" + item.price;
        
        // Tạo nút xóa sản phẩm và gán sự kiện xóa
        var removeButton = document.createElement("button");
        removeButton.textContent = "Xóa";
        removeButton.addEventListener("click", function() {
            removeFromCart(index);
        });
        li.appendChild(removeButton);

        cartList.appendChild(li);
    });

    totalDisplay.textContent = "$" + totalPrice.toFixed(2);
}

// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    var removedItem = cart.splice(index, 1)[0];
    totalPrice -= removedItem.price;
    updateCart();
}

// Hàm thanh toán
function checkout() {
    alert("Quý khách đã thanh toán: $" + totalPrice.toFixed(2));
}
