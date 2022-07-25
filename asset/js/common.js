$(function(){

  function coin(){
    const arrPosition = [
      '-120px 0',
      '-240px 0',
      '-358px 0',
      '-484px 0',
      '-594px 0'
    ]

for (let i = 0; i < arrPosition.length; i++) {
    setTimeout(function(){            
   $('.ic-coin').css({'background-position':arrPosition[i]})
},100*i)
}
  }
  coin()

  setInterval(function(){
    coin()
  },500)

 $('.ic-coin').each(function(index,item){
  t = $(this).data('top');
  l = $(this).data('left');
  b = $(this).data('bottom');
  r = $(this).data('right');
  

  $(this).css({top:t,left:l,right:r,bottom:b})

 })

 $('.ic-coin').click(function(){
  msg = $(this).data('msg');
  alert(msg)
  $(this).remove();
})

    //header 
    $('.btn-menu').click(function(e){
      e.preventDefault();

      $('.sub-menu').toggleClass('on');
    })
})
