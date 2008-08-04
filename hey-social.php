<?php
/*
Plugin Name: Hey Social
Plugin URI: http://blog.andreaolivato.net/en/hey-social/
Description: A web 2.0 way of enhancing users interaction on submitting your posts to Social services.
Version: 0.1-alpha
Author: Andrea Olivato
Author URI: http://blog.andreaolivato.net/en/
*/
/*  Copyright 2008  Andrea Olivato  (email : embrace.lenar@gmail.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
*/


function hs_all() {
	$hs_siteurl = get_settings('siteurl');
	hs_writeCss("hey-social");
	hs_writeScript("mootools-mod.js");
	hs_writeScript("hey-social.php?siteurl=$hs_siteurl");
}

function hs_writeScript($script) {
	echo "<script type='text/javascript' src='/wp-content/plugins/hey-social/js/".$script."'></script>";
}

function hs_writeCss($css) {
	echo "<link rel='stylesheet' href='/wp-content/plugins/hey-social/css/".$css.".css' type='text/css' media='screen' />";
}

add_action('wp_head', 'hs_all');

?>
