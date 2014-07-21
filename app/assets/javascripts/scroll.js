// $(function(){
//   $('#Project').localScroll({
//   duration:800
//   });

//   })


$(function() {
    var y=0;
    $("#Project").click(function(e){
        e.preventDefault();
        $(".maincontentcontainer").animate({scrollTop: y+=800}, 1000);
    }) 
})