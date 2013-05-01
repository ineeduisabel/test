	var aImages = new Array();
	var aURL = new Array();
	var aArtists = new Array();
	var iPrev = -1;
	var iRnd = -1;
	
	aImages[0] = "http://www.brentsidehighschool.info/bhs/images/stories/business-flier.jpg";
	aImages[1] = "http://www.bessphere.com/wp-content/themes/smallbiz/images/internet_business_23-wallpaper-1440x900.jpg";
	aImages[1] = "http://images.flatworldknowledge.com/lau/lau-fig13_006.jpg";
    /*
	aURL[0] = "http://kunst.canvasinabox.com/?_globalsearch=47-7";
	aURL[1] = "http://kunst.canvasinabox.com/?_globalsearch=48-7";
	aURL[2] = "http://kunst.canvasinabox.com/?_globalsearch=46-7";
	aURL[3] = "http://kunst.canvasinabox.com/?_globalsearch=133-18";
	aURL[4] = "http://kunst.canvasinabox.com/?_globalsearch=174-27";
	aURL[5] = "http://kunst.canvasinabox.com/?_globalsearch=173-27";
	aURL[6] = "http://kunst.canvasinabox.com/?_globalsearch=25-5";
	
	aArtists[0] = "Marcel Verkaart";
	aArtists[1] = "Marcel Verkaart";
	aArtists[2] = "Marcel Verkaart";
	aArtists[3] = "Marco Schippers";	
	aArtists[4] = "Sylvia Hennequin";
	aArtists[5] = "Sylvia Hennequin";
	aArtists[6] = "Jonathan Vos";*/
	
	$(document).ready(function() {
	
		/* Define the function that triggers to fade in the background as soon as the image has loaded */
		$("img#bg").load(function()
			{
				/* Fade in during 3 seconds */
				$("img#bg").fadeTo(3000,1);
				
				/* Animate the picture description during 1 second */
				/*setTimeout(function() { $("#image_description").animate({right: '+=150'}, 1000) }, 1000);*/
			
				/* Set the timeout to fade out the image and the description after 10 seconds*/
		    	setTimeout(function() 
			    	{
			    		$("#image_description").animate({right: '-=150'}, 1000);
			    		$("img#bg").fadeOut(3000);
			    		
			    		/* Load the next image after 4 seconds */
			    		setTimeout(LoadImages,4000);
			    	}
			    	,10000);
			}			
		)
	
		/* Start the slideshow one second after the page is ready */ 
		setTimeout(LoadImages,1000);
		
    });

    function LoadImage(iNr)
	{
	
		/* Assign the new image to the background */
		$("img#bg").attr("src", aImages[iNr]);
 		
 		/* Assign the artist name to the description */
 		$("#image_artist").html(aArtists[iNr]);
 		
 		/* Assign the image url to the description */
        $("a#image_url").attr("href", aURL[iNr]);
        $("a#image_url").html("for sale @canvasinabox.com");
                        	
    };
    
    function LoadImages()
    {
    	
    	/* Select a random image number and make sure this is not equal to the previous image */
    	while(iPrev == iRnd)
    	{
    		iRnd = Math.floor(Math.random()*aImages.length);
    	}
    	
    	/* Show the selected image */
    	LoadImage(iRnd);
    	
    	iPrev = iRnd;
    	
    };
	(function($) {
 
    $.fn.GPlusCircle = function(options) {
        // Create some defaults, extending them with any options that were
        // provided
        var settings = $.extend({
            'id' : 'circle',
            'text' : 'circle',
            'tooltip' : 'circle',
            'link' : 'http://www.google.com'
        }, options);
 
        return this.each(function() {
 
            var opt = options;
 
            // 'circle1','#circles'
            var circle = jQuery('<div/>', {
                id : opt.id
            }).appendTo(this);
            circle.addClass('circle');
 
            var outer = jQuery('<div/>', {
                id : 'outer_' + opt.id
            }).appendTo(circle);
            outer.addClass('outer-circle');
            var middle = jQuery('<div/>', {
                id : 'middle_' + opt.id
            }).appendTo(circle);
            middle.addClass('middle-circle');
            var inner = jQuery('<div/>', {
                id : 'inner_' + opt.id,
                href : opt.link,
                title : opt.tooltip,
                rel : 'external',
                text : opt.text
            }).appendTo(circle);
            inner.addClass('inner-circle');        
 
            circle.mouseover(function() {
                $('#outer_' + opt.id).addClass('hover');
                $('#middle_' + opt.id).addClass('hover');
            });
            circle.mouseout(function() {
                $('#outer_' + opt.id).removeClass('hover');
                $('#middle_' + opt.id).removeClass('hover');
            });
        });
    }
})(jQuery);
