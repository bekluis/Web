/**
 * 
 */

$(function(){
	
	$('.menu img').mouseenter(function(){
		var srcText = $(this).attr('src');  // "imgs/menu02_off.png"
		var srcText2 = srcText.replace('_off','_on') // "imgs/menu02_on.png"
		$(this).attr('src', srcText2);
		
		//var srcText2 = $(this).attr('src').replace('_off','_on')
		//$(this).attr('src', srcText2);
		
		//$(this).attr('src', $(this).attr('src').replace('_off','_on'));
	});
	
	
	// 마우스가 나갔을 때
	
})