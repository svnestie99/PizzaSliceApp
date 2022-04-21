const currentStatus = document.getElementsByClassName("current-status")[0],
  loadBtn = document.getElementById("load-btn"),
  countOfEaters = document.getElementsByClassName("count-of-eaters")[0],
  participants = document.getElementsByClassName("participants")[0],
  pizzaContainer = document.getElementsByClassName("pizza-container")[0];

currentStatus.innerHTML = `<p>Click 👆 this button</p>`;

loadBtn.addEventListener("click", () => {
  const pizza = document.createElement("div");
  pizza.classList.add("pizza");

  pizzaContainer.classList.add("active");
  pizzaContainer.replaceChildren(pizza);

  currentStatus.innerHTML = "Slicing...";
  currentStatus.style.opacity = 1;
  loadBtn.classList.add("loading");

  fetch("https://gp-js-test.herokuapp.com/pizza")
    .then((response) => response.json())
    .then((data) => {
      const pizzaEaters = [];

      loadBtn.classList.remove("loading");
      currentStatus.style.opacity = 0;

      data.party.filter((person) => {
        return person.eatsPizza ? pizzaEaters.push(person) : undefined;
      });

      let deg = 0;

      switch (pizzaEaters.length) {
        case 4:
          pizzaEaters.forEach(() => {
            pizza.insertAdjacentHTML(
              "beforeend",
              `<div class="triangle" style="transform:rotate(${(deg += 90)}deg)"><div class="circle"></div></div>`
            );
          });
          break;
        case 6:
          pizzaEaters.forEach(() => {
            pizza.insertAdjacentHTML(
              "beforeend",
              `<div class="triangle" style="transform:rotate(${(deg += 60)}deg)"><div class="circle"></div></div>`
            );
          });
          break;
        case 8:
          pizzaEaters.forEach(() => {
            pizza.insertAdjacentHTML(
              "beforeend",
              `<div class="triangle" style="transform:rotate(${(deg += 45)}deg)"><div class="circle"</div></div>`
            );
          });
          break;
        case 10:
          pizzaEaters.forEach(() => {
            pizza.insertAdjacentHTML(
              "beforeend",
              `<div class="triangle" style="transform:rotate(${(deg += 36)}deg)"><div class="circle"</div></div>`
            );
          });
          break;
        case 12:
          pizzaEaters.forEach(() => {
            pizza.insertAdjacentHTML(
              "beforeend",
              `<div class="triangle" style="transform:rotate(${(deg += 30)}deg)"><div class="circle"></div></div>`
            );
          });
          break;
        case 14:
          pizzaEaters.forEach(() => {
            pizza.insertAdjacentHTML(
              "beforeend",
              `<div class="triangle" style="transform:rotate(${(deg += 25.7)}deg)"><div class="circle"></div></div>`
            );
          });
          break;
        default:
          break;
      }

      participants.innerHTML = `Participants: ${data.party.length}`;
      countOfEaters.innerHTML = `Pizza eaters: ${pizzaEaters.length}`;
    });
});
