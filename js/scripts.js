const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
let cost = 800;
let totalPrice = 0;
// Слушаем событие клика на схеме
schemeSvg.addEventListener("click", (event) => {
  // Отслеживаем кресло на котором кликнули, и если у этого нет класса "active", то добавляем его, а если есть, то удаляем
  if (!event.target.classlist.contains("booked")) {
    event.target.classList.toggle("active");
    let totalSeats = schemeSvg.querySelectorAll(".active").length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice + " ₽";
  }
});
