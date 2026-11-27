window.LabelNotesBanks ||= {};
window.LabelNotesBanks["sweeteners-flavors"] = {
  "version": "20261127-10",
  "questions": [
    {
      "id": "fx-coke",
      "objective": "F3",
      "stem": "Select all three ingredients in Coca-Cola Zero Sugar that provide sweetness. Leave out preservatives, acids, and colors.",
      "review": {
        "href": "sweeteners-flavors.html#evidence-aspartame",
        "label": "Read: Aspartame",
        "quote": "A synthetic sweetener roughly 200 times sweeter than sugar, widely used in cold diet drinks. It breaks down under long, high baking heat, so it rarely appears in baked goods."
      },
      "type": "label-select",
      "points": 3,
      "cognitiveLevel": "apply",
      "retryHint": "Check the list for all three sweeteners. One appears just after phosphoric acid.",
      "retryOnWrong": {
        "acid": "Potassium benzoate is a preservative from Chapter 01, and phosphoric acid adds sharpness. Remove non-sweeteners and check the three sweetening ingredients again.",
        "preserve": "Potassium benzoate is a preservative from Chapter 01, and phosphoric acid adds sharpness. Remove non-sweeteners and check the three sweetening ingredients again."
      },
      "retryReviews": [
        {
          "href": "sweeteners-flavors.html#evidence-aspartame",
          "label": "Read: Aspartame",
          "quote": "A synthetic sweetener roughly 200 times sweeter than sugar, widely used in cold diet drinks. It breaks down under long, high baking heat, so it rarely appears in baked goods."
        },
        {
          "href": "sweeteners-flavors.html#evidence-ace-k",
          "label": "Read: Acesulfame potassium",
          "quote": "A heat-stable, zero-calorie sweetener that can taste slightly bitter on its own, so makers often blend it with aspartame or sucralose to smooth the aftertaste."
        },
        {
          "href": "sweeteners-flavors.html#evidence-stevia-monkfruit",
          "label": "Read: Stevia & monk fruit",
          "quote": "Plant-derived high-intensity sweeteners with zero sugar calories. Blending stevia leaf extract (often Reb M) with monk fruit helps soften herbal aftertaste."
        }
      ],
      "references": [
        {
          "href": "sweeteners-flavors.html#evidence-ace-k",
          "label": "Read: Acesulfame potassium",
          "quote": "A heat-stable, zero-calorie sweetener that can taste slightly bitter on its own, so makers often blend it with aspartame or sucralose to smooth the aftertaste."
        },
        {
          "href": "sweeteners-flavors.html#evidence-stevia-monkfruit",
          "label": "Read: Stevia & monk fruit",
          "quote": "Plant-derived high-intensity sweeteners with zero sugar calories. Blending stevia leaf extract (often Reb M) with monk fruit helps soften herbal aftertaste."
        },
        {
          "href": "https://www.coca-cola.com/us/en/brands/coca-cola/products/zero/zero-sugar",
          "label": "Manufacturer’s ingredient list"
        }
      ],
      "tokens": [
        {
          "id": "color",
          "text": "Caramel color",
          "correct": false,
          "feedback": "Caramel color gives the cola its dark color."
        },
        {
          "id": "acid",
          "text": "Phosphoric acid",
          "correct": false,
          "feedback": "Phosphoric acid adds sharpness."
        },
        {
          "id": "aspartame",
          "text": "Aspartame",
          "correct": true,
          "feedback": "Aspartame is a high-intensity sweetener."
        },
        {
          "id": "preserve",
          "text": "Potassium benzoate (to protect taste)",
          "correct": false,
          "feedback": "This benzoate is a preservative."
        },
        {
          "id": "flavor",
          "text": "Natural flavors",
          "correct": false,
          "feedback": "These flavorings add aroma and flavor."
        },
        {
          "id": "ace-k",
          "text": "Acesulfame potassium",
          "correct": true,
          "feedback": "Ace-K contributes sweetness alongside aspartame and stevia extract."
        },
        {
          "id": "stevia",
          "text": "Stevia extract",
          "correct": true,
          "feedback": "Stevia extract supplies sweetness in this formula."
        }
      ],
      "retryOnMissing": {
        "stevia": "You found part of the sweetener blend, but this formula uses three sweeteners together—check the very end of the list too."
      }
    },
    {
      "id": "fx-blend",
      "objective": "F2",
      "stem": "Why do zero-sugar drinks so often list acesulfame potassium alongside aspartame or sucralose instead of using just one?",
      "review": {
        "href": "sweeteners-flavors.html#evidence-ace-k",
        "label": "Read: Acesulfame potassium (Ace-K)",
        "quote": "A heat-stable, zero-calorie sweetener that can taste slightly bitter on its own, so makers often blend it with aspartame or sucralose to smooth the aftertaste."
      },
      "type": "single",
      "points": 1,
      "cognitiveLevel": "analyze",
      "options": [
        {
          "id": "preserve",
          "text": "Acesulfame potassium is a preservative needed to stop yeast growth.",
          "correct": false,
          "feedback": "Ace-K adds sweetness. It is not the preservative in the cola example."
        },
        {
          "id": "balance",
          "text": "Blending them smooths out aftertaste and creates a sweetness curve closer to sugar.",
          "correct": true,
          "feedback": "The combined sweetness and aftertaste can taste closer to sugar."
        },
        {
          "id": "rules",
          "text": "FDA rules forbid using any single sweetener by itself.",
          "correct": false,
          "feedback": "Drinks can use a single sweetener. The blend is a taste decision."
        },
        {
          "id": "ice",
          "text": "Acesulfame potassium prevents ice crystals.",
          "correct": false,
          "feedback": "The blend affects sweetness. Ice crystal control is a separate texture job."
        }
      ],
      "retryHint": "Think about how each sweetener tastes on its own—what happens when Ace-K is used alone?"
    },
    {
      "id": "fx-yogurt",
      "objective": "F3",
      "stem": "Select the three sweetening ingredients in this excerpt.",
      "review": {
        "href": "sweeteners-flavors.html#evidence-allulose",
        "label": "Read: Allulose",
        "quote": "A rare sugar that is about 70% as sweet as table sugar with minimal calories, giving yogurt and baked goods real sugar-like bulk and smooth body."
      },
      "type": "label-select",
      "points": 3,
      "cognitiveLevel": "apply",
      "retryHint": "Look for the rare sugar and the two plant-derived extracts that add sweetness.",
      "retryOnWrong": {
        "guar": "Guar gum is a seed gum stabilizer from Chapter 03—it controls texture rather than sweetness."
      },
      "retryReviews": [
        {
          "href": "sweeteners-flavors.html#evidence-allulose",
          "label": "Read: Allulose",
          "quote": "A rare sugar that is about 70% as sweet as table sugar with minimal calories, giving yogurt and baked goods real sugar-like bulk and smooth body."
        },
        {
          "href": "sweeteners-flavors.html#evidence-stevia-monkfruit",
          "label": "Read: Stevia & monk fruit",
          "quote": "Plant-derived high-intensity sweeteners with zero sugar calories. Blending stevia leaf extract (often Reb M) with monk fruit helps soften herbal aftertaste."
        }
      ],
      "references": [
        {
          "href": "sweeteners-flavors.html#evidence-stevia-monkfruit",
          "label": "Read: Stevia & monk fruit",
          "quote": "Plant-derived high-intensity sweeteners with zero sugar calories. Blending stevia leaf extract (often Reb M) with monk fruit helps soften herbal aftertaste."
        },
        {
          "href": "https://chobani.com/products/yogurt-zerosugar-vanilla-multi-pack",
          "label": "Manufacturer’s ingredient list"
        }
      ],
      "tokens": [
        {
          "id": "allulose",
          "text": "Allulose",
          "correct": true,
          "feedback": "Allulose adds some sweetness as well as bulk."
        },
        {
          "id": "flavor",
          "text": "Natural flavors",
          "correct": false,
          "feedback": "Natural flavors contribute flavor. The name does not identify a sweetener."
        },
        {
          "id": "guar",
          "text": "Guar gum",
          "correct": false,
          "feedback": "Guar gum stabilizes texture."
        },
        {
          "id": "stevia",
          "text": "Stevia leaf extract (reb m)",
          "correct": true,
          "feedback": "Stevia leaf extract is a high-intensity sweetener."
        },
        {
          "id": "monk",
          "text": "Monk fruit extract",
          "correct": true,
          "feedback": "Monk fruit extract adds sweetness."
        }
      ]
    },
    {
      "id": "fx-suffix",
      "objective": "F1",
      "stem": "On a pack of sugar-free gum, which ending is the quickest clue that an ingredient is a sugar alcohol adding bulk and cooling sweetness?",
      "review": {
        "href": "sweeteners-flavors.html#evidence-sugar-alcohols",
        "label": "Read: Sugar alcohols (Xylitol, Maltitol, Sorbitol, Erythritol)",
        "quote": "Reduced-calorie carbohydrates (not alcoholic) that replace the physical volume sugar normally gives to gum, candies, and puddings, often with a mild cooling feel."
      },
      "type": "single",
      "points": 1,
      "cognitiveLevel": "apply",
      "options": [
        {
          "id": "ate",
          "text": "-ate (as in sorbate or propionate)",
          "correct": false,
          "feedback": "These examples are preservatives."
        },
        {
          "id": "ite",
          "text": "-ite (as in bisulfite or nitrite)",
          "correct": false,
          "feedback": "These examples are names from the preservation chapter."
        },
        {
          "id": "ol",
          "text": "-ol (as in xylitol, maltitol, or sorbitol)",
          "correct": true,
          "feedback": "The -ol ending is a useful clue when reading sweetener names."
        },
        {
          "id": "gum",
          "text": "-gum (as in xanthan or gellan gum)",
          "correct": false,
          "feedback": "These gum names point to texture ingredients."
        }
      ],
      "retryHint": "Compare the suffix of xylitol and maltitol against the preservative families you learned earlier."
    },
    {
      "id": "fx-pudding-sweeteners",
      "objective": "F3",
      "stem": "Select all three sweeteners used in this zero-sugar pudding cup. Do not select texture additives from Chapter 03.",
      "review": {
        "href": "sweeteners-flavors.html#evidence-sugar-alcohols",
        "label": "Read: Sugar alcohols (Xylitol, Maltitol, Sorbitol, Erythritol)",
        "quote": "Reduced-calorie carbohydrates (not alcoholic) that replace the physical volume sugar normally gives to gum, candies, and puddings, often with a mild cooling feel."
      },
      "type": "label-select",
      "points": 3,
      "cognitiveLevel": "apply",
      "retryHint": "Look toward the end of the list for the two high-intensity sweeteners.",
      "retryOnWrong": {
        "starch": "Modified cornstarch and sodium stearoyl lactylate handle thickness and smoothness from Chapter 03. Look for the -ol sugar alcohol and the two high-intensity sweeteners.",
        "ssl": "Modified cornstarch and sodium stearoyl lactylate handle thickness and smoothness from Chapter 03. Look for the -ol sugar alcohol and the two high-intensity sweeteners.",
        "alginate": "Modified cornstarch and sodium stearoyl lactylate handle thickness and smoothness from Chapter 03. Look for the -ol sugar alcohol and the two high-intensity sweeteners."
      },
      "retryReviews": [
        {
          "href": "sweeteners-flavors.html#evidence-sugar-alcohols",
          "label": "Read: Sugar alcohols (Xylitol, Maltitol, Sorbitol, Erythritol)",
          "quote": "Reduced-calorie carbohydrates (not alcoholic) that replace the physical volume sugar normally gives to gum, candies, and puddings, often with a mild cooling feel."
        },
        {
          "href": "sweeteners-flavors.html#evidence-sucralose",
          "label": "Read: Sucralose",
          "quote": "A chlorinated derivative of table sugar that stays sweet under heat, making it common in liquid drink mixes, puddings, and sugar-free baked goods."
        },
        {
          "href": "sweeteners-flavors.html#evidence-ace-k",
          "label": "Read: Acesulfame potassium",
          "quote": "A heat-stable, zero-calorie sweetener that can taste slightly bitter on its own, so makers often blend it with aspartame or sucralose to smooth the aftertaste."
        }
      ],
      "references": [
        {
          "href": "sweeteners-flavors.html#evidence-sucralose",
          "label": "Read: Sucralose",
          "quote": "A chlorinated derivative of table sugar that stays sweet under heat, making it common in liquid drink mixes, puddings, and sugar-free baked goods."
        },
        {
          "href": "sweeteners-flavors.html#evidence-ace-k",
          "label": "Read: Acesulfame potassium",
          "quote": "A heat-stable, zero-calorie sweetener that can taste slightly bitter on its own, so makers often blend it with aspartame or sucralose to smooth the aftertaste."
        },
        {
          "href": "https://www.kraftheinz.com/jell-o/products/00043000042038-zero-sugar-dark-chocolate-pudding-snack-cups",
          "label": "Manufacturer’s ingredient list"
        }
      ],
      "tokens": [
        {
          "id": "starch",
          "text": "Modified cornstarch",
          "correct": false,
          "feedback": "It thickens the pudding."
        },
        {
          "id": "maltitol",
          "text": "Maltitol",
          "correct": true,
          "feedback": "Maltitol gives sweetness and helps replace sugar’s bulk."
        },
        {
          "id": "ssl",
          "text": "Sodium stearoyl lactylate",
          "correct": false,
          "feedback": "The label names its smooth-texture role."
        },
        {
          "id": "alginate",
          "text": "Sodium alginate",
          "correct": false,
          "feedback": "It helps shape the pudding’s texture."
        },
        {
          "id": "sucralose",
          "text": "Sucralose",
          "correct": true,
          "feedback": "Sucralose contributes sweetness in a small amount."
        },
        {
          "id": "flavor",
          "text": "Natural and artificial flavor",
          "correct": false,
          "feedback": "The aroma blend contributes flavor rather than sweetness."
        },
        {
          "id": "ace-k",
          "text": "Acesulfame potassium",
          "correct": true,
          "feedback": "Ace-K contributes sweetness in a small amount."
        }
      ],
      "retryOnMissing": {
        "maltitol": "You caught the high-intensity sweeteners near the end—now check near the top for a sugar alcohol ending in -ol."
      }
    },
    {
      "id": "fx-pudding-roles",
      "objective": "F2",
      "stem": "Why does this pudding include maltitol in addition to sucralose and acesulfame potassium?",
      "review": {
        "href": "sweeteners-flavors.html#evidence-sugar-alcohols",
        "label": "Read: Sugar alcohols (Xylitol, Maltitol, Sorbitol, Erythritol)",
        "quote": "Reduced-calorie carbohydrates (not alcoholic) that replace the physical volume sugar normally gives to gum, candies, and puddings, often with a mild cooling feel."
      },
      "type": "single",
      "points": 1,
      "cognitiveLevel": "analyze",
      "options": [
        {
          "id": "preserve",
          "text": "Maltitol stops bacteria from spoiling the milk protein.",
          "correct": false,
          "feedback": "Maltitol contributes sweetness and bulk."
        },
        {
          "id": "bulk",
          "text": "High-intensity sweeteners add sweetness in tiny amounts, while maltitol helps replace the physical bulk and mouthfeel lost when sugar is removed.",
          "correct": true,
          "feedback": "Sucralose and Ace-K do much of the sweetening. The amount of maltitol can help replace some of the body from sugar."
        },
        {
          "id": "color",
          "text": "Maltitol adds the dark chocolate color.",
          "correct": false,
          "feedback": "Cocoa contributes the chocolate color."
        },
        {
          "id": "solubility",
          "text": "Sucralose only dissolves in cold soda, not pudding.",
          "correct": false,
          "feedback": "Sucralose is in the pudding’s ingredient list as a sweetener."
        }
      ],
      "retryHint": "Think about what a spoonful of sugar adds to the texture and what a tiny amount of sweetener can replace.",
      "retryReviews": [
        {
          "href": "sweeteners-flavors.html#evidence-sugar-alcohols",
          "label": "Read: Sugar alcohols (Xylitol, Maltitol, Sorbitol, Erythritol)",
          "quote": "Reduced-calorie carbohydrates (not alcoholic) that replace the physical volume sugar normally gives to gum, candies, and puddings, often with a mild cooling feel."
        },
        {
          "href": "sweeteners-flavors.html#evidence-sucralose",
          "label": "Read: Sucralose",
          "quote": "A chlorinated derivative of table sugar that stays sweet under heat, making it common in liquid drink mixes, puddings, and sugar-free baked goods."
        },
        {
          "href": "sweeteners-flavors.html#evidence-ace-k",
          "label": "Read: Acesulfame potassium",
          "quote": "A heat-stable, zero-calorie sweetener that can taste slightly bitter on its own, so makers often blend it with aspartame or sucralose to smooth the aftertaste."
        }
      ],
      "references": [
        {
          "href": "sweeteners-flavors.html#evidence-sucralose",
          "label": "Read: Sucralose",
          "quote": "A chlorinated derivative of table sugar that stays sweet under heat, making it common in liquid drink mixes, puddings, and sugar-free baked goods."
        },
        {
          "href": "sweeteners-flavors.html#evidence-ace-k",
          "label": "Read: Acesulfame potassium",
          "quote": "A heat-stable, zero-calorie sweetener that can taste slightly bitter on its own, so makers often blend it with aspartame or sucralose to smooth the aftertaste."
        }
      ]
    },
    {
      "id": "f-sort",
      "objective": "F3",
      "stem": "Select every ingredient below that works as a sweetener or savory flavor enhancer (do not select preservatives, antioxidants, or texture stabilizers).",
      "review": {
        "href": "sweeteners-flavors.html#evidence-ace-k",
        "label": "Read: Acesulfame potassium (Ace-K)",
        "quote": "A heat-stable, zero-calorie sweetener that can taste slightly bitter on its own, so makers often blend it with aspartame or sucralose to smooth the aftertaste."
      },
      "type": "label-select",
      "points": 3,
      "cognitiveLevel": "analyze",
      "references": [
        {
          "href": "sweeteners-flavors.html#evidence-nucleotides",
          "label": "Read: Disodium inosinate & disodium guanylate",
          "quote": "Nucleotide flavor enhancers that do little on their own but multiply savory intensity when paired with MSG or yeast extract."
        },
        {
          "href": "sweeteners-flavors.html#evidence-yeast-extract",
          "label": "Read: Yeast extract",
          "quote": "Concentrated yeast rich in naturally occurring glutamates, adding brothy savory depth to soups, sauces, and snacks."
        }
      ],
      "explanation": "Acesulfame potassium adds sweetness, while disodium inosinate and yeast extract boost savory umami. The remaining items belong to preservation, oxidation control, or texture.",
      "tokens": [
        {
          "id": "sorbate",
          "text": "Potassium sorbate",
          "correct": false,
          "feedback": "Potassium sorbate helps control mold and yeast."
        },
        {
          "id": "inosinate",
          "text": "Disodium inosinate",
          "correct": true,
          "feedback": "It works with glutamates to deepen umami."
        },
        {
          "id": "xanthan",
          "text": "Xanthan gum",
          "correct": false,
          "feedback": "Xanthan gum thickens liquids and helps keep small pieces suspended."
        },
        {
          "id": "ace-k",
          "text": "Acesulfame potassium",
          "correct": true,
          "feedback": "Ace-K is a high-intensity sweetener."
        },
        {
          "id": "edta",
          "text": "Calcium disodium EDTA",
          "correct": false,
          "feedback": "It binds metals that can speed oxidation."
        },
        {
          "id": "yeast",
          "text": "Yeast extract",
          "correct": true,
          "feedback": "It brings savory depth through naturally occurring glutamates."
        },
        {
          "id": "ssl",
          "text": "Sodium stearoyl lactylate",
          "correct": false,
          "feedback": "It is used for texture, including smoothness in the pudding example."
        },
        {
          "id": "bht",
          "text": "BHT",
          "correct": false,
          "feedback": "BHT helps delay oxidation in fats and oils."
        }
      ]
    },
    {
      "id": "f-mix-flavor",
      "objective": "F1",
      "stem": "Which drink mix uses \"natural flavor\" rather than \"artificial flavor\" on its ingredient list?",
      "review": {
        "href": "sweeteners-flavors.html#evidence-flavorings",
        "label": "Read: Natural flavors & artificial flavors",
        "quote": "Aroma blends that restore or standardize taste lost during processing and storage."
      },
      "type": "single",
      "points": 1,
      "cognitiveLevel": "apply",
      "options": [
        {
          "id": "country",
          "text": "Mix A",
          "correct": true,
          "feedback": "The Country Time list says natural flavor."
        },
        {
          "id": "kool",
          "text": "Mix B",
          "correct": false,
          "feedback": "The Kool-Aid list says artificial flavor."
        }
      ],
      "fixedOrder": true,
      "references": [
        {
          "href": "https://www.kraftheinz.com/country-time/products/00043000007730-lemon-iced-tea-naturally-flavored-liquid-drink-mix",
          "label": "Country Time Lemon Iced Tea Naturally Flavored Liquid Drink Mix"
        },
        {
          "href": "https://www.kraftheinz.com/kool-aid/products/00043000005743-liquid-cherry-artificially-flavored-soft-drink-mix",
          "label": "Kool-Aid Liquid Cherry Artificially Flavored Soft Drink Mix"
        }
      ]
    },
    {
      "id": "f-mix-sweeteners",
      "objective": "F1",
      "stem": "Select the sweetener pair that appears on BOTH labels.",
      "review": {
        "href": "sweeteners-flavors.html#evidence-sucralose",
        "label": "Read: Sucralose",
        "quote": "A chlorinated derivative of table sugar that stays sweet under heat, making it common in liquid drink mixes, puddings, and sugar-free baked goods."
      },
      "type": "label-select",
      "points": 1,
      "cognitiveLevel": "analyze",
      "allOrNothing": true,
      "explanation": "The pair is sucralose and acesulfame potassium. Look for both names on each list.",
      "references": [
        {
          "href": "sweeteners-flavors.html#evidence-ace-k",
          "label": "Read: Acesulfame potassium (Ace-K)",
          "quote": "A heat-stable, zero-calorie sweetener that can taste slightly bitter on its own, so makers often blend it with aspartame or sucralose to smooth the aftertaste."
        }
      ],
      "tokens": [
        {
          "id": "citrate",
          "text": "Potassium citrate",
          "correct": false,
          "feedback": "Both mixes contain it for acidity control."
        },
        {
          "id": "sucralose",
          "text": "Sucralose",
          "correct": true,
          "feedback": "Both lists give sucralose as a sweetener."
        },
        {
          "id": "glycerin",
          "text": "Glycerin",
          "correct": false,
          "feedback": "Glycerin appears in Mix A only."
        },
        {
          "id": "ace-k",
          "text": "Acesulfame potassium",
          "correct": true,
          "feedback": "Both lists give acesulfame potassium as a sweetener."
        },
        {
          "id": "gum",
          "text": "Gum arabic",
          "correct": false,
          "feedback": "Gum arabic appears in Mix B only."
        }
      ]
    },
    {
      "id": "f-mix-claim",
      "objective": "F4",
      "stem": "A shopper picks Mix A assuming \"Naturally Flavored\" means it skips synthetic sweeteners and dyes. What does the ingredient list show?",
      "review": {
        "href": "sweeteners-flavors.html#evidence-natural-claim",
        "label": "Read: What “Naturally Flavored” tells you",
        "quote": "On Country Time Lemon Iced Tea liquid mix, the front says \"Naturally Flavored,\" yet the ingredient list still includes sucralose, acesulfame potassium, and certified dyes. The phrase describes only the flavoring source."
      },
      "type": "single",
      "points": 1,
      "cognitiveLevel": "evaluate",
      "options": [
        {
          "id": "lemon",
          "text": "Mix A is sweetened only with lemon juice.",
          "correct": false,
          "feedback": "The list identifies sucralose and acesulfame potassium as sweeteners."
        },
        {
          "id": "supports",
          "text": "The phrase applies only to the flavoring source; Mix A still lists sucralose, acesulfame potassium, and certified dyes.",
          "correct": true,
          "feedback": "Check each part of the ingredient list on its own. The same label contains natural flavor, two high-intensity sweeteners and named dyes."
        },
        {
          "id": "hidden",
          "text": "Synthetic sweeteners can be grouped under \"natural flavor.\"",
          "correct": false,
          "feedback": "Both sweeteners appear separately by name on Mix A."
        }
      ],
      "references": [
        {
          "href": "https://www.kraftheinz.com/country-time/products/00043000007730-lemon-iced-tea-naturally-flavored-liquid-drink-mix",
          "label": "Country Time Lemon Iced Tea Naturally Flavored Liquid Drink Mix"
        }
      ]
    },
    {
      "id": "f-mechanisms",
      "type": "matching",
      "parts": [
        {
          "id": "f-mech-umami",
          "objective": "F2",
          "stem": "A savory potato crisp lists both MSG and disodium guanylate.",
          "review": {
            "href": "sweeteners-flavors.html#evidence-nucleotides",
            "label": "Read: Disodium inosinate & disodium guanylate",
            "quote": "Nucleotide flavor enhancers that do little on their own but multiply savory intensity when paired with MSG or yeast extract."
          },
          "type": "match",
          "points": 1,
          "cognitiveLevel": "analyze",
          "options": [
            {
              "id": "umami",
              "text": "Multiplies umami intensity through synergy",
              "correct": true,
              "feedback": "The nucleotides amplify the savory taste produced by glutamate."
            },
            {
              "id": "cola",
              "text": "Creates a sharp cola bite without citrus fruit tartness",
              "correct": false,
              "feedback": "Phosphoric acid gives cola a sharper, drier taste."
            },
            {
              "id": "bulk",
              "text": "Provides physical bulk and cooling sweetness with fewer calories",
              "correct": false,
              "feedback": "Sugar alcohols can replace some of sugar’s bulk and feel cool as they dissolve."
            },
            {
              "id": "droplets",
              "text": "Prevents oil droplets from separating in water",
              "correct": false,
              "feedback": "Keeping oil droplets mixed into water is an emulsifier’s job."
            }
          ],
          "inputLabel": "Choose a matching purpose"
        },
        {
          "id": "f-mech-cola",
          "objective": "F2",
          "stem": "A zero-sugar cola lists phosphoric acid rather than citric acid.",
          "review": {
            "href": "sweeteners-flavors.html#evidence-phosphoric-acid",
            "label": "Read: Phosphoric acid",
            "quote": "Gives colas a crisp, dry sharpness without adding citrus fruitiness, while lowering pH."
          },
          "type": "match",
          "points": 1,
          "cognitiveLevel": "analyze",
          "options": [
            {
              "id": "umami",
              "text": "Multiplies umami intensity through synergy",
              "correct": false,
              "feedback": "The nucleotides amplify the savory taste produced by glutamate."
            },
            {
              "id": "cola",
              "text": "Creates a sharp cola bite without citrus fruit tartness",
              "correct": true,
              "feedback": "Phosphoric acid gives cola a sharper, drier taste."
            },
            {
              "id": "bulk",
              "text": "Provides physical bulk and cooling sweetness with fewer calories",
              "correct": false,
              "feedback": "Sugar alcohols can replace some of sugar’s bulk and feel cool as they dissolve."
            },
            {
              "id": "droplets",
              "text": "Prevents oil droplets from separating in water",
              "correct": false,
              "feedback": "Keeping oil droplets mixed into water is an emulsifier’s job."
            }
          ],
          "inputLabel": "Choose a matching purpose"
        },
        {
          "id": "f-mech-bulk",
          "objective": "F2",
          "stem": "A sugar-free chewing gum lists xylitol and maltitol first.",
          "review": {
            "href": "sweeteners-flavors.html#evidence-sugar-alcohols",
            "label": "Read: Sugar alcohols (Xylitol, Maltitol, Sorbitol, Erythritol)",
            "quote": "Reduced-calorie carbohydrates (not alcoholic) that replace the physical volume sugar normally gives to gum, candies, and puddings, often with a mild cooling feel."
          },
          "type": "match",
          "points": 1,
          "cognitiveLevel": "analyze",
          "options": [
            {
              "id": "umami",
              "text": "Multiplies umami intensity through synergy",
              "correct": false,
              "feedback": "The nucleotides amplify the savory taste produced by glutamate."
            },
            {
              "id": "cola",
              "text": "Creates a sharp cola bite without citrus fruit tartness",
              "correct": false,
              "feedback": "Phosphoric acid gives cola a sharper, drier taste."
            },
            {
              "id": "bulk",
              "text": "Provides physical bulk and cooling sweetness with fewer calories",
              "correct": true,
              "feedback": "Sugar alcohols can replace some of sugar’s bulk and feel cool as they dissolve."
            },
            {
              "id": "droplets",
              "text": "Prevents oil droplets from separating in water",
              "correct": false,
              "feedback": "Keeping oil droplets mixed into water is an emulsifier’s job."
            }
          ],
          "inputLabel": "Choose a matching purpose"
        }
      ]
    },
    {
      "id": "f-line-cookie",
      "type": "matching",
      "stem": "Line A · Zero-sugar chocolate chip cookies",
      "parts": [
        {
          "id": "f-line-sucralose",
          "objective": "F2",
          "stem": "Which ingredient gives the cookie a high-intensity sweetness that can withstand baking?",
          "review": {
            "href": "sweeteners-flavors.html#evidence-sucralose",
            "label": "Read: Sucralose",
            "quote": "A chlorinated derivative of table sugar that stays sweet under heat, making it common in liquid drink mixes, puddings, and sugar-free baked goods."
          },
          "type": "match",
          "points": 1,
          "cognitiveLevel": "analyze",
          "options": [
            {
              "id": "aspartame",
              "text": "Aspartame",
              "correct": false,
              "feedback": "Aspartame can break down under high oven heat, leaving baked cookies far less sweet than intended."
            },
            {
              "id": "sucralose",
              "text": "Sucralose",
              "correct": true,
              "feedback": "Sucralose can add concentrated sweetness to a baked formulation."
            },
            {
              "id": "umami",
              "text": "Disodium inosinate + MSG",
              "correct": false,
              "feedback": "Umami enhancers boost savory notes rather than sweetening cookie dough."
            },
            {
              "id": "allulose",
              "text": "Allulose",
              "correct": false,
              "feedback": "Allulose can add sweetness and bulk. This slot asks for a high-intensity sweetener."
            },
            {
              "id": "sorbate",
              "text": "Potassium sorbate",
              "correct": false,
              "feedback": "Sorbate slows mold growth; it provides neither sweetness nor bulk."
            }
          ],
          "inputLabel": "Choose an ingredient",
          "references": [
            {
              "href": "sweeteners-flavors.html#evidence-aspartame",
              "label": "Read: Aspartame",
              "quote": "A synthetic sweetener roughly 200 times sweeter than sugar, widely used in cold diet drinks. It breaks down under long, high baking heat, so it rarely appears in baked goods."
            }
          ]
        },
        {
          "id": "f-line-allulose",
          "objective": "F2",
          "stem": "Which ingredient provides sugar-like bulk in the cookie?",
          "review": {
            "href": "sweeteners-flavors.html#evidence-allulose",
            "label": "Read: Allulose",
            "quote": "A rare sugar that is about 70% as sweet as table sugar with minimal calories, giving yogurt and baked goods real sugar-like bulk and smooth body."
          },
          "type": "match",
          "points": 1,
          "cognitiveLevel": "analyze",
          "options": [
            {
              "id": "aspartame",
              "text": "Aspartame",
              "correct": false,
              "feedback": "Aspartame can break down under high oven heat, leaving baked cookies far less sweet than intended."
            },
            {
              "id": "sucralose",
              "text": "Sucralose",
              "correct": false,
              "feedback": "Sucralose provides sweetness in a tiny amount, so it cannot replace much of the sugar’s physical bulk."
            },
            {
              "id": "umami",
              "text": "Disodium inosinate + MSG",
              "correct": false,
              "feedback": "Umami enhancers boost savory notes rather than sweetening cookie dough."
            },
            {
              "id": "allulose",
              "text": "Allulose",
              "correct": true,
              "feedback": "Allulose adds mass and contributes sweetness."
            },
            {
              "id": "sorbate",
              "text": "Potassium sorbate",
              "correct": false,
              "feedback": "Sorbate slows mold growth; it provides neither sweetness nor bulk."
            }
          ],
          "inputLabel": "Choose an ingredient",
          "references": []
        }
      ]
    },
    {
      "id": "f-line-snack",
      "type": "matching",
      "stem": "Line B · Cheese-flavored snack seasoning",
      "parts": [
        {
          "id": "f-line-umami",
          "objective": "F2",
          "stem": "Which ingredient or blend will deepen the savory taste of the cheese snack?",
          "review": {
            "href": "sweeteners-flavors.html#evidence-nucleotides",
            "label": "Read: Disodium inosinate & disodium guanylate",
            "quote": "Nucleotide flavor enhancers that do little on their own but multiply savory intensity when paired with MSG or yeast extract."
          },
          "type": "match",
          "points": 1,
          "cognitiveLevel": "analyze",
          "options": [
            {
              "id": "aspartame",
              "text": "Aspartame",
              "correct": false,
              "feedback": "Sweeteners raise sweetness rather than savory umami depth."
            },
            {
              "id": "sucralose",
              "text": "Sucralose",
              "correct": false,
              "feedback": "Sweeteners raise sweetness rather than savory umami depth."
            },
            {
              "id": "umami",
              "text": "Disodium inosinate + MSG",
              "correct": true,
              "feedback": "MSG supplies glutamate and disodium inosinate amplifies the savory taste."
            },
            {
              "id": "allulose",
              "text": "Allulose",
              "correct": false,
              "feedback": "Sweeteners raise sweetness rather than savory umami depth."
            },
            {
              "id": "sorbate",
              "text": "Potassium sorbate",
              "correct": false,
              "feedback": "Sorbate is an antimicrobial preservative, not a savory flavor enhancer."
            }
          ],
          "inputLabel": "Choose an ingredient",
          "references": []
        }
      ]
    },
    {
      "id": "f-overclaims",
      "objective": "F4",
      "stem": "Select every statement that goes beyond what the label can show.",
      "review": {
        "href": "sweeteners-flavors.html#evidence-sugar-claim",
        "label": "Read: Reading a “Zero Sugar” claim",
        "quote": "“Zero Sugar” describes sugars, not whether the product uses sweeteners. Check the ingredient list for names such as aspartame, sucralose, or stevia extract."
      },
      "type": "label-select",
      "points": 3,
      "cognitiveLevel": "evaluate",
      "display": "passage",
      "pointsByHits": [
        0,
        1,
        3
      ],
      "references": [
        {
          "href": "sweeteners-flavors.html#evidence-msg-claim",
          "label": "Read: What “No MSG Added” does and doesn’t tell you",
          "quote": "A soup can skip pure monosodium glutamate and still rely on yeast extract, tomato paste, or cheese for naturally occurring glutamates."
        },
        {
          "href": "sweeteners-flavors.html#evidence-allulose",
          "label": "Read: Allulose",
          "quote": "A rare sugar that is about 70% as sweet as table sugar with minimal calories, giving yogurt and baked goods real sugar-like bulk and smooth body."
        },
        {
          "href": "https://www.fda.gov/food/food-additives-petitions/questions-and-answers-monosodium-glutamate-msg",
          "label": "FDA: Questions and answers on MSG"
        }
      ],
      "tokens": [
        {
          "id": "notice",
          "text": "Diet colas sweetened with aspartame carry a phenylalanine notice on the label.",
          "correct": false,
          "feedback": "U.S. labeling rules require that notice whenever aspartame is used."
        },
        {
          "id": "zero-added",
          "text": "Because a yogurt tub lists \"0g Added Sugars\" on the Nutrition Facts panel, it cannot contain any sweetening ingredients like stevia or allulose.",
          "correct": true,
          "feedback": "Stevia is a high-intensity sweetener. FDA’s allulose guidance allows allulose to be left off Added Sugars. Check the ingredient list for both."
        },
        {
          "id": "broth",
          "text": "Yeast extract is a common way to build savory depth in soups and broths.",
          "correct": false,
          "feedback": "Yeast extract naturally supplies glutamates that deepen brothy flavor."
        },
        {
          "id": "no-msg",
          "text": "If a soup can says \"No MSG Added,\" you can be sure it contains no glutamates of any kind.",
          "correct": true,
          "feedback": "Skipping added pure MSG does not remove naturally occurring glutamates. FDA limits the claim on foods with ingredients that supply naturally occurring free glutamate."
        }
      ]
    },
    {
      "id": "f-lemon-names",
      "objective": "F1",
      "stem": "This lemonade is not labeled \"Zero Sugar\" or \"Diet.\" Which ingredients show it still uses high-intensity sweeteners alongside corn syrup?",
      "review": {
        "href": "sweeteners-flavors.html#evidence-sucralose",
        "label": "Read: Sucralose",
        "quote": "A chlorinated derivative of table sugar that stays sweet under heat, making it common in liquid drink mixes, puddings, and sugar-free baked goods."
      },
      "type": "single",
      "points": 1,
      "cognitiveLevel": "apply",
      "options": [
        {
          "id": "pectin",
          "text": "Pectin and lemon pulp",
          "correct": false,
          "feedback": "Pectin and lemon pulp do not provide high-intensity sweetness."
        },
        {
          "id": "sweeteners",
          "text": "Sucralose and acesulfame potassium",
          "correct": true,
          "feedback": "Even non-diet drinks can list high-intensity sweeteners near the end of the label."
        },
        {
          "id": "juice",
          "text": "Natural flavors and lemon juice",
          "correct": false,
          "feedback": "Flavor and juice give this lemonade its taste, but neither is one of the listed high-intensity sweeteners."
        }
      ],
      "references": [
        {
          "href": "sweeteners-flavors.html#evidence-ace-k",
          "label": "Read: Acesulfame potassium (Ace-K)",
          "quote": "A heat-stable, zero-calorie sweetener that can taste slightly bitter on its own, so makers often blend it with aspartame or sucralose to smooth the aftertaste."
        },
        {
          "href": "https://www.coca-cola.com/us/en/brands/minute-maid/products/lemonades-and-fruit-drinks",
          "label": "Minute Maid Lemonade Carton (59 fl oz)"
        }
      ]
    },
    {
      "id": "f-lemon-purpose",
      "objective": "F4",
      "stem": "Why might a regular, non-diet drink include both high fructose corn syrup and sucralose?",
      "review": {
        "href": "sweeteners-flavors.html#evidence-hfcs",
        "label": "Read: High fructose corn syrup (HFCS)",
        "quote": "A liquid sweetener made from corn starch that dissolves easily in cold drinks and gives a full, familiar mouthfeel."
      },
      "type": "single",
      "points": 2,
      "cognitiveLevel": "evaluate",
      "options": [
        {
          "id": "mold",
          "text": "Sucralose is added only to stop mold in lemon pulp.",
          "correct": false,
          "feedback": "Sucralose is used here for sweetness."
        },
        {
          "id": "soluble",
          "text": "High fructose corn syrup cannot dissolve in cold water without sucralose.",
          "correct": false,
          "feedback": "The liquid corn syrup mixes with water on its own."
        },
        {
          "id": "blend",
          "text": "Blending a small amount of high-intensity sweetener with corn syrup lets makers keep full sweetness while reducing total sugar and calories compared with an all-syrup recipe.",
          "correct": true,
          "feedback": "Using an intense sweetener may replace some of the syrup. The label confirms the blend, but does not quantify how much sugar the blend replaces."
        }
      ],
      "references": [
        {
          "href": "sweeteners-flavors.html#evidence-sucralose",
          "label": "Read: Sucralose",
          "quote": "A chlorinated derivative of table sugar that stays sweet under heat, making it common in liquid drink mixes, puddings, and sugar-free baked goods."
        },
        {
          "href": "https://www.coca-cola.com/us/en/brands/minute-maid/products/lemonades-and-fruit-drinks",
          "label": "Minute Maid Lemonade Carton (59 fl oz)"
        }
      ]
    }
  ],
  "blocks": [
    {
      "id": "flavors-coke-practice",
      "set": "practice",
      "title": "Read the Coca-Cola Zero Sugar label",
      "questionIds": [
        "fx-coke"
      ],
      "section": "read-label",
      "retryBeforeReveal": true,
      "product": {
        "name": "Coca-Cola Zero Sugar",
        "ingredientsText": "Carbonated water, caramel color, phosphoric acid, aspartame, potassium benzoate (to protect taste), natural flavors, potassium citrate, acesulfame potassium, caffeine, stevia extract. Phenylketonurics: contains phenylalanine.",
        "sourceUrl": "https://www.coca-cola.com/us/en/brands/coca-cola/products/zero/zero-sugar",
        "sourceLabel": "Manufacturer’s ingredient list",
        "showTranscript": true
      }
    },
    {
      "id": "flavors-blend-practice",
      "set": "practice",
      "title": "Why blend two sweeteners?",
      "questionIds": [
        "fx-blend"
      ],
      "section": "check-understanding",
      "retryBeforeReveal": true
    },
    {
      "id": "flavors-yogurt-practice",
      "set": "practice",
      "title": "Read a zero-sugar yogurt label",
      "questionIds": [
        "fx-yogurt"
      ],
      "section": "check-understanding",
      "retryBeforeReveal": true,
      "intro": "<p>Chobani Zero Sugar Vanilla · ingredient-list excerpt</p>"
    },
    {
      "id": "flavors-suffix-practice",
      "set": "practice",
      "title": "Find a sugar alcohol by name",
      "questionIds": [
        "fx-suffix"
      ],
      "section": "check-understanding",
      "retryBeforeReveal": true
    },
    {
      "id": "flavors-pudding-tokens",
      "set": "practice",
      "title": "Find the sweetening ingredients",
      "questionIds": [
        "fx-pudding-sweeteners"
      ],
      "section": "try-new-label",
      "retryBeforeReveal": true,
      "product": {
        "name": "Jell-O Zero Sugar Dark Chocolate Pudding Snack Cups",
        "ingredientsText": "Water, modified cornstarch, maltitol, cocoa processed with alkali, milk protein concentrate, contains less than 1.5% of hydrogenated vegetable oil (coconut and palm kernel oils), salt, sodium stearoyl lactylate (for smooth texture), calcium phosphate, sodium alginate, sucralose, artificial color, natural and artificial flavor, acesulfame potassium. Contains: milk.",
        "sourceUrl": "https://www.kraftheinz.com/jell-o/products/00043000042038-zero-sugar-dark-chocolate-pudding-snack-cups",
        "sourceLabel": "Manufacturer’s ingredient list",
        "showTranscript": true,
        "labelView": {
          "label": "assets/products/ch04/jello-zero-pudding-ingredients.jpg",
          "front": "assets/products/ch04/jello-zero-pudding-front.jpg",
          "back": "assets/products/ch04/jello-zero-pudding-back.jpg"
        }
      }
    },
    {
      "id": "flavors-pudding-roles",
      "set": "practice",
      "title": "Explain the sweetener blend",
      "questionIds": [
        "fx-pudding-roles"
      ],
      "section": "try-new-label",
      "retryBeforeReveal": true
    },
    {
      "id": "flavors-check-sort",
      "set": "chapter-check",
      "title": "Separate taste from texture and preservation",
      "questionIds": [
        "f-sort"
      ]
    },
    {
      "id": "flavors-check-mixes",
      "set": "chapter-check",
      "title": "Two zero-calorie drink mixes",
      "questionIds": [
        "f-mix-flavor",
        "f-mix-sweeteners",
        "f-mix-claim"
      ],
      "intro": "<p>Compare the front and ingredient list for each mix.</p>",
      "products": [
        {
          "name": "Mix A · Country Time Lemon Iced Tea",
          "ingredientsText": "Water, citric acid, natural flavor, glycerin, potassium citrate, contains less than 2% of sucralose and acesulfame potassium (sweetener), red 40, blue 1, yellow 5.",
          "sourceUrl": "https://www.kraftheinz.com/country-time/products/00043000007730-lemon-iced-tea-naturally-flavored-liquid-drink-mix",
          "sourceLabel": "Manufacturer’s ingredient list",
          "image": "assets/products/ch04/country-time-front.jpg",
          "switchViews": true,
          "transcriptOpen": true
        },
        {
          "name": "Mix B · Kool-Aid Liquid Cherry",
          "ingredientsText": "Water, citric acid, gum arabic, potassium citrate, sucralose (sweetener), contains less than 2% of artificial flavor, acesulfame potassium (sweetener), sucrose acetate isobutyrate, red 40, blue 1, sodium benzoate and potassium sorbate (preservatives).",
          "sourceUrl": "https://www.kraftheinz.com/kool-aid/products/00043000005743-liquid-cherry-artificially-flavored-soft-drink-mix",
          "sourceLabel": "Manufacturer’s ingredient list",
          "image": "assets/products/ch04/kool-aid-front.jpg",
          "switchViews": true,
          "transcriptOpen": true
        }
      ],
      "diagnostic": {
        "afterCorrect": "f-mix-flavor",
        "target": "f-mix-sweeteners",
        "text": "You matched the flavoring label on Mix A, but check the sweetener lines on both mixes—sucralose and acesulfame potassium appear in both."
      }
    },
    {
      "id": "flavors-check-mechanisms",
      "set": "chapter-check",
      "title": "Match the taste mechanism",
      "questionIds": [
        "f-mechanisms"
      ]
    },
    {
      "id": "flavors-check-line",
      "set": "chapter-check",
      "title": "Two problems on the flavor line",
      "questionIds": [
        "f-line-cookie",
        "f-line-snack"
      ],
      "production": true,
      "intro": "<p><strong>Line A</strong> bakes cookies at 375°F and needs concentrated sweetness plus sugar-like bulk. <strong>Line B</strong> needs a stronger savory taste without doubling the table salt. Each slot has the same choices.</p>"
    },
    {
      "id": "flavors-check-claims",
      "set": "chapter-check",
      "title": "Spot the overclaims",
      "questionIds": [
        "f-overclaims"
      ]
    },
    {
      "id": "flavors-check-lemonade",
      "set": "chapter-check",
      "title": "Reading a regular drink label closely",
      "questionIds": [
        "f-lemon-names",
        "f-lemon-purpose"
      ],
      "product": {
        "name": "Minute Maid Lemonade Carton (59 fl oz)",
        "ingredientsText": "Pure filtered water, lemon juice from concentrate, high fructose corn syrup, less than 1% of: lemon pulp, natural flavors, pectin, sucralose, acesulfame potassium.",
        "sourceUrl": "https://www.coca-cola.com/us/en/brands/minute-maid/products/lemonades-and-fruit-drinks",
        "sourceLabel": "Manufacturer’s ingredient list",
        "transcriptOpen": true
      }
    }
  ]
};
