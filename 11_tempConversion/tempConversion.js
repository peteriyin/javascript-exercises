const convertToCelsius = function (tempInFahrenheit) {
  // x °F ≘ (x − 32) × ⁠5/9°C
  let toCelcius = ((tempInFahrenheit - 32) * 5 / 9);
  return Math.round(toCelcius * 10) / 10;
};

const convertToFahrenheit = function (tempInCelcius) {
  // x °C ≘ (x × ⁠9/5+ 32) °F
  let toFahrenheit = (tempInCelcius * (9 / 5) + 32);
  return Math.round(toFahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
