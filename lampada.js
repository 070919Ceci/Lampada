function on(){
  document.getElementById("lamp").src="lampada-on.gif"
}
function off(){
  document.getElementById("lamp").src="lampada-off.gif"
}
function blink () {
  var intervalo = 0;
  var contador = 0;
  while(contador < 10){
    intervalo += 300;
    setTimeout("document.getElementById('lamp').src='lampada-on.gif';",intervalo)
    intervalo += 300;
    setTimeout("document.getElementById('lamp').src='lampada-off.gif';",intervalo)
    contador++;
  }
}