window.LabelNotesBanks ||= {};
window.LabelNotesBanks["colors"] = {
  "version": "20261128-7",
  "questions": [
    {
      "id": "cx-yogurt",
      "objective": "C1",
      "stem": "This strawberry yogurt lists no certified FD&C dyes. Which ingredient adds red color, and what should a vegetarian shopper know about it?",
      "review": {
        "href": "colors.html#evidence-carmine",
        "label": "Read: Carmine",
        "quote": "What it does · A deep, heat-stable crimson pigment extracted from cochineal scale insects, used in some strawberry yogurts and pink drinks."
      },
      "type": "single",
      "points": 1,
      "cognitiveLevel": "apply",
      "options": [
        {
          "id": "carmine-it-is-derived-from-insects-so-it-is-not-vegetarian",
          "text": "Carmine — it is derived from insects, so it is not vegetarian.",
          "correct": true,
          "feedback": "Carmine comes from cochineal insects."
        },
        {
          "id": "fruit-pectin-it-turns-strawberries-bright-red",
          "text": "Fruit pectin — it turns strawberries bright red.",
          "correct": false,
          "feedback": "Fruit pectin helps the yogurt hold its texture."
        },
        {
          "id": "modified-corn-starch-it-acts-as-a-synthetic-red-lake",
          "text": "Modified corn starch — it acts as a synthetic red lake.",
          "correct": false,
          "feedback": "Modified corn starch thickens the yogurt."
        },
        {
          "id": "natural-flavor-it-supplies-both-berry-taste-and-red-color",
          "text": "Natural flavor — it supplies both berry taste and red color.",
          "correct": false,
          "feedback": "Natural flavor gives the yogurt berry flavor."
        }
      ],
      "retryHint": "Check near the end of the list for the phrase \"(for color)\" and recall where that pigment comes from.",
      "explanation": "Carmine (for color) is an exempt natural-source pigment made from cochineal insects. Pectin and modified corn starch handle texture (Chapter 03)."
    },
    {
      "id": "cx-lakes",
      "objective": "C2",
      "stem": "Why do hard candy shells like Skittles list \"Red 40 Lake\" and \"Blue 1 Lake\" rather than relying only on standard water-soluble dyes?",
      "review": {
        "href": "colors.html#evidence-fd-c-lakes",
        "label": "Read: FD&C Lakes",
        "quote": "What it does · Water-insoluble pigments made by binding a dye to an inert base. They color hard candy shells, fat-rich frostings, and dry mixes without bleeding onto fingers or into neighboring layers."
      },
      "type": "single",
      "points": 1,
      "cognitiveLevel": "analyze",
      "options": [
        {
          "id": "lakes-are-water-insoluble-pigments-so-they-coat-the-shell-evenly-and-resist-bleeding-onto-hands-or-into-other-layers",
          "text": "Lakes are water-insoluble pigments, so they coat the shell evenly and resist bleeding onto hands or into other layers.",
          "correct": true,
          "feedback": "The insoluble base helps keep the color in the coating."
        },
        {
          "id": "lakes-are-plant-based-substitutes-for-synthetic-dyes",
          "text": "Lakes are plant-based substitutes for synthetic dyes.",
          "correct": false,
          "feedback": "A lake is made from a certified dye and an insoluble base."
        },
        {
          "id": "lakes-are-required-whenever-a-candy-contains-citric-acid",
          "text": "Lakes are required whenever a candy contains citric acid.",
          "correct": false,
          "feedback": "Citric acid adds tartness and does not require a lake."
        },
        {
          "id": "standard-dyes-only-work-in-frozen-foods",
          "text": "Standard dyes only work in frozen foods.",
          "correct": false,
          "feedback": "Water-soluble dyes work in clear drinks as well."
        }
      ],
      "retryHint": "Compare how a water-soluble dye behaves in a clear drink versus on a dry candy shell.",
      "explanation": "Lakes bind the dye to an insoluble base so moisture does not make the coating run."
    },
    {
      "id": "cx-kool",
      "objective": "C3",
      "stem": "Select the ingredients that color this cherry drink.",
      "review": {
        "href": "colors.html#evidence-red-40",
        "label": "Read: Red 40",
        "quote": "What it does · The most widely used certified red dye in U.S. drinks, candies, and cereals, prized for staying bright across heat and light."
      },
      "type": "label-select",
      "points": 2,
      "cognitiveLevel": "apply",
      "tokens": [
        {
          "id": "citric-acid",
          "text": "Citric acid",
          "correct": false,
          "feedback": "Citric acid adds tartness.",
          "suffix": ""
        },
        {
          "id": "gum-arabic",
          "text": "Gum arabic",
          "correct": false,
          "feedback": "Gum arabic helps keep ingredients dispersed.",
          "suffix": ""
        },
        {
          "id": "sucralose",
          "text": "Sucralose",
          "correct": false,
          "feedback": "Sucralose adds sweetness.",
          "suffix": ""
        },
        {
          "id": "red-40",
          "text": "Red 40",
          "correct": true,
          "feedback": "Red 40 supplies red color.",
          "suffix": ""
        },
        {
          "id": "blue-1",
          "text": "Blue 1",
          "correct": true,
          "feedback": "Blue 1 contributes blue color to the blend.",
          "suffix": ""
        },
        {
          "id": "sodium-benzoate",
          "text": "Sodium benzoate",
          "correct": false,
          "feedback": "Sodium benzoate helps control spoilage.",
          "suffix": ""
        },
        {
          "id": "potassium-sorbate",
          "text": "Potassium sorbate",
          "correct": false,
          "feedback": "Potassium sorbate helps control spoilage.",
          "suffix": ""
        }
      ],
      "references": [
        {
          "href": "colors.html#evidence-blue-1-2",
          "label": "Read: Blue 1 & Blue 2",
          "quote": "What it does · Water-soluble synthetic blues used in drinks, icings, and candies—often paired with red or yellow dyes to create purple and green."
        }
      ],
      "retryHint": "Check which items handle acidity, sweetness, texture, or preservation from earlier chapters—only the numbered FD&C names color the drink."
    },
    {
      "id": "cx-caramel",
      "objective": "C2",
      "stem": "A zero-sugar cola lists \"caramel color\" near the top of its ingredients. What does that tell you?",
      "review": {
        "href": "colors.html#evidence-caramel-color",
        "label": "Read: Caramel color",
        "quote": "What it does · Made by heating food-grade carbohydrates to create deep brown tones in colas, gravies, and soy-style sauces."
      },
      "type": "single",
      "points": 1,
      "cognitiveLevel": "analyze",
      "options": [
        {
          "id": "it-is-a-brown-pigment-made-from-heated-carbohydrates-it-does-not-mean-the-soda-is-sweetened-with-sugary-caramel",
          "text": "It is a brown pigment made from heated carbohydrates; it does not mean the soda is sweetened with sugary caramel.",
          "correct": true,
          "feedback": "Caramel color gives the cola its brown appearance."
        },
        {
          "id": "the-soda-must-contain-hidden-table-sugar-despite-the-zero-sugar-claim",
          "text": "The soda must contain hidden table sugar despite the Zero Sugar claim.",
          "correct": false,
          "feedback": "Color and sugar content are separate pieces of label information."
        },
        {
          "id": "caramel-color-is-a-certified-fd-c-synthetic-dye",
          "text": "Caramel color is a certified FD&C synthetic dye.",
          "correct": false,
          "feedback": "Caramel color is exempt from batch certification."
        },
        {
          "id": "caramel-color-acts-as-the-main-preservative",
          "text": "Caramel color acts as the main preservative.",
          "correct": false,
          "feedback": "Caramel color serves as a color additive."
        }
      ],
      "retryHint": "Remember how a zero-calorie cola can still look dark brown.",
      "explanation": "Caramel color tints colas and sauces brown without acting as a sweet caramel flavoring."
    },
    {
      "id": "cx-cereal-colors",
      "objective": "C3",
      "stem": "Select the ingredients used to color this cereal.",
      "review": {
        "href": "colors.html#evidence-plant-juices",
        "label": "Read: Beet / vegetable juice",
        "quote": "What it does · Plant juice concentrates (beet, grape, carrot, red cabbage) that supply pinks, reds, and purples without certified dyes."
      },
      "type": "label-select",
      "points": 3,
      "cognitiveLevel": "apply",
      "tokens": [
        {
          "id": "gelatin",
          "text": "Gelatin",
          "correct": false,
          "feedback": "Gelatin helps give the frosting structure.",
          "suffix": ""
        },
        {
          "id": "vegetable-juice-for-color",
          "text": "Vegetable juice",
          "correct": true,
          "feedback": "The vegetable juice is there for color.",
          "suffix": ""
        },
        {
          "id": "natural-and-artificial-flavors",
          "text": "Natural flavor",
          "correct": false,
          "feedback": "Flavorings contribute taste and aroma.",
          "suffix": ""
        },
        {
          "id": "paprika-extract-color",
          "text": "Paprika extract",
          "correct": true,
          "feedback": "Paprika extract contributes color.",
          "suffix": ""
        },
        {
          "id": "citric-acid",
          "text": "Citric acid",
          "correct": false,
          "feedback": "Citric acid contributes tartness.",
          "suffix": ""
        },
        {
          "id": "beta-carotene-for-color",
          "text": "Beta-carotene",
          "correct": true,
          "feedback": "Beta-carotene supplies color.",
          "suffix": ""
        },
        {
          "id": "bht-for-freshness",
          "text": "BHT",
          "correct": false,
          "feedback": "BHT helps protect freshness.",
          "suffix": ""
        }
      ],
      "references": [
        {
          "href": "colors.html#evidence-paprika",
          "label": "Read: Paprika extract",
          "quote": "What it does · A warm red-orange color extracted from sweet red peppers, used alongside turmeric and annatto in savory snacks, dressings, and cheese sauces."
        },
        {
          "href": "colors.html#evidence-beta-carotene",
          "label": "Read: Beta-carotene",
          "quote": "What it does · A fat-soluble yellow-orange pigment (the same compound that colors carrots) used in broths, cereals, margarines, and candies."
        }
      ],
      "retryHint": "Compare the ingredient names by what they do in this cereal.",
      "retryReviews": [
        {
          "href": "colors.html#ingredient-names",
          "label": "Read: Ingredients & their uses"
        }
      ]
    },
    {
      "id": "cx-cereal-claim",
      "objective": "C4",
      "stem": "Based on those three color ingredients, which statement accurately describes this cereal?",
      "review": {
        "href": "colors.html#evidence-plant-juices",
        "label": "Read: Beet / vegetable juice",
        "quote": "What it does · Plant juice concentrates (beet, grape, carrot, red cabbage) that supply pinks, reds, and purples without certified dyes."
      },
      "type": "single",
      "points": 1,
      "cognitiveLevel": "evaluate",
      "options": [
        {
          "id": "it-uses-exempt-natural-source-colors-rather-than-certified-fd-c-dyes-though-the-juice-and-beta-carotene-are-added-for-tint-rather-than-as-a-vegetable-serving",
          "text": "It uses exempt natural-source colors rather than certified FD&C dyes, though the juice and beta-carotene are added for tint rather than as a vegetable serving.",
          "correct": true,
          "feedback": "The three color ingredients are exempt and the label identifies their purpose."
        },
        {
          "id": "it-contains-no-added-colors-because-no-numbers-like-red-40-appear",
          "text": "It contains no added colors because no numbers like Red 40 appear.",
          "correct": false,
          "feedback": "The label lists three ingredients used for color."
        },
        {
          "id": "listing-vegetable-juice-for-color-proves-the-frosting-is-made-mostly-of-fresh-vegetables",
          "text": "Listing vegetable juice for color proves the frosting is made mostly of fresh vegetables.",
          "correct": false,
          "feedback": "A color ingredient does not show how much produce is in the cereal."
        },
        {
          "id": "paprika-extract-makes-the-cereal-spicy",
          "text": "Paprika extract makes the cereal spicy.",
          "correct": false,
          "feedback": "The list identifies the extract as a color."
        }
      ],
      "references": [
        {
          "href": "colors.html#evidence-paprika",
          "label": "Read: Paprika extract",
          "quote": "What it does · A warm red-orange color extracted from sweet red peppers, used alongside turmeric and annatto in savory snacks, dressings, and cheese sauces."
        },
        {
          "href": "colors.html#evidence-beta-carotene",
          "label": "Read: Beta-carotene",
          "quote": "What it does · A fat-soluble yellow-orange pigment (the same compound that colors carrots) used in broths, cereals, margarines, and candies."
        }
      ],
      "retryHint": "Check why each ingredient is listed and what the label can tell you about its purpose."
    },
    {
      "id": "c-sort",
      "objective": "C3",
      "stem": "Select every ingredient below that works as a color additive (do not select preservatives, antioxidants, emulsifiers, or sweeteners).",
      "review": {
        "href": "colors.html#evidence-annatto",
        "label": "Read: Annatto",
        "quote": "What it does · An orange-yellow extract from achiote seeds that gives cheddar cheese, crackers, and butter-flavored snacks a consistent golden shade."
      },
      "type": "label-select",
      "points": 3,
      "cognitiveLevel": "apply",
      "tokens": [
        {
          "id": "bht",
          "text": "BHT",
          "correct": false,
          "feedback": "BHT slows oxidation.",
          "suffix": ""
        },
        {
          "id": "annatto",
          "text": "Annatto",
          "correct": true,
          "feedback": "Annatto gives food a golden-orange color.",
          "suffix": ""
        },
        {
          "id": "sucralose",
          "text": "Sucralose",
          "correct": false,
          "feedback": "Sucralose adds sweetness.",
          "suffix": ""
        },
        {
          "id": "yellow-5-lake",
          "text": "Yellow 5 Lake",
          "correct": true,
          "feedback": "Yellow 5 Lake colors coatings.",
          "suffix": ""
        },
        {
          "id": "xanthan-gum",
          "text": "Xanthan gum",
          "correct": false,
          "feedback": "Xanthan gum changes texture.",
          "suffix": ""
        },
        {
          "id": "spirulina-extract",
          "text": "Spirulina extract",
          "correct": true,
          "feedback": "Spirulina extract supplies blue color.",
          "suffix": ""
        },
        {
          "id": "potassium-sorbate",
          "text": "Potassium sorbate",
          "correct": false,
          "feedback": "Potassium sorbate slows microbial spoilage.",
          "suffix": ""
        },
        {
          "id": "disodium-inosinate",
          "text": "Disodium inosinate",
          "correct": false,
          "feedback": "Disodium inosinate enhances savory taste.",
          "suffix": ""
        }
      ],
      "references": [
        {
          "href": "colors.html#evidence-fd-c-lakes",
          "label": "Read: FD&C Lakes",
          "quote": "What it does · Water-insoluble pigments made by binding a dye to an inert base. They color hard candy shells, fat-rich frostings, and dry mixes without bleeding onto fingers or into neighboring layers."
        },
        {
          "href": "colors.html#evidence-spirulina",
          "label": "Read: Spirulina extract",
          "quote": "What it does · A vivid blue pigment extracted from blue-green algae—one of the rare natural-source options capable of making bright blues and (with turmeric) greens."
        }
      ],
      "explanation": "Annatto, Yellow 5 Lake, and spirulina extract color food; the other five belong to oxidation control, sweetness, texture, preservation, or savory enhancement."
    },
    {
      "id": "c-skittles-pouch",
      "objective": "C1",
      "stem": "Which pouch avoids certified synthetic FD&C colors?",
      "review": {
        "href": "colors.html#evidence-plant-juices",
        "label": "Read: Beet / vegetable juice",
        "quote": "What it does · Plant juice concentrates (beet, grape, carrot, red cabbage) that supply pinks, reds, and purples without certified dyes."
      },
      "type": "single",
      "points": 1,
      "cognitiveLevel": "apply",
      "options": [
        {
          "id": "pouch-a",
          "text": "Pouch A",
          "correct": false,
          "feedback": "Pouch A lists numbered dyes and lakes."
        },
        {
          "id": "pouch-b",
          "text": "Pouch B",
          "correct": true,
          "feedback": "Pouch B lists exempt colors."
        }
      ],
      "references": [
        {
          "href": "colors.html#evidence-spirulina",
          "label": "Read: Spirulina extract",
          "quote": "What it does · A vivid blue pigment extracted from blue-green algae—one of the rare natural-source options capable of making bright blues and (with turmeric) greens."
        }
      ],
      "fixedOrder": true
    },
    {
      "id": "c-skittles-lake",
      "objective": "C1",
      "stem": "On Pouch A, select one ingredient name that shows a water-insoluble coating pigment rather than a plain liquid dye.",
      "review": {
        "href": "colors.html#evidence-fd-c-lakes",
        "label": "Read: FD&C Lakes",
        "quote": "What it does · Water-insoluble pigments made by binding a dye to an inert base. They color hard candy shells, fat-rich frostings, and dry mixes without bleeding onto fingers or into neighboring layers."
      },
      "type": "label-select",
      "points": 1,
      "cognitiveLevel": "apply",
      "tokens": [
        {
          "id": "red-40-lake",
          "text": "Red 40 Lake",
          "correct": true,
          "feedback": "Lake identifies the insoluble coating pigment.",
          "suffix": ""
        },
        {
          "id": "yellow-5-lake",
          "text": "Yellow 5 Lake",
          "correct": true,
          "feedback": "Lake identifies the insoluble coating pigment.",
          "suffix": ""
        },
        {
          "id": "blue-2-lake",
          "text": "Blue 2 Lake",
          "correct": true,
          "feedback": "Lake identifies the insoluble coating pigment.",
          "suffix": ""
        },
        {
          "id": "yellow-6-lake",
          "text": "Yellow 6 Lake",
          "correct": true,
          "feedback": "Lake identifies the insoluble coating pigment.",
          "suffix": ""
        },
        {
          "id": "blue-1-lake",
          "text": "Blue 1 Lake",
          "correct": true,
          "feedback": "Lake identifies the insoluble coating pigment.",
          "suffix": ""
        },
        {
          "id": "yellow-6",
          "text": "Yellow 6",
          "correct": false,
          "feedback": "This name is the soluble dye. Look for the word “Lake.”",
          "suffix": ""
        },
        {
          "id": "red-40",
          "text": "Red 40",
          "correct": false,
          "feedback": "This name is the soluble dye. Look for the word “Lake.”",
          "suffix": ""
        },
        {
          "id": "yellow-5",
          "text": "Yellow 5",
          "correct": false,
          "feedback": "This name is the soluble dye. Look for the word “Lake.”",
          "suffix": ""
        },
        {
          "id": "blue-1",
          "text": "Blue 1",
          "correct": false,
          "feedback": "This name is the soluble dye. Look for the word “Lake.”",
          "suffix": ""
        }
      ],
      "maxSelections": 1
    },
    {
      "id": "c-skittles-claim",
      "objective": "C4",
      "stem": "A shopper buys Pouch B thinking \"No FD&C Colors\" means the candy has no added colors at all. What does the ingredient list show?",
      "review": {
        "href": "colors.html#evidence-plant-juices",
        "label": "Read: Beet / vegetable juice",
        "quote": "What it does · Plant juice concentrates (beet, grape, carrot, red cabbage) that supply pinks, reds, and purples without certified dyes."
      },
      "type": "single",
      "points": 1,
      "cognitiveLevel": "evaluate",
      "options": [
        {
          "id": "pouch-b-still-adds-colors-using-exempt-plant-and-mineral-pigments-such-as-beet-juice-turmeric-and-spirulina-extract",
          "text": "Pouch B still adds colors, using exempt plant and mineral pigments such as beet juice, turmeric, and spirulina extract.",
          "correct": true,
          "feedback": "The pouch still uses ingredients added for color."
        },
        {
          "id": "pouch-b-gets-all-its-color-solely-from-cane-sugar",
          "text": "Pouch B gets all its color solely from cane sugar.",
          "correct": false,
          "feedback": "Sugar does not account for the pigments listed."
        },
        {
          "id": "exempt-colors-are-legally-identical-to-certified-synthetic-dyes",
          "text": "Exempt colors are legally identical to certified synthetic dyes.",
          "correct": false,
          "feedback": "Exempt colors and certified colors are separate labeling categories."
        }
      ],
      "references": [
        {
          "href": "colors.html#evidence-spirulina",
          "label": "Read: Spirulina extract",
          "quote": "What it does · A vivid blue pigment extracted from blue-green algae—one of the rare natural-source options capable of making bright blues and (with turmeric) greens."
        }
      ]
    },
    {
      "id": "c-sources",
      "type": "matching",
      "stem": "Choose the description that fits each label.",
      "parts": [
        {
          "id": "c-source-carmine",
          "objective": "C2",
          "stem": "A strawberry yogurt lists \"Carmine (for color).\"",
          "review": {
            "href": "colors.html#evidence-carmine",
            "label": "Read: Carmine",
            "quote": "What it does · A deep, heat-stable crimson pigment extracted from cochineal scale insects, used in some strawberry yogurts and pink drinks."
          },
          "type": "match",
          "points": 1,
          "cognitiveLevel": "analyze",
          "options": [
            {
              "id": "carmine",
              "text": "Insect-derived exempt color that must be named explicitly on U.S. labels",
              "correct": true,
              "feedback": "Carmine comes from insects and must appear by name."
            },
            {
              "id": "spirulina",
              "text": "Algae-derived blue pigment used where Blue 1 is removed",
              "correct": false,
              "feedback": "Spirulina extract provides blue color without Blue 1."
            },
            {
              "id": "caramel-color",
              "text": "Heat-darkened carbohydrate pigment that tints colas brown without adding sweetness",
              "correct": false,
              "feedback": "Caramel color supplies a brown shade."
            },
            {
              "id": "metal-helper",
              "text": "Antioxidant helper that binds trace metals to protect flavor",
              "correct": false,
              "feedback": "Binding metals can slow oxidation. That is a different job."
            }
          ]
        },
        {
          "id": "c-source-spirulina",
          "objective": "C2",
          "stem": "A no-FD&C candy pouch lists \"Spirulina extract.\"",
          "review": {
            "href": "colors.html#evidence-spirulina",
            "label": "Read: Spirulina extract",
            "quote": "What it does · A vivid blue pigment extracted from blue-green algae—one of the rare natural-source options capable of making bright blues and (with turmeric) greens."
          },
          "type": "match",
          "points": 1,
          "cognitiveLevel": "analyze",
          "options": [
            {
              "id": "carmine",
              "text": "Insect-derived exempt color that must be named explicitly on U.S. labels",
              "correct": false,
              "feedback": "Carmine comes from insects and must appear by name."
            },
            {
              "id": "spirulina",
              "text": "Algae-derived blue pigment used where Blue 1 is removed",
              "correct": true,
              "feedback": "Spirulina extract provides blue color without Blue 1."
            },
            {
              "id": "caramel-color",
              "text": "Heat-darkened carbohydrate pigment that tints colas brown without adding sweetness",
              "correct": false,
              "feedback": "Caramel color supplies a brown shade."
            },
            {
              "id": "metal-helper",
              "text": "Antioxidant helper that binds trace metals to protect flavor",
              "correct": false,
              "feedback": "Binding metals can slow oxidation. That is a different job."
            }
          ]
        },
        {
          "id": "c-source-caramel-color",
          "objective": "C2",
          "stem": "A zero-sugar cola lists \"Caramel color.\"",
          "review": {
            "href": "colors.html#evidence-caramel-color",
            "label": "Read: Caramel color",
            "quote": "What it does · Made by heating food-grade carbohydrates to create deep brown tones in colas, gravies, and soy-style sauces."
          },
          "type": "match",
          "points": 1,
          "cognitiveLevel": "analyze",
          "options": [
            {
              "id": "carmine",
              "text": "Insect-derived exempt color that must be named explicitly on U.S. labels",
              "correct": false,
              "feedback": "Carmine comes from insects and must appear by name."
            },
            {
              "id": "spirulina",
              "text": "Algae-derived blue pigment used where Blue 1 is removed",
              "correct": false,
              "feedback": "Spirulina extract provides blue color without Blue 1."
            },
            {
              "id": "caramel-color",
              "text": "Heat-darkened carbohydrate pigment that tints colas brown without adding sweetness",
              "correct": true,
              "feedback": "Caramel color supplies a brown shade."
            },
            {
              "id": "metal-helper",
              "text": "Antioxidant helper that binds trace metals to protect flavor",
              "correct": false,
              "feedback": "Binding metals can slow oxidation. That is a different job."
            }
          ]
        }
      ]
    },
    {
      "id": "c-line-a",
      "type": "matching",
      "stem": "Line A · Candy and drinks",
      "parts": [
        {
          "id": "c-slot-shell",
          "objective": "C2",
          "stem": "Hard-shelled candy coating — needs a red coating that will not bleed in humidity",
          "review": {
            "href": "colors.html#evidence-fd-c-lakes",
            "label": "Read: FD&C Lakes",
            "quote": "What it does · Water-insoluble pigments made by binding a dye to an inert base. They color hard candy shells, fat-rich frostings, and dry mixes without bleeding onto fingers or into neighboring layers."
          },
          "type": "label-select",
          "points": 1,
          "cognitiveLevel": "analyze",
          "tokens": [
            {
              "id": "blue-1",
              "text": "Blue 1",
              "correct": false,
              "feedback": "Plain Blue 1 is a water-soluble dye, so moisture can make a candy shell bleed or streak instead of staying put like a lake.",
              "suffix": ""
            },
            {
              "id": "red-40-lake",
              "text": "Red 40 Lake",
              "correct": true,
              "feedback": "Red 40 Lake gives a red coating that resists bleeding.",
              "suffix": ""
            },
            {
              "id": "annatto-paprika",
              "text": "Annatto & paprika",
              "correct": false,
              "feedback": "This blend gives a golden-orange color.",
              "suffix": ""
            },
            {
              "id": "carmine",
              "text": "Carmine",
              "correct": false,
              "feedback": "Carmine gives a red color, but this line needs a lake for the coating.",
              "suffix": ""
            },
            {
              "id": "propionate",
              "text": "Calcium propionate",
              "correct": false,
              "feedback": "Propionate is an antimicrobial preservative for baked goods, not a color additive.",
              "suffix": ""
            }
          ],
          "references": [
            {
              "href": "colors.html#evidence-blue-1-2",
              "label": "Read: Blue 1 & Blue 2",
              "quote": "What it does · Water-soluble synthetic blues used in drinks, icings, and candies—often paired with red or yellow dyes to create purple and green."
            }
          ],
          "maxSelections": 1
        },
        {
          "id": "c-slot-drink",
          "objective": "C2",
          "stem": "Clear blue sports drink — needs a clean blue that dissolves completely in water",
          "review": {
            "href": "colors.html#evidence-blue-1-2",
            "label": "Read: Blue 1 & Blue 2",
            "quote": "What it does · Water-soluble synthetic blues used in drinks, icings, and candies—often paired with red or yellow dyes to create purple and green."
          },
          "type": "label-select",
          "points": 1,
          "cognitiveLevel": "analyze",
          "tokens": [
            {
              "id": "blue-1",
              "text": "Blue 1",
              "correct": true,
              "feedback": "Blue 1 dissolves in water and gives the clear drink its blue color.",
              "suffix": ""
            },
            {
              "id": "red-40-lake",
              "text": "Red 40 Lake",
              "correct": false,
              "feedback": "Lakes do not dissolve in water, so they would make a clear sports drink cloudy or settle at the bottom.",
              "suffix": ""
            },
            {
              "id": "annatto-paprika",
              "text": "Annatto & paprika",
              "correct": false,
              "feedback": "Neither produces a clear blue shade for a blue sports drink.",
              "suffix": ""
            },
            {
              "id": "carmine",
              "text": "Carmine",
              "correct": false,
              "feedback": "Neither produces a clear blue shade for a blue sports drink.",
              "suffix": ""
            },
            {
              "id": "propionate",
              "text": "Calcium propionate",
              "correct": false,
              "feedback": "Propionate is an antimicrobial preservative for baked goods, not a color additive.",
              "suffix": ""
            }
          ],
          "references": [
            {
              "href": "colors.html#evidence-fd-c-lakes",
              "label": "Read: FD&C Lakes",
              "quote": "What it does · Water-insoluble pigments made by binding a dye to an inert base. They color hard candy shells, fat-rich frostings, and dry mixes without bleeding onto fingers or into neighboring layers."
            }
          ],
          "maxSelections": 1
        }
      ]
    },
    {
      "id": "c-line-b",
      "type": "matching",
      "stem": "Line B · Savory snacks",
      "parts": [
        {
          "id": "c-slot-crackers",
          "objective": "C2",
          "stem": "Vegan cheddar-style crackers — need a golden cheese color without certified dyes and without animal-derived ingredients.",
          "review": {
            "href": "colors.html#evidence-annatto",
            "label": "Read: Annatto",
            "quote": "What it does · An orange-yellow extract from achiote seeds that gives cheddar cheese, crackers, and butter-flavored snacks a consistent golden shade."
          },
          "type": "label-select",
          "points": 1,
          "cognitiveLevel": "analyze",
          "tokens": [
            {
              "id": "blue-1",
              "text": "Blue 1",
              "correct": false,
              "feedback": "Both are certified synthetic FD&C colors, which conflict with the no-FD&C requirement.",
              "suffix": ""
            },
            {
              "id": "red-40-lake",
              "text": "Red 40 Lake",
              "correct": false,
              "feedback": "Both are certified synthetic FD&C colors, which conflict with the no-FD&C requirement.",
              "suffix": ""
            },
            {
              "id": "annatto-paprika",
              "text": "Annatto & paprika",
              "correct": true,
              "feedback": "Annatto and paprika give the recipe golden color from plant sources.",
              "suffix": ""
            },
            {
              "id": "carmine",
              "text": "Carmine",
              "correct": false,
              "feedback": "Carmine is insect-derived (not vegan) and produces crimson red rather than golden cheddar orange.",
              "suffix": ""
            },
            {
              "id": "propionate",
              "text": "Calcium propionate",
              "correct": false,
              "feedback": "Propionate slows mold in baked goods; it adds no color.",
              "suffix": ""
            }
          ],
          "references": [
            {
              "href": "colors.html#evidence-carmine",
              "label": "Read: Carmine",
              "quote": "What it does · A deep, heat-stable crimson pigment extracted from cochineal scale insects, used in some strawberry yogurts and pink drinks."
            }
          ],
          "maxSelections": 1
        }
      ]
    },
    {
      "id": "c-overclaims",
      "objective": "C4",
      "stem": "Select the two statements that go beyond what the label supports.",
      "review": {
        "href": "colors.html#evidence-carmine",
        "label": "Read: Carmine",
        "quote": "What it does · A deep, heat-stable crimson pigment extracted from cochineal scale insects, used in some strawberry yogurts and pink drinks."
      },
      "type": "label-select",
      "points": 3,
      "cognitiveLevel": "evaluate",
      "tokens": [
        {
          "id": "named",
          "text": "Under U.S. rules, certified synthetic colors like Yellow 5 must be listed by their specific name.",
          "correct": false,
          "feedback": "FDA rules require Yellow 5 and other certified colors to be named individually.",
          "suffix": ""
        },
        {
          "id": "vegan",
          "text": "Because a strawberry yogurt uses an exempt natural-source color instead of Red 40, it is guaranteed to be vegan.",
          "correct": true,
          "feedback": "Exempt colors include insect-derived carmine, so \"no artificial colors\" does not guarantee a vegan product.",
          "suffix": ""
        },
        {
          "id": "mac",
          "text": "Turmeric, paprika, and annatto are commonly combined to give boxed macaroni and cheese a golden look.",
          "correct": false,
          "feedback": "Kraft Original Mac & Cheese uses that exact trio for its yellow-orange shade.",
          "suffix": ""
        },
        {
          "id": "nutrition",
          "text": "If a cereal lists \"vegetable juice for color\" and \"beta-carotene for color,\" it provides a meaningful serving of vegetables and vitamin A.",
          "correct": true,
          "feedback": "Ingredients marked \"for color\" are used in trace amounts for tint; check the Nutrition Facts panel rather than assuming a nutrient boost.",
          "suffix": ""
        }
      ],
      "references": [
        {
          "href": "colors.html#evidence-plant-juices",
          "label": "Read: Beet / vegetable juice",
          "quote": "What it does · Plant juice concentrates (beet, grape, carrot, red cabbage) that supply pinks, reds, and purples without certified dyes."
        },
        {
          "href": "colors.html#evidence-beta-carotene",
          "label": "Read: Beta-carotene",
          "quote": "What it does · A fat-soluble yellow-orange pigment (the same compound that colors carrots) used in broths, cereals, margarines, and candies."
        },
        {
          "href": "colors.html#evidence-yellow-5-6",
          "label": "Read: Yellow 5 & Yellow 6",
          "quote": "What it does · Certified lemon-yellow (Yellow 5) and orange-yellow (Yellow 6) dyes used alone or blended with blues to make bright greens."
        },
        {
          "href": "colors.html#evidence-turmeric",
          "label": "Read: Turmeric",
          "quote": "What it does · A bright yellow pigment extracted from turmeric root, commonly paired with paprika and annatto to replace Yellow 5 and Yellow 6 in cheese sauces and snacks."
        }
      ],
      "display": "passage",
      "pointsByHits": [
        0,
        1,
        3
      ]
    },
    {
      "id": "c-box-color",
      "objective": "C1",
      "stem": "Which box lists color additives that require FDA batch certification?",
      "review": {
        "href": "colors.html#evidence-red-40",
        "label": "Read: Red 40",
        "quote": "What it does · The most widely used certified red dye in U.S. drinks, candies, and cereals, prized for staying bright across heat and light."
      },
      "type": "single",
      "points": 1,
      "cognitiveLevel": "apply",
      "options": [
        {
          "id": "box-a",
          "text": "Box A",
          "correct": false,
          "feedback": "Oleoresin paprika, oleoresin turmeric, and annatto are exempt from batch certification."
        },
        {
          "id": "box-b",
          "text": "Box B",
          "correct": true,
          "feedback": "The cereal lists Red 40, Yellow 5, Blue 1, and Yellow 6."
        },
        {
          "id": "both",
          "text": "Both boxes",
          "correct": false,
          "feedback": "Only the cereal lists numbered certified colors."
        },
        {
          "id": "neither",
          "text": "Neither box",
          "correct": false,
          "feedback": "The cereal lists numbered colors that require batch certification."
        }
      ],
      "references": [
        {
          "href": "colors.html#evidence-yellow-5-6",
          "label": "Read: Yellow 5 and Yellow 6",
          "quote": "What it does · Certified lemon-yellow (Yellow 5) and orange-yellow (Yellow 6) dyes used alone or blended with blues to make bright greens."
        },
        {
          "href": "colors.html#evidence-blue-1-2",
          "label": "Read: Blue dyes",
          "quote": "What it does · Water-soluble synthetic blues used in drinks, icings, and candies—often paired with red or yellow dyes to create purple and green."
        }
      ],
      "fixedOrder": true
    },
    {
      "id": "c-box-claim",
      "objective": "C4",
      "stem": "A shopper sees the orange color of the cheese sauce and assumes it contains certified dyes. What do the two labels show?",
      "review": {
        "href": "colors.html#evidence-turmeric",
        "label": "Read: Turmeric",
        "quote": "What it does · A bright yellow pigment extracted from turmeric root, commonly paired with paprika and annatto to replace Yellow 5 and Yellow 6 in cheese sauces and snacks."
      },
      "type": "single",
      "points": 2,
      "cognitiveLevel": "evaluate",
      "options": [
        {
          "id": "both",
          "text": "Both products use certified dyes, but the cheese sauce lists them under the names of spices.",
          "correct": false,
          "feedback": "The spice extracts are different ingredients from certified dyes."
        },
        {
          "id": "plant",
          "text": "The cheese sauce uses plant-derived colors exempt from certification. The cereal lists certified dyes by number.",
          "correct": true,
          "feedback": "Read the specific color names. Annatto, paprika, and turmeric differ from Red 40, Yellow 5, Blue 1, and Yellow 6."
        },
        {
          "id": "permanent",
          "text": "The cheese sauce’s color comes from the cheese alone. Only the cereal lists added colors.",
          "correct": false,
          "feedback": "The cheese sauce lists three ingredients added for color."
        }
      ],
      "references": [
        {
          "href": "colors.html#evidence-paprika",
          "label": "Read: Paprika",
          "quote": "What it does · A warm red-orange color extracted from sweet red peppers, used alongside turmeric and annatto in savory snacks, dressings, and cheese sauces."
        },
        {
          "href": "colors.html#evidence-annatto",
          "label": "Read: Annatto",
          "quote": "What it does · An orange-yellow extract from achiote seeds that gives cheddar cheese, crackers, and butter-flavored snacks a consistent golden shade."
        },
        {
          "href": "colors.html#evidence-red-40",
          "label": "Read: Red 40",
          "quote": "What it does · The most widely used certified red dye in U.S. drinks, candies, and cereals, prized for staying bright across heat and light."
        }
      ]
    }
  ],
  "blocks": [
    {
      "id": "colors-yogurt-practice",
      "set": "practice",
      "title": "Read the strawberry yogurt label",
      "questionIds": [
        "cx-yogurt"
      ],
      "section": "read-label",
      "retryBeforeReveal": true,
      "product": {
        "name": "Yoplait Protein Strawberry Yogurt",
        "ingredientsText": "Cultured nonfat milk, sugar, strawberries, water. Contains 1% or less of: modified corn starch, fruit pectin, natural flavor, carmine (for color), vitamin D3. Contains milk ingredients.",
        "sourceUrl": "https://www.yoplait.com/products/yoplait-protein-strawberry-single-serve",
        "sourceLabel": "Manufacturer’s ingredient list",
        "image": "assets/products/ch03/yoplait-yogurt-front.jpg",
        "packageFront": true,
        "showTranscript": true
      }
    },
    {
      "id": "colors-lakes-practice",
      "set": "practice",
      "title": "Choose a color for a candy shell",
      "questionIds": [
        "cx-lakes"
      ],
      "section": "check-understanding",
      "retryBeforeReveal": true
    },
    {
      "id": "colors-kool-practice",
      "set": "practice",
      "title": "Separate color from other jobs",
      "questionIds": [
        "cx-kool"
      ],
      "section": "check-understanding",
      "retryBeforeReveal": true,
      "product": {
        "name": "Kool-Aid Liquid Cherry Drink Mix",
        "ingredientsText": "Water, citric acid, gum arabic, potassium citrate, sucralose (sweetener). Contains less than 2% of: artificial flavor, acesulfame potassium (sweetener), sucrose acetate isobutyrate, Red 40, Blue 1, sodium benzoate and potassium sorbate (preservatives).",
        "sourceUrl": "https://www.kraftheinz.com/kool-aid/products/00043000005743-liquid-cherry-artificially-flavored-soft-drink-mix",
        "sourceLabel": "Manufacturer’s ingredient list",
        "image": "assets/products/ch04/kool-aid-front.jpg",
        "packageFront": true,
        "showTranscript": true
      }
    },
    {
      "id": "colors-caramel-practice",
      "set": "practice",
      "title": "Read the word after caramel",
      "questionIds": [
        "cx-caramel"
      ],
      "section": "check-understanding",
      "retryBeforeReveal": true
    },
    {
      "id": "colors-cereal-label",
      "set": "practice",
      "title": "Read the strawberry cereal label",
      "questionIds": [
        "cx-cereal-colors"
      ],
      "section": "try-new-label",
      "retryBeforeReveal": true,
      "product": {
        "name": "Kellogg’s Frosted Mini-Wheats Strawberry",
        "ingredientsText": "Whole grain wheat, sugar, contains 2% or less of whole wheat flour, brown rice syrup, gelatin, vegetable juice for color, natural and artificial flavors, citric acid, paprika extract color, beta-carotene for color, BHT for freshness. Vitamins and minerals: reduced iron, folic acid. Contains wheat ingredients.",
        "sourceUrl": "https://smartlabel.wkkellogg.com/Product/Index?gtin=00038000199462",
        "sourceLabel": "Manufacturer’s ingredient list",
        "showTranscript": true,
        "labelView": {
          "label": "assets/products/ch05/mini-wheats-ingredients.jpg",
          "front": "assets/products/ch05/mini-wheats-front.jpg",
          "back": "assets/products/ch05/mini-wheats-back.jpg"
        }
      }
    },
    {
      "id": "colors-cereal-claims",
      "set": "practice",
      "title": "What the label supports",
      "questionIds": [
        "cx-cereal-claim"
      ],
      "section": "try-new-label",
      "retryBeforeReveal": true
    },
    {
      "id": "colors-check-pouches",
      "set": "chapter-check",
      "title": "Two pouches of Skittles",
      "questionIds": [
        "c-skittles-pouch",
        "c-skittles-lake",
        "c-skittles-claim"
      ],
      "products": [
        {
          "name": "Pouch A · Skittles Original",
          "ingredientsText": "Sugar, corn syrup, hydrogenated palm kernel oil. Less than 2% of: citric acid, tapioca dextrin, modified corn starch, natural and artificial flavors, colors (Red 40 Lake, Yellow 5 Lake, Blue 2 Lake, Yellow 6 Lake, Blue 1 Lake, Yellow 6, Red 40, Yellow 5, Blue 1), sodium citrate, carnauba wax.",
          "sourceUrl": "https://www.skittles.com/products/skittles-original-fruity-candy-single-pack-217-oz-skittles-chewy",
          "sourceLabel": "Manufacturer’s ingredient list",
          "image": "assets/products/ch05/skittles-original.jpg",
          "switchViews": true,
          "transcriptOpen": true
        },
        {
          "name": "Pouch B · Skittles Original",
          "ingredientsText": "Color ingredients listed by Mars: Beet juice concentrate, beta-carotene, calcium carbonate, grape juice concentrate, spirulina extract, turmeric oleoresin.",
          "sourceUrl": "https://www.skittles.com/our-colors",
          "sourceLabel": "Manufacturer’s color ingredients",
          "image": "assets/products/ch05/skittles-no-fdc.jpg",
          "switchViews": true,
          "transcriptOpen": true
        }
      ],
      "intro": "<p>Compare the front and ingredients for each pouch.</p>",
      "diagnostic": {
        "afterCorrect": "c-skittles-pouch",
        "target": "c-skittles-lake",
        "wrongSelection": "blue-1",
        "text": "You picked the right pouch, but plain Blue 1 is a water-soluble dye—look for the word \"Lake\" on Pouch A for the coating pigment."
      }
    },
    {
      "id": "colors-check-sources",
      "set": "chapter-check",
      "title": "Match the color source and rule",
      "questionIds": [
        "c-sources"
      ]
    },
    {
      "id": "colors-check-sort",
      "set": "chapter-check",
      "title": "Separate colors from earlier chapters",
      "questionIds": [
        "c-sort"
      ]
    },
    {
      "id": "colors-check-claims",
      "set": "chapter-check",
      "title": "Spot the overclaims",
      "questionIds": [
        "c-overclaims"
      ]
    },
    {
      "id": "colors-check-line",
      "set": "chapter-check",
      "title": "Two problems on the color line",
      "questionIds": [
        "c-line-a",
        "c-line-b"
      ],
      "intro": "<p>Choose each ingredient separately. You can use the same name more than once.</p>",
      "production": true
    },
    {
      "id": "colors-check-boxes",
      "set": "chapter-check",
      "title": "Two boxes, two ways to add color",
      "questionIds": [
        "c-box-color",
        "c-box-claim"
      ],
      "products": [
        {
          "name": "Box A · Kraft Original Mac & Cheese",
          "ingredientsText": "Enriched macaroni (wheat flour, durum flour, niacin, ferrous sulfate [iron], thiamin mononitrate [vitamin B1], riboflavin [vitamin B2], folic acid), cheese sauce mix (whey, milkfat, salt, milk protein concentrate, nonfat dry milk, contains less than 2% of sodium triphosphate, with oleoresin paprika, oleoresin turmeric, and annatto added for color, dry buttermilk, sodium phosphate, tapioca flour, citric acid, lactic acid, calcium phosphate, milk, silicon dioxide, cheese cultures, enzymes). Contains: wheat, milk.",
          "image": "assets/products/ch05/kraft-mac-front.jpg",
          "sourceUrl": "https://www.kraftheinz.com/kraft-mac-and-cheese/products/00021000658831-original-mac-cheese-macaroni-and-cheese-dinner",
          "sourceLabel": "Manufacturer’s ingredient list",
          "switchViews": true,
          "transcriptOpen": true
        },
        {
          "name": "Box B · Kellogg’s Froot Loops",
          "ingredientsText": "Corn flour blend (whole grain yellow corn flour, degerminated yellow corn flour), sugar, wheat flour, whole grain oat flour, modified food starch, contains 2% or less of vegetable oil (hydrogenated coconut, soybean and/or cottonseed), oat fiber, maltodextrin, salt, soluble corn fiber, natural flavor, red 40, yellow 5, blue 1, yellow 6. Vitamins and minerals: vitamin C (ascorbic acid), reduced iron, niacinamide, vitamin B6 (pyridoxine hydrochloride), vitamin B2 (riboflavin), vitamin B1 (thiamin hydrochloride), folic acid, vitamin D3, vitamin B12. BHT added to packaging for freshness.",
          "image": "assets/products/ch05/froot-loops-front.jpg",
          "sourceUrl": "https://www.wkkellogg.com/products/froot-loops-cereal",
          "sourceLabel": "Manufacturer’s ingredient list",
          "switchViews": true,
          "transcriptOpen": true
        }
      ],
      "intro": "<p>Compare the cheese sauce mix in Box A with the cereal in Box B.</p>"
    }
  ]
};
