if(typeof lancer !=='object') var lancer = {};
lancer.print = function(){
	this.onReady = function(){
		var $print = $("#print");
		$print.click(function(e){
			e.preventDefault();
			window.print();
		});	
	};
};

$(function(){(new lancer.print).onReady()});