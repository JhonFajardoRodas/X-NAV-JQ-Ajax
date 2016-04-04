$(document).ready(function() {
  $.ajax({
    url: 'docx.txt',
    cache: false
  }).done(function(data){
    $('#second').html(data);
    $('#second').click(function(){

      $.ajax({
        url:'docx2.txt',
        cache: false
      }).done(function(data){
          $('#second').append(data);
      });

    });
  }).fail(function(){
    alert("error: document not found")
  });

});
