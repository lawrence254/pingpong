$(document).ready(function() {
  $('#submit').click(function(event) {
    var num = parseInt($('input#number').val());
    event.preventDefault();
    var output=pingpong(num);
  });
  function pingpong(num){
    
  }
});
