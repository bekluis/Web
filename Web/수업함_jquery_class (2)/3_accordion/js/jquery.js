/**
 * 
 */

$(function(){

	$('.accordion').each(function(){
		var allDt = $(this).find('dt')
		var allDd = $(this).find('dd')
		
		allDd.hide();
		//$('.accordion dd:first').show()
		allDd.first().show()

		allDt.css('cursor','pointer');
		
		allDt.click(function(){
			allDd.slideUp();
			$(this).next().slideDown(); // show() / toggle()
		});
	})
	
})


