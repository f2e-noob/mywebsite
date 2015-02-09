if (typeof lancer !== 'object')
	var lancer = {};
	lancer.book = function () {
	var $body = $("body"),
	$book = $("#book"),
	$bookLink = $("#book ul li a"),
	$bookImg = $("#book ul li a img"),
	$bookIntro = $("#bookIntro"),
	$bookIntroImg = $("#bookIntro img"),
	$bookIntroText = $("#bookIntro p"),
	$close = $("#close"),
	$pdfDownload = $("#pdfDownload"),
	blackBg;
	
	function showBookIntro(el) {
		var me = $(el);
		blackBg = document.createElement("div");
		blackBg.id = "blackBg";
		blackBg.style.height = $body.height() + "px";
		$bookIntroImg.attr("src", me.children("img").attr("src"));
		$bookIntroText.html(me.children("img").attr("alt"));
		$pdfDownload.attr("href", me.attr("href"));
		$bookIntro.css("top", $(window).scrollTop() + 100);
		$body.append(blackBg);
		$body.append($bookIntro);
		$bookIntro.show(300);
	}
	
	function hideBookIntro() {
		$(blackBg).remove();
		$bookIntro.hide(300);
	}
	
	function bookPosition() {
		window.onload = function () {
			$bookImg.each(function () {
				var mt = 160 - $(this).height();
				$(this).css("margin-top", mt)
			});
		}
	}
	
	this.onReady = function () {
		if (/msie/i.test(navigator.userAgent)) {
			bookPosition();
		}
		$bookLink.click(function (e) {
			e.preventDefault();
			showBookIntro(this);
		});
		$close.click(function (e) {
			e.preventDefault();
			hideBookIntro();
		});
	};
};

$(function () {
	(new lancer.book).onReady()
});