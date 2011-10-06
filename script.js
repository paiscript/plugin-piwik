var _paq = _paq || [];

PAI(function() {
	var opt = PAI['getOptions']()['plugins']['piwik'],
		baseUrl = PAI['normalizeUrl'](opt['baseUrl']);

	_paq.push(['setSiteId', opt['siteId']]);
	_paq.push(['setTrackerUrl', baseUrl + 'piwik.php']);

	PAI['addListener']('pageload', function() {
		_paq.push(['setCustomUrl', PAI['LINK']]);
		_paq.push(['trackPageView']);
	});

	PAI['loadScript'](baseUrl + 'piwik.js');
});
