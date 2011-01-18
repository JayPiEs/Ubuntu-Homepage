/*
 * Code is from Philipp Antoni's project http://go.infinise.com/
 * 
 * RK: I have removed the go.infinise.com API calls which removes
 *     autocomplete and suggestions as you type. At some point it
 *     might be nice to replace with something that talks to Google
 *     et al directly and not through go.infinse.com
 */
 
/*	Ecosia
	----------------------------------------------------- */

eng.ecosia = {
	pageTitle: "Ecosia",
	logo: "ecosia.png",
	places: {
		'Web'    : ["http://ecosia.org/search.php?q=%query%&hl=de",		false],
		'Bilder' : ["http://ecosia.org/images.php?q=%query%&hl=de",		false],
		'Maps'   : ["http://ecosia.org/maps.php?q=%query%",			false],
                'News'   : ["http://ecosia.org/news.php?q=%query%", 			false]
	}
};

/*	GOOGLE
	----------------------------------------------------- */

eng.google = {
	pageTitle: "Google",
	logo: "google-white.png",
	places: {
		'Web'    : ["http://www.google.de/search?q=%query%&hl=de",		false],
		'Bilder' : ["http://images.google.de/images?q=%query%&hl=de",		false],
		'Maps'   : ["http://maps.google.de/maps?q=%query%",			false],
                'News'   : ["http://news.google.de/news/search?q=%query%", 		false]
	}
};

/*	WIKIPEDIA
	----------------------------------------------------- */

eng.wikipedia = {
	pageTitle: "Wikipedia",
	logo: "wikipedia-white.png",
	places: {
		'Artikelsuche' : ["http://%lang%.wikipedia.org/wiki/Special:Search?search=%query%&go=Go", 		false],
		'Suchergebnisse'        : ["http://%lang%.wikipedia.org/wiki/Special:Search?search=%query%&fulltext=Search", 	false],
	},
	languages: {
		'DE': 'de',
		'EN': 'en',
                'FR': 'fr',
		'IT': 'it',
		'ES': 'es'
	}
};


/*	YOUTUBE
	----------------------------------------------------- */

eng.youtube = {
	pageTitle: "YouTube",
	logo: "youtube.png",
	places: {
		'Videos' : ["http://www.youtube.com/results?search_query=%query%", 	false]
	},
};


/*	TWITTER
	----------------------------------------------------- 

eng.twitter = {
	pageTitle: "Twitter",
	logo: "twitter.png",
	places: {
		'Twitter durchsuchen' : ["http://twitter.com/search?q=%query%", false]
	}
};*/