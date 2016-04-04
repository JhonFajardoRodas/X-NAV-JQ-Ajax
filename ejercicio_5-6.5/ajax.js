$(document).ready(function() {
  $.ajax({
    url: 'docx.txt',
    cache: false
  }).done(function(data){
    $('#first').click(function(){
      $('#second').html(data);
    });
  }).fail(function(){
    alert("error: document not found")
  });

});
