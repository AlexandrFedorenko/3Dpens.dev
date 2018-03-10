$(document).ready(function() {
// colors pen
   $('.yeloww2').click(function(){
       $(".yelow").addClass('activ');
       $(".orang").removeClass('activ');
       $(".gra").removeClass('activ');
       $(".blue").removeClass('activ');
   })
   $('.orang2').click(function(){
       $(".orang").addClass('activ');
       $(".yelow").removeClass('activ');
       $(".gra").removeClass('activ');
       $(".blue").removeClass('activ');
   })
   $('.gra2').click(function(){
       $(".gra").addClass('activ');
       $(".yelow").removeClass('activ');
       $(".orang").removeClass('activ');
       $(".blue").removeClass('activ');
   })
    $('.bluee2').click(function(){
       $(".blue").addClass('activ');
       $(".yelow").removeClass('activ');
       $(".orang").removeClass('activ');
       $(".gra").removeClass('activ');
   })
    //
     $('.feol2').click(function(){
       $(".feol").addClass('activ');
       $(".laz").removeClass('activ');
       $(".roz").removeClass('activ');
       $(".yea").removeClass('activ');
   })
   $('.laz2').click(function(){
       $(".laz").addClass('activ');
       $(".feol").removeClass('activ');
       $(".roz").removeClass('activ');
       $(".yea").removeClass('activ');
   })
   $('.roz2').click(function(){
       $(".roz").addClass('activ');
       $(".laz").removeClass('activ');
       $(".feol").removeClass('activ');
       $(".yea").removeClass('activ');
   })
    $('.yea2').click(function(){
       $(".yea").addClass('activ');
       $(".feol").removeClass('activ');
       $(".laz").removeClass('activ');
       $(".roz").removeClass('activ');
   })
    
    
    
$('.ca').hover(function(){
    $("#ac1").addClass("activ");
    $('#ac2').removeClass("activ");
});
    $('.acc').hover(function(){
    $("#ac2").addClass("activ");
    $('#ac1').removeClass("activ");
});

$("#chek").click(function(){

        $(this).toggleClass("chec");

     
});

$("#chek2").click(function(){
        $(this).toggleClass("chec");

   
});
	$(".zak").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
        
		$.ajax({
			type: "POST",
			url: "../mail.php",
			data: $("form").serialize()
		}).done(function() {
			
          swal(
  'Ваше сообщение отправлено',
  'Спасибо!',
  'success'
)
			
		});
		return false;
	});


    

});

$('#phone').bind('change',function(event){
    var target = $(event.target);
    var value = target.val();
    if (value.length < 11){
        
    }
})