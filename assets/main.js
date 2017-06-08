$(document).ready(function() {
  var $name = $(".subscribe input[name='name']");
  var $email = $(".subscribe input[name='email']");

  $(".subscribe #submit").click(function() {
    $.ajax({
      dataType: 'jsonp',
      url: "https://getsimpleform.com/messages/ajax?form_api_token=25d273b74e476783ccbc1ae150032b7d",
      data: {
        name: $name.val(),
        email: $email.val(),
      }
    }).done(function() {
      show_message();
      $name.val("");
      $email.val("");
    });
  });

  function show_message() {
    var name = $name.val() ? $name.val() + ", " : "";

    swal({
      title: "Cпасибо, " + name + "что подписались на рассылку!",
      text: "Вам придет письмо на " + $email.val() + ", когда выйдет новый пост.",
      timer: 4000,
      showConfirmButton: true
    });
  }
});