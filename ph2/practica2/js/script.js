

var Rutas;

function crearObjAjax(){

	
	var xmlhttp;
		if(window.XMLHttpRequest) { // Objeto nativo
		xmlhttp = new XMLHttpRequest(); // Se obtiene el nuevo objeto
		alert("nuevo");
		} 
		else if (window.ActiveXObject) { // IE(Windows): objecto ActiveX
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		alert("viejo");
		}
		return xmlhttp;
}



function hola(){

}

function devolverRutas() {
      num=1;
 
      var url = "rest/viaje/?u="+num;
 
 
      obj = crearObjAjax();
      if(obj) { // Si se ha creado el objeto, se completa la petición ...
            obj.onreadystatechange = recibirRutas; // función callback: procesarCambio
            obj.open("GET", url, true); // Se crea petición GET a url, asíncrona ("true")
            obj.send(); // Se envía la petición
      }
}
 
function recibirRutas(){
 	
	
	
	alert(obj.responseText);

      if(obj.readyState == 4){ // valor 4: respuesta recibida y lista para ser procesada
 		
           if(obj.status == 200){ // El valor 200 significa "OK"
            // Aquí se procesa lo que se haya devuelto:

			var types = JSON.parse(obj.responseText);
           alert("yeeee  " +types[0].ID);

           



/*

                 for(i=0 ;i<=5;i++){
                 	var ruta;

                 	if(types[i].FICHERO==null){
                 		ruta="images/ruta.jpg";
                 	}else{
                 		ruta="fotos/"+types[i].ARCHIVO;
                 	}

                
             var ficha = document.createElement("div");
             ficha.setAttribute("id", "ruta"+i);
             ficha.setAttribute("class", "card");

             var front=document.createElement("div")
             front.setAttribute("class","front");

             var img=document.createElement("img");
             img.setAttribute("src",ruta);
             img.setAttribute("class","imgIndx")

             front.appendChild(img);

             var back=document.createElement("div");
             back.setAttribute("class","back");

             var text=document.createElement("p");

			var contenido = document.createTextNode("Nombre "+types[i].NOMBRE);
			 text.appendChild(contenido);
			 back.appendChild(text);

             ficha.appendChild(front);
             ficha.appendChild(back);

             var insertar=document.getElementById("contenido")

             insertar.appendChild(ficha);



                /* rutauno.innerHTML+="<div class='rutas'> <img class='front' alt='Relevant textual alternative to the image' src='"+ruta+"'> <article id='rutauno' class='back'> <h3>"+types[i].NOMBRE+"</p> <p>Distancia: "+types[i].DISTANCIA+"</p> <p> Dificultad: "+types[i].DIFICULTAD+"</p> <p>Fotos: "+types[i].NFOTOS+"</p> <p>Comentarios: "+types[i].NCOMENTARIOS+" </p><a href='#' onclick='redRuta("+types[i].ID+");'>Ver Ruta</a></article>   </div>";*/
                	
              
               
              }



            /*}*/ else alert("Hubo un problema con los datos devueltos"); // ERROR
     }
}