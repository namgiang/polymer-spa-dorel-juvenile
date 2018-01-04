var continentsDataMock = [
  {
    "id": 1,
    "name": "North America",
    "countries": [{
      "id": 1,
      "region_id": 1,
      "name": "United States",
      "iso": "us",
      "website_url": "http:\/\/www.maxi-cosi.com\/",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-10-06 14:29:29",
      "wordpress_url": "wordpress.org",
      "wp_db_updated_at": null,
      "languages": [{
        "id": 1,
        "name": "English",
        "iso_code": "en",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 1,
          "language_id": 1
        }
      }, {
        "id": 2,
        "name": "French",
        "iso_code": "fr",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 1,
          "language_id": 2
        }
      }]
    }, {
      "id": 2,
      "region_id": 1,
      "name": "Canada",
      "iso": "ca",
      "website_url": "http:\/\/www.maxi-cosi.com\/ca-en\/",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-09-18 13:35:22",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 1,
        "name": "English",
        "iso_code": "en",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 2,
          "language_id": 1
        }
      }, {
        "id": 2,
        "name": "French",
        "iso_code": "fr",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 2,
          "language_id": 2
        }
      }]
    }, {
      "id": 3,
      "region_id": 1,
      "name": "Mexico",
      "iso": "mx",
      "website_url": "http:\/\/www.maxi-cosi.com.mx\/mx-es\/",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-09-18 13:35:22",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 3,
        "name": "Spanish",
        "iso_code": "es",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 3,
          "language_id": 3
        }
      }]
    }, {
      "id": 28,
      "region_id": 1,
      "name": "Brasil",
      "iso": "br",
      "website_url": "https:\/\/www.maxi-cosi.br",
      "created_at": "2017-10-06 12:27:45",
      "updated_at": "2017-10-06 12:27:45",
      "wordpress_url": "wordpress.com",
      "wp_db_updated_at": null,
      "languages": [{
        "id": 1,
        "name": "English",
        "iso_code": "en",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 28,
          "language_id": 1
        }
      }, {
        "id": 10,
        "name": "Portugese",
        "iso_code": "pr",
        "created_at": "2017-10-06 12:29:06",
        "updated_at": "2017-10-06 12:29:06",
        "pivot": {
          "country_id": 28,
          "language_id": 10
        }
      }]
    }]
  },
  {
    "id": 2,
    "name": "Europe",
    "countries": [{
      "id": 4,
      "region_id": 2,
      "name": "Belgium",
      "iso": "be",
      "website_url": "http:\/\/www.maxi-cosi.be",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-09-28 13:55:02",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 2,
        "name": "French",
        "iso_code": "fr",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 4,
          "language_id": 2
        }
      }, {
        "id": 4,
        "name": "Dutch",
        "iso_code": "nl",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 4,
          "language_id": 4
        }
      }]
    }, {
      "id": 5,
      "region_id": 2,
      "name": "Austria",
      "iso": "at",
      "website_url": "http:\/\/www.maxi-cosi.com\/at-de\/",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-09-18 13:35:22",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 5,
        "name": "German",
        "iso_code": "de",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 5,
          "language_id": 5
        }
      }]
    }, {
      "id": 6,
      "region_id": 2,
      "name": "Czech Republic",
      "iso": "cz",
      "website_url": "http:\/\/www.maxi-cosi.com\/cz-cs\/",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-09-18 13:35:22",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 6,
        "name": "Czech",
        "iso_code": "cs",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 6,
          "language_id": 6
        }
      }]
    }, {
      "id": 7,
      "region_id": 2,
      "name": "Germany",
      "iso": "de",
      "website_url": "http:\/\/www.maxi-cosi.com\/de-de\/",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-09-18 13:35:22",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 5,
        "name": "German",
        "iso_code": "de",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 7,
          "language_id": 5
        }
      }]
    }, {
      "id": 9,
      "region_id": 2,
      "name": "Netherlands",
      "iso": "nl",
      "website_url": "http:\/\/www.maxi-cosi.nl\/nl-nl\/",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-09-18 13:35:22",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 4,
        "name": "Dutch",
        "iso_code": "nl",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 9,
          "language_id": 4
        }
      }]
    }, {
      "id": 10,
      "region_id": 2,
      "name": "United Kingdom",
      "iso": "uk",
      "website_url": "http:\/\/www.maxi-cosi.co.uk\/gb-en\/",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-09-18 13:35:22",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 1,
        "name": "English",
        "iso_code": "en",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 10,
          "language_id": 1
        }
      }]
    }, {
      "id": 11,
      "region_id": 2,
      "name": "Sweden",
      "iso": "se",
      "website_url": "http:\/\/www.maxi-cosi.com\/se-sv\/",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-09-18 13:35:22",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 1,
        "name": "English",
        "iso_code": "en",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 11,
          "language_id": 1
        }
      }]
    }, {
      "id": 12,
      "region_id": 2,
      "name": "Switzerland",
      "iso": "ch",
      "website_url": "http:\/\/www.maxi-cosi.com\/ch-de\/",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-09-18 13:35:22",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 5,
        "name": "German",
        "iso_code": "de",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 12,
          "language_id": 5
        }
      }, {
        "id": 2,
        "name": "French",
        "iso_code": "fr",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 12,
          "language_id": 2
        }
      }]
    }, {
      "id": 13,
      "region_id": 2,
      "name": "Poland",
      "iso": "pl",
      "website_url": "http:\/\/www.maxi-cosi.com\/pl-pl\/",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-09-18 13:35:22",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 7,
        "name": "Polish",
        "iso_code": "pl",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 13,
          "language_id": 7
        }
      }]
    }, {
      "id": 14,
      "region_id": 2,
      "name": "Russian Federation",
      "iso": "ru",
      "website_url": "http:\/\/www.maxi-cosi.com\/ru-ru\/",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-09-18 13:35:22",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 8,
        "name": "Русский",
        "iso_code": "ru",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 14,
          "language_id": 8
        }
      }]
    }, {
      "id": 25,
      "region_id": 2,
      "name": "Turkey",
      "iso": "tr",
      "website_url": "https:\/\/www.maxi-cosi.tr",
      "created_at": "2017-09-25 08:56:39",
      "updated_at": "2017-09-25 08:56:39",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 9,
        "name": "Turkish",
        "iso_code": "tr",
        "created_at": "2017-10-02 11:37:26",
        "updated_at": "2017-10-02 11:37:26",
        "pivot": {
          "country_id": 25,
          "language_id": 9
        }
      }]
    }]
  },
  {
    "id": 3,
    "name": "Oceania",
    "countries": [{
      "id": 16,
      "region_id": 3,
      "name": "Australia",
      "iso": "au",
      "website_url": "https:\/\/www.maxi-cosi.com.au\/",
      "created_at": "2017-09-18 13:35:22",
      "updated_at": "2017-09-18 13:35:22",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 1,
        "name": "English",
        "iso_code": "en",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 16,
          "language_id": 1
        }
      }]
    }]
  },
  {
    "id": 4,
    "name": "International",
    "countries": [{
      "id": 27,
      "region_id": 4,
      "name": "International Website",
      "iso": "intl",
      "website_url": "https:\/\/www.maxi-cosi.com",
      "created_at": "2017-10-03 12:50:59",
      "updated_at": "2017-10-03 12:50:59",
      "wordpress_url": null,
      "wp_db_updated_at": null,
      "languages": [{
        "id": 1,
        "name": "English",
        "iso_code": "en",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 27,
          "language_id": 1
        }
      }]
    }]
  },
  {
    "id": 5,
    "name": "development",
    "countries": [{
      "id": 26,
      "region_id": 5,
      "name": "Development",
      "iso": "uk",
      "website_url": "https:\/\/dev-mc.dorel-app.net",
      "created_at": null,
      "updated_at": "2017-10-06 14:34:15",
      "wordpress_url": "http:\/\/local.dev:8000\/wp-admin\/",
      "wp_db_updated_at": "2017-10-04 10:56:45",
      "languages": [{
        "id": 1,
        "name": "English",
        "iso_code": "en",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 26,
          "language_id": 1
        }
      }, {
        "id": 3,
        "name": "Spanish",
        "iso_code": "es",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 26,
          "language_id": 3
        }
      }, {
        "id": 4,
        "name": "Dutch",
        "iso_code": "nl",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 26,
          "language_id": 4
        }
      }]
    }, {
      "id": 29,
      "region_id": 5,
      "name": "Belgium",
      "iso": "be",
      "website_url": "https:\/\/dev-mc.dorel-app.net",
      "created_at": "2017-10-06 14:49:05",
      "updated_at": "2017-10-06 14:49:05",
      "wordpress_url": "http:\/\/local.dev:8000\/wp-admin\/",
      "wp_db_updated_at": null,
      "languages": [{
        "id": 2,
        "name": "French",
        "iso_code": "fr",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 29,
          "language_id": 2
        }
      }, {
        "id": 4,
        "name": "Dutch",
        "iso_code": "nl",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 29,
          "language_id": 4
        }
      }]
    }]
  }
];

