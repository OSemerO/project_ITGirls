document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".order__item");
  const totalCards = cards.length;
  let currentIndex = 0;

  function showCards() {
    cards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + 3) {
        card.classList.remove("order__item--hidden");
        card.classList.add("order__item--active");
      } else {
        card.classList.add("order__item--hidden");
        card.classList.remove("order__item--active");
      }
    });
  }

  document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1); // Уменьшаем индекс на 1, но не ниже 0
    showCards();
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = Math.min(totalCards - 3, currentIndex + 1); // Увеличиваем индекс на 1, но не выше максимума
    showCards();
  });

  // Изначально показываем первые три карточки
  showCards();
});
