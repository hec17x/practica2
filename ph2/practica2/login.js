function comprobarLogin(){
  if(sessionStorage.usuario)
    return JSON.parse(sessionStorage.usuario);
  else 
    return false;
}


function sendLogin()
{
   var url = "rest/viaje/?u="+cant;
   var http_request = new createObject();

   

   http_request.open("GET", url, true); // Se crea petición GET a url, asíncrona ("true")
   http_request.send(); // Se envía la petición
   return http_request;
}
