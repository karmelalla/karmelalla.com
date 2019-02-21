$(document).ready(function() {
  gallery();
  subscribe('.subscribe', false);
  subscribe('.subscribe-section', false);
  subscribe('.subscribe-page', true);
});

function gallery() {
  $('[data-fancybox="gallery"]').fancybox({
    loop: true,
    hideScrollbar: false,
    preventCaptionOverlap: true,
    buttons: [
      // "zoom",
      //"share",
      "slideShow",
      "fullScreen",
      //"download",
      // "thumbs",
      "close"
    ],
    lang: "ru",
    i18n: {
      ru: {
        CLOSE: "Закрыть",
        NEXT: "Вперед",
        PREV: "Назад",
        ERROR: "Запрашивамое содержимое не может быть загружено. <br/> Пожалуйста, попробуйте позже.",
        PLAY_START: "Начать слайд-шоу",
        PLAY_STOP: "Пауза",
        FULL_SCREEN: "Полный экран",
        THUMBS: "Thumbnails",
        DOWNLOAD: "Download",
        SHARE: "Share",
        ZOOM: "Zoom"
      }}
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
