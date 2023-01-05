$(".nav-tabs li").click(function(event) {
	var option = $(this).attr('id');

	if($('.container-info').children().length != " "){
		$('.container-info .info').fadeOut('fast');
		$('.container-info .info').appendTo('.infos');
	}

	setTimeout(function(){
		$('.info.'+option).appendTo('.container-info');
		$('.info.'+option).fadeIn('fast');
	},300)

});
