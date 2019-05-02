
/*function idioma(){
  document.getElementById("ola").innerHTML = "Hi";
  if("ola" == "Hi"){
          document.getElementById("ola").innerHTML = "Konichiwa";
          txt = 1;
  }
}*/
var txt = 0;

function idioma(){
    if(txt == 0){
      document.getElementById("ola").innerHTML = "Hi";
      txt = 1;
    }
    else if(txt == 1){ 
      document.getElementById("ola").innerHTML = "Ola";
      txt = 2;
    }
    else if(txt == 2){
      document.getElementById("ola").innerHTML = "Konichiwa";
      txt = 3;
    }
    else if(txt == 3){
      document.getElementById("ola").innerHTML = "привет";
      txt = 0;
    }
}
/*var trocaFundo = 0;

function bodyBack(){
  if(trocaFundo == 0){
    document.getElementById("body").src = "IMG/body1.png" ;
    trocaFundo = 1;
  }
  else if(trocaFundo == 1){
    document.getElementById("body").style.backgroundImage = url ("IMG/body2.png");
    trocaFundo = 2;
  }
  else if(trocaFundo == 2){
    document.getElementById("body").style.backgroundImage = url ("IMG/body3.png");
    trocaFundo = 3;
  }
  else if(trocaFundo == 3){
    document.getElementById("body").style.backgroundImage = url ("IMG/body4.png");
    trocaFundo = 0;
  }
}*/