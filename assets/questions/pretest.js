window.LabelNotesBanks ||= {};
window.LabelNotesBanks.pretest = {
  "blocks": [
    {
      "id": "pt-stop-1",
      "title": "First stop: the bakery shelf",
      "intro": "You pick up a bag of bagels and turn it over.",
      "questionIds": [
        "pt-01"
      ],
      "set": "pretest"
    },
    {
      "id": "pt-stop-2",
      "title": "A name on the cheese spread",
      "intro": "Your friend spots “sorbic acid” in a cheese spread.",
      "questionIds": [
        "pt-02"
      ],
      "set": "pretest"
    },
    {
      "id": "pt-stop-3",
      "title": "Vitamin E, under another name",
      "intro": "In the cereal aisle, your friend points to a list of ingredients.",
      "questionIds": [
        "pt-03"
      ],
      "set": "pretest"
    },
    {
      "id": "pt-stop-4",
      "title": "Something for the picnic",
      "intro": "A tart lemon drink lists sodium benzoate. Your friend wonders why it is there.",
      "questionIds": [
        "pt-04"
      ],
      "set": "pretest"
    },
    {
      "id": "pt-stop-5",
      "title": "The trail mix aisle",
      "intro": "A bag of nuts and seeds lists rosemary extract “to maintain freshness.”",
      "questionIds": [
        "pt-05"
      ],
      "set": "pretest"
    },
    {
      "id": "pt-stop-6",
      "title": "Two ingredients, different jobs",
      "intro": "An oil-based dip lists tocopherols and calcium disodium EDTA.",
      "questionIds": [
        "pt-06"
      ],
      "set": "pretest"
    },
    {
      "id": "pt-stop-7",
      "title": "The jar is already open",
      "intro": "Back home, a salsa jar lists potassium sorbate and says “Refrigerate after opening.”",
      "questionIds": [
        "pt-07"
      ],
      "set": "pretest"
    },
    {
      "id": "pt-stop-8",
      "title": "Read the small print",
      "intro": "A practice hot-dog label says “No nitrites added, except those naturally occurring in celery powder.”",
      "questionIds": [
        "pt-08"
      ],
      "set": "pretest"
    },
    {
      "id": "pt-stop-9",
      "title": "One last thought at checkout",
      "intro": "Your friend says, “This snack has antioxidants, so it must be good for my health.”",
      "questionIds": [
        "pt-09"
      ],
      "set": "pretest"
    }
  ],
  "questions": [
    {
      "id": "pt-01",
      "objective": "P1",
      "stem": "Select the ingredient identified as a preservative.",
      "type": "label-select",
      "points": 1,
      "cognitiveLevel": "apply",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "tokens": [
        {
          "id": "flour",
          "text": "Enriched flour",
          "feedback": "Flour provides the main structure.",
          "correct": false
        },
        {
          "id": "water",
          "text": "water",
          "feedback": "Water hydrates the dough.",
          "correct": false
        },
        {
          "id": "sugar",
          "text": "sugar",
          "feedback": "Sugar is not the ingredient identified here as a preservative.",
          "correct": false
        },
        {
          "id": "yeast",
          "text": "yeast",
          "feedback": "Yeast raises the dough.",
          "correct": false
        },
        {
          "id": "salt",
          "text": "salt",
          "feedback": "The label does not identify salt as its preservative.",
          "correct": false
        },
        {
          "id": "cornmeal",
          "text": "cornmeal",
          "feedback": "Cornmeal is a grain ingredient.",
          "correct": false
        },
        {
          "id": "sulfate",
          "text": "calcium sulfate",
          "feedback": "Sulfate is not the propionate family.",
          "correct": false
        },
        {
          "id": "propionate",
          "text": "calcium propionate (preservative)",
          "feedback": "The purpose in parentheses identifies its job.",
          "correct": true
        },
        {
          "id": "oil",
          "text": "soybean oil",
          "feedback": "The label does not identify this oil as a preservative.",
          "correct": false
        },
        {
          "id": "unknown",
          "text": "I’m not sure.",
          "feedback": "This is a place to start. Follow the lesson link to explore it.",
          "correct": false
        }
      ],
      "maxSelections": 1,
      "selectionHint": "Choose one ingredient, or “I’m not sure.”",
      "fictional": true
    },
    {
      "id": "pt-02",
      "objective": "P2",
      "stem": "Which name belongs to the same family?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "understand",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "options": [
        {
          "id": "sulfite",
          "text": "Sodium sulfite.",
          "feedback": "Sulfites belong to a different family.",
          "correct": false
        },
        {
          "id": "sorbate",
          "text": "Potassium sorbate.",
          "feedback": "Sorbate connects this salt to sorbic acid.",
          "correct": true
        },
        {
          "id": "citrate",
          "text": "Sodium citrate.",
          "feedback": "Citrate connects to citric acid.",
          "correct": false
        },
        {
          "id": "unknown",
          "text": "I’m not sure.",
          "feedback": "This is a place to start. Follow the lesson link to explore it.",
          "correct": false
        }
      ]
    },
    {
      "id": "pt-03",
      "objective": "A1",
      "stem": "Which ingredient name belongs to the vitamin E family?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "understand",
      "review": {
        "href": "antioxidants.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "options": [
        {
          "id": "ascorbic",
          "text": "Ascorbic acid.",
          "feedback": "Ascorbic acid is vitamin C.",
          "correct": false
        },
        {
          "id": "citric",
          "text": "Citric acid.",
          "feedback": "Citric acid is not vitamin E.",
          "correct": false
        },
        {
          "id": "tocopherols",
          "text": "Mixed tocopherols.",
          "feedback": "Tocopherols are members of the vitamin E family.",
          "correct": true
        },
        {
          "id": "unknown",
          "text": "I’m not sure.",
          "feedback": "This is a place to start. Follow the lesson link to explore it.",
          "correct": false
        }
      ]
    },
    {
      "id": "pt-04",
      "objective": "P3",
      "stem": "What job best fits this ingredient in an acidic drink?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "apply",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "options": [
        {
          "id": "microbes",
          "text": "Slowing the growth of yeasts and other microbes.",
          "feedback": "Benzoates inhibit microbes and generally work better in acidic foods.",
          "correct": true
        },
        {
          "id": "sour",
          "text": "Providing the drink’s sharp lemon taste.",
          "feedback": "Acid and lemon ingredients provide that taste; benzoate has a preservative role.",
          "correct": false
        },
        {
          "id": "mix",
          "text": "Keeping the lemon flavor evenly mixed.",
          "feedback": "Keeping ingredients mixed is an emulsifying role.",
          "correct": false
        },
        {
          "id": "unknown",
          "text": "I’m not sure.",
          "feedback": "This is a place to start. Follow the lesson link to explore it.",
          "correct": false
        }
      ]
    },
    {
      "id": "pt-05",
      "objective": "A2",
      "stem": "Which change is it most likely slowing here?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "analyze",
      "review": {
        "href": "antioxidants.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "options": [
        {
          "id": "mold",
          "text": "Mold growth on the dried fruit.",
          "feedback": "The clue here is the oil in nuts and seeds and an antioxidant ingredient.",
          "correct": false
        },
        {
          "id": "rancid",
          "text": "Rancidity in the oils in the nuts and seeds.",
          "feedback": "Rosemary extract can help protect these oils from oxidation.",
          "correct": true
        },
        {
          "id": "brown",
          "text": "Browning of freshly cut fruit surfaces.",
          "feedback": "This is a dry, oil-rich snack, not freshly cut fruit.",
          "correct": false
        },
        {
          "id": "unknown",
          "text": "I’m not sure.",
          "feedback": "This is a place to start. Follow the lesson link to explore it.",
          "correct": false
        }
      ]
    },
    {
      "id": "pt-06",
      "objective": "A3",
      "stem": "How can EDTA help protect this dip?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "analyze",
      "review": {
        "href": "antioxidants.html#related-ingredients",
        "label": "Review this part of the lesson"
      },
      "options": [
        {
          "id": "vitamin",
          "text": "By supplying the same vitamin E as tocopherols.",
          "feedback": "EDTA is not a vitamin E ingredient.",
          "correct": false
        },
        {
          "id": "thick",
          "text": "By thickening the dip so oil stays suspended.",
          "feedback": "EDTA’s helper role is metal binding, not thickening.",
          "correct": false
        },
        {
          "id": "metal",
          "text": "By binding metals that can speed up oxidation.",
          "feedback": "EDTA can slow metal-catalyzed oxidation; tocopherols act as antioxidants.",
          "correct": true
        },
        {
          "id": "unknown",
          "text": "I’m not sure.",
          "feedback": "This is a place to start. Follow the lesson link to explore it.",
          "correct": false
        }
      ]
    },
    {
      "id": "pt-07",
      "objective": "P5",
      "stem": "What would you do with the opened jar?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "evaluate",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "options": [
        {
          "id": "fridge",
          "text": "Refrigerate it; sorbate and cold storage work together.",
          "feedback": "A preservative does not replace the storage instructions.",
          "correct": true
        },
        {
          "id": "shelf",
          "text": "Keep it on the shelf; sorbate takes over after opening.",
          "feedback": "Opening does not make sorbate a replacement for refrigeration.",
          "correct": false
        },
        {
          "id": "smell",
          "text": "Decide from its smell before putting it away.",
          "feedback": "The storage instruction is a better guide than waiting for a change in smell.",
          "correct": false
        },
        {
          "id": "unknown",
          "text": "I’m not sure.",
          "feedback": "This is a place to start. Follow the lesson link to explore it.",
          "correct": false
        }
      ]
    },
    {
      "id": "pt-08",
      "objective": "P5",
      "stem": "What does the full statement mean?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "evaluate",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "options": [
        {
          "id": "none",
          "text": "The product contains no nitrites.",
          "feedback": "That ignores the celery-powder exception.",
          "correct": false
        },
        {
          "id": "taste",
          "text": "Celery powder is included only for its flavor.",
          "feedback": "The statement links celery powder to nitrites, not just flavor.",
          "correct": false
        },
        {
          "id": "exception",
          "text": "Nitrites may still come from the celery powder.",
          "feedback": "The exception limits the claim on the front.",
          "correct": true
        },
        {
          "id": "unknown",
          "text": "I’m not sure.",
          "feedback": "This is a place to start. Follow the lesson link to explore it.",
          "correct": false
        }
      ]
    },
    {
      "id": "pt-09",
      "objective": "A5",
      "stem": "Which response best uses the ingredient information?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "evaluate",
      "review": {
        "href": "antioxidants.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "options": [
        {
          "id": "vitamin",
          "text": "The antioxidant names tell us it is a vitamin supplement.",
          "feedback": "An antioxidant role does not make a snack a vitamin supplement.",
          "correct": false
        },
        {
          "id": "evidence",
          "text": "They may protect the snack; that alone does not show a health benefit.",
          "feedback": "Keeping food from oxidizing and showing a benefit to the person eating it are different claims.",
          "correct": true
        },
        {
          "id": "natural",
          "text": "We can settle the health question by checking whether they are natural.",
          "feedback": "Natural origin alone does not establish a health benefit.",
          "correct": false
        },
        {
          "id": "unknown",
          "text": "I’m not sure.",
          "feedback": "This is a place to start. Follow the lesson link to explore it.",
          "correct": false
        }
      ]
    }
  ],
  "version": "20261114-7"
};
