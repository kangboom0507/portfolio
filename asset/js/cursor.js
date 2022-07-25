$(function(){

    $(document).mousemove(function(e){

        var mouseX = e.clientX;  //현재화면
        var mouseY = e.clientY;

        $(".cursor").show().css({
            left:mouseX + "px",
            top:mouseY + "px",
        })
    })
    
    $(window).load(function(){
        $('.spinner').delay('3000').fadeOut();
      })
})