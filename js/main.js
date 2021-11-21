$(function(){

$(".sub-img-box > .sub-img > .slider > a").click(function(){
  /* 
  1. 현재 클릭한 a태그(썹네일 이미지) 이미지 주소 읽음
  2. .img-box src에 주소값 쓰기
  */
  var img = $(this).find("img").attr("data-img");
  console.log(img);

  $(".img-box > img").attr("src", img);  

  return false;

})


});