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
      "card_title": "Safety Ratings",
      "topic_blocks": [
        {
          "topic_bynder_image": "E4C5EE4B-F34D-4812-97F177BC86EC6E5D",
          "topic_title": "ADAC",
          "topic_text": "ADAC Phasellus ex sapien, efficitur sed elit sagittis, eleifend accumsan leo."
        },
        {
          "topic_bynder_image": "E4C5EE4B-F34D-4812-97F177BC86EC6E5D",
          "topic_title": "TCS",
          "topic_text": "TCS Phasellus ex sapien, efficitur sed elit sagittis, eleifend accumsan leo."
        },
        {
          "topic_bynder_image": "E4C5EE4B-F34D-4812-97F177BC86EC6E5D",
          "topic_title": "ÖAMTC",
          "topic_text": "ÖAMTC Phasellus ex sapien, efficitur sed elit sagittis, eleifend accumsan leo."
        }
      ],
    },
    {
      "card_title": "Car Installation",
      "topic_blocks": [
        {
          "topic_bynder_image": "E4C5EE4B-F34D-4812-97F177BC86EC6E5D",
          "topic_title": "Isize",
          "topic_text": "Morbi sollicitudin placerat mauris at pretium. Maecenas faucibus ligula at dolor pulvinar viverra."
        },
        {
          "topic_bynder_image": "E4C5EE4B-F34D-4812-97F177BC86EC6E5D",
          "topic_title": "Isofix",
          "topic_text": "Praesent faucibus auctor ultricies. Morbi non est lorem. Proin vehicula tempor erat id feugiat."
        },
        {
          "topic_bynder_image": "E4C5EE4B-F34D-4812-97F177BC86EC6E5D",
          "topic_title": "Seatbelt",
          "topic_text": "Seatbeltus mustes fastor alwacii, eu ornare metus hendrerit. Quisque luctus leo erat, a blandit arcu fermentum id. Pellentesque et mauris pharetra, vulputate sem eu, porttitor libero. "
        }
      ],
      "card_text": "Learn more on installing in your car.",
      "child_ctas": [
        {
          'title': 'Learn more',
          'link': '#',
          'target': ''
        }
      ]
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
      "child_ctas": [
        {
          'title': 'Dominus',
          'link': '/',
          'target': ''
        },
        {
          'title': 'Considerata minus',
          'link': '',
          'target': ''
        },
        {
          'title': 'Magnifice primo',
          'link': '',
          'target': ''
        },
        {
          'title': 'Dici viderentur',
          'link': '',
          'target': ''
        }
      ]
    },
    {
      "card_title": "Primo dici viderentur",
      "card_text": "Considerata minus probabantur.",
      "child_ctas": [
        {
          'title': 'Haec dicit Epicurus',
          'link': '',
          'target': ''
        },
        {
          'title': 'Considerata minus',
          'link': '',
          'target': ''
        },
        {
          'title': 'Magnifice primo',
          'link': '',
          'target': ''
        },
      ]
    }
  ]
};
