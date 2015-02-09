$(function(){
	//滚动加载图片
	$(".work-list li img,.work-tc ul li img").addClass("scrollLoading");
	$(".work-list li:first img:first,.work-work-tc ul li:first img:first").removeClass("scrollLoading");
	$(".scrollLoading").scrollLoading(); 

	if(typeof lancer !=='object') var lancer = {};
	
	//浏览大图加详情
	lancer.toggleContent = new (function(){
		var thisHeight,thisLink,$goBtn;
		this.showBlack = function(e){
			thisHeight = $(e).height();
			if( $(e).children().is("a") )
			{
				thisLink = $(e).children("a").attr("href"); 
				$goBtn = $("<a id='visit' target='_blank'>点击浏览</a>"); 
				$goBtn.attr("href",thisLink);
				$(e).children("h3").append($goBtn);	 
			}
			$(e).children("h3").css({"height":thisHeight,"line-height":thisHeight+"px"}).fadeTo("normal", 0.66);	
		}	
		this.hideBlack = function(e){
			$(e).children("h3").fadeOut().children("a");
			$(e).children("h3").children("a").remove();
			thisHeight="";
			thisLink="";
			$goBtn="";
		}
	});
	$(".work-list li").hover(
	  function () {	lancer.toggleContent.showBlack(this)},
	  function () {	lancer.toggleContent.hideBlack(this)}
	);  
})