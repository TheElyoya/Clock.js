const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

setInterval(setClock, 1000);

function setClock() {
  const currentTime = new Date();
  let secondRatio = currentTime.getSeconds() / 60;
  let minuteRatio = (secondRatio + currentTime.getMinutes()) / 60;
  let hourRatio = (minuteRatio + currentTime.getHours()) / 12;

  rotateHand(secondHand, secondRatio);
  rotateHand(minuteHand, minuteRatio);
  rotateHand(hourHand, hourRatio);
}
function rotateHand(element, rotateRatio) {
  element.style.setProperty("--rotation", rotateRatio * 360);
}

setClock();
