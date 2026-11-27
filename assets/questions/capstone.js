window.LabelNotesBanks ||= {};
window.LabelNotesBanks["capstone"] = {
  "version": "20261128-3",
  "blocks": [
    {
      "id": "cap-bakery",
      "title": "Bakery shelf",
      "set": "chapter-check",
      "questionIds": [
        "cap-01",
        "cap-02",
        "cap-03"
      ],
      "product": {
        "name": "Pepperidge Farm Farmhouse Butter Hamburger Buns",
        "image": "assets/products/ch06/farmhouse-butter-buns.jpg",
        "ingredientsText": "Enriched wheat flour (flour, niacin, reduced iron, thiamine mononitrate, riboflavin, folic acid), water, sugar, yeast, wheat gluten. Contains 2% or less of: butter, salt, calcium propionate and sorbic acid to extend freshness, corn flour, DATEM, monoglycerides, natural flavor, sodium stearoyl lactylate, malted barley flour, annatto and turmeric extracts for color, nonfat milk, sesame seeds.",
        "sourceUrl": "https://www.heb.com/product-detail/pepperidge-farm-farmhouse-butter-hamburger-buns/4040007",
        "sourceLabel": "Product and ingredients",
        "packageFront": true,
        "showTranscript": true
      }
    },
    {
      "id": "cap-drink-mix",
      "title": "Drink mix aisle",
      "set": "chapter-check",
      "questionIds": [
        "cap-04",
        "cap-05",
        "cap-06"
      ],
      "product": {
        "name": "Kool-Aid Singles Sugar-Sweetened Tropical Punch",
        "image": "assets/products/ch06/koolaid-singles-tropical.jpg",
        "ingredientsText": "Sugar, fructose, citric acid, contains less than 2% of ascorbic acid (vitamin C), natural and artificial flavor, acesulfame potassium and sucralose (sweeteners), calcium phosphate, artificial color, Red 40, Blue 1, BHA (preserves freshness).",
        "sourceUrl": "https://www.kraftheinz.com/koolaid/products/00043000003688-singles-sugar-sweetened-tropical-punch-powdered-soft-drink",
        "sourceLabel": "Product and ingredients",
        "packageFront": true,
        "showTranscript": true
      }
    },
    {
      "id": "cap-iced-tea",
      "title": "Iced tea cooler",
      "set": "chapter-check",
      "questionIds": [
        "cap-07",
        "cap-08",
        "cap-09"
      ],
      "product": {
        "name": "Peace Tea Razzleberry",
        "image": "assets/products/ch06/peace-tea-razzleberry.jpg",
        "ingredientsText": "Tea (water, tea powder), high fructose corn syrup, citric acid. Contains less than 2% of: natural flavors, phosphoric acid, potassium citrate, acesulfame potassium, sucralose, sodium citrate, sodium hexametaphosphate and sodium benzoate and potassium sorbate and calcium disodium EDTA (to protect taste).",
        "sourceUrl": "https://www.coca-cola.com/us/en/brands/peace-tea",
        "sourceLabel": "Product and ingredients",
        "packageFront": true,
        "showTranscript": true
      }
    }
  ],
  "questions": [
    {
      "id": "cap-01",
      "objective": "T1",
      "stem": "Select the three dough emulsifiers on this bun label. Do not select preservatives or colors.",
      "points": 1,
      "cognitiveLevel": "apply",
      "review": {
        "href": "texture.html#evidence-datem-ssl",
        "label": "Read: Dough emulsifiers",
        "quote": "DATEM helps dough hold gas as it rises. Sodium stearoyl lactylate helps keep the crumb soft."
      },
      "references": [
        {
          "href": "preservatives.html#evidence-propionate",
          "label": "Read: Calcium propionate",
          "quote": "A soft tortilla needs to stay usable while it is transported, sold and stored. Calcium propionate is an antimicrobial preservative used in baked goods to help slow microbial spoilage, including mold. On this package it shares the phrase “to maintain freshness” with sorbic acid."
        }
      ],
      "type": "label-select",
      "allOrNothing": true,
      "tokens": [
        {
          "id": "answer-1",
          "text": "DATEM",
          "correct": true,
          "feedback": "DATEM helps strengthen dough.",
          "suffix": ""
        },
        {
          "id": "answer-2",
          "text": "Monoglycerides",
          "correct": true,
          "feedback": "Monoglycerides help the crumb stay soft.",
          "suffix": ""
        },
        {
          "id": "answer-3",
          "text": "Sodium stearoyl lactylate",
          "correct": true,
          "feedback": "Sodium stearoyl lactylate is a dough emulsifier.",
          "suffix": ""
        },
        {
          "id": "answer-4",
          "text": "Calcium propionate",
          "correct": false,
          "feedback": "Calcium propionate slows mold.",
          "suffix": ""
        },
        {
          "id": "answer-5",
          "text": "Sorbic acid",
          "correct": false,
          "feedback": "Sorbic acid helps control spoilage.",
          "suffix": ""
        },
        {
          "id": "answer-6",
          "text": "Annatto and turmeric extracts",
          "correct": false,
          "feedback": "These extracts are listed for color.",
          "suffix": ""
        }
      ]
    },
    {
      "id": "cap-02",
      "objective": "P3",
      "stem": "Why do these buns list calcium propionate alongside DATEM and monoglycerides?",
      "points": 1,
      "cognitiveLevel": "analyze",
      "review": {
        "href": "preservatives.html#evidence-propionate",
        "label": "Read: Calcium propionate",
        "quote": "A soft tortilla needs to stay usable while it is transported, sold and stored. Calcium propionate is an antimicrobial preservative used in baked goods to help slow microbial spoilage, including mold. On this package it shares the phrase “to maintain freshness” with sorbic acid."
      },
      "references": [
        {
          "href": "texture.html#evidence-datem-ssl",
          "label": "Read: Dough emulsifiers",
          "quote": "DATEM helps dough hold gas as it rises. Sodium stearoyl lactylate helps keep the crumb soft."
        }
      ],
      "type": "single",
      "options": [
        {
          "id": "answer-1",
          "text": "Calcium propionate slows mold growth in yeast-raised bread, while DATEM and monoglycerides strengthen dough and keep the crumb soft.",
          "correct": true,
          "feedback": "The label combines an antimicrobial preservative with ingredients that help with dough and crumb structure."
        },
        {
          "id": "answer-2",
          "text": "They all give the buns a uniform yellow color.",
          "correct": false,
          "feedback": "Annatto and turmeric are the listed color ingredients."
        },
        {
          "id": "answer-3",
          "text": "They all work by slowing mold growth.",
          "correct": false,
          "feedback": "The dough emulsifiers have a texture role."
        },
        {
          "id": "answer-4",
          "text": "DATEM and monoglycerides keep the buns fresh by binding metals.",
          "correct": false,
          "feedback": "These emulsifiers affect dough and crumb texture."
        }
      ]
    },
    {
      "id": "cap-03",
      "objective": "C4",
      "stem": "A shopper sees the golden bun color and assumes it comes solely from butter and Yellow 5. What does the ingredient list show?",
      "points": 1,
      "cognitiveLevel": "evaluate",
      "review": {
        "href": "colors.html#evidence-annatto",
        "label": "Read: Annatto",
        "quote": "What it does · An orange-yellow extract from achiote seeds that gives cheddar cheese, crackers, and butter-flavored snacks a consistent golden shade."
      },
      "references": [
        {
          "href": "colors.html#evidence-turmeric",
          "label": "Read: Turmeric",
          "quote": "What it does · A bright yellow pigment extracted from turmeric root, commonly paired with paprika and annatto to replace Yellow 5 and Yellow 6 in cheese sauces and snacks."
        }
      ],
      "type": "single",
      "options": [
        {
          "id": "answer-1",
          "text": "The label lists butter along with exempt plant colors—annatto and turmeric extracts—rather than certified Yellow 5.",
          "correct": true,
          "feedback": "The full ingredient list names two color extracts and also lists butter."
        },
        {
          "id": "answer-2",
          "text": "The butter claim confirms that butter provides all the color.",
          "correct": false,
          "feedback": "The list gives separate ingredients for color."
        },
        {
          "id": "answer-3",
          "text": "Annatto and turmeric are another way to list Yellow 5.",
          "correct": false,
          "feedback": "These extracts are exempt from certification."
        },
        {
          "id": "answer-4",
          "text": "The yellow color must come from the packaging.",
          "correct": false,
          "feedback": "The listed extracts contribute color to the buns."
        }
      ]
    },
    {
      "id": "cap-04",
      "objective": "A1",
      "stem": "Which synthetic antioxidant is listed for freshness on this drink mix?",
      "points": 1,
      "cognitiveLevel": "apply",
      "review": {
        "href": "antioxidants.html#evidence-bha",
        "label": "Read: BHA",
        "quote": "Butylated hydroxyanisole, usually shortened to BHA, slows oxidation in fats. It is used in foods such as cured meats and some dry foods to help prevent off-flavors during storage."
      },
      "references": [],
      "type": "single",
      "options": [
        {
          "id": "answer-1",
          "text": "Ascorbic acid",
          "correct": false,
          "feedback": "Ascorbic acid is listed as vitamin C in this mix."
        },
        {
          "id": "answer-2",
          "text": "BHA",
          "correct": true,
          "feedback": "BHA is the synthetic antioxidant listed for freshness."
        },
        {
          "id": "answer-3",
          "text": "Acesulfame potassium",
          "correct": false,
          "feedback": "Acesulfame potassium adds sweetness."
        },
        {
          "id": "answer-4",
          "text": "Citric acid",
          "correct": false,
          "feedback": "Citric acid gives the drink tartness."
        }
      ]
    },
    {
      "id": "cap-05",
      "objective": "F2",
      "stem": "Why does a sugar-sweetened drink mix still include acesulfame potassium and sucralose?",
      "points": 1,
      "cognitiveLevel": "analyze",
      "review": {
        "href": "sweeteners-flavors.html#evidence-ace-k",
        "label": "Read: Sweetener blends",
        "quote": "A heat-stable, zero-calorie sweetener that can taste slightly bitter on its own, so makers often blend it with aspartame or sucralose to smooth the aftertaste."
      },
      "references": [],
      "type": "single",
      "options": [
        {
          "id": "answer-1",
          "text": "They add sweetness alongside sugar and can help balance the blend’s aftertaste.",
          "correct": true,
          "feedback": "The high-intensity sweeteners contribute sweetness at small amounts. The label cannot show exactly how much sugar they replace."
        },
        {
          "id": "answer-2",
          "text": "The two sweeteners keep the powder dry by binding trace metals.",
          "correct": false,
          "feedback": "Binding trace metals is a different job."
        },
        {
          "id": "answer-3",
          "text": "The sweeteners are used for color alongside the numbered dyes.",
          "correct": false,
          "feedback": "Red 40 and Blue 1 give the drink its color."
        },
        {
          "id": "answer-4",
          "text": "Acesulfame potassium and sucralose are included to stop yeast growth.",
          "correct": false,
          "feedback": "The ingredient list groups them as sweeteners."
        }
      ]
    },
    {
      "id": "cap-06",
      "objective": "C4",
      "stem": "Someone reads \"Sugar-Sweetened\" on the box and assumes the mix uses no high-intensity sweeteners and only fruit juice for color. What does the label show?",
      "points": 1,
      "cognitiveLevel": "evaluate",
      "review": {
        "href": "colors.html#evidence-red-40",
        "label": "Read: Red 40",
        "quote": "What it does · The most widely used certified red dye in U.S. drinks, candies, and cereals, prized for staying bright across heat and light."
      },
      "references": [
        {
          "href": "colors.html#evidence-blue-1-2",
          "label": "Read: Blue dyes",
          "quote": "What it does · Water-soluble synthetic blues used in drinks, icings, and candies—often paired with red or yellow dyes to create purple and green."
        },
        {
          "href": "sweeteners-flavors.html#evidence-ace-k",
          "label": "Read: Sweetener blends",
          "quote": "A heat-stable, zero-calorie sweetener that can taste slightly bitter on its own, so makers often blend it with aspartame or sucralose to smooth the aftertaste."
        }
      ],
      "type": "single",
      "options": [
        {
          "id": "answer-1",
          "text": "The words “Sugar-Sweetened” mean it uses sugar and no other sweeteners.",
          "correct": false,
          "feedback": "Sugar is listed alongside two high-intensity sweeteners."
        },
        {
          "id": "answer-2",
          "text": "It still uses acesulfame potassium and sucralose alongside sugar, and colors the drink with certified Red 40 and Blue 1.",
          "correct": true,
          "feedback": "The label names both sweeteners and both numbered colors."
        },
        {
          "id": "answer-3",
          "text": "The color comes only from the fruit flavors in the mix.",
          "correct": false,
          "feedback": "Red 40 and Blue 1 appear separately in the list."
        },
        {
          "id": "answer-4",
          "text": "BHA gives the mix its color and all its sweetness.",
          "correct": false,
          "feedback": "BHA is listed for freshness."
        }
      ]
    },
    {
      "id": "cap-07",
      "objective": "P1",
      "stem": "Select the two antimicrobial preservatives on this iced tea label (leave out sweeteners, acids, and metal-binding helpers).",
      "points": 1,
      "cognitiveLevel": "apply",
      "review": {
        "href": "preservatives.html#evidence-benzoate",
        "label": "Read: Sodium benzoate",
        "quote": "Sprite lists sodium benzoate with the explanation “to protect taste.” Its preservative role is to inhibit microorganisms that could spoil the drink. Benzoates are particularly useful against yeasts in acidic foods."
      },
      "references": [
        {
          "href": "preservatives.html#evidence-acidity",
          "label": "Read: Preservatives in acidic foods",
          "quote": "Benzoates and sorbates generally work better in acidic foods. Acidity changes how much is present in the active acid form; the name alone does not tell you how well it will work in every recipe."
        },
        {
          "href": "antioxidants.html#evidence-edta",
          "label": "Read: Calcium disodium EDTA",
          "quote": "Tiny amounts of metals such as iron and copper can speed up oxidation. Calcium disodium EDTA binds these metals, making them less able to drive those reactions."
        }
      ],
      "type": "label-select",
      "allOrNothing": true,
      "tokens": [
        {
          "id": "answer-1",
          "text": "Sodium benzoate",
          "correct": true,
          "feedback": "Benzoate helps slow microbial spoilage.",
          "suffix": ""
        },
        {
          "id": "answer-2",
          "text": "Potassium sorbate",
          "correct": true,
          "feedback": "Sorbate helps slow microbial spoilage.",
          "suffix": ""
        },
        {
          "id": "answer-3",
          "text": "Acesulfame potassium",
          "correct": false,
          "feedback": "Acesulfame potassium adds sweetness.",
          "suffix": ""
        },
        {
          "id": "answer-4",
          "text": "Sucralose",
          "correct": false,
          "feedback": "Sucralose adds sweetness.",
          "suffix": ""
        },
        {
          "id": "answer-5",
          "text": "Phosphoric acid",
          "correct": false,
          "feedback": "Phosphoric acid contributes acidity.",
          "suffix": ""
        },
        {
          "id": "answer-6",
          "text": "Calcium disodium EDTA",
          "correct": false,
          "feedback": "EDTA protects taste by binding metals.",
          "suffix": ""
        }
      ]
    },
    {
      "id": "cap-08",
      "objective": "A3",
      "stem": "This iced tea lists sodium benzoate, potassium sorbate, and calcium disodium EDTA under \"to protect taste.\" How does EDTA's job differ from the other two?",
      "points": 1,
      "cognitiveLevel": "analyze",
      "review": {
        "href": "antioxidants.html#evidence-edta",
        "label": "Read: Calcium disodium EDTA",
        "quote": "Tiny amounts of metals such as iron and copper can speed up oxidation. Calcium disodium EDTA binds these metals, making them less able to drive those reactions."
      },
      "references": [
        {
          "href": "preservatives.html#evidence-acidity",
          "label": "Read: Preservatives in acidic foods",
          "quote": "Benzoates and sorbates generally work better in acidic foods. Acidity changes how much is present in the active acid form; the name alone does not tell you how well it will work in every recipe."
        }
      ],
      "type": "single",
      "options": [
        {
          "id": "answer-1",
          "text": "EDTA sweetens the tea, whereas benzoate and sorbate give it its color.",
          "correct": false,
          "feedback": "Other ingredients provide the sweetness."
        },
        {
          "id": "answer-2",
          "text": "EDTA and the two salts all work by binding trace metals.",
          "correct": false,
          "feedback": "Benzoate and sorbate help control microbes."
        },
        {
          "id": "answer-3",
          "text": "EDTA binds trace metals that speed up oxidation and off-flavors, whereas benzoate and sorbate slow yeasts and other microbes.",
          "correct": true,
          "feedback": "The shared purpose phrase can cover ingredients with different jobs."
        },
        {
          "id": "answer-4",
          "text": "EDTA removes the acid from the tea, while the other two ingredients add flavor.",
          "correct": false,
          "feedback": "The label groups the three ingredients under taste protection."
        }
      ]
    },
    {
      "id": "cap-09",
      "objective": "F4",
      "stem": "A friend notices \"Natural flavors\" on this can and concludes the tea contains no synthetic preservatives or artificial sweeteners. Which part of the label refutes that?",
      "points": 1,
      "cognitiveLevel": "evaluate",
      "review": {
        "href": "sweeteners-flavors.html#evidence-natural-claim",
        "label": "Read: Flavor wording",
        "quote": "Country Time Lemon Iced Tea says \"with other natural flavors\" on the front. The ingredient list also includes sucralose, acesulfame potassium, and certified dyes. The phrase describes only the flavoring source."
      },
      "references": [
        {
          "href": "preservatives.html#evidence-benzoate",
          "label": "Read: Sodium benzoate",
          "quote": "Sprite lists sodium benzoate with the explanation “to protect taste.” Its preservative role is to inhibit microorganisms that could spoil the drink. Benzoates are particularly useful against yeasts in acidic foods."
        },
        {
          "href": "sweeteners-flavors.html#evidence-ace-k",
          "label": "Read: Sweetener blends",
          "quote": "A heat-stable, zero-calorie sweetener that can taste slightly bitter on its own, so makers often blend it with aspartame or sucralose to smooth the aftertaste."
        }
      ],
      "type": "single",
      "options": [
        {
          "id": "answer-1",
          "text": "The presence of natural flavors supports this claim about everything in the drink.",
          "correct": false,
          "feedback": "The flavor wording describes the flavorings."
        },
        {
          "id": "answer-2",
          "text": "The only clue to sweeteners or preservatives is the wording on the front.",
          "correct": false,
          "feedback": "The other additive names appear individually in the ingredient list."
        },
        {
          "id": "answer-3",
          "text": "The list explicitly includes sodium benzoate, potassium sorbate, acesulfame potassium, and sucralose.",
          "correct": true,
          "feedback": "Check the four names listed elsewhere in the ingredient list."
        },
        {
          "id": "answer-4",
          "text": "The claim is supported because high fructose corn syrup appears first among the sweeteners.",
          "correct": false,
          "feedback": "The list can include other sweeteners alongside the corn syrup."
        }
      ]
    }
  ]
};
