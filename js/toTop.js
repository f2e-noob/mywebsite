//beyond jquery-scrollTo-min.js

if(typeof lancer !=='object') var lancer = {};
lancer.toTop = function(){
	var showBtn = function(el){
		if ( $(document).scrollTop() == 0 )
		{
			el.hide();	
		}else{
			el.fadeIn();		
		}	
	};
	var goToTop = function(){
		$.scrollTo('#top',1000);
	}
	this.onReady = function(){
		var $totopbtn = $("#to-top");
		$(window).scroll(function(){showBtn($totopbtn)});
		$totopbtn.click(function(e){
			e.preventDefault();
			$('body,html').animate({scrollTop:0}, 'slow'); 
			return false; 
		});	
	};
};

$(function(){(new lancer.toTop).onReady()});