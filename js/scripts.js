$(function() {
  $("button#catbutton").click(function() {
    $("ul#catbox").append("<li>MEOW!</li>");
    $("ul#dogbox").append("<li>BARK!</li>");
  });
  $("button#dogbutton").click(function(){
    $("ul#dogbox").append("<li>BARK!</li>");
    $("ul#catbox").append("<li>MEOW!</li>");
  });
});
