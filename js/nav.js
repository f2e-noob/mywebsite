if(typeof lancer !=='object') var lancer = {};
lancer.nav = function(){
	var $nav = $("#nav");
	this.onReady = function(){	
		$nav.Fisheye({
			maxWidth: 35,
			items: 'a',
			itemsText: 'span',
			container: '.dock-container',
			itemWidth: 45,
			proximity: 50,
			alignment : 'center',
			valign: 'bottom',
			halign : 'center'
		});
		
	}
}
$(function() {
	(new lancer.nav).onReady()
});