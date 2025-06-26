 $(document).ready(function() {
  $(".producto").hide();
 
 $("#ocultarProducto").click(function() {
    $(".producto").fadeOut();
  });


  $("#mostrarProducto").click(function() {
    $(".producto").fadeIn();
  });

    $("#cerrar").click(function() {
    $(".imagenHover").fadeOut();
  });




  

  $(".box").hover(
    function() {
      $(this).addClass("hovered");
    },
    function() {
      $(this).removeClass("hovered");
    }
  );




  const imagenes = $(".box");
  let indice = 0;

  imagenes.hide();
  imagenes.eq(indice).show();

  $("#Siguiente").click(function () {
    imagenes.eq(indice).hide();
    indice = (indice + 1) % imagenes.length;
    imagenes.eq(indice).fadeIn();
  });

  $("#Anterior").click(function () {
    imagenes.eq(indice).hide();
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    imagenes.eq(indice).fadeIn();
  });

  });