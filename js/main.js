var URL='http://duvanvargas.com/news_mock.json';
$(document).ready(function () {
$("#mostrar").click(function () {
  cargarItems();
});
$(document).on("click",".item",function(){
  
  $(".detalle").hide();
  console.log($(this));
  $(".titulodesc").text($(this).find(".info_basica .row .col-xs-10 .titulo").text());
  $(".titulodesc").addClass('animated bounceInLeft');
          delay =2*1000;
           setTimeout(function (div) {
                    $(".titulodesc").removeClass('animated bounceInLeft');
            }, delay, $(this));
  $(this).parent().find(".detalle").toggle(function(){
    $(this).animate({height:0},200);
  },function(){
    $(this).animate({height:200},200);
  });
});

function cargarItems() {
    //Cargar items
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": URL,
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "38517111-fd33-155f-b873-0c1c5ca0598e"
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
    var items=response;
    mostrarItems(items);
  }).error(function (response) {
    //FALLBACK por si la url esta mal
    var items=  [{
    "id": 1,
    "title": "AGOTADO CHALECO DOBLE FAZ BOGOTÁ HUMANA/CLARA ALCALDESA",
    "content": "Ni un solo ejemplar del chaleco doble faz “Bogotá Humana-Clara alcaldesa” quedaba esta mañana en las dependencias distritales. La prenda, marca Polo, desde luego, ha sido muy apetecida por los funcionarios de la Bogotá Humana por lo práctica que les resulta.",
    "image": "http://lorempixel.com/300/300"
  },
  {
    "id": 2,
    "title": "Falcao pide no ir sentado en el bus de la selección",
    "content": "Una novedad inesperada trajo el nuevo bus de la selección Colombia que será estrenado por el equipo de Pekerman la próxima semana cuando este se reúna para enfrentar a Perú en Barranquilla por la primera fecha de las eliminatorias a Rusia 2018.",
    "image": "http://lorempixel.com/300/300"
  },{
    "id": 2,
    "title": "Falcao pide no ir sentado en el bus de la selección",
    "content": "Una novedad inesperada trajo el nuevo bus de la selección Colombia que será estrenado por el equipo de Pekerman la próxima semana cuando este se reúna para enfrentar a Perú en Barranquilla por la primera fecha de las eliminatorias a Rusia 2018.",
    "image": "http://lorempixel.com/300/300"
  },{
    "id": 2,
    "title": "Falcao pide no ir sentado en el bus de la selección",
    "content": "Una novedad inesperada trajo el nuevo bus de la selección Colombia que será estrenado por el equipo de Pekerman la próxima semana cuando este se reúna para enfrentar a Perú en Barranquilla por la primera fecha de las eliminatorias a Rusia 2018.",
    "image": "http://lorempixel.com/300/300"
  },{
    "id": 2,
    "title": "Falcao pide no ir sentado en el bus de la selección",
    "content": "Una novedad inesperada trajo el nuevo bus de la selección Colombia que será estrenado por el equipo de Pekerman la próxima semana cuando este se reúna para enfrentar a Perú en Barranquilla por la primera fecha de las eliminatorias a Rusia 2018.",
    "image": "http://lorempixel.com/300/300"
  },
  {
    "id": 41,
    "title": "“NADA DE ECLIPSE, ATENTADO DE LA FAR DEJÓ SIN LUZ A LA LUNA”, DENUNCIA URIBE",
    "content": "Iracundo y desencajado, el expresidente Álvaro Uribe denunció hoy en rueda de prensa que la sombra que cubrió a la luna el pasado domingo en la noche fue un corte masivo de luz consecuencia de un atentado del frente “Compañera Laika” de las Farc.",
    "image": "http://lorempixel.com/300/300"
  }
];
  mostrarItems(items);
  });
  }


  function mostrarItems(items) {
      $(".detalle").hide();

  $(".contenidorappi").empty();
  for (var i = items.length - 1; i >= 0; i--) {

      var div=
      '<div class="articulo"> '+
      '<div class="item " style="display: block;"> '+
      '<div class="info_basica"> '+
      '<div class="row"> '+
      '<div class="col-xs-2"><img class="minimagen" src="'+ items[i].image+'" alt="..."></div> '+
      '<div class="col-xs-10"> '+
      '<div class="titulo text-left">'+ items[i].title+'</div></div></div></div>    </div>'+
      '<div class="detalle " hidden=""> '+
      '<div class="row">'+
      '<div class="col-xs-5"><img class="imagendetalle" src="'+ items[i].image+'" alt="..."></div>'+
      '<div class="col-xs-7 columnatexto">'+
      '<h4>'+ items[i].title+'</h4>'+
      '<p class="parrafo">'+ items[i].content+' </p>    '+
      '</div></div>      </div></div>';
                 $(".contenidorappi").append(div);
                 
              
        }
        $('.item').hide();

        $('.item').each(function(i) {
           delay =(i)*200;
           setTimeout(function (div) {
                    div.show().addClass('animated bounceInLeft');
                }, delay, $(this));
        });
          console.log(items);
    }  
});