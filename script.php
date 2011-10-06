<?php

function pai_piwik_scripts() {
	$conf = pai_conf('plugins', 'piwik');
	?><noscript><p><img src="<?php echo $conf['baseUrl']; ?>piwik.php?idsite=<?php echo $conf['siteId'] ?>" style="border:0" alt="" /></p></noscript><?php
}

pai_add_action('scripts', 'pai_piwik_scripts');
