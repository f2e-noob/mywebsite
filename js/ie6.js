if(typeof lancer !=='object') var lancer ={};	
lancer.ie6 = function(){	
	if (window.ActiveXObject) {
		var ie = navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/)[1]
		if(ie==6.0){
			window.location.href = "killie6.html"
		}
	}
};
lancer.ie6()