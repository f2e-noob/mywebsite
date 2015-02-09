if(typeof lancer !=='object') var lancer = {};
lancer.experience = function(){
	var nowpage = $("h2").find("strong").text(), 
		$experience = $("#experience"),
		$experienceDl = $experience.find("dl"),
		$experienceDt = $experienceDl.find("dt"), 
		$experienceDd = $experienceDl.find("dd"),
		$experience = $("#experience-nav");					
	var copyToTextArea = function(el){	
		var $el = $(el),
			thisHtml = $(el).html(),
			thisTxt = $(el).text(),	
			codeEditor = "<textarea class='textArea'>"	+ thisTxt +"</textarea><button class='run'>运行</button><button class='close'>取消</button>" ;
		$el.find(".coding").hide().end().append(codeEditor);		
	}
	this.onReady = function(){
		$("#experience-nav li a:contains('" + nowpage + "')").parent().addClass("cur"); 
		$experienceDd.find("table").find("tr:odd").addClass("zebra");
		$experienceDd.hide().wrapInner("<div class='coding'></div>");
		$experienceDt.toggle(
			  function () {	$(this).next("dd").slideDown()},
			  function () {	$(this).next("dd").slideUp()}
		);
		$experienceDd.dblclick(function(){
			if(!$(this).hasClass("canNotRun")){
				if (!$(this).children().is("textarea")){
					copyToTextArea(this);
				}
			}
		});	
		$("button.run").live('click',function(){
			var coding = $(this).prev("textarea").val();
			eval (coding);
		});
		$("button.close").live('click',function(){
			var thisHtml = $(this).next("div").html();
			$(this).siblings(".coding").show().siblings().remove();
		});	
		
		$experience.find("a").click(function(e){
			e.preventDefault();
			var thisLink = $(this).attr("href");
			$experience.addClass("animated hinge");
			function gotoUrl(){
				window.location.href = 	thisLink
			}
			setTimeout(gotoUrl,1800)	
		});
		
		
		
	};	
};
$(function() {(new lancer.experience()).onReady()});