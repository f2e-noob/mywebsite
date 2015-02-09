if(typeof lancer !== 'object') var lancer = {};
lancer.indexPage = function() {
	var that = this;
	var $logo_group = $("#logo-group");
	var $animateSth = $logo_group.find("dl:not(':last')");

	var toTop = function(e) {
			var $e = $(e);
			$e.find("dd").animate({
				"top": "-40px"
			}, 400).end().find("dt").fadeIn().animate({
				"top": "100px"
			}, 400);
		};

	var toBottom = function(e) {
			var $e = $(e);
			$e.find("dd").animate({
				"top": "0"
			}, 400).end().find("dt").animate({
				"top": "140px"
			}, 400);
		};

	var animated = function(e) {
			var $e = $(e);
			$e.addClass("animated rotateIn");
		};

	this.showPage = function(el, link) {
		var $el = $(el);
		var startLeft = $el[0].offsetLeft + 90,
			startTop = $el[0].offsetTop + 250;

		var blackBg = document.createElement("div");
		blackBg.className = "black-bg";

		var iframeCloseBtn = document.createElement("button");
		iframeCloseBtn.className = "iframe-close-btn";
		iframeCloseBtn.innerHTML = "X";

		var iframeModal = document.createElement("iframe");
		iframeModal.className = "iframe-modal";
		iframeModal.src = link;

		var $iframeModal = $(iframeModal);

		function getScrollTop() {
			return Math.max(document.documentElement.scrollTop, document.body.scrollTop)
		}

		$("body").addClass("no-scroll");
		$iframeModal.css({
			left: startLeft,
			top: startTop
		}).appendTo("body").fadeIn(400, function() {


			$iframeModal.animate({
				width: "95%",
				height: window.screen.availHeight-240,
				left: "50%",
				top: getScrollTop() + 50,
				marginLeft: "-48%"
			}, 300, function() {
				$(iframeCloseBtn).appendTo("body").show();
			});
		});

		iframeCloseBtn.onclick = function() {
			$(blackBg).remove();
			$(this).remove();
			$("body").removeClass("no-scroll");
			$iframeModal.animate({
				width: "180px",
				height: "140px",
				left: startLeft,
				top: startTop,
				marginLeft: 0
			}, 300, function() {
				$iframeModal.fadeOut(500, function() {
					$iframeModal.remove();
				});
			})
		}

		$iframeModal.contents().ready(function(){
			setTimeout(aClick,1000);
			function aClick(){
				$iframeModal.contents().find("a").click(function(e){
					if($(this).attr("href") == "#" || $(this).attr("href") == ""){
						e.preventDefault()
					}
				});
			}
		});		

		$(blackBg).appendTo("body").show();
	}
	this.onReady = function() {
		$logo_group.find("dl:last").children("dd").css("padding-top", "60px");

		$animateSth.hover(

		function() {
			toTop(this)
		}, function() {
			toBottom(this)
		});

		$animateSth.click(function(e) {
			e.preventDefault();
			var thisLink = $(this).find("a").attr("href");
			if(thisLink) {
				that.showPage(this, thisLink);
			}
		});

		$animateSth.each(function() {
			var me = $(this);
			var thisLink = me.find("a").attr("href");
			if(thisLink) {
				me.addClass("haslink");
			}
		});
	}
};
$(function() {
	(new lancer.indexPage).onReady()
});