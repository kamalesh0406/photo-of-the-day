$.get('https://www.nationalgeographic.com/photography/photo-of-the-day/',function(response){
	var picture = $(response).filter('meta[property="og:image"]').attr("content");
	$('body').css('background', `url(${picture}) no-repeat center center fixed`);
	$('body').css('background-size','cover');
});
chrome.topSites.get(function(data){
	console.log(data);
	var i = 0
	data.forEach(function(website){
		var favicon = website.url + "favicon.ico"
		$("#sites").append(`<div class="col-md-6"><a class="btn" href="${website.url}" role="button"><img class="img-fluid" src="${favicon}""></img></a></div>`)
	});
})