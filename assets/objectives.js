/* Shared chapter objectives and assessment settings. Edit this file to update all three views. */
window.LabelNotesCourse = {
  preservatives: {
    title: 'Preservatives',
    timeLimitSeconds: null,
    suggestedMinutes: 6,
    thresholds: { secure: 0.8, developing: 0.5 },
    objectives: [
      {
        id: 'P1',
        text: 'Identify preservative names and purpose statements on a food label.',
        sections: ['bread-label', 'ingredient-names'],
      },
      {
        id: 'P2',
        text: 'Connect related preservative names, including acids, salts and sulfiting agents.',
        sections: ['ingredient-names'],
      },
      {
        id: 'P3',
        text: 'Explain why a preservative is used in a particular food.',
        sections: ['ingredient-names', 'bread-label'],
      },
      {
        id: 'P4',
        text: 'Combine ingredient information with storage instructions.',
        sections: ['drink-label'],
      },
      {
        id: 'P5',
        text: 'Judge preservation claims using the evidence a label or source actually provides.',
        sections: ['food-stories', 'try-new-label'],
      },
    ],
    sections: {
      'why-preserve': ['P1', 'P3'],
      'ingredient-names': ['P1', 'P2', 'P3'],
      'bread-label': ['P1', 'P3', 'P5'],
      'drink-label': ['P1', 'P4'],
      'food-stories': ['P5'],
      'check-understanding': ['P2', 'P3'],
      'try-new-label': ['P2', 'P3', 'P5'],
    },
  },
  antioxidants: {
    title: 'Antioxidants',
    timeLimitSeconds: null,
    suggestedMinutes: 8,
    thresholds: { secure: 0.8, developing: 0.5 },
    objectives: [
      {
        id: 'A1',
        text: 'Recognize antioxidant names and related ingredient families.',
        sections: ['ingredient-names'],
      },
      {
        id: 'A2',
        text: 'Explain what an antioxidant protects in a particular food.',
        sections: ['ingredient-names', 'related-ingredients'],
      },
      {
        id: 'A3',
        text: "Use a label's wording to explain an ingredient's function.",
        sections: ['read-label', 'try-new-label'],
      },
      {
        id: 'A4',
        text: 'Distinguish antioxidant use from vitamin fortification when the label provides evidence.',
        sections: ['ingredient-names', 'read-label'],
      },
      {
        id: 'A5',
        text: 'Evaluate freshness, natural-source and health claims without assuming more than the evidence supports.',
        sections: ['check-understanding', 'try-new-label'],
      },
    ],
    sections: {
      'ingredient-names': ['A1', 'A2', 'A4'],
      'related-ingredients': ['A1', 'A2'],
      'read-label': ['A3', 'A4'],
      'check-understanding': ['A1', 'A2', 'A5'],
      'try-new-label': ['A1', 'A2', 'A3', 'A5'],
    },
  },
  pretest: {
    title: 'Your starting point',
    timeLimitSeconds: null,
    suggestedMinutes: 4,
    thresholds: { secure: 0.8, developing: 0.5 },
  },
  demo: {
    title: 'Question type demos',
    timeLimitSeconds: null,
    thresholds: { secure: 0.8, developing: 0.5 },
    objectives: [],
  },
};
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
      li.textContent = `${o.id} · ${o.text}`;
      list.append(li);
    });
    host.append(list);
  },
};
