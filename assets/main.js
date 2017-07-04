$(document).ready(function() {
  gallery();
  subscribe('.subscribe', false);
  subscribe('.subscribe-page', true);
});

function gallery() {
  $('.fancybox').fancybox({
      padding : 0,
      openEffect  : 'elastic'
  });
}

function subscribe(selector, redirect) {
  var $name = $(selector + " input[name='name']");
  var $email = $(selector + " input[name='email']");

  var $subscribeForm = $(selector + " form");

  $subscribeForm.on('submit', function(event){
    event.preventDefault();

    $.ajax({
      dataType: 'jsonp',
      url: "https://getsimpleform.com/messages/ajax?form_api_token=25d273b74e476783ccbc1ae150032b7d",
      data: $subscribeForm.serialize(),
    }).done(function() {
      doneMessage($name, $email, redirect);
      $name.val("");
      $email.val("");
    }).fail(function() {
      failMessage();
    });
  });
}

function doneMessage($name, $email, redirect) {
  var name = $name.val() ? $name.val() + ", " : "";

  swal({
    title: "Cпасибо, " + name + "что подписались на рассылку!",
    text: "Вам придет письмо на " + $email.val() + ", когда выйдет новый пост.",
    timer: 4000,
    showConfirmButton: true,
    type: "success"
  },
  function(){
    swal.close();
    
    if(redirect) {
      window.location = location.protocol + "//" + location.host;
    }
  });
}

function failMessage() {
  swal({
    title: "Ошибка! Попробуйте подписаться позже.",
    text: "",
    type: "error",
    timer: 3000,
    showConfirmButton: true
  });
}
