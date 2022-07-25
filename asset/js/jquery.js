$(function(){

  $('.sc-latest .img-box').hover(function(e){
    e.preventDefault();
   
    $(this).addClass('bg');
    $(this).find('.txt').show();
  },function(){
    $(this).removeClass('bg');
    $(this).find('.txt').hide();

  })

 var tll = gsap.timeline({
  repeat:-1
 });
  
 tll.to('.arrow', {
  y:20, duration:1,
 })
 tll.to('.arrow', {
  y:0, duration:1 ,
 })








})