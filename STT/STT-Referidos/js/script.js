/*COLLAPSE FAQS*/
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
/*TRAER VALORES

function getGET(){
  var loc = document.location.href;
  if(loc.indexOf('?')>0){

    var getString = loc.split('?')[1];

    var GET = getString.split('&');
    var get = {};

    for(var i =0, l = GET.length; i < 1; i++){
      var tmp = GET [i].split('=');
      get[tmp[0]] = unescape(decodeURI(tmp[1]));
    }
    return get;
  }
}
window.onload = function(){
  var valores = getGET();
  if(valores){
    var IDreferral = valores['IDreferral'];

    for(var index in valores){
      document.write("clave: "+index+" - Valor: "+valores[index]);
    }
    document.write('<hr> El ID es '+ IDreferral);

  }else{
    document.write("No se ha recibido ningún parámetro");
  }
}*/


