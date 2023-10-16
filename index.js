function activeIcon() {
  const sliderValue = document.getElementById("sliderLevel").value;
  const icons = document.querySelectorAll(".icon-face");
  const arrowsInTask1 = document.querySelectorAll(
    ".task1-icons__list img[alt='arrow pointer']"
  );

  icons.forEach((icon, index) => {
    if (index == sliderValue) {
      icon.src = icon.src.replace("off.png", "on.png");
      arrowsInTask1[index].classList.remove("visually-hidden");
    } else {
      icon.src = icon.src.replace("on.png", "off.png");
      arrowsInTask1[index].classList.add("visually-hidden");
    }
  });
}

function updateSliderValueDisplay() {
  const sliderNum = document.getElementById("sliderNum");
  const valueDisplay = document.querySelector(".task2__slider-value");
  const value = sliderNum.value;
  const arrowsInTask2 = document.querySelectorAll(
    ".task2__slider-content ul li img.arrow"
  );

  valueDisplay.textContent = `${value}м`;
  arrowsInTask2.forEach((arrow, index) => {
    arrow.classList.toggle("visually-hidden", index != value / 10 - 3);
  });
}

function calculateCost() {
  const sliderValue = parseFloat(document.getElementById("sliderNum").value);
  const repairRadio = document.querySelector('input[name="repair"]:checked');
  const rateRadio = document.querySelector('input[name="rate"]:checked');
  const repairCoefficient = parseFloat(repairRadio.value);
  const rateValue = parseFloat(rateRadio.value);
  const cost = (rateValue * sliderValue) / repairCoefficient;
  const costDisplay = document.querySelector(".task2-total__span");

  costDisplay.textContent = `${cost.toFixed(2)} руб.`;
}

function adjustTextareaHeight() {
  const textarea = document.getElementById("textInput");
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
}

document.getElementById("sliderLevel").addEventListener("input", activeIcon);

document.getElementById("sliderNum").addEventListener("input", () => {
  updateSliderValueDisplay();
  calculateCost();
});

document.getElementById("sliderNum").addEventListener("input", () => {
  updateSliderValueDisplay();
});

document.querySelectorAll('input[name="repair"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    calculateCost();
  });
});

document.querySelectorAll('input[name="rate"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    calculateCost();
  });
});

document
  .getElementById("textInput")
  .addEventListener("input", adjustTextareaHeight);

activeIcon();
adjustTextareaHeight();
updateSliderValueDisplay();
calculateCost();
