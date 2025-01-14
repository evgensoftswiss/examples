function getRotationAngle(el) {
  const style = window.getComputedStyle(el, null);
  var tr = style.getPropertyValue("-webkit-transform") ||
    style.getPropertyValue("-moz-transform") ||
    style.getPropertyValue("-ms-transform") ||
    style.getPropertyValue("-o-transform") ||
    style.getPropertyValue("transform") ||
    "fail...";
  var angle = 0;
  if (tr != "none") {
    var values = tr.split('(')[1].split(')')[0].split(',');
    angle = Math.round(Math.atan2(values[1], values[0]) * (180 / Math.PI));
  }
  return angle;
}

function Clicked(ob) {
  if (!ob.classList.contains("animated")) {
    var sectors = document.getElementById("sectors");
    ob.style.setProperty('--c-sector', getRotationAngle(sectors));
    console.log(getRotationAngle(sectors));
    ob.classList.toggle("animated");
  }
}