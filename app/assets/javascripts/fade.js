/*
	Created By: Aaron Tennyson 
	Date: 		June 14, 2010
	Copyright:  2010 All Rights Reserved 
*/

//global variables
var photoArray = new Array('#image1', '#image2', '#image3', '#image4', '#image5');
var photoIndex = 0;
var btnLock = false;

$(document).ready(function(){
	
	// get client and container element height and width
	var browserWidth = document.documentElement.clientWidth;
	var browserHeight = document.documentElement.clientHeight;
	var containerHeight = $('#container').height();
	var containerWidth = $('#container').width();
	
	// center the container element in the browser window
	$('#container').css({'position': 'absolute', 'top': (browserHeight / 2) - (containerHeight / 2),
	                     'left': (browserWidth / 2) - (containerWidth / 2 )});		
 
	// attach click handler to previous button and perform some action
	$('#previous-btn').click(function() {
		if(btnLock) return; // ignore click request if a transition is in progress
		else btnLock = true; // remove click handler until transition is complete
 
		// fade photo out
		$(photoArray[photoIndex]).fadeOut('slow', function() {
			photoIndex--;
			if(photoIndex < 0) photoIndex = photoArray.length - 1;
		
			moveToImg(photoIndex);
		});	
	});
	
	// attach click handler to next button and perform some action
	$('#next-btn').click(function() {
		if(btnLock) return; // ignore click request if a transition is in progress
		else btnLock = true; // remove click handler until transition is complete
		
		// fade photo out
		$(photoArray[photoIndex]).fadeOut('slow', function() {
			photoIndex++;
			if(photoIndex > photoArray.length - 1) photoIndex = 0;
			
			moveToImg(photoIndex);
		});	
	});
	
	// transition in first image
	moveToImg(photoIndex);
});
 
function moveToImg(id)
{	
	$(photoArray[id]).fadeIn('slow', function() {
		btnLock = false;
	}); 
}
