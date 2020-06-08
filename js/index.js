$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
});
$(document).ready(function(){
        $('.menu-toggle-mobile').click(function(){
            $('.menu-toggle-mobile').toggleClass('active')
            $('nav').toggleClass('active')   
       })
    })
function servicesF() {
var x = document.getElementById("services-d");
  if (getComputedStyle(x, null).display === 'none') {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function linksF() {
  var x = document.getElementById("links-d");
  if (getComputedStyle(x, null).display === 'none') {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
jQuery.fn.liScroll = function(settings) {
	settings = jQuery.extend({
		travelocity: 0.03
		}, settings);		
		return this.each(function(){
				var $strip = jQuery(this);
				$strip.addClass("newsticker")
				var stripHeight = -250;
				$strip.find("li").each(function(i){
					stripHeight += jQuery(this, i).outerHeight(true); 
				});
				var $mask = $strip.wrap("<div class='mask'></div>");
				var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");								
				var containerHeight = $strip.parent().parent().height();	 	
				$strip.height(stripHeight);			
				var totalTravel = stripHeight;
				var defTiming = totalTravel/settings.travelocity;			
				function scrollnews(spazio, tempo){
				$strip.animate({top: '-='+ spazio}, tempo, "linear", function(){$strip.css("top", containerHeight); scrollnews(totalTravel, defTiming);});
				}
				scrollnews(totalTravel, defTiming);				
				$strip.hover(function(){
				jQuery(this).stop();
				},
				function(){
				var offset = jQuery(this).offset();
				var residualSpace = offset.top + stripHeight;
				var residualTime = residualSpace/settings.travelocity;
				scrollnews(residualSpace, residualTime);
				});			
		});	
};
$(function(){
    $("ul#ticker01").liScroll();
});