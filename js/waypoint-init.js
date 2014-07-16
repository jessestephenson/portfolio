jQuery(function($) {
 
	$('.work').waypoint(function() {
		document.alert('It works');
	},
	{
		offset: '50%',
		triggerOnce: true
	});
 
});