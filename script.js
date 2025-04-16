let total = 0;

document.querySelectorAll(".add-btn").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".dish-card");
    const price = parseFloat(card.dataset.price);
    total += price;
    document.getElementById("total").textContent = total.toFixed(2);
  });
});
