if(typeof lancer !=='object') var lancer ={};	
lancer.mobi = function(){
	if(navigator.userAgent.match(/AppleWebKit.*Mobile.*/) && window.innerWidth < 980 ){
		window.location.href = "mobi/index.html"
	}
};
lancer.mobi();