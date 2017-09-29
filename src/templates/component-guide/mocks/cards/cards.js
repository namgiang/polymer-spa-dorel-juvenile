var cardsMock = {
    title: 'This is a cards section',
    description: 'This section contains two cards on a row on desktop',
    cards: [
        {
          "card_title": "Torquate, haec dicit Epicurus?",
          "card_text": "Quae cum magnifice primo dici viderentur, considerata minus probabantur. Quae cum magnifice primo dici viderentur, considerata minus probabantur.",
          "bynder_card_image": "5434B2DC-5260-4D13-B2771C7F45C08A55",
          "cta_toggle": true,
          "cta_text": "Read more"
        },
        {
          "card_title": " Sed fac ista esse non inportuna",
          "card_text": "Tubulo putas dicere? Neque enim civitas in seditione beata.",
          "bynder_card_image": "14BB9491-A186-40D8-B965680777095B8E",
          "cta_toggle": true,
          "cta_text": "Read more"
        }
    ]
};


var cardsMockCompact = {
    title: 'This is a compact cards section',
    description: 'This section contains three cards on a row on desktop',
    cards: [
        {
          "card_title": "Torquate, haec dicit Epicurus?",
          "card_text": "Quae cum magnifice primo dici viderentur, considerata minus probabantur.",
          "bynder_card_image": "7F84BD5F-551A-4DA5-8532AB44763439AA",
          "cta_toggle": true,
          "cta_text": "Read more"
        },
        {
          "card_title": " Sed fac ista esse non inportuna",
          "card_text": "Tubulo putas dicere? Neque enim civitas in seditione beata.",
          "bynder_card_image": "14BB9491-A186-40D8-B965680777095B8E",
          "cta_toggle": true,
          "cta_text": "Read more"
        },
        {
          "card_title": " Sed fac ista esse non inportuna",
          "card_text": "Tubulo putas dicere? Neque enim civitas in seditione beata.",
          "bynder_card_image": "14BB9491-A186-40D8-B965680777095B8E",
          "cta_toggle": true,
          "cta_text": "Read more"
        }]
  };


var cardsMockNoImage = {
    title: 'Cards without an image',
    description: 'Whenever the image is not supplied, the cards will be shown without an image',
    cards: [
        {
          "card_title": "Torquate, haec dicit Epicurus?",
          "card_text": "Quae cum magnifice primo dici viderentur, considerata minus probabantur.",
          "cta_toggle": true,
          "cta_text": "Read more"
        },
        {
          "card_title": " Sed fac ista esse non inportuna",
          "card_text": "Tubulo putas dicere? Neque enim civitas in seditione beata.",
          "cta_toggle": true,
          "cta_text": "Read more"
        }]
  };

var cardsMockCTA = {
    title: 'Cards & CTAs',
    description: 'Cards can be shown with or whithout a CTA, and can have a primary or secondary CTA',
    cards: [
        {
          "card_title": "Torquate, haec dicit Epicurus?",
          "card_text": "Quae cum magnifice primo dici viderentur, considerata minus probabantur.",
        },
        {
          "card_title": "Torquate, haec dicit Epicurus?",
          "card_text": "Quae cum magnifice primo dici viderentur, considerata minus probabantur.",
          "cta_toggle": true,
          "cta_text": "Read more"
        },]
  };

var cardsMockLinkLists = {
  title: 'Cards & link lists',
  description: 'Cards can be shown with a list of links',
  cards: [
    {
      "card_title": "Torquate, haec dicit Epicurus?",
      "card_text": "Quae cum magnifice primo dici viderentur, considerata minus probabantur.",
      links: [
        {
          'text': 'Haec dicit Epicurus',
          'link': '',
          'target': ''
        },
        {
          'text': 'Considerata minus',
          'link': '',
          'target': ''
        },
        {
          'text': 'Magnifice primo',
          'link': '',
          'target': ''
        },
        {
          'text': 'Dici viderentur',
          'link': '',
          'target': ''
        }
      ]
    },
    {
      "card_title": "Primo dici viderentur",
      "card_text": "Considerata minus probabantur.",
      links: [
        {
          'text': 'Haec dicit Epicurus',
          'link': '',
          'target': ''
        },
        {
          'text': 'Considerata minus',
          'link': '',
          'target': ''
        },
        {
          'text': 'Magnifice primo',
          'link': '',
          'target': ''
        },
      ]
    }
  ]
};
