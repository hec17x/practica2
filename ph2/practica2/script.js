listen("load", window, function() {
    recibirViajes();
});

function recibirViajes(){
 	
  var url = "rest/viaje/?u=8";
  var http_request = new createObject();

  

  http_request.onreadystatechange = function()
  {
    if(http_request.readyState===4 && http_request.status==200)
    {
      var aux = clean(http_request);

      var resp = JSON.parse(aux);
      alert(resp);

    }
  }
   http_request.open("GET", url, true); // Se crea petición GET a url, asíncrona ("true")
   http_request.send(); // Se envía la petición
    


}