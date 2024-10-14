

$(document).ready(function() {
    // Capturar el evento de escribir en la barra de búsqueda
    $('#buscador').on('keyup', function() {
        var texto = $(this).val().toLowerCase();// Convertir el texto a minúsculas
        var encontrado = false;

        $('.error-message').hide();

        if (texto === "proyecto 1") {
            $('html, body').animate({
                scrollTop: $('#proyecto1').offset().top
            }, 500);
            encontrado = true;
        } else if (texto === "proyecto 2") {
            $('html, body').animate({
                scrollTop: $('#proyecto2').offset().top
            }, 500);
            encontrado = true;
        } else if (texto === "proyecto 3") {
            $('html, body').animate({
                scrollTop: $('#proyecto3').offset().top
            }, 500);
            encontrado = true;
        }

        // Mostrar mensaje si no se encontró ningún proyecto
        if (!encontrado && texto.length > 0) {
            $('.error-message').fadeIn(); // Mostrar el mensaje
        }
    });
});
    

$(document).ready(function() {
  $('#contactForm').on('submit', function(event) {
      event.preventDefault(); // Evitar el envío del formulario

      // Validar el correo electrónico
      var email = $('#email').val();
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo

      if (emailRegex.test(email)) {
          // Si el correo es válido, mostrar el modal
          $(document).ready(function() {
            $('.btn-primary').on('click', function() {
                // Mostrar el modal
              $('#modalConfirmacion').modal('show');
              $('#contactForm')[0].reset();
            });
          });
          // Resetear el formulario
      } else {
          alert('Por favor, introduce un correo electrónico válido.');
      }
  });
});

$(document).ready(function () {
  $('.card-container').hover(function () {
    $(this).find('.card-flip').toggleClass('flip');
  });
});
