function my() {
  document.getElementById("my").style.display = "none";
  document.getElementById("my1").style.display = "block";
  document.getElementById("cl").style.animationPlayState = "running";
  var exa = (document.getElementById("big_box").style.height = "340px");
}
function my1() {
  document.getElementById("my1").style.display = "none";
  document.getElementById("my").style.display = "block";
  document.getElementById("cl").style.animationDuration="reverse";
  var exa = (document.getElementById("big_box").style.height = "60px");
}

function bg_ch() {
  document.getElementById("body").style.backgroundColor = "#061a2d";
}
function bg_ch1() {
  document.getElementById("body").style.backgroundColor = "#07213a";
}



setTimeout(function()
{ document.getElementById("shp").style.display="none"}
, 4700);


