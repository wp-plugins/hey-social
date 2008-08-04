{
	'name':'Hey Social - Page',
	'autor': 'Andrea Olivato',
	'info': 'Add pages to Social sites',
	items: [
		{
			'name':'Delicious<img src="/wp-content/plugins/hey-social/img/delicious.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Add this page to your De.Licio.Us Bookmarks',
			'action': function() {
					location.href="http://del.icio.us/post?url=<?php echo urlencode($_GET['page']); ?>";				
			}
		},
		{
			'name':'Digg <img src="/wp-content/plugins/hey-social/img/digg.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Add this article to your Digg profile',
			'action': function() {
					location.href="http://digg.com/submit?phase=2&url=<?php echo urlencode($_GET['page']); ?>";				
			}
		},
		{
			'name':'Google<img src="/wp-content/plugins/hey-social/img/google.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Put this on iGoogle Bookmarks',
			'action': function() {
					location.href="http://www.facebook.com/sharer.php?u=<?php echo urlencode($_GET['page']); ?>";				
			}
		},
		{
			'name':'FaceBook<img src="/wp-content/plugins/hey-social/img/facebook.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Talk about us on FaceBook',
			'action': function() {
					location.href="http://www.facebook.com/sharer.php?u=<?php echo urlencode($_GET['page']); ?>";				
			}
		},
		{
			'name':'Magnolia <img src="/wp-content/plugins/hey-social/img/magnolia.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Add this post to your Magnolia bookmarks',
			'action': function() {
					location.href="http://ma.gnolia.com/bookmarklet/add?url=<?php echo urlencode($_GET['page']); ?>";				
			}
		},
		{
			'name':'MySpace<img src="/wp-content/plugins/hey-social/img/myspace.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Talk about us on MySpace',
			'action': function() {
					location.href="http://www.myspace.com/Modules/PostTo/Pages/?t=ChangeTitle&c=<?php echo urlencode($_GET['page']); ?>";				
			}
		},
		{
			'name':'Reddit<img src="/wp-content/plugins/hey-social/img/reddit.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Share this on Reddit',
			'action': function() {
					location.href="http://www.reddit.com/login?dest=%2Fsubmit%3Furl%3D<?php echo urlencode($_GET['page']); ?>";				
			}
		},
		{
			'name':'Stumble Upon<img src="/wp-content/plugins/hey-social/img/stumbleupon.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Add this post to Stumble Upon',
			'action': function() {
					location.href="http://www.stumbleupon.com/submit?url=<?php echo urlencode($_GET['page']); ?>";				
			}
		},
		{
			'name':'Twitter <img src="/wp-content/plugins/hey-social/img/twitter.png" style="margin-top:-15px;border:0;" align="right">',
			'desc': 'Twit Us!!!',
			'action': function() {
					location.href="http://twitthis.com/twit?url=<?php echo urlencode($_GET['page']); ?>";				
			}
		}
	]
}
