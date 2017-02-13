;(function($){
	$(".ting-img>img").mouseover(function(){
	    $(".ting-span").fadeIn("slow");
	})
	$(".ting-span").mouseout(function(){
	    $(".ting-span").fadeOut("slow");
	})
	$(".radio-img2").mouseover(function(){
	    $(".radio-span").fadeIn("slow");
	    $(".radio-span1").fadeIn("slow");
	})
	$(".radio-span1").mouseout(function(){
	    $(".radio-span").hide();
	    $(".radio-span1").hide()
	})
	
})(jQuery);
