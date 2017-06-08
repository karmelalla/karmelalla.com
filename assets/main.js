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
      $name.val("");
      $email.val("");
      alert("Спасибо, что подписались на рассылку!");
    });
  });
});