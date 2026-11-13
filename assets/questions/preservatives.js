window.LabelNotesBanks ||= {};
window.LabelNotesBanks.preservatives = {
  "questions": [
    {
      "id": "preservatives-01",
      "originalPage": "preservatives.html",
      "set": "label-practice",
      "section": "drink-label",
      "objective": "P1",
      "points": 1,
      "stem": "Which THREE ingredients does “added as preservatives” refer to?",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "hints": [
        "Find the purpose statement next to the ingredient names.",
        "Look at the three names immediately before “added as preservatives.” Keep each complete name together."
      ],
      "type": "multi",
      "options": [
        {
          "id": "apricot",
          "text": "Dried apricots",
          "correct": false,
          "feedback": "Dried apricots are the food being preserved, not one of the three named preservatives."
        },
        {
          "id": "oil",
          "text": "Vegetable oil",
          "correct": false,
          "feedback": "The purpose phrase follows the three preservative names, not vegetable oil."
        },
        {
          "id": "dioxide",
          "text": "Sulfur dioxide",
          "correct": true,
          "feedback": "Sulfur dioxide is one of the three names linked to “added as preservatives.”"
        },
        {
          "id": "bisulfite",
          "text": "Sodium bisulfite",
          "correct": true,
          "feedback": "Sodium bisulfite is included in that group of three."
        },
        {
          "id": "sorbate",
          "text": "Potassium sorbate",
          "correct": true,
          "feedback": "Potassium sorbate is also included, although it belongs to a different family from the sulfiting agents."
        }
      ],
      "explanation": "Choose sulfur dioxide, sodium bisulfite and potassium sorbate. These are the three names grouped under the bag’s preservation explanation."
    },
    {
      "id": "preservatives-02",
      "originalPage": "preservatives.html",
      "set": "label-practice",
      "section": "drink-label",
      "objective": "P5",
      "points": 1,
      "stem": "The bag lists preservatives and recommends refrigeration after opening. How do these instructions work together?",
      "review": {
        "href": "preservatives.html#drink-label",
        "label": "Review this part of the lesson"
      },
      "hints": [
        "Find the storage advice on the back of the bag.",
        "Compare when the refrigeration instruction applies with the time described in each option."
      ],
      "type": "single",
      "options": [
        {
          "id": "bag",
          "text": "The preservatives replace the need to refrigerate the opened bag.",
          "correct": false,
          "feedback": "The bag still recommends refrigeration after opening. Its preservatives are part of preservation, alongside the storage conditions."
        },
        {
          "id": "chill",
          "text": "The preservatives help the food keep, and the refrigeration advice still applies.",
          "correct": true,
          "feedback": "The ingredient list describes what is in the food. The separate storage instruction tells you how to keep this product after opening."
        },
        {
          "id": "judge",
          "text": "The refrigeration advice applies only after the fruit changes color or smell.",
          "correct": false,
          "feedback": "The instruction applies after opening; it does not tell you to wait for a change in the fruit."
        }
      ],
      "explanation": ""
    },
    {
      "id": "preservatives-03",
      "originalPage": "preservatives.html",
      "set": "review",
      "section": "check-understanding",
      "objective": "P3",
      "points": 1,
      "stem": "1. Which ingredient helps control mold in the tortilla example?",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "match",
      "inputLabel": "Your answer",
      "placeholder": "Choose an ingredient",
      "options": [
        {
          "id": "propionate",
          "text": "Calcium propionate",
          "correct": true,
          "feedback": "Calcium propionate helps control mold in the tortilla example."
        },
        {
          "id": "benzoate",
          "text": "Sodium benzoate",
          "correct": false,
          "feedback": "Sodium benzoate is the name in the Sprite example, not the tortilla answer."
        },
        {
          "id": "nitrite",
          "text": "Sodium nitrite",
          "correct": false,
          "feedback": "Sodium nitrite is used in the bacon example; it is not the tortilla mold-control answer."
        }
      ],
      "explanation": "Calcium propionate helps control mold in the Mission tortillas. Sodium benzoate was introduced with Sprite, and sodium nitrite with bacon."
    },
    {
      "id": "preservatives-04",
      "originalPage": "preservatives.html",
      "set": "review",
      "section": "check-understanding",
      "objective": "P3",
      "points": 1,
      "stem": "2. Which ingredient inhibits spoilage microbes in the Sprite example?",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "match",
      "inputLabel": "Your answer",
      "placeholder": "Choose an ingredient",
      "options": [
        {
          "id": "propionate",
          "text": "Calcium propionate",
          "correct": false,
          "feedback": "Calcium propionate belongs to the tortilla example, not this drink label."
        },
        {
          "id": "benzoate",
          "text": "Sodium benzoate",
          "correct": true,
          "feedback": "Sprite identifies sodium benzoate “to protect taste”; the lesson links that to limiting microbial spoilage."
        },
        {
          "id": "nitrite",
          "text": "Sodium nitrite",
          "correct": false,
          "feedback": "Sodium nitrite belongs to the cured-meat example, not this drink."
        }
      ],
      "explanation": "Sodium benzoate is the Sprite preservative. Its “to protect taste” wording refers to preventing spoilage, rather than adding flavor."
    },
    {
      "id": "preservatives-05",
      "originalPage": "preservatives.html",
      "set": "review",
      "section": "check-understanding",
      "objective": "P4",
      "points": 1,
      "stem": "3. Which ingredient helps develop the cured color and flavor of bacon?",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "match",
      "inputLabel": "Your answer",
      "placeholder": "Choose an ingredient",
      "options": [
        {
          "id": "propionate",
          "text": "Calcium propionate",
          "correct": false,
          "feedback": "Calcium propionate is discussed for mold control, not cured color and flavor."
        },
        {
          "id": "benzoate",
          "text": "Sodium benzoate",
          "correct": false,
          "feedback": "Sodium benzoate is discussed for microbial spoilage control, not meat curing."
        },
        {
          "id": "nitrite",
          "text": "Sodium nitrite",
          "correct": true,
          "feedback": "Sodium nitrite contributes to the characteristic color and flavor of cured bacon."
        }
      ],
      "explanation": "Sodium nitrite contributes to cured color and flavor. It also has a preservation role; an ingredient can have more than one function."
    },
    {
      "id": "preservatives-06",
      "originalPage": "preservatives.html",
      "set": "review",
      "section": "check-understanding",
      "objective": "P2",
      "points": 1,
      "stem": "How are sorbic acid and potassium sorbate related?",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "single",
      "options": [
        {
          "id": "same",
          "text": "They are two names for the same substance.",
          "correct": false,
          "feedback": "The names identify different substances: sorbic acid and its potassium salt. Being in the same family does not make them identical."
        },
        {
          "id": "acid-salt",
          "text": "Potassium sorbate is a potassium salt of sorbic acid.",
          "correct": true,
          "feedback": "Sorbic acid is the acid and potassium sorbate is one of its salts. This connects the tortilla and apricot examples without treating the ingredients as identical."
        },
        {
          "id": "unrelated",
          "text": "They are unrelated substances that happen to preserve food.",
          "correct": false,
          "feedback": "They are chemically related: potassium sorbate is a salt of sorbic acid. Their connection goes beyond sharing a food-preservation function."
        }
      ],
      "explanation": ""
    },
    {
      "id": "preservatives-07",
      "originalPage": "preservatives.html",
      "set": "review",
      "section": "check-understanding",
      "objective": "P3",
      "points": 1,
      "stem": "Sprite lists sodium benzoate “to protect taste.” What does that mean in this example?",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "single",
      "options": [
        {
          "id": "flavor",
          "text": "It adds part of the drink’s lemon-lime flavor.",
          "correct": false,
          "feedback": "The lesson describes sodium benzoate as an antimicrobial. Protecting the drink from spoilage helps preserve its taste; the phrase does not identify it as a flavoring."
        },
        {
          "id": "sweeten",
          "text": "It sweetens the drink to balance the sour taste.",
          "correct": false,
          "feedback": "The lesson gives sodium benzoate a preservative role, not a sweetening role. “To protect taste” describes the outcome of limiting spoilage."
        },
        {
          "id": "spoilage",
          "text": "It limits microbial spoilage that could change the taste.",
          "correct": true,
          "feedback": "Sodium benzoate inhibits microorganisms in the drink. The label describes the benefit to taste, while the lesson explains the preservation mechanism."
        }
      ],
      "explanation": ""
    },
    {
      "id": "preservatives-08",
      "originalPage": "preservatives.html",
      "set": "new-food",
      "section": "try-new-label",
      "objective": "P3",
      "points": 1,
      "stem": "1. What does potassium sorbate contribute to this fruit spread?",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "single",
      "options": [
        {
          "id": "texture",
          "text": "It thickens the spread so it is easier to spoon.",
          "correct": false,
          "feedback": "The potassium sorbate profile describes mold and yeast control. Thickening is a different food function."
        },
        {
          "id": "microbes",
          "text": "It helps control the growth of molds and yeasts.",
          "correct": true,
          "feedback": "Potassium sorbate helps control molds and yeasts. The ingredient profile also identifies fruit products as one of its uses."
        },
        {
          "id": "flavor",
          "text": "It adds sweetness to the strawberry flavor.",
          "correct": false,
          "feedback": "The potassium sorbate profile describes preservation, not sweetening. A name in the ingredient list needs to be connected with its own role."
        }
      ],
      "explanation": ""
    },
    {
      "id": "preservatives-09",
      "originalPage": "preservatives.html",
      "set": "new-food",
      "section": "try-new-label",
      "objective": "P2",
      "points": 1,
      "stem": "2. Which ingredient from an earlier food example belongs to the same acid-and-salt family?",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "single",
      "options": [
        {
          "id": "bisulfite",
          "text": "Sodium bisulfite",
          "correct": false,
          "feedback": "Sodium bisulfite is a sulfiting agent. Potassium sorbate belongs to the sorbic acid family."
        },
        {
          "id": "propionate",
          "text": "Calcium propionate",
          "correct": false,
          "feedback": "Calcium propionate is related to propionic acid. Potassium sorbate is related to sorbic acid."
        },
        {
          "id": "sorbic",
          "text": "Sorbic acid",
          "correct": true,
          "feedback": "Potassium sorbate is a potassium salt of sorbic acid, which you met in the tortilla example."
        }
      ],
      "explanation": ""
    },
    {
      "id": "p-1a",
      "objective": "P1",
      "stem": "Select both ingredients from the antimicrobial families covered in this chapter.",
      "type": "label-select",
      "points": 2,
      "cognitiveLevel": "apply",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "tokens": [
        {
          "id": "oil",
          "text": "Soybean Oil",
          "feedback": "Oil is the main fat ingredient.",
          "correct": false
        },
        {
          "id": "vinegar",
          "text": "Vinegar",
          "feedback": "Vinegar contributes acidity; it is not one of the five families in this chapter.",
          "correct": false
        },
        {
          "id": "water",
          "text": "Water",
          "feedback": "Water is not a member of these preservative families.",
          "correct": false
        },
        {
          "id": "milk",
          "text": "Buttermilk",
          "feedback": "Buttermilk is a dairy ingredient.",
          "correct": false
        },
        {
          "id": "sugar",
          "text": "Sugar",
          "feedback": "Sugar is not a member of these five families.",
          "correct": false
        },
        {
          "id": "egg",
          "text": "Egg Yolks",
          "feedback": "Egg yolks help form the dressing.",
          "correct": false
        },
        {
          "id": "salt",
          "text": "Contains Less Than 2% Of Salt",
          "feedback": "Salt can affect microbial growth, but is not one of these five families.",
          "correct": false
        },
        {
          "id": "onion",
          "text": "Onion*",
          "feedback": "Onion adds flavor.",
          "correct": false
        },
        {
          "id": "msg",
          "text": "Monosodium Glutamate",
          "feedback": "Monosodium glutamate is a flavor enhancer, not a benzoate.",
          "correct": false
        },
        {
          "id": "starch",
          "text": "Modified Food Starch",
          "feedback": "Modified food starch helps with texture.",
          "correct": false
        },
        {
          "id": "garlic",
          "text": "Garlic*",
          "feedback": "Garlic adds flavor.",
          "correct": false
        },
        {
          "id": "whey",
          "text": "Whey (from Milk)",
          "feedback": "Whey is a milk ingredient.",
          "correct": false
        },
        {
          "id": "phosphoric",
          "text": "Phosphoric Acid",
          "feedback": "Phosphoric acid adjusts acidity; it is not a propionate, sorbate or benzoate.",
          "correct": false
        },
        {
          "id": "xanthan",
          "text": "Xanthan Gum",
          "feedback": "Xanthan gum helps thicken and stabilize the dressing.",
          "correct": false
        },
        {
          "id": "spice",
          "text": "Spice",
          "feedback": "Spice contributes flavor.",
          "correct": false
        },
        {
          "id": "parsley",
          "text": "Parsley*",
          "feedback": "Parsley is an herb.",
          "correct": false
        },
        {
          "id": "guanylate",
          "text": "Disodium Guanylate",
          "feedback": "Disodium guanylate is a flavor enhancer.",
          "correct": false
        },
        {
          "id": "inosinate",
          "text": "Disodium Inosinate",
          "feedback": "Disodium inosinate is a flavor enhancer.",
          "correct": false
        },
        {
          "id": "flavor",
          "text": "Natural Flavor",
          "feedback": "Natural flavor does not identify an antimicrobial family.",
          "correct": false
        },
        {
          "id": "sorbate",
          "text": "Potassium Sorbate",
          "feedback": "Sorbate identifies a salt of sorbic acid that inhibits microbes.",
          "correct": true
        },
        {
          "id": "benzoate",
          "text": "Sodium Benzoate",
          "feedback": "Benzoate identifies a salt of benzoic acid that inhibits microbes.",
          "correct": true
        },
        {
          "id": "edta",
          "text": "And Calcium Disodium EDTA (to Protect Flavor)",
          "feedback": "EDTA protects flavor by binding metals; it is outside the five antimicrobial families in this chapter.",
          "correct": false
        }
      ],
      "selectionHint": "Choose two ingredients.",
      "labelFootnote": "* Dried."
    },
    {
      "id": "p-1b",
      "objective": "P5",
      "stem": "Why keep this dressing refrigerated after opening?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "evaluate",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "options": [
        {
          "id": "unused",
          "text": "Refrigeration is mainly for dressings without preservatives.",
          "feedback": "The bottle still instructs refrigeration even though preservatives are listed.",
          "correct": false
        },
        {
          "id": "together",
          "text": "The preservatives and refrigeration provide different parts of protection.",
          "feedback": "Follow the storage instruction alongside the preservative system.",
          "correct": true
        },
        {
          "id": "replace",
          "text": "Refrigeration matters only after the preservatives have been used up.",
          "feedback": "The instruction applies after opening, not after a measurable preservative depletion.",
          "correct": false
        }
      ]
    },
    {
      "id": "p-1c",
      "objective": "P3",
      "stem": "What makes sorbate and benzoate a good fit for this dressing?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "analyze",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "options": [
        {
          "id": "fat",
          "text": "The high oil content makes them oil-protecting antioxidants.",
          "feedback": "These two ingredients primarily inhibit microbes; oil protection is a different role.",
          "correct": false
        },
        {
          "id": "name",
          "text": "Their salt names show that they lower the dressing’s acidity.",
          "feedback": "Being a salt does not make acid reduction their preservative function.",
          "correct": false
        },
        {
          "id": "acid",
          "text": "The vinegar-containing acidic mixture favors their antimicrobial action.",
          "feedback": "Benzoates and sorbates generally work better in acidic foods.",
          "correct": true
        }
      ]
    },
    {
      "id": "p-2",
      "type": "two-tier",
      "parts": [
        {
          "id": "p-2a",
          "objective": "P3",
          "stem": "Which ingredient is the best fit for this production step?",
          "type": "single",
          "points": 1,
          "cognitiveLevel": "analyze",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "sorbate",
              "text": "Potassium sorbate.",
              "feedback": "It inhibits mold but can also interfere with yeast fermentation when mixed into the dough.",
              "correct": false
            },
            {
              "id": "propionate",
              "text": "Calcium propionate.",
              "feedback": "Propionates are commonly used against mold in yeast-raised bread.",
              "correct": true
            },
            {
              "id": "benzoate",
              "text": "Sodium benzoate.",
              "feedback": "Benzoates are better suited to more acidic foods.",
              "correct": false
            }
          ]
        },
        {
          "id": "p-2b",
          "objective": "P3",
          "stem": "Which reason best explains that choice?",
          "type": "single",
          "points": 1,
          "cognitiveLevel": "analyze",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "yeast",
              "text": "It targets bread mold while fitting a process that needs active yeast.",
              "feedback": "Both the spoilage organism and the fermentation step matter.",
              "correct": true
            },
            {
              "id": "salt",
              "text": "A calcium salt mainly works by making the dough more acidic.",
              "feedback": "The family’s antimicrobial behavior matters, not just the word calcium.",
              "correct": false
            },
            {
              "id": "moisture",
              "text": "It removes enough moisture to stop the mold from growing.",
              "feedback": "Propionate inhibits mold; it is not a drying ingredient.",
              "correct": false
            }
          ]
        }
      ],
      "production": true
    },
    {
      "id": "p-3a",
      "objective": "P3",
      "stem": "Select the sentence that misreads the ingredient’s role.",
      "type": "label-select",
      "points": 1,
      "cognitiveLevel": "analyze",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "tokens": [
        {
          "id": "both",
          "text": "Sulfur dioxide can help slow browning as well as microbial spoilage.",
          "feedback": "Sulfiting agents can have both roles in dried fruit.",
          "correct": false
        },
        {
          "id": "dry",
          "text": "Drying and an added preservative can both help the product keep.",
          "feedback": "Drying and chemical preservation can work together.",
          "correct": false
        },
        {
          "id": "color",
          "text": "The golden color means sulfur dioxide is acting as a yellow coloring agent.",
          "feedback": "Retaining color by slowing browning is different from adding a yellow dye.",
          "correct": true
        }
      ],
      "display": "passage",
      "maxSelections": 1,
      "selectionHint": "Choose one sentence."
    },
    {
      "id": "p-3b",
      "type": "judgment-grid",
      "parts": [
        {
          "id": "p-3b1",
          "objective": "P5",
          "stem": "The product contains an added sulfiting agent.",
          "type": "single",
          "points": 1,
          "cognitiveLevel": "evaluate",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "supports",
              "text": "The label supports this.",
              "feedback": "Sulfur dioxide (sulfites) is explicitly listed as added.",
              "correct": true
            },
            {
              "id": "contradicts",
              "text": "The label contradicts this.",
              "feedback": "Sulfur dioxide (sulfites) is explicitly listed as added.",
              "correct": false
            },
            {
              "id": "unspecified",
              "text": "The label does not tell you.",
              "feedback": "Sulfur dioxide (sulfites) is explicitly listed as added.",
              "correct": false
            }
          ],
          "explanation": "Sulfur dioxide (sulfites) is explicitly listed as added.",
          "fixedOrder": true
        },
        {
          "id": "p-3b2",
          "objective": "P5",
          "stem": "Only raisins were used; nothing was added to preserve them.",
          "type": "single",
          "points": 1,
          "cognitiveLevel": "evaluate",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "supports",
              "text": "The label supports this.",
              "feedback": "The ingredient list explicitly names an added preservative.",
              "correct": false
            },
            {
              "id": "contradicts",
              "text": "The label contradicts this.",
              "feedback": "The ingredient list explicitly names an added preservative.",
              "correct": true
            },
            {
              "id": "unspecified",
              "text": "The label does not tell you.",
              "feedback": "The ingredient list explicitly names an added preservative.",
              "correct": false
            }
          ],
          "explanation": "The ingredient list explicitly names an added preservative.",
          "fixedOrder": true
        },
        {
          "id": "p-3b3",
          "objective": "P5",
          "stem": "This label gives the amount of sulfur dioxide remaining in the raisins.",
          "type": "single",
          "points": 1,
          "cognitiveLevel": "evaluate",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "supports",
              "text": "The label supports this.",
              "feedback": "It names sulfur dioxide but does not state its remaining amount.",
              "correct": false
            },
            {
              "id": "contradicts",
              "text": "The label contradicts this.",
              "feedback": "It names sulfur dioxide but does not state its remaining amount.",
              "correct": false
            },
            {
              "id": "unspecified",
              "text": "The label does not tell you.",
              "feedback": "It names sulfur dioxide but does not state its remaining amount.",
              "correct": true
            }
          ],
          "explanation": "It names sulfur dioxide but does not state its remaining amount.",
          "fixedOrder": true
        }
      ],
      "stem": "What does this label establish?"
    },
    {
      "id": "p-4",
      "type": "matching",
      "parts": [
        {
          "id": "p-4-0",
          "objective": "P2",
          "stem": "sodium propionate",
          "type": "match",
          "points": 0.5,
          "cognitiveLevel": "understand",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "propionate",
              "text": "Propionate",
              "feedback": "Propionate is the family name; sodium identifies the salt.",
              "correct": true
            },
            {
              "id": "sorbate",
              "text": "Sorbate",
              "feedback": "Sorbate does not match this case. Propionate is the family name; sodium identifies the salt.",
              "correct": false
            },
            {
              "id": "benzoate",
              "text": "Benzoate",
              "feedback": "Benzoate does not match this case. Propionate is the family name; sodium identifies the salt.",
              "correct": false
            },
            {
              "id": "sulfite",
              "text": "Sulfiting agent",
              "feedback": "Sulfiting agent does not match this case. Propionate is the family name; sodium identifies the salt.",
              "correct": false
            },
            {
              "id": "nitrite",
              "text": "Nitrite",
              "feedback": "Nitrite does not match this case. Propionate is the family name; sodium identifies the salt.",
              "correct": false
            },
            {
              "id": "other",
              "text": "Outside these five families",
              "feedback": "Outside these five families does not match this case. Propionate is the family name; sodium identifies the salt.",
              "correct": false
            }
          ],
          "explanation": "Propionate is the family name; sodium identifies the salt."
        },
        {
          "id": "p-4-1",
          "objective": "P2",
          "stem": "calcium sorbate",
          "type": "match",
          "points": 0.5,
          "cognitiveLevel": "understand",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "propionate",
              "text": "Propionate",
              "feedback": "Propionate does not match this case. Sorbate connects this salt to sorbic acid.",
              "correct": false
            },
            {
              "id": "sorbate",
              "text": "Sorbate",
              "feedback": "Sorbate connects this salt to sorbic acid.",
              "correct": true
            },
            {
              "id": "benzoate",
              "text": "Benzoate",
              "feedback": "Benzoate does not match this case. Sorbate connects this salt to sorbic acid.",
              "correct": false
            },
            {
              "id": "sulfite",
              "text": "Sulfiting agent",
              "feedback": "Sulfiting agent does not match this case. Sorbate connects this salt to sorbic acid.",
              "correct": false
            },
            {
              "id": "nitrite",
              "text": "Nitrite",
              "feedback": "Nitrite does not match this case. Sorbate connects this salt to sorbic acid.",
              "correct": false
            },
            {
              "id": "other",
              "text": "Outside these five families",
              "feedback": "Outside these five families does not match this case. Sorbate connects this salt to sorbic acid.",
              "correct": false
            }
          ],
          "explanation": "Sorbate connects this salt to sorbic acid."
        },
        {
          "id": "p-4-2",
          "objective": "P2",
          "stem": "potassium benzoate",
          "type": "match",
          "points": 0.5,
          "cognitiveLevel": "understand",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "propionate",
              "text": "Propionate",
              "feedback": "Propionate does not match this case. Benzoate connects this salt to benzoic acid.",
              "correct": false
            },
            {
              "id": "sorbate",
              "text": "Sorbate",
              "feedback": "Sorbate does not match this case. Benzoate connects this salt to benzoic acid.",
              "correct": false
            },
            {
              "id": "benzoate",
              "text": "Benzoate",
              "feedback": "Benzoate connects this salt to benzoic acid.",
              "correct": true
            },
            {
              "id": "sulfite",
              "text": "Sulfiting agent",
              "feedback": "Sulfiting agent does not match this case. Benzoate connects this salt to benzoic acid.",
              "correct": false
            },
            {
              "id": "nitrite",
              "text": "Nitrite",
              "feedback": "Nitrite does not match this case. Benzoate connects this salt to benzoic acid.",
              "correct": false
            },
            {
              "id": "other",
              "text": "Outside these five families",
              "feedback": "Outside these five families does not match this case. Benzoate connects this salt to benzoic acid.",
              "correct": false
            }
          ],
          "explanation": "Benzoate connects this salt to benzoic acid."
        },
        {
          "id": "p-4-3",
          "objective": "P2",
          "stem": "potassium metabisulfite",
          "type": "match",
          "points": 0.5,
          "cognitiveLevel": "understand",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "propionate",
              "text": "Propionate",
              "feedback": "Propionate does not match this case. Metabisulfite is part of the sulfiting-agent family.",
              "correct": false
            },
            {
              "id": "sorbate",
              "text": "Sorbate",
              "feedback": "Sorbate does not match this case. Metabisulfite is part of the sulfiting-agent family.",
              "correct": false
            },
            {
              "id": "benzoate",
              "text": "Benzoate",
              "feedback": "Benzoate does not match this case. Metabisulfite is part of the sulfiting-agent family.",
              "correct": false
            },
            {
              "id": "sulfite",
              "text": "Sulfiting agent",
              "feedback": "Metabisulfite is part of the sulfiting-agent family.",
              "correct": true
            },
            {
              "id": "nitrite",
              "text": "Nitrite",
              "feedback": "Nitrite does not match this case. Metabisulfite is part of the sulfiting-agent family.",
              "correct": false
            },
            {
              "id": "other",
              "text": "Outside these five families",
              "feedback": "Outside these five families does not match this case. Metabisulfite is part of the sulfiting-agent family.",
              "correct": false
            }
          ],
          "explanation": "Metabisulfite is part of the sulfiting-agent family."
        },
        {
          "id": "p-4-4",
          "objective": "P2",
          "stem": "calcium sulfate",
          "type": "match",
          "points": 0.5,
          "cognitiveLevel": "understand",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "propionate",
              "text": "Propionate",
              "feedback": "Propionate does not match this case. Sulfate is not sulfite; sharing calcium does not make it a propionate.",
              "correct": false
            },
            {
              "id": "sorbate",
              "text": "Sorbate",
              "feedback": "Sorbate does not match this case. Sulfate is not sulfite; sharing calcium does not make it a propionate.",
              "correct": false
            },
            {
              "id": "benzoate",
              "text": "Benzoate",
              "feedback": "Benzoate does not match this case. Sulfate is not sulfite; sharing calcium does not make it a propionate.",
              "correct": false
            },
            {
              "id": "sulfite",
              "text": "Sulfiting agent",
              "feedback": "Sulfiting agent does not match this case. Sulfate is not sulfite; sharing calcium does not make it a propionate.",
              "correct": false
            },
            {
              "id": "nitrite",
              "text": "Nitrite",
              "feedback": "Nitrite does not match this case. Sulfate is not sulfite; sharing calcium does not make it a propionate.",
              "correct": false
            },
            {
              "id": "other",
              "text": "Outside these five families",
              "feedback": "Sulfate is not sulfite; sharing calcium does not make it a propionate.",
              "correct": true
            }
          ],
          "explanation": "Sulfate is not sulfite; sharing calcium does not make it a propionate."
        },
        {
          "id": "p-4-5",
          "objective": "P2",
          "stem": "sodium erythorbate",
          "type": "match",
          "points": 0.5,
          "cognitiveLevel": "understand",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "propionate",
              "text": "Propionate",
              "feedback": "Propionate does not match this case. Erythorbate is an antioxidant and curing helper, not one of these five families.",
              "correct": false
            },
            {
              "id": "sorbate",
              "text": "Sorbate",
              "feedback": "Sorbate does not match this case. Erythorbate is an antioxidant and curing helper, not one of these five families.",
              "correct": false
            },
            {
              "id": "benzoate",
              "text": "Benzoate",
              "feedback": "Benzoate does not match this case. Erythorbate is an antioxidant and curing helper, not one of these five families.",
              "correct": false
            },
            {
              "id": "sulfite",
              "text": "Sulfiting agent",
              "feedback": "Sulfiting agent does not match this case. Erythorbate is an antioxidant and curing helper, not one of these five families.",
              "correct": false
            },
            {
              "id": "nitrite",
              "text": "Nitrite",
              "feedback": "Nitrite does not match this case. Erythorbate is an antioxidant and curing helper, not one of these five families.",
              "correct": false
            },
            {
              "id": "other",
              "text": "Outside these five families",
              "feedback": "Erythorbate is an antioxidant and curing helper, not one of these five families.",
              "correct": true
            }
          ],
          "explanation": "Erythorbate is an antioxidant and curing helper, not one of these five families."
        }
      ]
    },
    {
      "id": "p-5a",
      "objective": "P1",
      "stem": "Select the wording that identifies a preservative role.",
      "type": "label-select",
      "points": 1,
      "cognitiveLevel": "apply",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "tokens": [
        {
          "id": "cheese",
          "text": "Low-Moisture Part-Skim Mozzarella Cheese (Pasteurized Part-Skim Milk, Cheese Culture, Salt, Enzymes)",
          "feedback": "This identifies the cheese and its ingredients.",
          "correct": false
        },
        {
          "id": "starch",
          "text": "Cornstarch (Added to Prevent Caking)",
          "feedback": "Preventing caking keeps shreds separate, rather than inhibiting mold.",
          "correct": false
        },
        {
          "id": "natamycin",
          "text": "Natamycin (a Natural Mold Inhibitor)",
          "feedback": "Mold inhibition identifies the preservative role.",
          "correct": true
        }
      ],
      "maxSelections": 1,
      "selectionHint": "Choose one ingredient and its purpose statement."
    },
    {
      "id": "p-5b",
      "objective": "P5",
      "stem": "Which reading of “a natural mold inhibitor” is supported?",
      "type": "single",
      "points": 1,
      "cognitiveLevel": "evaluate",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "options": [
        {
          "id": "natural",
          "text": "Its described job is mold control; “natural” does not replace the storage directions.",
          "feedback": "The label gives a role and an origin description, and still says to refrigerate.",
          "correct": true
        },
        {
          "id": "none",
          "text": "Its natural origin means it is not doing a preservative job.",
          "feedback": "A naturally sourced ingredient can still preserve food.",
          "correct": false
        },
        {
          "id": "amount",
          "text": "Its natural origin tells us how much is appropriate in any recipe.",
          "feedback": "The word natural does not specify an amount for another recipe.",
          "correct": false
        }
      ]
    },
    {
      "id": "p-6",
      "type": "two-tier",
      "parts": [
        {
          "id": "p-6a",
          "objective": "P5",
          "stem": "Which conclusion fits the complete claim?",
          "type": "single",
          "points": 1,
          "cognitiveLevel": "evaluate",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "absence",
              "text": "No nitrites can be present in the finished food.",
              "feedback": "The exception explicitly allows nitrites from celery powder.",
              "correct": false
            },
            {
              "id": "exception",
              "text": "The claim allows nitrites associated with celery powder.",
              "feedback": "Read “except” as part of the claim, not as a separate detail.",
              "correct": true
            },
            {
              "id": "flavor",
              "text": "Celery powder is identified only as a flavor ingredient.",
              "feedback": "This statement links it to the nitrite claim.",
              "correct": false
            }
          ]
        },
        {
          "id": "p-6b",
          "objective": "P5",
          "stem": "Select the complete statement that supports your conclusion.",
          "type": "label-select",
          "points": 1,
          "cognitiveLevel": "evaluate",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "tokens": [
            {
              "id": "beef",
              "text": "Made with beef.",
              "feedback": "This identifies the meat, not the nitrite exception.",
              "correct": false
            },
            {
              "id": "cold",
              "text": "Keep refrigerated.",
              "feedback": "This is a storage instruction.",
              "correct": false
            },
            {
              "id": "claim",
              "text": "No nitrites added, except those naturally occurring in celery powder.",
              "feedback": "The complete statement includes the exception.",
              "correct": true
            }
          ],
          "display": "passage",
          "maxSelections": 1,
          "selectionHint": "Choose one statement."
        }
      ]
    },
    {
      "id": "p-7-drink",
      "type": "two-tier",
      "parts": [
        {
          "id": "p-7a",
          "objective": "P3",
          "stem": "A lemon drink at pH 3 develops yeast during shelf storage. Which ingredient is the best fit?",
          "type": "single",
          "points": 1,
          "cognitiveLevel": "analyze",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "propionate",
              "text": "Calcium propionate.",
              "feedback": "Propionates are a common mold-control choice for bread, but benzoate better matches this acidic drink.",
              "correct": false
            },
            {
              "id": "nitrite",
              "text": "Sodium nitrite.",
              "feedback": "Nitrite belongs to a meat-curing system, not this lemon drink.",
              "correct": false
            },
            {
              "id": "benzoate",
              "text": "Sodium benzoate.",
              "feedback": "Benzoate fits the acidic conditions and microbial problem.",
              "correct": true
            }
          ]
        },
        {
          "id": "p-7b",
          "objective": "P3",
          "stem": "Which feature of the drink supports that choice?",
          "type": "single",
          "points": 1,
          "cognitiveLevel": "analyze",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "clear",
              "text": "Its clear appearance shows that oxidation is the main problem.",
              "feedback": "Appearance does not replace the stated problem: yeast growth.",
              "correct": false
            },
            {
              "id": "acid",
              "text": "Its low pH favors the active acid form of this preservative.",
              "feedback": "Acidity affects benzoate’s antimicrobial action.",
              "correct": true
            },
            {
              "id": "sweet",
              "text": "Its sweetness means preservatives mainly need to bind metals.",
              "feedback": "Metal binding addresses oxidation, not the stated yeast problem.",
              "correct": false
            }
          ]
        }
      ],
      "production": true
    },
    {
      "id": "p-7-meat",
      "type": "two-tier",
      "parts": [
        {
          "id": "p-7c",
          "objective": "P4",
          "stem": "A cured sausage uses sodium nitrite and sodium erythorbate. Which description separates their roles?",
          "type": "single",
          "points": 2,
          "cognitiveLevel": "analyze",
          "review": {
            "href": "preservatives.html#ingredient-names",
            "label": "Review this part of the lesson"
          },
          "options": [
            {
              "id": "roles",
              "text": "Nitrite supports microbial control and curing; erythorbate helps curing and antioxidant protection.",
              "feedback": "These ingredients work together but do not have identical jobs.",
              "correct": true
            },
            {
              "id": "swap",
              "text": "Erythorbate controls the main microbial risk; nitrite mainly protects fats from rancidity.",
              "feedback": "Erythorbate is not nitrite or a vitamin C nutrient claim.",
              "correct": false
            },
            {
              "id": "same",
              "text": "Both ingredients serve the same antimicrobial role; the second provides extra coverage.",
              "feedback": "Their roles overlap in preservation, but erythorbate does not replace nitrite’s antimicrobial and curing functions.",
              "correct": false
            }
          ]
        }
      ],
      "production": true
    }
  ],
  "blocks": [
    {
      "id": "check-drink",
      "set": "label-practice",
      "section": "drink-label",
      "title": "",
      "questionIds": [
        "preservatives-01"
      ],
      "intro": "<p class=\"lesson-lead\">You’re choosing dried apricots for a packed lunch. Read the bag, find the preservatives and decide what else matters after opening.</p>",
      "product": {
        "name": "Mariani Dried Apricots",
        "image": "assets/products/mariani-apricots-back.png",
        "imageAlt": "Mariani Dried Apricots ingredient panel",
        "ingredientsText": "Dried Apricots, Vegetable Oil (Sunflower and/or Canola), Sulfur Dioxide, Sodium Bisulfite, and Potassium Sorbate added as preservatives.",
        "sourceUrl": "https://mariani.com/products/mariani-mediterranean-apricots-32-oz",
        "sourceLabel": "Product and package source",
        "fictional": false,
        "presentationHTML": "<div class=\"label-study\"><figure class=\"package-study\"><a aria-label=\"Enlarge the dried apricot ingredients\" data-zoom-image=\"\" href=\"assets/products/mariani-apricots-back.png\"><img alt=\"Mariani dried apricot bag showing its ingredients and storage advice.\" height=\"2000\" loading=\"lazy\" src=\"assets/products/mariani-apricots-back.png\" width=\"2000\"/></a><figcaption>Mariani Dried Apricots · <a data-zoom-image=\"\" href=\"assets/products/mariani-apricots-back.png\">Enlarge package</a> · <a data-zoom-image=\"\" href=\"assets/products/mariani-apricots-ingredients.png\">Ingredient close-up</a></figcaption></figure><div><p class=\"eyebrow\">Read-along text</p><p class=\"label-transcript\">Dried Apricots, Vegetable Oil (Sunflower and/or Canola), Sulfur Dioxide, Sodium Bisulfite, and Potassium Sorbate added as preservatives.</p><p class=\"source-note\">Transcribed from the bag pictured here.</p></div></div>"
      }
    },
    {
      "id": "check-storage",
      "set": "label-practice",
      "section": "drink-label",
      "title": "After opening",
      "questionIds": [
        "preservatives-02"
      ]
    },
    {
      "id": "check-match",
      "set": "review",
      "section": "check-understanding",
      "title": "01 · Ingredients and their uses",
      "questionIds": [
        "preservatives-03",
        "preservatives-04",
        "preservatives-05"
      ]
    },
    {
      "id": "check-family",
      "set": "review",
      "section": "check-understanding",
      "title": "02 · Same family, different names",
      "questionIds": [
        "preservatives-06"
      ]
    },
    {
      "id": "check-purpose",
      "set": "review",
      "section": "check-understanding",
      "title": "03 · What does the label mean?",
      "questionIds": [
        "preservatives-07"
      ]
    },
    {
      "id": "check-transfer",
      "set": "new-food",
      "section": "try-new-label",
      "title": "Use what you have learned",
      "questionIds": [
        "preservatives-08",
        "preservatives-09"
      ],
      "intro": "<p class=\"lesson-lead\">You’re reading a jar of Smucker’s Sugar Free Strawberry Preserves. Read its ingredient list, then explain the role of potassium sorbate and connect it with an earlier ingredient.</p>",
      "product": {
        "name": "Smucker’s Sugar Free Strawberry Preserves",
        "image": "assets/products/smuckers-strawberry-back.jpg",
        "imageAlt": "Smucker’s Sugar Free Strawberry Preserves ingredient panel",
        "ingredientsText": "Water*, Strawberries+, Polydextrose*, Maltodextrin*, Contains 2% Or Less Of: Fruit Pectin, Citric Acid, Locust Bean Gum*, Vegetable Juice (For Color)*, Natural Flavors*, Potassium Sorbate (Preservative), Calcium Chloride*, Sucralose (Non Nutritive Sweetener)*. *Ingredients not in regular preserves. +Adds a trivial amount of sugar, <0.5g/serving.",
        "sourceUrl": "https://www.smuckers.com/fruit-spreads/sugar-free/strawberry-preserves",
        "sourceLabel": "Product and package source",
        "fictional": false,
        "presentationHTML": "<div class=\"label-study\"><figure class=\"package-study\"><a aria-label=\"Enlarge the strawberry preserves label\" data-zoom-image=\"\" href=\"assets/products/smuckers-strawberry-back.jpg\"><img alt=\"Back of a Smucker’s Sugar Free Strawberry Preserves jar, with an unmarked ingredient list.\" height=\"1534\" loading=\"lazy\" src=\"assets/products/smuckers-strawberry-back.jpg\" width=\"1534\"/></a><figcaption><a data-zoom-image=\"\" href=\"assets/products/smuckers-strawberry-front.jpg\">View the front</a> · <a data-zoom-image=\"\" href=\"assets/products/smuckers-strawberry-back.jpg\">Enlarge label</a> · <a href=\"https://www.smuckers.com/fruit-spreads/sugar-free/strawberry-preserves\" rel=\"noopener noreferrer\" target=\"_blank\">Smucker’s product page</a></figcaption></figure><div class=\"reading-copy\"><h3>Read the jar</h3><p>Take a closer look at the jar. You can enlarge the package or read its ingredient list below.</p></div></div>"
      }
    },
    {
      "id": "p-check-1",
      "title": "Turn the dressing bottle over",
      "intro": "Start with the ingredient list, then consider how this dressing is stored.",
      "questionIds": [
        "p-1a",
        "p-1b",
        "p-1c"
      ],
      "set": "chapter-check",
      "product": {
        "name": "Kraft Classic Ranch Dressing · 8 fl oz",
        "ingredientsText": "Soybean Oil, Vinegar, Water, Buttermilk, Sugar, Egg Yolks, Contains Less Than 2% Of Salt, Onion*, Monosodium Glutamate, Modified Food Starch, Garlic*, Whey (from Milk), Phosphoric Acid, Xanthan Gum, Spice, Parsley*, Disodium Guanylate, Disodium Inosinate, Natural Flavor, Potassium Sorbate, Sodium Benzoate, And Calcium Disodium EDTA (to Protect Flavor). * Dried.",
        "transcriptOpen": true,
        "statements": [
          "Refrigerate after opening."
        ],
        "sourceUrl": "https://foodlion.com/groceries/condiments-sauces/salad-dressings-toppings/kraft-classic-ranch-dressing-8-oz-btl.html",
        "sourceLabel": "Product source",
        "image": "assets/products/check-ranch-back.jpg",
        "imageAlt": "Kraft Classic Ranch Dressing · 8 fl oz ingredient label"
      }
    },
    {
      "id": "p-check-2",
      "title": "A bakery has a mold problem",
      "intro": "A bakery wants soft dinner rolls to resist mold. The dough must rise with yeast, and the preservative will be mixed in before proofing.",
      "questionIds": [
        "p-2"
      ],
      "set": "chapter-check",
      "production": true
    },
    {
      "id": "p-check-3",
      "title": "A short list can still say a lot",
      "intro": "Use this golden-raisin label and what you learned about sulfiting agents.",
      "questionIds": [
        "p-3a",
        "p-3b"
      ],
      "set": "chapter-check",
      "product": {
        "name": "Sun-Maid California Golden Raisins",
        "ingredientsText": "California Golden Raisins, Sulfur Dioxide (Sulfites) Added as a Preservative.",
        "transcriptOpen": true,
        "sourceUrl": "https://www.sunmaid.com/products/golden-raisins/",
        "sourceLabel": "Product source"
      }
    },
    {
      "id": "p-check-4",
      "title": "Sort by the whole name",
      "intro": "A supplier sends these names. Match each to its family. You can use a family more than once.",
      "questionIds": [
        "p-4"
      ],
      "set": "chapter-check"
    },
    {
      "id": "p-check-5",
      "title": "A name you have not studied",
      "intro": "You pick up a bag of shredded cheese and check why natamycin was added.",
      "questionIds": [
        "p-5a",
        "p-5b"
      ],
      "set": "chapter-check",
      "product": {
        "name": "Kraft Finely Shredded Mozzarella · 8 oz",
        "ingredientsText": "Low-Moisture Part-Skim Mozzarella Cheese (Pasteurized Part-Skim Milk, Cheese Culture, Salt, Enzymes), Cornstarch (Added to Prevent Caking), Natamycin (a Natural Mold Inhibitor).",
        "transcriptOpen": true,
        "statements": [
          "Keep refrigerated."
        ],
        "sourceUrl": "https://foodlion.com/groceries/product/kraft-natural-part-skim-finely-shredded-mozzarella-cheese-8-oz-bag/384413",
        "sourceLabel": "Product source",
        "image": "assets/products/check-mozzarella-back.jpg",
        "imageAlt": "Kraft Finely Shredded Mozzarella · 8 oz ingredient label"
      }
    },
    {
      "id": "p-check-6",
      "title": "The exception matters",
      "intro": "A practice package carries the following statements. Read the claim and its qualification together.",
      "questionIds": [
        "p-6"
      ],
      "set": "chapter-check",
      "product": {
        "name": "Practice package",
        "ingredientsText": "Beef, water, sea salt, vinegar, celery powder, spices.",
        "transcriptOpen": true,
        "fictional": true,
        "statements": [
          "Made with beef.",
          "Keep refrigerated.",
          "No nitrites added, except those naturally occurring in celery powder."
        ]
      }
    },
    {
      "id": "p-check-7",
      "title": "Two jobs on the production line",
      "intro": "A food team is reviewing two products. Choose ingredients by the problem they need to solve.",
      "questionIds": [
        "p-7-drink",
        "p-7-meat"
      ],
      "set": "chapter-check",
      "production": true
    }
  ],
  "version": "20261114-7"
};
