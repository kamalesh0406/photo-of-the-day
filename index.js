$.get('https://www.nationalgeographic.com/photography/photo-of-the-day/',function(response){
	console.log(response)
	var picture = $(response).filter('meta[property="og:image"]').attr("content");
	$('body').css('background', `url(${picture}) no-repeat center center fixed`);
	$('body').css('background-size','cover');
})