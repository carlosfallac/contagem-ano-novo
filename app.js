const secondsContainer = document.querySelector("#seconds");
const minutesContainer = document.querySelector("#minutes");
const hoursContainer = document.querySelector("#hours");
const daysContainer = document.querySelector("#days");

const newYearTime = new Date("January 01 2026 00:00:00");

const getTimeUnit = (unit) => (unit < 10 ? "0" + unit : unit);

const insertCountdownValues = ({ days, hours, minutes, seconds }) => {
  secondsContainer.textContent = getTimeUnit(seconds);
  minutesContainer.textContent = getTimeUnit(minutes);
  hoursContainer.textContent = getTimeUnit(hours);
  daysContainer.textContent = getTimeUnit(days);
};

const updateCountdown = () => {
  const currentTime = new Date();
  const difference = newYearTime - currentTime;

  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  insertCountdownValues({ days, hours, minutes, seconds });
};

setInterval(updateCountdown, 100);
