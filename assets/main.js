$(document).ready(function() {
  var $name = $(".subscribe input[name='name']");
  var $email = $(".subscribe input[name='email']");

  var $subscribeForm = $('.subscribe form');

  $subscribeForm.on('submit', function(event){
    event.preventDefault();

    $.ajax({
      dataType: 'jsonp',
      url: "https://getsimpleform.com/messages/ajax?form_api_token=25d273b74e476783ccbc1ae150032b7d",
      data: $subscribeForm.serialize(),
    }).done(function() {
      done_message();
      $name.val("");
      $email.val("");
    }).fail(function() {
      fail_message();
    });
  });

  function done_message() {
    var name = $name.val() ? $name.val() + ", " : "";

    swal({
      title: "Cпасибо, " + name + "что подписались на рассылку!",
      text: "Вам придет письмо на " + $email.val() + ", когда выйдет новый пост.",
      timer: 4000,
      showConfirmButton: true
    });
  }

  function fail_message() 
    swal({
      title: "Ошибка! Попробуйте подписаться позже.",
      text: "",
      type: "error",
      timer: 3000,
      showConfirmButton: true
    });
  }
});