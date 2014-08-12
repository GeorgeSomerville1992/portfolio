// $(function(){
//   $('#Project').localScroll({
//   duration:800
//   });

//   })


$(function() {
    var y=0;
    $("#Projectt").click(function(e){
      console.log("go!");
        e.preventDefault();
        $(".maincontentcontainer").animate({scrollTop: y+=800}, 1000);
    }) 
})


// $(document).ready(function() {
//    $('#Projectt').localScroll({duration:800});
// });