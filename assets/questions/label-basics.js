window.LabelNotesBanks ||= {};
window.LabelNotesBanks["label-basics"] = {
  "version": "20261128-1",
  "questions": [
    {
      "id": "intro-1",
      "stem": "On this bread label, why are calcium propionate and DATEM listed after \"Contains 2% or less of:\"?",
      "type": "single",
      "points": 0,
      "cognitiveLevel": "apply",
      "retryHint": "Look at the weight cutoff printed before those names.",
      "review": {
        "href": "label-basics.html#basics-rule-2",
        "label": "Read: The \"2% or less\" line",
        "quote": "Phrases like \"Contains 2% or less of:\" mark a cutoff where small-amount ingredients begin. Additives cluster here, though salt and spices often appear here too."
      },
      "options": [
        {
          "id": "weight",
          "text": "They make up a very small share of the recipe by weight.",
          "correct": true,
          "feedback": "Each of these ingredients is present at 2% or less by weight."
        },
        {
          "id": "optional",
          "text": "They are optional ingredients not in every loaf.",
          "correct": false,
          "feedback": "This package lists both ingredients in the recipe."
        },
        {
          "id": "flavor",
          "text": "They are always the most important ingredients for flavor.",
          "correct": false,
          "feedback": "The cutoff refers to weight."
        }
      ]
    },
    {
      "id": "intro-2",
      "stem": "When you see \"Enriched wheat flour (flour, niacin, reduced iron...)\" on a label, what are the parentheses doing?",
      "type": "single",
      "points": 0,
      "cognitiveLevel": "apply",
      "retryHint": "Compare the words inside the parentheses with the ingredient immediately before them.",
      "review": {
        "href": "label-basics.html#basics-rule-3",
        "label": "Read: Two kinds of parentheses",
        "quote": "Parentheses either break down a compound ingredient—such as enriched flour (flour, niacin, iron)—or state an additive's job, such as \"(to extend freshness).\""
      },
      "options": [
        {
          "id": "blend",
          "text": "Listing the sub-ingredients inside that flour blend.",
          "correct": true,
          "feedback": "The list names the ingredients inside the enriched flour."
        },
        {
          "id": "preserve",
          "text": "Explaining why flour acts as a preservative.",
          "correct": false,
          "feedback": "This example lists components of the flour blend."
        },
        {
          "id": "allergen",
          "text": "Warning that those items are major allergens.",
          "correct": false,
          "feedback": "The package has a separate Contains line for allergens."
        }
      ]
    }
  ],
  "blocks": [
    {
      "id": "basics-practice-1",
      "title": "Read the 2% line",
      "set": "practice",
      "section": "read-basics",
      "retryBeforeReveal": true,
      "questionIds": [
        "intro-1"
      ]
    },
    {
      "id": "basics-practice-2",
      "title": "Read the parentheses",
      "set": "practice",
      "section": "read-basics",
      "retryBeforeReveal": true,
      "questionIds": [
        "intro-2"
      ]
    }
  ]
};
