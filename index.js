const hue = require('hue-module');

hue.load({
  'host': '',
  'username': '',
  'key': '',
  'port': 80
});

function setLight(light) {
  const newXy = getRandomXy();
  console.log(light, newXy);

  hue.change(light.set({
    'bri': 255,
    'xy': newXy,
    'effect': 'colorloop',
    'alert': 'select'
  }));
}

function getRandomXy() {
  const randx = Math.random();
  const randy = Math.random();
  return [randx, randy];
}

function getRandomHue() {
  return Math.random() * 65535;
}

function scheduleChange() {
  setTimeout(() => {
    hue.light(3, setLight);
    scheduleChange();
  }, 5000);
}

hue.light(3, setLight);
// scheduleChange();
