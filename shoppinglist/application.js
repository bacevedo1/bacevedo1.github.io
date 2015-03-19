$(document).ready(function(){
  $('#button').on('click',function(){
  var item = $('#placeholder').val();
  $('ul').append('<li>'+item+'</li>');
  });
});

