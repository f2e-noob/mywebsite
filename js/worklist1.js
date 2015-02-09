if(typeof lancer !=='object') var lancer = {};
lancer.workList = function(){
	var $workList = $("#work-list"),
		$workListLi = $("#work-list li"),
		$showBigPic = $(".big-pic");

	this.waterFall = function(){
		$workList.gridalicious({
			width: 175,
			gutter: 20,
			selector: 'li',
			animate: true,
			animationOptions: {
				queue: true,
				speed: 200,
				duration: 300,
				effect: 'fadeInOnAppear'
			}
		});
	}

	this.showBigPic = function(){
		var appendPic = function (me,x,y){
/*			var thisSrc = $(me).find("img").attr("src");
*/			var bigPic = "<img src="+thisSrc.slice(0,-4) + "_big.jpg />";
			$showBigPic.html(bigPic);
			$showBigPic.appendTo("body").show().css({"top":y,"left":x});
		}		
		$workListLi.bind("mousemove",function(e){
			e.preventDefault();
 			var thisY = e.pageY + 20,
				thisX = e.pageX + 20;
			appendPic(this,thisX,thisY);
		});

		$workListLi.bind("mouseout",function(e){
			e.preventDefault();
 			$showBigPic.hide().empty();	
		});
	};

	this.onReady = function(){
		this.waterFall();
		this.showBigPic();
	};
};

$(function(){(new lancer.workList).onReady()});
