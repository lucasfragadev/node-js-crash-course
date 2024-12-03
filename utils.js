function generateRandomNumber () {
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFehrenheit(celcius) {
  return (celcius * 9) / 5 + 32 + "ºF";
}

module.exports = {
  generateRandomNumber,
  celciusToFehrenheit
}
