function listen(evnt, elem, func) {
    if (elem.addEventListener)  // W3C DOM
        elem.addEventListener(evnt,func,false);
    else if (elem.attachEvent) { // IE DOM
         var r = elem.attachEvent("on"+evnt, func);
         return r;
    }
    else console.log('addEventListener dont works with this browser');
}

function getViajes(cant)
{

  var url = "rest/viaje/?u="+cant;
  var http_request = new createObject();

   http_request.open("GET", url, true); // Se crea petición GET a url, asíncrona ("true")
   http_request.send(); // Se envía la petición
   return http_request;
}

function getFoto(id)
{

  var url = " rest/foto/?id_viaje="+id;
  var http_request = new createObject();

   http_request.open("GET", url, true); // Se crea petición GET a url, asíncrona ("true")
   http_request.send(); // Se envía la petición
   return http_request;
}


function getComentarios(num)
{
  var url = " rest/comentario/?u="+num;
  var http_request = new createObject();

   http_request.open("GET", url, true); // Se crea petición GET a url, asíncrona ("true")
   http_request.send(); // Se envía la petición
   return http_request;
}

function getComentID(ID)
{
  var url = " rest/comentario/?id_viaje="+ID;
  var http_request = new createObject();

   http_request.open("GET", url, true); // Se crea petición GET a url, asíncrona ("true")
   http_request.send(); // Se envía la petición
   return http_request;
}


function createObject(){

	
	var xmlhttp;
		if(window.XMLHttpRequest) { // Objeto nativo
		xmlhttp = new XMLHttpRequest(); // Se obtiene el nuevo objeto

		} 
		else if (window.ActiveXObject) { // IE(Windows): objecto ActiveX
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

		}
		return xmlhttp;
}

function clean(request)
{

  var aux="";
 
  var inicio=0;
  var fin=0;
 
        for(var i=0; i<request.responseText.length; i++)
        {
          
            if(request.responseText[i]=="[")
            {
                inicio= i;
            }

            if(request.responseText[i]=="]")
            {
                fin= i;
            }

        }
       
        for(var i=inicio; i<fin+1; i++)
        {
            aux=aux+request.responseText[i];
        }

  
  return aux;
}


