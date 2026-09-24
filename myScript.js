const building = document.querySelector("#BuildingFour");

for (let row = 0; row < 12; row++) {

  for (let col = 0; col < 4; col++) {

    const windowDiv = document.createElement("div");

    windowDiv.classList.add("windows");

    windowDiv.style.left = 15 + col * 20 + "px";
    windowDiv.style.top = 25 + row * 18 + "px";

    building.appendChild(windowDiv);

    if (Math.random() > 0.5) {
      windowDiv.classList.add("light-on");
    }
  }

}

const building5 = document.querySelector("#BuildingFive");

for (let row = 0; row < 12; row++) {

  for (let col = 0; col < 5; col++) {

    const windowDiv5 = document.createElement("div");

    windowDiv5.classList.add("WindowOnFive");

    windowDiv5.style.left = 10 + col * 12 + "px";
    windowDiv5.style.top = 25 + row * 15 + "px";

    building5.appendChild(windowDiv5);

    if (Math.random() > 0.7) {
      windowDiv5.classList.add("light-on2");
    }
  }

}