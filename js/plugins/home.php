<?php 
	$site_url = $_GET['siteurl'];
?>

{
	'name':'Hey Social - Home',
	'autor': 'Andrea Olivato',
	'info': 'Add HomePage to Social Sites',
	items: [
		{
			'name':'Digg <img src="/wp-content/plugins/hey-social/img/digg.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Add this site Digg profile',
			'action': function() {
					location.href="http://digg.com/submit?phase=2&url=<?php echo urlencode($site_url); ?>";				
			}
		},
		{
			'name':'FaceBook<img src="/wp-content/plugins/hey-social/img/facebook.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Talk about us on FaceBook',
			'action': function() {
					location.href="http://www.facebook.com/sharer.php?u=<?php echo urlencode($site_url); ?>";				
			}
		},
		{
			'name':'MySpace<img src="/wp-content/plugins/hey-social/img/myspace.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Talk about us on MySpace',
			'action': function() {
					location.href="http://www.myspace.com/Modules/PostTo/Pages/?t=ChangeTitle&c=<?php echo urlencode($site_url); ?>";				
			}
		},
		{
			'name':'Reddit<img src="/wp-content/plugins/hey-social/img/reddit.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Share us on Reddit',
			'action': function() {
					location.href="http://www.reddit.com/login?dest=%2Fsubmit%3Furl%3D<?php echo urlencode($site_url); ?>";				
			}
		},
		{
			'name':'Twitter <img src="/wp-content/plugins/hey-social/img/twitter.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Twit Us!!!',
			'action': function() {
					location.href="http://twitthis.com/twit?url=<?php echo urlencode($site_url); ?>";				
			}
		},
		{
			'name':'Technorati <img src="/wp-content/plugins/hey-social/img/technorati.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Favourite this blog Technorati',
			'action': function() {
					location.href="http://www.technorati.com/faves?add=<?php echo urlencode($site_url); ?>";				
			}
		}
	]
}
