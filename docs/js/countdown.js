var countDate = new Date("Nov 5,2022 9:45:00").getTime();
function cognitiaDate(params) {
  var now = new Date().getTime();
  gap = countDate - now;
  var seconds = 1000;
  var minutes = seconds * 60;
  var hours = minutes * 60;
  var days = hours * 24;

  var d = Math.floor(gap / days);
  var h = Math.floor((gap % days) / hours);
  var m = Math.floor((gap % hours) / minutes);
  var s = Math.floor((gap % minutes) / seconds);

  document.getElementById("days").innerText = d < 10 ? "0" + d : d;
  document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
  document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
  document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;
}
setInterval(() => {
  cognitiaDate();
}, 1000);
