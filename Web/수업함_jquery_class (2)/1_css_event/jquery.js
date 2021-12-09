/**
 * 
 */

$(function(){
	
	// '감추기' 버튼 클릭시 - 위 그림 안 보이게
	// '보이기' 버튼 클릭시 - 위 그림 보이게
	// '감추기/보이기' 버튼 클릭시 - 토글처럼 보이고 다시 클릭하면 안보이게
	
	// hide()/show()
	// slideUp() / slideDown()
	// fadeIn() / fadeOut()
	
	
	// 테이블구조에서 짝수번째 행에 table_striping 클래스 적용
	$("#celebs tr:odd").addClass('table_striping')
	$("#celebs > table > tbody > tr:odd").addClass('table_striping')
	
	// 테이블에 마우스 올라가면 td_mouseover 클래스 적용
	$('.data tr').hover(function(){
		$(this).addClass('td_mouseover');
	},function(){
		$(this).removeClass('td_mouseover');
	});

	
})