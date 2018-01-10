var CONFIG = {
	"CMS_URL": "https://wrps.api.dev-qy.dorel-app.net/",
	"DIO_API_URL": "https://api.dorel.io/v1",
	"ECOM_URL": "https://mage2.api.master-mc.dorel-app.net",
	"AVAILABLE_BRANDS": [{
		"label": "Maxi-Cosi",
		"value": 0
	}, {
		"label": "Dorel",
		"value": 1
	}, {
		"label": "Quinny",
		"value": 2
	}, {
		"label": "Bebe-Confort",
		"value": 3
	}],
	"SELECTED_BRAND": 0,
	"BRAND_SELECTED": "Quinny",
	"LOCALE": {
		"COUNTRY_NAME": "Australia",
		"COUNTRY_CODE": "AU",
		"CODE": "uk-en",
		"LANGUAGE": "en",
		"LANG_CONTENT": "uk-en",
		"LINK_ALT": "http://www.maxi-cosi.com/au-en"
	},
	"BYNDER_API_URL": "https://dam.doreljuvenile.com/api/",
	"BYNDER_CONSUMER_KEY": "CCA3E48C-184A-49C7-B322303E639A848E",
	"BYNDER_CONSUMER_KEY_SECRET": "68eeda6cc0bb999e56fe0add1539fa75",
	"BYNDER_TOKEN_KEY": "9E61BF2F-4D70-4360-B383C1053F8CAAAD",
	"BYNDER_TOKEN_KEY_SECRET": "ca21b7af36f51922865b14263723f061",
	"BYNDER_DEFAULT_IMAGE": "474A334E-824D-467E-99499158B16970FE"
};

// Start the application when the 'domain'-app-config.js file is loaded
document.dispatchEvent(startApp);