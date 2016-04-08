listen("load", window, function() {
     

    opcionesNavegador();
    cargarPicViajes();
    cargarViajes();
    cargarComentarios();
     
});

function cargarViajes(){
 	
  var http_request = getViajes(6);

  

  http_request.onreadystatechange = function()
  {
    if(http_request.readyState===4 && http_request.status==200)
    {
      var aux = clean(http_request);

      var resp = JSON.parse(aux);

      var viajes = document.getElementsByClassName("content_viajes");
      
      for(var j=0; j<resp.length; j++)
      {
        var fecha_ini = new Date(resp[j].FECHA_INICIO);
            var dd = fecha_ini.getDate();
            var mm = fecha_ini.getMonth()+1; //January is 0!

            var yyyy = fecha_ini.getFullYear();
            if(dd<10){
                dd='0'+dd;
            } 
            if(mm<10){
                mm='0'+mm;
            } 
            fecha_ini = dd+'/'+mm+'/'+yyyy;

        var fecha_fin = new Date(resp[j].FECHA_FIN);
            var dd = fecha_fin.getDate();
            var mm = fecha_fin.getMonth()+1; //January is 0!

            var yyyy = fecha_fin.getFullYear();
            if(dd<10){
                dd='0'+dd;
            } 
            if(mm<10){
                mm='0'+mm;
            } 
            fecha_fin = dd+'/'+mm+'/'+yyyy;


        var estrellas='';
        for(var i=0; i<resp[j].VALORACION; i++)
        {
              estrellas+='★ ';
            }

        var id=resp[j].ID;
        var foto;    
        foto = cargarPicViajes(id);
       
       var contenido='<li> <i class="material-icons">airplanemode_active</i>'+
                    '<div >'+ 
                        '<div class="contenido">'+
                              '<div class="viaje_user">'+
                                  '<div class="avatar-frame">'+
                                      '<img src="images/user-default-avatar.jpg" alt=""/>'+ 

                                   '</div>'+
                                    '<span>'+resp[j].LOGIN+'</span>'+
                              '</div>'+
                            '<h2>'+resp[j].NOMBRE+'</h2>'+
                            '<p><b>Valoración: </b>'+estrellas+' </p>'+
                            '<p><b>Fecha: </b>'+ fecha_ini+' - '+fecha_fin+'</p>'+
                            '<p><b>Descripcion: </b>'+resp[j].DESCRIPCION+'</p>'+
                            '</div>'+
                            '<div class="foto">'+
                            '</div>'+
         '</div>'+
        '</li>';
 
        viajes[0].innerHTML+=contenido;

      }

      
    }
  }
  




}

function cargarPicViajes(ID)
{
  
  if(ID!== undefined)
  {
   var http_request2 = getFoto(ID);
   var foto;

   
        http_request2.onreadystatechange = function()
        {
         if(http_request2.readyState===4 && http_request2.status==200)
         {

          var aux1 = clean(http_request2);
          
          var pic = JSON.parse(aux1); 
          foto=pic[0].FICHERO;
          foto=ID+"/"+foto;

          var picture = document.getElementsByClassName("foto");

            picture[ID-1].innerHTML='<img class="foto_viaje" src="fotos/'+foto+'" alt=""/>';
          
          
       
          }
        }

   } 


     return foto;      
} 


