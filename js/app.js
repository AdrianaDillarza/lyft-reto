function begin() {
// funcion inicio
  $('select').material_select();
  // splash view
  $('main').hide();
  setTimeout(function() {
    $('section').fadeOut();
    $('main').show();
  }, 1000);

  // nombrando variables reutilizables
  var $number = $('#icon_telephone');
  var $boton = $('.btn-next');
  var $insertCode = $('#insertCode');
  var $btn = $('#btnVerify');
  var $btnResentCode = $('.btn-resent');
  var $firstName = $('#firstName');
  var $lastName = $('#lastName');
  var $email = $('#email');
  var $checkbox = $('.checkbox');
  var $btnForm = $('#btn-form');

  // nombrando eventos y funciones
  $number.on('keyup', validCelphoneNumber);
  $boton.on('click', randomCode);
  $btnResentCode.on('click', resentRandomCode);
  $firstName.on('keyup', validFirstName);
  $firstName.on('keyup', validForm);
  $lastName.on('keyup', validLastName);
  $lastName.on('keyup', validForm);
  $email.on('keyup', validEmail);
  $email.on('keyup', validForm);
  $checkbox.on('click', validCheckbox);
  $checkbox.on('click', validForm);
  $insertCode.on('keyup', validCodeRandom);

  // función validar
  function validCelphoneNumber() {
    if ($number.val().length === 10) {
      $boton.removeClass('disabled');
    }
    else {
      $boton.addClass('disabled');
    }
  }


};

$(document).ready(begin);
