function comprobarLogin(){
  if(sessionStorage.usuario)
    return JSON.parse(sessionStorage.usuario);
  else 
    return false;
}


function sendLogin()
{
   var url = "rest/login/";
   var http_request = new createObject();

   var user=document.getElementsByName('user')[0].value;
   var pass=document.getElementsByName('pass')[0].value;
   
   var http_request = new createObject();

   http_request.onreadystatechange = function()
   {
   	   alert(http_request.status+" "+http_request.readyState);
   		if(http_request.readyState===4 && http_request.status==200)
   		{
      		//var aux = clean(http_request);
      		//alert(http_request.responseText);
      		var resp = JSON.parse(http_request.responseText);
      		alert(resp.RESULTADO);


      	}
   };

   http_request.open("POST", url, true); // Se crea petición GET a url, asíncrona ("true")
  
   http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");

   http_request.send('login='+user+'&pwd='+pass); // Se envía la petición
  
}
