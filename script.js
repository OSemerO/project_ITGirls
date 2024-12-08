document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".order__item");
  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((order__item, i) => {
      order__item.classList.toggle("hidden", i === index);
    });
  }

  document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + order__item.length) % order__item.length;
    showCard(currentIndex);
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % order__item.length;
    showCard(currentIndex);
  });

  // Изначально показываем первую карточку
  showCard(currentIndex);
});
