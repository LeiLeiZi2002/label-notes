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
      "objective": "P4",
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
      "objective": "P3",
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
      "id": "assessment-01",
      "originalPage": "assessment.html",
      "set": "chapter-check",
      "section": "exam-active",
      "objective": "P1",
      "points": 1,
      "stem": "1. Which ingredient is identified as the preservative?",
      "review": {
        "href": "preservatives.html#bread-label",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "single",
      "options": [
        {
          "id": "chloride",
          "text": "Calcium chloride",
          "correct": false,
          "feedback": "Calcium chloride appears on the label, but the word “preservative” is attached to sodium benzoate."
        },
        {
          "id": "benzoate",
          "text": "Sodium benzoate",
          "correct": true,
          "feedback": "The label explicitly reads “0.1% sodium benzoate (preservative).”"
        },
        {
          "id": "salt",
          "text": "Salt",
          "correct": false,
          "feedback": "Salt is listed, but it is not the ingredient identified by the parenthetical “preservative” in this question."
        }
      ],
      "explanation": "The word “preservative” follows sodium benzoate on this label. Read the whole name: calcium chloride and sodium benzoate are different ingredients."
    },
    {
      "id": "assessment-02",
      "originalPage": "assessment.html",
      "set": "chapter-check",
      "section": "exam-active",
      "objective": "P3",
      "points": 1,
      "stem": "2. Which role does the lesson describe for sodium benzoate?",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "single",
      "options": [
        {
          "id": "microbes",
          "text": "Inhibiting microorganisms that can spoil the food.",
          "correct": true,
          "feedback": "The lesson describes benzoate as inhibiting spoilage microorganisms, especially in suitable acidic foods."
        },
        {
          "id": "color",
          "text": "Developing the characteristic color of cured foods.",
          "correct": false,
          "feedback": "Cured color is associated with nitrite in the meat example."
        },
        {
          "id": "oxidation",
          "text": "Slowing the oxidation of fats during storage.",
          "correct": false,
          "feedback": "Protecting fat from oxidation is the antioxidant role, rather than the benzoate role taught here."
        }
      ],
      "explanation": "The sodium benzoate profile describes an antimicrobial role, especially in acidic foods. Cured color was linked to nitrite, and fat oxidation to antioxidants."
    },
    {
      "id": "assessment-03",
      "originalPage": "assessment.html",
      "set": "chapter-check",
      "section": "exam-active",
      "objective": "P2",
      "points": 1,
      "stem": "1. Helps develop the cured color and flavor.",
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
          "id": "nitrite",
          "text": "Sodium nitrite",
          "correct": true,
          "feedback": "Nitrite contributes to the characteristic cured color and flavor."
        },
        {
          "id": "erythorbate",
          "text": "Sodium erythorbate",
          "correct": false,
          "feedback": "Erythorbate supports the curing reaction; nitrite is the ingredient matched to this role."
        }
      ],
      "explanation": "The lesson identifies sodium nitrite as contributing to the characteristic cured color and flavor of bacon."
    },
    {
      "id": "assessment-04",
      "originalPage": "assessment.html",
      "set": "chapter-check",
      "section": "exam-active",
      "objective": "P3",
      "points": 1,
      "stem": "2. Helps nitrite react during curing and reduces nitrosamine formation.",
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
          "id": "nitrite",
          "text": "Sodium nitrite",
          "correct": false,
          "feedback": "Nitrite is the curing ingredient being assisted; it is not the helper described here."
        },
        {
          "id": "erythorbate",
          "text": "Sodium erythorbate",
          "correct": true,
          "feedback": "Erythorbate helps the nitrite reaction proceed and reduces nitrosamine formation."
        }
      ],
      "explanation": "The sodium erythorbate profile explains its supporting role in curing and in reducing nitrosamine formation. The two ingredients have complementary roles."
    },
    {
      "id": "assessment-05",
      "originalPage": "assessment.html",
      "set": "chapter-check",
      "section": "exam-active",
      "objective": "P2",
      "points": 1,
      "stem": "1. Which TWO are sulfiting agents?",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "multi",
      "options": [
        {
          "id": "dioxide",
          "text": "Sulfur dioxide",
          "correct": true,
          "feedback": "Sulfur dioxide is a sulfiting agent."
        },
        {
          "id": "sorbate",
          "text": "Potassium sorbate",
          "correct": false,
          "feedback": "Potassium sorbate belongs to the sorbic acid family, not the sulfiting agents."
        },
        {
          "id": "bisulfite",
          "text": "Sodium bisulfite",
          "correct": true,
          "feedback": "Sodium bisulfite is a sulfiting agent."
        }
      ],
      "explanation": "Sulfur dioxide and sodium bisulfite can supply sulfites in food. Potassium sorbate belongs to the sorbic acid family."
    },
    {
      "id": "assessment-06",
      "originalPage": "assessment.html",
      "set": "chapter-check",
      "section": "exam-active",
      "objective": "P2",
      "points": 1,
      "stem": "2. Which earlier ingredient is related to potassium sorbate?",
      "review": {
        "href": "preservatives.html#ingredient-names",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "single",
      "options": [
        {
          "id": "nitrite",
          "text": "Sodium nitrite",
          "correct": false,
          "feedback": "Sodium nitrite belongs to a different chemical family."
        },
        {
          "id": "sorbic",
          "text": "Sorbic acid",
          "correct": true,
          "feedback": "Potassium sorbate is a potassium salt of sorbic acid."
        },
        {
          "id": "benzoate",
          "text": "Sodium benzoate",
          "correct": false,
          "feedback": "Sodium benzoate is a salt of benzoic acid, not sorbic acid."
        }
      ],
      "explanation": "Potassium sorbate is a potassium salt of sorbic acid. A shared preservative function alone does not put ingredients in the same chemical family."
    },
    {
      "id": "assessment-07",
      "originalPage": "assessment.html",
      "set": "chapter-check",
      "section": "exam-active",
      "objective": "P4",
      "points": 1,
      "stem": "Which explanation correctly combines these two pieces of information?",
      "review": {
        "href": "preservatives.html#drink-label",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "single",
      "options": [
        {
          "id": "optional",
          "text": "The preservatives make refrigeration optional once the bag has been opened.",
          "correct": false,
          "feedback": "The presence of preservatives does not cancel the printed refrigeration instruction."
        },
        {
          "id": "together",
          "text": "The preservatives help the food keep; the storage instruction still applies after opening.",
          "correct": true,
          "feedback": "Both apply: the ingredients help preservation and the bag still advises refrigeration after opening."
        },
        {
          "id": "later",
          "text": "Refrigeration becomes necessary when the preservatives stop protecting the fruit.",
          "correct": false,
          "feedback": "The label gives an instruction for opening, not a visible signal for when protection has ended."
        }
      ],
      "explanation": "Preservatives and storage conditions both contribute to keeping food. This bag recommends refrigeration after opening; it gives no later trigger such as a visible change or a preservative “running out.”"
    },
    {
      "id": "assessment-08",
      "originalPage": "assessment.html",
      "set": "chapter-check",
      "section": "exam-active",
      "objective": "P5",
      "points": 1,
      "stem": "1. Which headline accurately summarizes this excerpt?",
      "review": {
        "href": "preservatives.html#food-stories",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "single",
      "options": [
        {
          "id": "dose",
          "text": "Floria apricots recalled over excessive sulfite levels",
          "correct": false,
          "feedback": "The excerpt reports a labeling problem; it does not report an excessive measured dose."
        },
        {
          "id": "label",
          "text": "Floria apricots recalled over undeclared sulfites",
          "correct": true,
          "feedback": "Undeclared sulfites are the stated reason for this recall."
        },
        {
          "id": "illness",
          "text": "Floria apricots recalled after confirmed sulfite reactions",
          "correct": false,
          "feedback": "The notice says no illnesses had been confirmed at the time; it does not establish reactions."
        }
      ],
      "explanation": "The stated problem is undeclared sulfites. The excerpt does not report an excessive level, and it says no illnesses had been confirmed."
    },
    {
      "id": "assessment-09",
      "originalPage": "assessment.html",
      "set": "chapter-check",
      "section": "exam-active",
      "objective": "P5",
      "points": 1,
      "stem": "2. Which detail is missing from this excerpt?",
      "review": {
        "href": "preservatives.html#food-stories",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "single",
      "options": [
        {
          "id": "product",
          "text": "The product involved in the recall.",
          "correct": false,
          "feedback": "The excerpt identifies the Floria dried apricots."
        },
        {
          "id": "label",
          "text": "Whether sulfites appeared on its label.",
          "correct": false,
          "feedback": "The excerpt says the sulfites were not declared on the label."
        },
        {
          "id": "amount",
          "text": "The amount of sulfites measured in the product.",
          "correct": true,
          "feedback": "No measured sulfite amount is supplied, so it cannot support a claim about an excessive dose."
        }
      ],
      "explanation": "The excerpt names the product and describes the missing label declaration. It gives no measured sulfite amount, so it cannot establish an excessive dose."
    },
    {
      "id": "assessment-10",
      "originalPage": "assessment.html",
      "set": "chapter-check",
      "section": "exam-active",
      "objective": "P5",
      "points": 1,
      "stem": "Which response follows the approach taught in this chapter?",
      "review": {
        "href": "preservatives.html#food-stories",
        "label": "Review this part of the lesson"
      },
      "hints": [],
      "type": "single",
      "options": [
        {
          "id": "source",
          "text": "Check whether it is plant-derived; a natural source is enough to establish safety.",
          "correct": false,
          "feedback": "A natural source alone does not establish safety for every amount, use or person."
        },
        {
          "id": "context",
          "text": "Check the amount and intended use; consider any relevant personal sensitivity.",
          "correct": true,
          "feedback": "Amount, intended use and relevant sensitivity provide the context needed to judge the claim."
        },
        {
          "id": "approval",
          "text": "Check whether it is allowed in food; approval makes the amount unimportant.",
          "correct": false,
          "feedback": "Authorization applies to specified uses and conditions; it does not make amount irrelevant."
        }
      ],
      "explanation": "The lesson considers the substance, intended use, exposure and individual sensitivity. A natural source or an authorization alone does not establish safety for every amount and every person."
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
      "id": "preservatives-chapter-check-1",
      "set": "chapter-check",
      "section": "exam-active",
      "title": "Read the pickle label",
      "questionIds": [
        "assessment-01",
        "assessment-02"
      ],
      "intro": "<p>Read this Mt. Olive Kosher Dill Spears label. Identify its preservative, then explain what that ingredient does.</p>",
      "product": {
        "name": "Mt. Olive Kosher Dill Spears, 24 fl oz",
        "image": "assets/products/mtolive-spears-back.jpg",
        "imageAlt": "Mt. Olive Kosher Dill Spears, 24 fl oz",
        "ingredientsText": "Cucumbers, water, vinegar, salt, calcium chloride, 0.1% sodium benzoate (preservative), natural flavors, polysorbate 80, and Yellow 5.",
        "sourceUrl": "https://www.mtolivepickles.com/pickle-products/kosher-dill-spears/",
        "sourceLabel": "Product & package source",
        "fictional": false,
        "presentationHTML": "<figure class=\"exam-package\"><a aria-label=\"Enlarge the pickle jar label\" data-zoom-image=\"\" href=\"assets/products/mtolive-spears-back.jpg\"><img alt=\"Mt. Olive Kosher Dill Spears, 24 fl oz jar.\" height=\"1220\" src=\"assets/products/mtolive-spears-front.jpg\" width=\"915\"/></a><figcaption><a data-zoom-image=\"\" href=\"assets/products/mtolive-spears-back.jpg\">Read the back label</a></figcaption></figure>"
      }
    },
    {
      "id": "preservatives-chapter-check-2",
      "set": "chapter-check",
      "section": "exam-active",
      "title": "Two ingredients in bacon",
      "questionIds": [
        "assessment-03",
        "assessment-04"
      ],
      "intro": "<p>The bacon example contains sodium nitrite and sodium erythorbate. Choose the ingredient associated with each role.</p>"
    },
    {
      "id": "preservatives-chapter-check-3",
      "set": "chapter-check",
      "section": "exam-active",
      "title": "Sort the ingredient families",
      "questionIds": [
        "assessment-05",
        "assessment-06"
      ],
      "intro": "<p>The apricot bag lists sulfur dioxide, sodium bisulfite and potassium sorbate as preservatives. They do not all belong to the same chemical family.</p>"
    },
    {
      "id": "preservatives-chapter-check-4",
      "set": "chapter-check",
      "section": "exam-active",
      "title": "After opening",
      "questionIds": [
        "assessment-07"
      ],
      "intro": "<p>The apricot bag lists preservatives and says “refrigerate after opening for best quality.”</p>"
    },
    {
      "id": "preservatives-chapter-check-5",
      "set": "chapter-check",
      "section": "exam-active",
      "title": "Read the recall carefully",
      "questionIds": [
        "assessment-08",
        "assessment-09"
      ],
      "intro": "<div class=\"news-brief\"><p>Turkana Food recalled Floria dried apricots after inspectors found sulfites that were not declared on the label. The notice warned about reactions in people with severe sulfite sensitivity. No illnesses had been confirmed at the time.</p></div>"
    },
    {
      "id": "preservatives-chapter-check-6",
      "set": "chapter-check",
      "section": "exam-active",
      "title": "Check the claim",
      "questionIds": [
        "assessment-10"
      ],
      "intro": "<p>A shopper says, “It is a natural preservative, so the amount I eat does not matter.”</p>"
    }
  ]
};