var singleCountryDataMock = {
  iso: 'aw',
  name: 'Aruba',
  website_url: 'website_url": "https:\/\/dev-mc.dorel-app.net',
  languages: [
    {name: 'Papiamento'},
    {name: 'Dutch'},
    {name: 'English', id: 2},
    {name: 'Spanish', id: 2},
  ]
};


var currentLanguageDataMock = {
  "countryCode": "nl",
  "languageCode": "nl",
  "path": "nl-nl",
  "country": {
    "id": 9,
    "region_id": 2,
    "name": "Netherlands",
    "iso": "nl",
    "website_url": "http://www.maxi-cosi.nl/",
    "created_at": "2017-09-18 13:35:22",
    "updated_at": "2017-10-10 13:14:20",
    "wordpress_url": "https://wrps.api.dev-mc.dorel-app.net/",
    "wp_db_updated_at": null,
    "languages": [
      {
        "id": 4,
        "name": "Dutch",
        "iso_code": "nl",
        "created_at": "2017-10-02 11:32:00",
        "updated_at": "2017-10-02 11:37:06",
        "pivot": {
          "country_id": 9,
          "language_id": 4
        }
      }
    ]
  },
  "language": {
    "id": 4,
    "name": "Dutch",
    "iso_code": "nl",
    "created_at": "2017-10-02 11:32:00",
    "updated_at": "2017-10-02 11:37:06",
    "pivot": {
      "country_id": 9,
      "language_id": 4
    }
  }
}