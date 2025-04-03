document.addEventListener("DOMContentLoaded", () => {
    // Existing cart functionality (keep all your current code)
    
    // Add this new checkout functionality:
    const cartButton = document.getElementById("cart-button");
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Checkout</h2>
            <div id="cart-items-list"></div>
            <p id="checkout-total">Total: 0 MZN</p>
            <form id="checkout-form">
                <input type="text" placeholder="Full Name" required>
                <input type="tel" placeholder="Phone Number" required>
                <input type="email" placeholder="Email" required>
                <button type="submit">Complete Order</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector(".close");
    closeBtn.onclick = () => modal.style.display = "none";
    
    // Modified cart button click handler
    cartButton.addEventListener("click", () => {
        const itemsList = modal.querySelector("#cart-items-list");
        itemsList.innerHTML = "";
        // In a real app, you would list all cart items here
        itemsList.innerHTML = "<p>Items in your cart will appear here</p>";
        modal.querySelector("#checkout-total").textContent = `Total: ${totalAmount.toFixed(2)} MZN`;
        modal.style.display = "block";
    });

    // Form submission
    const form = modal.querySelector("#checkout-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(`Order submitted! Total: ${totalAmount.toFixed(2)} MZN\nWe'll contact you shortly.`);
        totalAmount = 0;
        cartTotal.textContent = `Total: 0 MZN`;
        modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
