// Explore Button Function 

$(".link-button").on("mouseover",function(){
    $(".link-button").css('transform','scale(1.05)');
    $(".link-button").css('transition','.4s');
  
});

$(".link-button").on("mouseleave",function(){
    $(".link-button").css('transform','scale(1.0)');
  
});