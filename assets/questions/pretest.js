window.LabelNotesBanks ||= {};
window.LabelNotesBanks["pretest"] = {
  "blocks": [
    {
      "id": "pt-stop-1",
      "title": "First stop: the bakery shelf",
      "intro": "<p>You turn over a bag of plain bagels. Here are four names from the ingredient list.</p>",
      "questionIds": [
        "pt-01"
      ],
      "set": "pretest"
    },
    {
      "id": "pt-stop-2",
      "title": "A bar of chocolate",
      "questionIds": [
        "pt-02"
      ],
      "set": "pretest"
    },
    {
      "id": "pt-stop-3",
      "title": "Check the color name",
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
      "title": "A zero-sugar pudding",
      "questionIds": [
        "pt-06"
      ],
      "set": "pretest"
    },
    {
      "id": "pt-stop-7",
      "title": "A layer of oil",
      "questionIds": [
        "pt-07"
      ],
      "set": "pretest"
    },
    {
      "id": "pt-stop-8",
      "title": "A claim on a drink mix",
      "questionIds": [
        "pt-08"
      ],
      "set": "pretest"
    },
    {
      "id": "pt-stop-9",
      "title": "One more label at checkout",
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
      "stem": "Which of these ingredient names belongs to an antimicrobial preservative?",
      "type": "label-select",
      "points": 1,
      "cognitiveLevel": "apply",
      "review": {
        "href": "preservatives.html#evidence-propionate",
        "label": "Read: Calcium propionate",
        "quote": "A soft tortilla needs to stay usable while it is transported, sold and stored. Calcium propionate is an antimicrobial preservative used in baked goods to help slow microbial spoilage, including mold. On this package it shares the phrase “to maintain freshness” with sorbic acid."
      },
      "tokens": [
        {
          "id": "sulfate",
          "text": "Calcium sulfate",
          "correct": false,
          "feedback": "Sulfate is a different ingredient from propionate.",
          "suffix": ""
        },
        {
          "id": "ssl",
          "text": "Sodium stearoyl lactylate",
          "correct": false,
          "feedback": "This ingredient is a dough emulsifier.",
          "suffix": ""
        },
        {
          "id": "phosphate",
          "text": "Monocalcium phosphate",
          "correct": false,
          "feedback": "This name is listed with the dough conditioners on the example label.",
          "suffix": ""
        },
        {
          "id": "propionate",
          "text": "Calcium propionate",
          "correct": true,
          "feedback": "Propionate helps slow mold in baked goods.",
          "suffix": ""
        },
        {
          "id": "unknown",
          "text": "I'm not sure.",
          "feedback": "Use the lesson link to explore this idea.",
          "correct": false
        }
      ],
      "maxSelections": 1,
      "selectionHint": "Choose one ingredient, or “I’m not sure.”",
      "references": [
        {
          "href": "https://www.similarfoods.org/foods/maker/safeway%2C-inc./brand/signature-select/product/plain-sliced-bagels-plain-021130182503",
          "label": "Signature Select Plain Bagels ingredient record"
        }
      ]
    },
    {
      "id": "pt-02",
      "objective": "T1",
      "stem": "A chocolate bar lists soy lecithin and PGPR near the end of its ingredients. What category do they belong to?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "apply",
      "review": {
        "href": "texture.html#evidence-lecithin",
        "label": "Read: Lecithin in chocolate",
        "quote": "Lecithin helps fat coat dry particles, so melted chocolate can flow more easily."
      },
      "options": [
        {
          "id": "option-1",
          "text": "Emulsifiers that help cocoa fat and dry solids mix smoothly",
          "correct": true,
          "feedback": "Lecithin and PGPR help disperse dry ingredients in fat."
        },
        {
          "id": "option-2",
          "text": "Antimicrobial preservatives that stop mold",
          "correct": false,
          "feedback": "A preservative controls spoilage."
        },
        {
          "id": "option-3",
          "text": "Certified synthetic food dyes",
          "correct": false,
          "feedback": "These two names are emulsifiers."
        },
        {
          "id": "unknown",
          "text": "I'm not sure.",
          "feedback": "Use the lesson link to explore this idea.",
          "correct": false
        }
      ]
    },
    {
      "id": "pt-03",
      "objective": "C1",
      "stem": "Which color ingredient name on a U.S. snack label tells you it is a certified synthetic color rather than an exempt natural-source color?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "apply",
      "review": {
        "href": "colors.html#evidence-fd-c-lakes",
        "label": "Read: Certified dyes and lakes",
        "quote": "What it does · Water-insoluble pigments made by binding a dye to an inert base. They color hard candy shells, fat-rich frostings, and dry mixes without bleeding onto fingers or into neighboring layers."
      },
      "options": [
        {
          "id": "option-1",
          "text": "Red 40 Lake",
          "correct": true,
          "feedback": "The color and number identify a certified color. Lake identifies its form."
        },
        {
          "id": "option-2",
          "text": "Annatto extract",
          "correct": false,
          "feedback": "Annatto is exempt from certification."
        },
        {
          "id": "option-3",
          "text": "Paprika extract",
          "correct": false,
          "feedback": "Paprika extract is exempt from certification."
        },
        {
          "id": "unknown",
          "text": "I'm not sure.",
          "feedback": "Use the lesson link to explore this idea.",
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
        "href": "preservatives.html#evidence-benzoate",
        "label": "Read: Sodium benzoate",
        "quote": "Sprite lists sodium benzoate with the explanation “to protect taste.” Its preservative role is to inhibit microorganisms that could spoil the drink. Benzoates are particularly useful against yeasts in acidic foods."
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
          "text": "I'm not sure.",
          "feedback": "Use the lesson link to explore this idea.",
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
        "href": "antioxidants.html#evidence-rosemary",
        "label": "Read: Rosemary extract",
        "quote": "Rosemary extract contains antioxidant compounds taken from rosemary leaves. These compounds help slow the reactions that give fats an unpleasant taste or smell."
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
          "text": "I'm not sure.",
          "feedback": "Use the lesson link to explore this idea.",
          "correct": false
        }
      ]
    },
    {
      "id": "pt-06",
      "objective": "F2",
      "stem": "A zero-sugar chocolate pudding lists maltitol near the top and sucralose near the end. Why include maltitol alongside a high-intensity sweetener?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "apply",
      "review": {
        "href": "sweeteners-flavors.html#evidence-sugar-alcohols",
        "label": "Read: Sugar alcohols",
        "quote": "Reduced-calorie carbohydrates (not alcoholic) that replace the physical volume sugar normally gives to gum, candies, and puddings, often with a mild cooling feel."
      },
      "options": [
        {
          "id": "option-1",
          "text": "Maltitol helps replace the physical bulk and mouthfeel lost when sugar is removed",
          "correct": true,
          "feedback": "Maltitol contributes bulk and mouthfeel."
        },
        {
          "id": "option-2",
          "text": "Maltitol stops bacteria from spoiling milk protein",
          "correct": false,
          "feedback": "Maltitol adds sweetness and bulk."
        },
        {
          "id": "option-3",
          "text": "Sucralose cannot sweeten cold foods without maltitol",
          "correct": false,
          "feedback": "Sucralose can sweeten cold food on its own."
        },
        {
          "id": "unknown",
          "text": "I'm not sure.",
          "feedback": "Use the lesson link to explore this idea.",
          "correct": false
        }
      ]
    },
    {
      "id": "pt-07",
      "objective": "T4",
      "stem": "You open a jar of peanut butter whose only ingredients are peanuts and salt, and see a layer of oil on top. What does the label tell you?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "apply",
      "review": {
        "href": "texture.html#evidence-separation",
        "label": "Read: Oil separation",
        "quote": "Oil naturally rises in peanut butter made with just peanuts and salt. Stir it back in. The oil layer on its own does not mean the peanut butter has gone bad."
      },
      "options": [
        {
          "id": "option-1",
          "text": "Oil separation is normal without added emulsifiers or stabilizers; it does not mean the jar has spoiled",
          "correct": true,
          "feedback": "Oil can naturally rise in peanut butter with just peanuts and salt."
        },
        {
          "id": "option-2",
          "text": "The oil layer shows the peanuts have gone rancid",
          "correct": false,
          "feedback": "Separation alone does not establish rancidity."
        },
        {
          "id": "option-3",
          "text": "The jar must contain hidden preservatives",
          "correct": false,
          "feedback": "Check the actual list for preservatives."
        },
        {
          "id": "unknown",
          "text": "I'm not sure.",
          "feedback": "Use the lesson link to explore this idea.",
          "correct": false
        }
      ]
    },
    {
      "id": "pt-08",
      "objective": "F4",
      "stem": "A zero-calorie drink mix says \"Naturally Flavored\" on the front, while the back lists natural flavor, sucralose, and Red 40. What does \"Naturally Flavored\" actually cover?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "apply",
      "review": {
        "href": "sweeteners-flavors.html#evidence-natural-claim",
        "label": "Read: Flavor claims",
        "quote": "Country Time Lemon Iced Tea says \"with other natural flavors\" on the front. The ingredient list also includes sucralose, acesulfame potassium, and certified dyes. The phrase describes only the flavoring source."
      },
      "options": [
        {
          "id": "option-1",
          "text": "Only the source of the flavoring—not whether the sweeteners or colors are synthetic",
          "correct": true,
          "feedback": "The claim describes the flavor. The label lists other ingredients separately."
        },
        {
          "id": "option-2",
          "text": "Every additive in the bottle must come from plants",
          "correct": false,
          "feedback": "The claim does not cover the colors or sweeteners."
        },
        {
          "id": "option-3",
          "text": "The drink cannot contain artificial sweeteners",
          "correct": false,
          "feedback": "Sucralose appears separately by name."
        },
        {
          "id": "unknown",
          "text": "I'm not sure.",
          "feedback": "Use the lesson link to explore this idea.",
          "correct": false
        }
      ]
    },
    {
      "id": "pt-09",
      "objective": "C4",
      "stem": "A strawberry yogurt says \"No Artificial Colors\" on the front and lists \"carmine (for color)\" on the back. What is the most accurate reading?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "apply",
      "review": {
        "href": "colors.html#evidence-carmine",
        "label": "Read: Carmine",
        "quote": "What it does · A deep, heat-stable crimson pigment extracted from cochineal scale insects, used in some strawberry yogurts and pink drinks."
      },
      "options": [
        {
          "id": "option-1",
          "text": "It skips certified synthetic dyes, but still adds an exempt insect-derived color",
          "correct": true,
          "feedback": "Carmine is an exempt color made from cochineal insects."
        },
        {
          "id": "option-2",
          "text": "It contains no added colors at all",
          "correct": false,
          "feedback": "Carmine is explicitly listed for color."
        },
        {
          "id": "option-3",
          "text": "Because it avoids artificial colors, it is guaranteed to be vegan",
          "correct": false,
          "feedback": "The insect-derived color means this label does not support a vegan claim."
        },
        {
          "id": "unknown",
          "text": "I'm not sure.",
          "feedback": "Use the lesson link to explore this idea.",
          "correct": false
        }
      ]
    }
  ],
  "version": "20261128-2"
};
