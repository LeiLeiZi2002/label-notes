window.LabelNotesBanks ||= {};
window.LabelNotesBanks["texture"] = {
  "version": "20261128-7",
  "questions": [
    {
      "id": "tx-silk",
      "objective": "T3",
      "stem": "Which ingredient keeps the almond solids and added calcium from settling?",
      "review": {
        "href": "texture.html#evidence-gellan-gum",
        "label": "Read: Gellan gum",
        "quote": "Gellan gum helps keep fine almond solids and added calcium from settling in the carton."
      },
      "options": [
        {
          "id": "gellan",
          "text": "Gellan gum",
          "correct": true,
          "feedback": "Gellan gum gives the drink enough structure to hold fine particles in suspension."
        },
        {
          "id": "ascorbic",
          "text": "Ascorbic acid",
          "correct": false,
          "feedback": "This label lists ascorbic acid to protect freshness."
        },
        {
          "id": "sorbate",
          "text": "Potassium sorbate",
          "correct": false,
          "feedback": "Potassium sorbate helps control spoilage."
        },
        {
          "id": "lecithin",
          "text": "Soy lecithin",
          "correct": false,
          "feedback": "Lecithin helps liquids and fats stay mixed. Here the problem is solid particles settling."
        }
      ],
      "points": 1,
      "type": "single",
      "cognitiveLevel": "apply",
      "retryHint": "Look for the ingredient that keeps small solid particles suspended.",
      "references": [
        {
          "href": "https://www.silk.com/plant-based-products/almondmilk/original-almondmilk/",
          "label": "Silk Original Almondmilk · ingredient list",
          "quote": "Gellan gum; ascorbic acid (vitamin C to protect freshness)."
        }
      ],
      "retryReviews": [
        {
          "href": "texture.html#ingredient-names",
          "label": "Read: Ingredients & their uses"
        }
      ]
    },
    {
      "id": "tx-ranch",
      "objective": "T2",
      "stem": "A bottle of reduced-fat ranch lists both polysorbate 60 and xanthan gum. Why include both?",
      "review": {
        "href": "texture.html#evidence-polysorbates",
        "label": "Read: Polysorbate 60 & polysorbate 80",
        "quote": "Polysorbate 60 helps keep oil droplets dispersed in a water-based dressing."
      },
      "options": [
        {
          "id": "two-jobs",
          "text": "Polysorbate 60 helps keep oil droplets mixed. Xanthan gum thickens the dressing and helps hold herbs in place.",
          "correct": true,
          "feedback": "The recipe needs to keep oil dispersed and slow the settling of herbs."
        },
        {
          "id": "reversed",
          "text": "Xanthan gum coats the oil droplets. Polysorbate 60 makes the liquid thick enough to hold herbs.",
          "correct": false,
          "feedback": "The specific roles are reversed. Polysorbate 60 acts at the oil-water boundary."
        },
        {
          "id": "freshness",
          "text": "Polysorbate 60 slows mold. Xanthan gum delays oxidation in the oil.",
          "correct": false,
          "feedback": "Neither of these texture ingredients addresses mold or oxidation in this example."
        },
        {
          "id": "body",
          "text": "Both thicken the water in the dressing.",
          "correct": false,
          "feedback": "Xanthan gum adds body. Polysorbate 60 helps keep tiny oil droplets dispersed."
        }
      ],
      "points": 1,
      "type": "single",
      "cognitiveLevel": "analyze",
      "retryHint": "Which ingredient works at the edge of the oil droplets? Which changes the surrounding liquid?",
      "references": [
        {
          "href": "texture.html#evidence-xanthan-gum",
          "label": "Read: Xanthan gum",
          "quote": "Xanthan gum thickens cold dressing and helps keep chopped herbs and garlic suspended."
        }
      ]
    },
    {
      "id": "tx-bread",
      "objective": "T3",
      "stem": "Select the ingredients used as dough emulsifiers in this excerpt.",
      "review": {
        "href": "texture.html#evidence-datem-ssl",
        "label": "Read: DATEM & sodium stearoyl lactylate (SSL)",
        "quote": "DATEM helps dough hold gas as it rises. Sodium stearoyl lactylate helps keep the crumb soft."
      },
      "points": 3,
      "type": "label-select",
      "cognitiveLevel": "analyze",
      "retryHint": "Look again at the two names you studied in Chapter 01. Those help slow mold growth.",
      "references": [
        {
          "href": "https://www.target.com/p/-/A-13285339",
          "label": "Ingredient list at Target · ingredient list",
          "quote": "Calcium propionate and sorbic acid to extend freshness; monoglycerides, sodium stearoyl lactylate, DATEM."
        }
      ],
      "tokens": [
        {
          "id": "datem",
          "text": "DATEM",
          "correct": true,
          "feedback": "DATEM strengthens the dough so it can hold gas as it rises."
        },
        {
          "id": "propionate",
          "text": "Calcium propionate",
          "correct": false,
          "feedback": "Calcium propionate helps slow mold growth."
        },
        {
          "id": "sorbic",
          "text": "Sorbic acid",
          "correct": false,
          "feedback": "Sorbic acid helps control molds and yeasts."
        },
        {
          "id": "ssl",
          "text": "Sodium stearoyl lactylate",
          "correct": true,
          "feedback": "Sodium stearoyl lactylate is a dough emulsifier that helps keep the crumb soft."
        },
        {
          "id": "mono",
          "text": "Monoglycerides",
          "correct": true,
          "feedback": "Monoglycerides are emulsifiers that can help bread stay soft."
        }
      ]
    },
    {
      "id": "tx-yogurt",
      "objective": "T2",
      "stem": "Why might a fat-free fruit yogurt contain both modified corn starch and fruit pectin?",
      "review": {
        "href": "texture.html#evidence-modified-starch",
        "label": "Read: Modified food starch / modified corn starch",
        "quote": "Starch adds body and helps hold water. In fruit yogurt, it can work alongside pectin to reduce watery separation."
      },
      "options": [
        {
          "id": "body",
          "text": "To hold water and keep the yogurt smooth.",
          "correct": true,
          "feedback": "Starch adds body, and pectin helps form a soft gel that holds water."
        },
        {
          "id": "oil",
          "text": "To keep oil from floating to the top.",
          "correct": false,
          "feedback": "This is a fat-free yogurt. Starch and pectin mainly work with water here."
        },
        {
          "id": "acid",
          "text": "To give the yogurt a more acidic taste.",
          "correct": false,
          "feedback": "The yogurt cultures make acid. Starch and pectin change texture."
        },
        {
          "id": "culture",
          "text": "To slow the growth of yogurt cultures.",
          "correct": false,
          "feedback": "Starch and pectin work on texture here. They are not being used to control the cultures."
        }
      ],
      "points": 1,
      "type": "single",
      "cognitiveLevel": "analyze",
      "retryHint": "Think about where the watery liquid comes from and what could hold it in the yogurt.",
      "references": [
        {
          "href": "texture.html#evidence-pectin",
          "label": "Read: Pectin",
          "quote": "Pectin forms a soft gel that gives fruit yogurt and jelly body."
        },
        {
          "href": "https://www.yoplait.com/products/yoplait-protein-strawberry-single-serve",
          "label": "Yoplait Protein Strawberry Yogurt · ingredient list",
          "quote": "Modified corn starch; fruit pectin."
        }
      ]
    },
    {
      "id": "tx-goober-names",
      "objective": "T3",
      "stem": "Select the ingredients that help the peanut butter and jelly stripes hold their textures.",
      "review": {
        "href": "texture.html#evidence-mono-diglycerides",
        "label": "Read: Mono- and diglycerides",
        "quote": "Mono- and diglycerides help keep peanut oil mixed into the peanut butter."
      },
      "points": 2,
      "type": "label-select",
      "cognitiveLevel": "analyze",
      "retryHint": "Look for an emulsifier for the peanut butter and a gelling ingredient for the jelly.",
      "retryClues": {
        "mono": "You found the peanut butter ingredient. Look for a gelling ingredient in the fruit stripe.",
        "pectin": "You found the jelly ingredient. Look for an emulsifier that can keep peanut oil mixed in."
      },
      "references": [
        {
          "href": "texture.html#evidence-pectin",
          "label": "Read: Pectin",
          "quote": "Pectin forms a soft gel that gives fruit yogurt and jelly body."
        },
        {
          "href": "https://www.smuckers.com/peanut-butter/goober/goober-grape",
          "label": "Smucker’s Goober Grape · ingredient list",
          "quote": "Distilled monoglycerides; pectin; potassium sorbate (preservative)."
        }
      ],
      "tokens": [
        {
          "id": "peanuts",
          "text": "Ground roasted peanuts",
          "correct": false,
          "feedback": "These make up the peanut butter stripe. Look for the emulsifier that helps manage the released oil."
        },
        {
          "id": "grape",
          "text": "Grape juice",
          "correct": false,
          "feedback": "Grape juice contributes to the jelly. Pectin gives it a gel structure."
        },
        {
          "id": "mono",
          "text": "Distilled monoglycerides",
          "correct": true,
          "feedback": "Monoglycerides help keep the peanut oil mixed."
        },
        {
          "id": "salt",
          "text": "Salt",
          "correct": false,
          "feedback": "Salt adds flavor here."
        },
        {
          "id": "pectin",
          "text": "Pectin",
          "correct": true,
          "feedback": "Pectin gives grape jelly its gel texture."
        },
        {
          "id": "acid",
          "text": "Citric acid",
          "correct": false,
          "feedback": "Citric acid changes acidity. Look for the gelling ingredient that gives the jelly body."
        },
        {
          "id": "sorbate",
          "text": "Potassium sorbate (preservative)",
          "correct": false,
          "feedback": "The label names it as a preservative."
        },
        {
          "id": "citrate",
          "text": "Sodium citrate",
          "correct": false,
          "feedback": "Sodium citrate can help control acidity. The target here is the gelling ingredient and the emulsifier."
        }
      ],
      "retryReviews": [
        {
          "href": "texture.html#ingredient-names",
          "label": "Read: Ingredients & their uses"
        }
      ]
    },
    {
      "id": "tx-goober-roles",
      "objective": "T2",
      "stem": "Which explanation fits the two stripes?",
      "review": {
        "href": "texture.html#evidence-pectin",
        "label": "Read: Pectin",
        "quote": "Pectin forms a soft gel that gives fruit yogurt and jelly body."
      },
      "options": [
        {
          "id": "swapped",
          "text": "A gelling ingredient keeps the oil mixed. An emulsifier helps the jelly set.",
          "correct": false,
          "feedback": "The roles are reversed. Think about which stripe has the oil."
        },
        {
          "id": "correct",
          "text": "An emulsifier helps keep the peanut oil mixed. A gelling ingredient gives the jelly its shape.",
          "correct": true,
          "feedback": "The peanut butter and the jelly have different texture needs."
        },
        {
          "id": "preserve",
          "text": "The two ingredients slow mold growth in the jar.",
          "correct": false,
          "feedback": "The label identifies potassium sorbate as the preservative."
        },
        {
          "id": "equal",
          "text": "Both ingredients thicken the stripes in the same way.",
          "correct": false,
          "feedback": "An emulsifier helps keep oil dispersed. A gelling ingredient gives the fruit mixture structure."
        }
      ],
      "points": 1,
      "type": "single",
      "cognitiveLevel": "analyze",
      "retryHint": "Which stripe needs help keeping oil mixed? Which needs a gel?",
      "references": [
        {
          "href": "texture.html#evidence-mono-diglycerides",
          "label": "Read: Mono- and diglycerides",
          "quote": "Mono- and diglycerides help keep peanut oil mixed into the peanut butter."
        }
      ],
      "retryReviews": [
        {
          "href": "texture.html#ingredient-names",
          "label": "Read: Ingredients & their uses"
        }
      ]
    },
    {
      "id": "t-bakery",
      "objective": "T3",
      "stem": "Select every emulsifier used to change the dough or crumb texture in this list.",
      "review": {
        "href": "texture.html#evidence-datem-ssl",
        "label": "Read: DATEM & sodium stearoyl lactylate (SSL)",
        "quote": "DATEM helps dough hold gas as it rises. Sodium stearoyl lactylate helps keep the crumb soft."
      },
      "points": 3,
      "type": "label-select",
      "cognitiveLevel": "analyze",
      "references": [
        {
          "href": "texture.html#evidence-mono-diglycerides",
          "label": "Read: Mono- and diglycerides",
          "quote": "Mono- and diglycerides help keep peanut oil mixed into the peanut butter."
        }
      ],
      "tokens": [
        {
          "id": "gluten",
          "text": "Wheat gluten",
          "correct": false,
          "feedback": "Gluten forms a protein network in the dough. It is not one of the emulsifiers in this list."
        },
        {
          "id": "oil",
          "text": "Soybean oil",
          "correct": false,
          "feedback": "This is the oil in the dough. It is not an emulsifier."
        },
        {
          "id": "datem",
          "text": "DATEM",
          "correct": true,
          "feedback": "DATEM strengthens the dough so it can hold gas as it rises."
        },
        {
          "id": "propionate",
          "text": "Calcium propionate",
          "correct": false,
          "feedback": "Calcium propionate helps slow mold growth."
        },
        {
          "id": "sorbic",
          "text": "Sorbic acid",
          "correct": false,
          "feedback": "Sorbic acid helps control molds and yeasts."
        },
        {
          "id": "ssl",
          "text": "Sodium stearoyl lactylate",
          "correct": true,
          "feedback": "Sodium stearoyl lactylate is a dough emulsifier that helps keep the crumb soft."
        },
        {
          "id": "barley",
          "text": "Malted barley flour",
          "correct": false,
          "feedback": "Malted barley flour contributes enzymes and flavor, not emulsification."
        },
        {
          "id": "mono",
          "text": "Monoglycerides",
          "correct": true,
          "feedback": "Monoglycerides are emulsifiers that can help bread stay soft."
        }
      ]
    },
    {
      "id": "t-jar",
      "objective": "T1",
      "stem": "Which jar includes an added emulsifier to help keep the peanut oil mixed?",
      "review": {
        "href": "texture.html#evidence-mono-diglycerides",
        "label": "Read: Mono- and diglycerides",
        "quote": "Mono- and diglycerides help keep peanut oil mixed into the peanut butter."
      },
      "options": [
        {
          "id": "jif",
          "text": "Jar A",
          "correct": true,
          "feedback": "This list includes mono and diglycerides."
        },
        {
          "id": "organic",
          "text": "Jar B",
          "correct": false,
          "feedback": "This list contains organic peanuts and salt."
        }
      ],
      "points": 1,
      "type": "single",
      "cognitiveLevel": "apply",
      "fixedOrder": true
    },
    {
      "id": "t-jar-evidence",
      "objective": "T1",
      "stem": "Select the ingredient phrase that names the emulsifier.",
      "review": {
        "href": "texture.html#evidence-mono-diglycerides",
        "label": "Read: Mono- and diglycerides",
        "quote": "Mono- and diglycerides help keep peanut oil mixed into the peanut butter."
      },
      "points": 1,
      "type": "label-select",
      "cognitiveLevel": "analyze",
      "display": "passage",
      "maxSelections": 1,
      "references": [
        {
          "href": "https://www.jif.com/products/creamy/dark-roast-creamy-peanut-butter",
          "label": "Jif Dark Roast Creamy Peanut Butter · ingredient list",
          "quote": "Mono and diglycerides."
        }
      ],
      "tokens": [
        {
          "id": "oils",
          "text": "Fully hydrogenated vegetable oils",
          "correct": false,
          "feedback": "These oils help firm the spread. The question asks for the emulsifier."
        },
        {
          "id": "mono",
          "text": "Mono and diglycerides",
          "correct": true,
          "feedback": "This phrase names the emulsifier that helps keep oil mixed."
        },
        {
          "id": "molasses",
          "text": "Molasses",
          "correct": false,
          "feedback": "Molasses is part of the flavor and sweetener blend."
        },
        {
          "id": "salt",
          "text": "Salt",
          "correct": false,
          "feedback": "The salt contributes flavor."
        }
      ]
    },
    {
      "id": "t-jar-claim",
      "objective": "T4",
      "stem": "You open Jar B and see a layer of oil. What can you conclude?",
      "review": {
        "href": "texture.html#evidence-separation",
        "label": "Read: Oil on peanut butter",
        "quote": "Oil naturally rises in peanut butter made with just peanuts and salt. Stir it back in. The oil layer on its own does not mean the peanut butter has gone bad."
      },
      "options": [
        {
          "id": "oxidized",
          "text": "The separated oil is enough to show that the peanuts have gone rancid.",
          "correct": false,
          "feedback": "Oil can rise even in fresh peanut butter. The layer alone does not tell you it has gone rancid."
        },
        {
          "id": "separation",
          "text": "The oil can rise on its own in this recipe. Stir it back in.",
          "correct": true,
          "feedback": "A recipe made with peanuts and salt can separate naturally."
        },
        {
          "id": "hidden",
          "text": "The label must be missing a preservative that keeps the oil from rising.",
          "correct": false,
          "feedback": "A preservative is not needed to explain why the oil separates."
        }
      ],
      "points": 1,
      "type": "single",
      "cognitiveLevel": "evaluate",
      "references": [
        {
          "href": "https://www.smuckers.com/peanut-butter/organic/organic-creamy-peanut-butter",
          "label": "Smucker’s Organic Creamy Peanut Butter · ingredient list",
          "quote": "Organic peanuts, salt."
        }
      ]
    },
    {
      "id": "t-mechanisms",
      "type": "matching",
      "parts": [
        {
          "id": "t-mech-yogurt",
          "objective": "T2",
          "stem": "Fat-free fruit yogurt collects a watery layer in the fridge.",
          "review": {
            "href": "texture.html#evidence-modified-starch",
            "label": "Read: Modified food starch / modified corn starch",
            "quote": "Starch adds body and helps hold water. In fruit yogurt, it can work alongside pectin to reduce watery separation."
          },
          "options": [
            {
              "id": "flow",
              "text": "Chocolate flow aid (soy lecithin and PGPR)",
              "correct": false,
              "feedback": "These ingredients help a fat-based mixture flow. This yogurt needs to retain water."
            },
            {
              "id": "thickness",
              "text": "Water-binding thickener (modified corn starch or pectin)",
              "correct": true,
              "feedback": "Water needs to stay in the yogurt. Modified corn starch and pectin help hold it there."
            },
            {
              "id": "suspension",
              "text": "Suspension stabilizer (gellan gum)",
              "correct": false,
              "feedback": "The problem in this example is water separating from a gel, rather than fine particles settling."
            }
          ],
          "points": 1,
          "type": "match",
          "cognitiveLevel": "analyze",
          "inputLabel": "Choose an ingredient or pair"
        },
        {
          "id": "t-mech-chocolate",
          "objective": "T2",
          "stem": "Melted chocolate is too thick to coat candy shells evenly.",
          "review": {
            "href": "texture.html#evidence-lecithin",
            "label": "Read: Soy lecithin & sunflower lecithin",
            "quote": "Lecithin helps fat coat dry particles, so melted chocolate can flow more easily."
          },
          "options": [
            {
              "id": "thickness",
              "text": "Water-binding thickener (modified corn starch or pectin)",
              "correct": false,
              "feedback": "This chocolate mixture needs easier flow. Adding a water-binding thickener could make it harder to spread."
            },
            {
              "id": "suspension",
              "text": "Suspension stabilizer (gellan gum)",
              "correct": false,
              "feedback": "A stabilizer for fine particles in a drink would not address the flow problem in melted chocolate."
            },
            {
              "id": "flow",
              "text": "Chocolate flow aid (soy lecithin and PGPR)",
              "correct": true,
              "feedback": "Lecithin and PGPR help melted chocolate flow into thin spaces."
            }
          ],
          "points": 1,
          "type": "match",
          "cognitiveLevel": "analyze",
          "inputLabel": "Choose an ingredient or pair"
        },
        {
          "id": "t-mech-almondmilk",
          "objective": "T2",
          "stem": "White mineral particles settle to the bottom of a calcium-fortified almondmilk carton.",
          "review": {
            "href": "texture.html#evidence-gellan-gum",
            "label": "Read: Gellan gum",
            "quote": "Gellan gum helps keep fine almond solids and added calcium from settling in the carton."
          },
          "options": [
            {
              "id": "suspension",
              "text": "Suspension stabilizer (gellan gum)",
              "correct": true,
              "feedback": "Gellan gum helps keep fine mineral particles suspended."
            },
            {
              "id": "microbes",
              "text": "Antimicrobial preservative (potassium sorbate)",
              "correct": false,
              "feedback": "Slowing microbial growth would not keep the calcium particles suspended."
            },
            {
              "id": "flow",
              "text": "Chocolate flow aid (soy lecithin and PGPR)",
              "correct": false,
              "feedback": "This pair helps fat-based chocolate flow. The chalky layer here consists of settled particles."
            }
          ],
          "points": 1,
          "type": "match",
          "cognitiveLevel": "analyze",
          "inputLabel": "Choose an ingredient or pair"
        }
      ]
    },
    {
      "id": "t-line-dressing",
      "stem": "Low-fat herb vinaigrette — mostly water with a little oil and chopped garlic. Which two ingredients keep oil droplets mixed and herbs suspended?",
      "type": "matching",
      "parts": [
        {
          "id": "t-slot-p60",
          "objective": "T2",
          "stem": "Which ingredient keeps the oil droplets mixed into the water?",
          "review": {
            "href": "texture.html#evidence-polysorbates",
            "label": "Read: Polysorbate 60 & polysorbate 80",
            "quote": "Polysorbate 60 helps keep oil droplets dispersed in a water-based dressing."
          },
          "options": [
            {
              "id": "p60",
              "text": "Polysorbate 60",
              "correct": true,
              "feedback": "Polysorbate 60 works at the oil-water boundary and helps droplets stay dispersed."
            },
            {
              "id": "xanthan",
              "text": "Xanthan gum",
              "correct": false,
              "feedback": "Xanthan could slow separation by thickening the liquid. It does not do the same job at the droplet surface."
            },
            {
              "id": "propionate",
              "text": "Calcium propionate",
              "correct": false,
              "feedback": "Propionate slows mold in baked goods. It would not keep the oil droplets dispersed."
            },
            {
              "id": "ssl",
              "text": "Sodium stearoyl lactylate",
              "correct": false,
              "feedback": "Its role in yeast-raised bread is to support dough and crumb."
            },
            {
              "id": "benzoate",
              "text": "Sodium benzoate",
              "correct": false,
              "feedback": "This preservative controls certain microbes in acidic foods."
            }
          ],
          "points": 1,
          "type": "match",
          "cognitiveLevel": "analyze",
          "inputLabel": "Choose an ingredient"
        },
        {
          "id": "t-slot-xanthan",
          "objective": "T2",
          "stem": "Which ingredient keeps the chopped garlic and herbs suspended?",
          "review": {
            "href": "texture.html#evidence-xanthan-gum",
            "label": "Read: Xanthan gum",
            "quote": "Xanthan gum thickens cold dressing and helps keep chopped herbs and garlic suspended."
          },
          "options": [
            {
              "id": "p60",
              "text": "Polysorbate 60",
              "correct": false,
              "feedback": "Polysorbate 60 helps keep oil dispersed. The pieces of garlic could still settle if the liquid remains thin."
            },
            {
              "id": "xanthan",
              "text": "Xanthan gum",
              "correct": true,
              "feedback": "Xanthan gum thickens cold dressing and helps keep the garlic suspended."
            },
            {
              "id": "propionate",
              "text": "Calcium propionate",
              "correct": false,
              "feedback": "Propionate helps slow mold in bread. It would not hold the garlic up in the dressing."
            },
            {
              "id": "ssl",
              "text": "Sodium stearoyl lactylate",
              "correct": false,
              "feedback": "Its role in yeast-raised bread is to support dough and crumb."
            },
            {
              "id": "benzoate",
              "text": "Sodium benzoate",
              "correct": false,
              "feedback": "This preservative controls certain microbes in acidic foods."
            }
          ],
          "points": 1,
          "type": "match",
          "cognitiveLevel": "analyze",
          "inputLabel": "Choose an ingredient"
        }
      ]
    },
    {
      "id": "t-line-bread",
      "stem": "Line B · Yeast-raised sandwich bread",
      "type": "matching",
      "parts": [
        {
          "id": "t-slot-ssl",
          "objective": "T2",
          "stem": "Yeast-raised sandwich bread — dough tears easily during proofing and loaves go stale quickly on the shelf. Which emulsifier strengthens gluten and keeps the crumb soft?",
          "review": {
            "href": "texture.html#evidence-datem-ssl",
            "label": "Read: DATEM and sodium stearoyl lactylate",
            "quote": "DATEM helps dough hold gas as it rises. Sodium stearoyl lactylate helps keep the crumb soft."
          },
          "options": [
            {
              "id": "ssl",
              "text": "Sodium stearoyl lactylate",
              "correct": true,
              "feedback": "It helps strengthen the dough and can keep the crumb soft."
            },
            {
              "id": "p60",
              "text": "Polysorbate 60",
              "correct": false,
              "feedback": "It helps disperse oil droplets in dressing."
            },
            {
              "id": "xanthan",
              "text": "Xanthan gum",
              "correct": false,
              "feedback": "Xanthan gum thickens liquids rather than strengthening wheat gluten networks."
            },
            {
              "id": "propionate",
              "text": "Calcium propionate",
              "correct": false,
              "feedback": "Calcium propionate slows mold growth; it does not reinforce dough structure or soften crumb."
            },
            {
              "id": "sorbate",
              "text": "Potassium sorbate",
              "correct": false,
              "feedback": "It helps control mold and yeast. The dough still needs an emulsifier that supports its structure."
            }
          ],
          "points": 1,
          "type": "match",
          "cognitiveLevel": "analyze",
          "inputLabel": "Choose an ingredient"
        }
      ]
    },
    {
      "id": "t-overclaims",
      "objective": "T4",
      "stem": "Select the claims that go beyond the label or the facts of the example.",
      "review": {
        "href": "texture.html#evidence-free-from",
        "label": "Read: What a carrageenan claim tells you",
        "quote": "Silk says its almondmilk is free from carrageenan and lists gellan gum, another stabilizer. A claim about one gum leaves room for others in the recipe."
      },
      "points": 3,
      "type": "label-select",
      "cognitiveLevel": "evaluate",
      "display": "passage",
      "pointsByHits": [
        0,
        1,
        3
      ],
      "references": [
        {
          "href": "texture.html#evidence-separation",
          "label": "Read: Oil on peanut butter",
          "quote": "Oil naturally rises in peanut butter made with just peanuts and salt. Stir it back in. The oil layer on its own does not mean the peanut butter has gone bad."
        },
        {
          "href": "https://www.silk.com/plant-based-products/almondmilk/original-almondmilk/",
          "label": "Silk Original Almondmilk · ingredient list",
          "quote": "Gellan gum; free from carrageenan."
        }
      ],
      "tokens": [
        {
          "id": "free",
          "text": "Silk describes its Original Almondmilk as free from carrageenan.",
          "correct": false,
          "feedback": "Silk makes that specific claim on its product page."
        },
        {
          "id": "all-stabilizers",
          "text": "Since it skips carrageenan, the almondmilk contains no stabilizers.",
          "correct": true,
          "feedback": "The ingredient list includes gellan gum, a suspension stabilizer."
        },
        {
          "id": "separates",
          "text": "Peanut butter made with peanuts and salt can separate in the jar.",
          "correct": false,
          "feedback": "Peanut oil can naturally rise to the top in a simple recipe."
        },
        {
          "id": "spoiled",
          "text": "Oil on top of that peanut butter means the jar has gone bad.",
          "correct": true,
          "feedback": "A layer of oil is expected in this recipe. Stir it back in."
        }
      ]
    },
    {
      "id": "t-frozen-family",
      "objective": "T1",
      "stem": "The gums have no purpose statement. Which clue ties tara, guar and carob bean gum to the texture of this dessert?",
      "review": {
        "href": "texture.html#evidence-seed-gums",
        "label": "Read: Guar gum, carob bean gum & tara gum",
        "quote": "Seed gums bind water and help limit ice crystal growth in frozen desserts."
      },
      "options": [
        {
          "id": "placement",
          "text": "Their position near the end shows that they are antimicrobial preservatives.",
          "correct": false,
          "feedback": "Placement alone does not tell you what job an ingredient does."
        },
        {
          "id": "family",
          "text": "They are seed gums, a family that binds water and helps control ice crystals.",
          "correct": true,
          "feedback": "The three names identify gums from plant seeds used to manage water in frozen desserts."
        },
        {
          "id": "curries",
          "text": "They appear after flavors, so they must add flavor alongside them.",
          "correct": false,
          "feedback": "Names that appear side by side can have different roles."
        }
      ],
      "points": 1,
      "type": "single",
      "cognitiveLevel": "apply",
      "references": [
        {
          "href": "https://www.bluebunny.com/products/scoopables/traditional/peanut-butter-party",
          "label": "Blue Bunny Peanut Butter Party · ingredient list",
          "quote": "Tara gum, guar gum, carob bean gum."
        }
      ]
    },
    {
      "id": "t-frozen-claim",
      "objective": "T4",
      "stem": "A shopper says the number of gum names proves the dessert is unsafe. What can you say from this list?",
      "review": {
        "href": "texture.html#evidence-gums",
        "label": "Read: Why a food might use several gums",
        "quote": "Several gums can work together in small amounts to control texture. Counting the names on a label does not tell you whether the food is safe or healthy."
      },
      "options": [
        {
          "id": "cancel",
          "text": "Several gums on one list show that they cancel out each other’s effects.",
          "correct": false,
          "feedback": "Gums can work together and influence texture in different ways."
        },
        {
          "id": "amount",
          "text": "Counting the gums tells you how much of each one the dessert contains.",
          "correct": false,
          "feedback": "This excerpt gives a group threshold. It does not state how much of each gum is present."
        },
        {
          "id": "support",
          "text": "The list names several texture ingredients. Their number alone does not establish safety.",
          "correct": true,
          "feedback": "A blend can help manage water, melting and texture. A count by itself tells you none of those ingredients’ individual amounts."
        }
      ],
      "points": 2,
      "type": "single",
      "cognitiveLevel": "evaluate",
      "references": [
        {
          "href": "texture.html#evidence-seed-gums",
          "label": "Read: Guar gum, carob bean gum & tara gum",
          "quote": "Seed gums bind water and help limit ice crystal growth in frozen desserts."
        },
        {
          "href": "https://www.bluebunny.com/products/scoopables/traditional/peanut-butter-party",
          "label": "Blue Bunny Peanut Butter Party · ingredient list",
          "quote": "Contains 1% or less of: … tara gum, guar gum, carob bean gum … carrageenan, xanthan gum."
        }
      ]
    }
  ],
  "blocks": [
    {
      "id": "texture-silk-practice",
      "set": "practice",
      "title": "Read the almondmilk label",
      "questionIds": [
        "tx-silk"
      ],
      "section": "read-label",
      "retryBeforeReveal": true,
      "product": {
        "name": "Silk Original Almondmilk",
        "ingredientsText": "Almondmilk (water, almonds), cane sugar, contains 2% or less of: vitamin and mineral blend (calcium carbonate, vitamin E acetate, vitamin A palmitate, vitamin D2, vitamin B12), sea salt, gellan gum, ascorbic acid (vitamin C to protect freshness), natural flavor.",
        "sourceUrl": "https://www.silk.com/plant-based-products/almondmilk/original-almondmilk/",
        "sourceLabel": "Manufacturer’s product page",
        "transcriptOpen": true
      }
    },
    {
      "id": "texture-ranch-practice",
      "set": "practice",
      "title": "Two ingredients in ranch dressing",
      "questionIds": [
        "tx-ranch"
      ],
      "section": "check-understanding",
      "retryBeforeReveal": true
    },
    {
      "id": "texture-bread-practice",
      "set": "practice",
      "title": "Read a bread ingredient list",
      "questionIds": [
        "tx-bread"
      ],
      "section": "check-understanding",
      "retryBeforeReveal": true,
      "intro": "<p>Pepperidge Farm Farmhouse Whole Grain White Bread · selected ingredients</p>"
    },
    {
      "id": "texture-yogurt-practice",
      "set": "practice",
      "title": "Water on top of yogurt",
      "questionIds": [
        "tx-yogurt"
      ],
      "section": "check-understanding",
      "retryBeforeReveal": true
    },
    {
      "id": "texture-goober-names",
      "set": "practice",
      "title": "Find the ingredients that shape texture",
      "questionIds": [
        "tx-goober-names"
      ],
      "section": "try-new-label",
      "retryBeforeReveal": true,
      "product": {
        "name": "Smucker’s Goober Grape",
        "ingredientsText": "Ground roasted peanuts, grape juice, high fructose corn syrup, corn syrup, dextrose, contains 2% or less of: distilled monoglycerides, salt, pectin, citric acid, potassium sorbate (preservative), sodium citrate.",
        "sourceUrl": "https://www.smuckers.com/peanut-butter/goober/goober-grape",
        "sourceLabel": "Manufacturer’s product page",
        "showTranscript": true,
        "labelView": {
          "label": "assets/products/ch03/goober-ingredients.jpg",
          "front": "assets/products/ch03/goober-front.jpg",
          "back": "assets/products/ch03/goober-back.jpg"
        }
      }
    },
    {
      "id": "texture-goober-roles",
      "set": "practice",
      "title": "Explain what each stripe needs",
      "questionIds": [
        "tx-goober-roles"
      ],
      "section": "try-new-label",
      "retryBeforeReveal": true
    },
    {
      "id": "texture-check-bakery",
      "set": "chapter-check",
      "title": "Sort out the bakery label",
      "questionIds": [
        "t-bakery"
      ],
      "intro": "<p>A hamburger bun ingredient list includes these names. Look for emulsifiers among the flours, oil and preservatives.</p>"
    },
    {
      "id": "texture-check-jars",
      "set": "chapter-check",
      "title": "Two jars of peanut butter",
      "questionIds": [
        "t-jar",
        "t-jar-evidence",
        "t-jar-claim"
      ],
      "intro": "<p>Compare the ingredient lists on the two jars.</p>",
      "products": [
        {
          "name": "Jar A · Jif Dark Roast Creamy Peanut Butter",
          "ingredientsText": "Roasted peanuts, sugar, contains 2% or less of: molasses, fully hydrogenated vegetable oils (rapeseed and soybean), mono and diglycerides, salt.",
          "sourceUrl": "https://www.jif.com/products/creamy/dark-roast-creamy-peanut-butter",
          "sourceLabel": "Manufacturer’s product page",
          "transcriptOpen": true,
          "image": "assets/products/ch03/jif-front.jpg",
          "packageFront": true
        },
        {
          "name": "Jar B · Smucker’s Organic Creamy Peanut Butter",
          "ingredientsText": "Organic peanuts, salt.",
          "sourceUrl": "https://www.smuckers.com/peanut-butter/organic/organic-creamy-peanut-butter",
          "sourceLabel": "Manufacturer’s product page",
          "transcriptOpen": true,
          "image": "assets/products/ch03/organic-front.jpg",
          "packageFront": true
        }
      ]
    },
    {
      "id": "texture-check-mechanisms",
      "set": "chapter-check",
      "title": "Match each texture problem",
      "questionIds": [
        "t-mechanisms"
      ]
    },
    {
      "id": "texture-check-production",
      "set": "chapter-check",
      "title": "Two problems on the production line",
      "questionIds": [
        "t-line-dressing",
        "t-line-bread"
      ],
      "production": true,
      "intro": "<p>Choose an ingredient for each job. Each menu has its own choices.</p>"
    },
    {
      "id": "texture-check-claims",
      "set": "chapter-check",
      "title": "Spot the overclaims",
      "questionIds": [
        "t-overclaims"
      ],
      "intro": "<p>Read these lines from a shopping thread. In the discussion, the Silk ingredient list includes gellan gum, and the peanut butter lists peanuts and salt.</p>"
    },
    {
      "id": "texture-check-frozen",
      "set": "chapter-check",
      "title": "Read a frozen dessert label",
      "questionIds": [
        "t-frozen-family",
        "t-frozen-claim"
      ],
      "product": {
        "name": "Blue Bunny Peanut Butter Party",
        "ingredientsText": "Contains 1% or less of natural flavors, mono and diglycerides, tara gum, guar gum, carob bean gum, cellulose gel, cellulose gum, carrageenan, xanthan gum.",
        "sourceUrl": "https://www.bluebunny.com/products/scoopables/traditional/peanut-butter-party",
        "sourceLabel": "Manufacturer’s product page",
        "transcriptOpen": true
      },
      "intro": "<p>Here is the end of the Blue Bunny Peanut Butter Party ingredient list.</p>"
    }
  ]
};
