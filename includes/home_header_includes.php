<script src="/javascript/jquery.zrssfeed.min.js" type="text/javascript"></script> 
<script src="/javascript/jquery.vticker.js" type="text/javascript"></script>
<script>
//elastic menu script
$(function(){
	$('.menuitem img').animate({width: 160}, 0); //Set all menu items to smaller size

	$('.menuitem').mouseover(function(){ //When mouse over menu item

		gridimage = $(this).find('img'); //Define target as a variable
		gridimage.stop().animate({width: 184}, 150); //Animate image expanding to original size

	}).mouseout(function(){ //When mouse no longer over menu item

		gridimage.stop().animate({width: 160}, 150); //Animate image back to smaller size

	});
});

// rss ticker

$(function() {
 $('#articles div').rssfeed('http://feeds.feedburner.com/power9pro', {
    limit: 5, 
	date:false
  }).ajaxStop(function() {
		$('#articles div div.rssBody').vTicker({showItems: 1, animation: 'fade',speed: 1000, pause:8000});
	});
 
 $('#video div').rssfeed('http://feeds.feedburner.com/power9pro-videos', {
    limit: 5, 
	date:false
	}).ajaxStop(function() {
		$('#video div div.rssBody').vTicker({ showItems: 1, animation: 'fade',speed: 1000, pause:8000 });
	});
});



$(function() {
		   $('.testimonials').vTicker({
speed: 1000,
pause:8000,
showItems: 1,
animation: 'fade',
height: 0,
direction: 'up'
});
		   
		   });
</script> 