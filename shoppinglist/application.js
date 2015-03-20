$(document).ready(function(){
  $('#add').on('click',function(){
  var item = $('#placeholder').val();
  $('ul').append('<li>'+item+'</li>');
  });
  $('#clear').on('click',function(){
  $('ul').empty();
  });
  $('#add').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
   $('ul').append('<li>'+item+'</li>');
    }
});
});

