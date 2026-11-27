/* Shared chapter objectives and assessment settings. Edit this file to update all three views. */
window.LabelNotesCourse = {
  preservatives: {
    title: 'Preservatives',
    timeLimitSeconds: null,
    suggestedMinutes: 12,
    thresholds: { secure: 0.8, developing: 0.5 },
    objectives: [
      {
        id: 'P1',
        text: 'Find the preservatives in an ingredient list you have not seen before, using purpose statements (e.g. "to maintain freshness", "as preservatives") and family name endings.',
        sections: ['bread-label', 'ingredient-names'],
      },
      {
        id: 'P2',
        text: 'Classify a preservative into its family (propionate, sorbate, benzoate, sulfiting agent, nitrite) and recognize related acid / salt names, including family members not shown in the lesson.',
        sections: ['ingredient-names'],
      },
      {
        id: 'P3',
        text: "Explain what spoilage problem a preservative addresses in a specific food, and why the food's conditions (acidity, moisture, whether it is fermented with yeast) affect which preservative is chosen.",
        sections: ['ingredient-names', 'bread-label'],
      },
      {
        id: 'P4',
        text: 'Distinguish antimicrobial roles from antioxidant and curing roles when several preservatives appear together.',
        sections: ['why-preserve', 'ingredient-names'],
      },
      {
        id: 'P5',
        text: 'Evaluate label wording, storage instructions and everyday claims (e.g. "natural", "no nitrites added", "preservative-free") using what the label actually says and what it leaves out.',
        sections: ['drink-label', 'food-stories', 'bread-label'],
      },
    ],
    sections: {
      'why-preserve': ['P3', 'P4'],
      'ingredient-names': ['P1', 'P2', 'P3', 'P4', 'P5'],
      'bread-label': ['P1', 'P3', 'P5'],
      'drink-label': ['P1', 'P5'],
      'food-stories': ['P5'],
      'check-understanding': ['P2', 'P3', 'P4'],
      'try-new-label': ['P1', 'P2', 'P3'],
    },
  },
  antioxidants: {
    title: 'Antioxidants',
    timeLimitSeconds: null,
    suggestedMinutes: 12,
    thresholds: { secure: 0.8, developing: 0.5 },
    objectives: [
      {
        id: 'A1',
        text: 'Find the antioxidants in an unfamiliar ingredient list, including vitamin names (tocopherols, ascorbic acid / ascorbates, ascorbyl palmitate), synthetic names (BHA, BHT, TBHQ, propyl gallate) and plant extracts.',
        sections: ['ingredient-names', 'read-label', 'try-new-label'],
      },
      {
        id: 'A2',
        text: 'Identify which part of a food an antioxidant protects (oils and fats vs. cut fruit surfaces) and which change it slows (rancidity vs. browning), by reasoning from the food\'s composition.',
        sections: ['ingredient-names', 'read-label'],
      },
      {
        id: 'A3',
        text: 'Distinguish antioxidants from helper ingredients that bind metals or adjust acidity (citric acid, EDTA), and tell apart commonly confused names (citric vs. ascorbic acid, calcium ascorbate vs. calcium carbonate, erythorbate vs. vitamin C).',
        sections: ['related-ingredients', 'ingredient-names'],
      },
      {
        id: 'A4',
        text: 'Use label placement and wording to judge whether a vitamin ingredient is there mainly as an antioxidant, as a nutrient, or whether the label does not say.',
        sections: ['ingredient-names'],
      },
      {
        id: 'A5',
        text: 'Evaluate claims about antioxidants (e.g. "contains antioxidants, so it\'s healthy", "no artificial preservatives") against what the ingredient list supports.',
        sections: ['check-understanding', 'read-label'],
      },
    ],
    sections: {
      'why-antioxidants': ['A1', 'A2', 'A3', 'A4', 'A5'],
      'ingredient-names': ['A1', 'A2', 'A3', 'A4'],
      'related-ingredients': ['A3'],
      'read-label': ['A1', 'A2', 'A5'],
      'check-understanding': ['A2', 'A3', 'A5'],
      'try-new-label': ['A1', 'A2'],
    },
  },
  texture: {
    title: 'Emulsifiers, stabilizers & thickeners',
    timeLimitSeconds: null,
    suggestedMinutes: 12,
    thresholds: { secure: 0.8, developing: 0.5 },
    objectives: [
      { id: 'T1', text: 'Find common emulsifiers, stabilizers and thickeners in an unfamiliar ingredient list, including abbreviations and seed gum names.', sections: ['ingredient-names', 'read-label'] },
      { id: 'T2', text: 'Explain which texture problem an ingredient addresses, such as separation, watery yogurt, settling or ice crystal growth.', sections: ['why-texture', 'ingredient-names', 'check-understanding'] },
      { id: 'T3', text: 'Distinguish ingredients that change texture from preservatives and antioxidants on the same label.', sections: ['read-label', 'try-new-label'] },
      { id: 'T4', text: 'Evaluate claims about separated peanut butter, “free from” wording and long ingredient lists using the available evidence.', sections: ['check-understanding'] },
    ],
  },
  'sweeteners-flavors': {
    title: 'Sweeteners & flavor enhancers',
    timeLimitSeconds: null,
    suggestedMinutes: 12,
    thresholds: { secure: 0.8, developing: 0.5 },
    objectives: [
      { id: 'F1', text: 'Find sweeteners, savory enhancers, food acids, and flavorings in unfamiliar ingredient lists.', sections: ['ingredient-names', 'read-label'] },
      { id: 'F2', text: 'Explain why a recipe blends sweeteners, adds bulk with sugar alcohols, or combines savory enhancers and food acids.', sections: ['ingredient-names', 'check-understanding'] },
      { id: 'F3', text: 'Distinguish ingredients used for sweetness and flavor from those used for preservation, oxidation control, or texture.', sections: ['read-label', 'try-new-label'] },
      { id: 'F4', text: 'Evaluate “Zero Sugar,” “Naturally Flavored,” and “No MSG Added” claims against the ingredient list and Nutrition Facts panel.', sections: ['check-understanding'] },
    ],
  },
  pretest: {
    title: 'Your starting point',
    assessmentVersion: '20261114-7',
    timeLimitSeconds: null,
    suggestedMinutes: 5,
    thresholds: { secure: 0.8, developing: 0.5 },
  },
  demo: {
    title: 'Question type demos',
    timeLimitSeconds: null,
    thresholds: { secure: 0.8, developing: 0.5 },
    objectives: [],
  },
};
window.LabelNotesDimensions = [
  { title: 'Reading labels', objectives: ['P1', 'P2', 'A1', 'T1', 'T3', 'F1', 'F3'] },
  { title: 'Explaining functions', objectives: ['P3', 'P4', 'A2', 'A3', 'T2', 'F2'] },
  { title: 'Judging claims', objectives: ['P5', 'A4', 'A5', 'T4', 'F4'] },
];
window.LabelNotesObjectives = {
  get(id) {
    return Object.values(window.LabelNotesCourse)
      .flatMap((c) => c.objectives || [])
      .find((o) => o.id === id);
  },
  render(host, chapter, heading = 'By the end of this chapter, you will be able to…') {
    const config = window.LabelNotesCourse[chapter];
    const objectives =
      config?.objectives ||
      Object.values(window.LabelNotesCourse)
        .flatMap((c) => c.objectives || [])
        .filter((o) => window.LabelNotesBanks?.pretest?.questions.some((q) => q.objective === o.id));
    host.replaceChildren();
    const h = document.createElement('h2');
    h.textContent = heading;
    host.append(h);
    const list = document.createElement('ul');
    objectives.forEach((o) => {
      const li = document.createElement('li');
      const firstSpace = o.text.indexOf(' ');
      const verb = document.createElement('strong');
      verb.textContent = o.text.slice(0, firstSpace);
      li.append(verb, o.text.slice(firstSpace));
      list.append(li);
    });
    host.append(list);
  },
};
