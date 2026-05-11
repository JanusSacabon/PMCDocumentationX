{
  type: "sop",
  slug: "my-new-sop",
  title: "My New SOP",
  description: "What this SOP covers.",
  steps: 4,
  lastUpdated: "June 2026",
  sections: [
    { type: "heading", text: "Section Title" },
    {
      type: "step",
      number: 1,
      title: "Step Title",
      content: "What to do.",
      code: "show version",      // optional
      note: "Helpful tip",        // optional
      warning: "Watch out!"       // optional
    },
    { type: "paragraph", text: "Plain paragraph here." },
    { type: "list", items: ["Item 1", "Item 2"] },
    { type: "note", text: "Single note block." },
    { type: "warning", text: "Single warning block." }
  ]
}