function cargarComentarios()
{
  var http_request = getComentarios(10);



  http_request.onreadystatechange = function()
  {
    if(http_request.readyState===4 && http_request.status==200)
    {
      var aux = clean(http_request);

      var resp = JSON.parse(aux);
      
      var ID_VIA=[];
      var aux=[];
      var coment = document.getElementsByClassName("comentarios");


      for(var i=0; i<resp.length-1; i++)
      {
          for(var j=i+1; j<resp.length; j++)
          {
            
              if(resp[i].ID_VIAJE>resp[j].ID_VIAJE)
              {
                 var aux=resp[i];
                 resp[i]=resp[j];
                 resp[j]=aux;
              }
          }
      }
/*

      for(var i=0; i<resp.length-1; i++)
      {
          for(var j=i+1; j<resp.length; j++)
          {
            
              if(resp[i].ID_VIAJE==resp[j].ID_VIAJE)
              {
                 
                  if(resp[i].FECHAHORA>resp[j].FECHAHORA)
                  {
                    var aux=resp[i];
                    resp[i]=resp[j];
                    resp[j]=aux;
                  }
              }
          }
      }

      

      var flag=0;

      for(var i=0; i<resp.length; i++)
      {
          if(flag==0)
          {
            flag=resp[i].ID_VIAJE;
            resp[i].primero=true;
          }

          if(resp[i].ID_VIAJE!=flag)
          {
            flag=resp[i].ID_VIAJE;
            resp[i].primero=true;
          }
          else 
          { 
 
            if(resp[i].primero===undefined)
            {
              resp[i].respuesta=true;
              
              for(var j=0; j<resp.length; j++)
              {
                
                if(resp[j].primero==true&&resp[i].ID_VIAJE==resp[j].ID_VIAJE)
                {
                    resp[i].depende=resp[j].ID;
                }
              }
            }
          }
      }

      for(var i=0; i<resp.length-1; i++)
      {
          for(var j=i+1; j<resp.length; j++)
          {

            if(resp[i].primero==true)
            {

             

                if(resp[i].FECHAHORA<resp[j].FECHAHORA)
                {

                
                 var aux=resp[i];
                 resp[i]=resp[j];
                 resp[j]=aux;

                 
                }

            }

          }
      }


       for(var i=0; i<resp.length-1; i++)
      {
          for(var j=i+1; j<resp.length; j++)
          {
            if(resp[i].depende!==undefined||resp[j].depende!==undefined)
            {
              if(resp[i].respuesta=true)
              {
                if(resp[i].depende!=resp[j].ID_VIAJE)
                {

                
                 var aux=resp[i];
                 resp[i]=resp[j];
                 resp[j]=aux;

                 
                

                }
              }
            }
          }
      }

*/
      for(var i=0; i<resp.length; i++)
      {
                var fecha = new Date(resp[i].FECHAHORA);
                var dd = fecha.getDate();
                var mm = fecha.getMonth()+1; //January is 0!


                var yyyy = fecha.getFullYear();
                if(dd<10){
                    dd='0'+dd;
                } 
                if(mm<10){
                    mm='0'+mm;
                } 
                fecha = dd+'/'+mm+'/'+yyyy;

            if(resp[i].primero==true)
            { 
              var contenido='<li>  <i class="material-icons">comment</i>'+
                    '<div >'+ 
                        '<div class="contenido_comentario">'+
                              resp[i].ID+
                              '<div class="viaje_user">'+
                                  '<div class="avatar-frame">'+
                                      '<img src="images/user-default-avatar.jpg" alt=""/>'+ 

                                   '</div>'+
                                    '<span>'+resp[i].LOGIN+'</span>'+
                                    '<span class="fecha_coment">'+fecha+'</span>'+
                              '</div>'+
                            '<h2>'+resp[i].TITULO+'</h2>'+
                            '<p>'+resp[i].TEXTO+'</p>'+
                            '</div>'+
                  '</div>'+
              '</li>';
            
 
              coment[0].innerHTML+=contenido;

            }
            else
            {
              var contenido='<li class="re"> <i class="material-icons">forum</i>'+
                    '<div >'+ 
                        '<div class="contenido_comentario">'+
                        resp[i].ID+" "+resp[i].ID_VIAJE+" "+resp[i].depende+
                              '<div class="viaje_user">'+
                                  '<div class="avatar-frame">'+
                                      '<img src="images/user-default-avatar.jpg" alt=""/>'+ 

                                   '</div>'+
                                    '<span>'+resp[i].LOGIN+'</span>'+
                                    '<span class="fecha_coment">'+fecha+'</span>'+
                              '</div>'+
                            '<h2>'+resp[i].TITULO+'</h2>'+
                            '<p>'+resp[i].TEXTO+'</p>'+
                            '</div>'+
                      '</div>'+
                    '</li>';
 
                coment[0].innerHTML+=contenido;
            }

             
                
      }
    
      
    }
  }
 
}



function opcionesNavegador(){
    var flag = comprobarLogin(); //true o false de sesion

    if(flag == false){
        var boton = document.getElementsByClassName("noLogin");
        for(var i = 0; i<boton.length; i++){
            boton[i].style.display ="none";
          }
        }


    else if (flag == true){
        var boton = document.getElementsByClassName("siLogin");
        for(var i = 0; i<boton.length; i++){
            boton[i].style.display ="none";
          }
    }
}