var _paq = _paq || [];

PAI(function() {
	var opt = PAI['getOptions']()['plugins']['piwik'],
		baseUrl = opt['baseUrl'],
		cdn			= opt['cdn'];

	_paq.push(['setSiteId', opt['siteId']]);
	_paq.push(['setTrackerUrl', baseUrl + 'piwik.php']);

	PAI['addListener']('pageload', function() {
		_paq.push(['setCustomUrl', PAI['LINK']]);
		_paq.push(['trackPageView']);
	});


	PAI['loadScript']((cdn ? cdn : baseUrl) + 'piwik.js');
});
