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
				var stripHeight = -1;
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
				// scrollnews(totalTravel, defTiming);				
				$strip.mouseover(function(){
					jQuery(this).stop();
				});
				$strip.mouseout(function(){
				 	var offset = jQuery(this).offset();
					var residualSpace = offset.top + stripHeight;
					var residualTime = residualSpace/settings.travelocity;
					scrollnews(residualSpace, residualTime);
				});			
		});	
};

$(function(){
    $.get('../news.csv', function(data) {
        // data = "date,head,url\n21,head,hoog\n22,head,hoo\n24,head,hoog\n21,head,hoog\n22,head,hoo\n24,head,hoog\n21,head,hoog\n22,head,hoo\n24,head,hoog"
        lines = data.split("\n");
        // console.log(lines);
        if(lines.length == 1){
            $("#ticker01").html("No New Updates");
            $("#view-list").html("No New Updates");
        }
        else{
            // console.log(lines);
            var dates = 0;
            var old_date = lines[1].split(',')[0];
            var result = '';
            var result_viewall = '';
            var res = "<li style='font-weight: 600; color: #222222;'>" +  old_date + "</li>";
            var res_viewall = res;
            for(var i=1;i<lines.length;i++){
                line = lines[i].split(',');
                // console.log(line);
                if(old_date != line[0]){
                	res_viewall = res_viewall + "<br />";
                	res = res +  "<hr />";
                    result = result + res;
                    result_viewall = result_viewall + res_viewall;
                    old_date = line[0];
                    res = "<li style='font-weight: 600; color: #222222;'>" +  old_date + "</li>";
                    res_viewall  = res;
                    dates = dates + 1;
                    if(dates > 4){
                        break;
                    }
                }
                heading = line[1];
                url = line[2];
                sub_val = "<li style='font-size: 14px;'><img src='./images/right-arrow.svg' alt=''><a href='" + url + "' target='_blank'>" + heading + "</a></li>";
                sub_val_viewall = "<li style='font-size: 14px;'><img src='../images/right-arrow.svg' alt=''><a href='" + url + "' target='_blank'>" + heading + "</a></li>";
                res = res + sub_val;
                res_viewall = res_viewall + sub_val_viewall;
            }
            // console.log(result)
            $("#ticker01").html(result);
            $("#view-list").html(result_viewall);
        }
    });
});
$(function(){
    $("ul#ticker01").liScroll();
});
