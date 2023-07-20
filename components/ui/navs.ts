export type TNavs = {
  name: string;
  slug: string;
  description?: string;
};

export const navs: { name: string; items: TNavs[] }[] = [
  {
    name: "Writing",
    items: [
      {
        name: "🧑‍🤝‍🧑 Social Media",
        slug: "socialmedia",
        description: "Lorem impsum",
      },
      {
        name: "📑 Education",
        slug: "email",
        description:
          "It is a long established fact that a reader will be distracted by the readable",
      },
      {
        name: "💻 Code",
        slug: "code",
        description:
          "It is a long established fact that a reader will be distracted by the readable",
      },
      {
        name: "✈️ Travel",
        slug: "travel",
        description:
          "It is a long established fact that a reader will be distracted by the readable",
      },
      {
        name: "🤑 Finance",
        slug: "finance",
        description:
          "It is a long established fact that a reader will be distracted by the readable",
      },
      {
        name: "✍🏼 Blog",
        slug: "blog",
        description:
          "It is a long established fact that a reader will be distracted by the readable",
      },
      {
        name: "👩🏼‍🍳 Recipes",
        slug: "recipes",
        description:
          "It is a long established fact that a reader will be distracted by the readable",
      },
    ],
  },
  {
    name: "Social Media",
    items: [
      { name: "Google", slug: "google", description: "Lorem impsum" },
      { name: "Facebook", slug: "abc", description: "Lorem impsum" },
      { name: "Twitter", slug: "twitter", description: "Lorem impsum" },
      { name: "Instagram", slug: "instagram", description: "Lorem impsum" },
      { name: "Whatsapp", slug: "whatsapp", description: "Lorem impsum" },
      { name: "Telegram", slug: "telegram", description: "Lorem impsum" },
      { name: "Snapchat", slug: "snapchat", description: "Lorem impsum" },
    ],
  },
  {
    name: "Education",
    items: [
      { name: "Writer", slug: "writer", description: "Lorem Impsum" },
      { name: "Explain", slug: "explain", description: "Lorem impsum" },
      { name: "Summarize", slug: "summarize", description: "Lorem impsum" },
    ],
  },
  {
    name: "Code",
    items: [
      { name: "Code generator", slug: "codegen", description: "Lorem Impsum" },
      { name: "Converter", slug: "converter", description: "Lorem impsum" },
      { name: "Refactor", slug: "refactor", description: "Lorem impsum" },
    ],
  },
  {
    name: "Travel",
    items: [
      { name: "Airport", slug: "airport", description: "Lorem impsum" },
      { name: "Hotel", slug: "hotel", description: "Lorem Impsum" },
      { name: "Restaurant", slug: "Restaurant", description: "Lorem impsum" },
      { name: "Trains", slug: "trains", description: "Lorem impsum" },
      { name: "Bus", slug: "bus", description: "Lorem impsum" },
    ],
  },
  {
    name: "Finance",
    items: [
      { name: "Family", slug: "family", description: "Lorem impsum" },
      {
        name: "Budget planner",
        slug: "budgetplanner",
        description: "Lorem impsum",
      },
      {
        name: "Personal Spending",
        slug: "personalspending",
        description: "Lorem Impsum",
      },
      { name: "Insurance", slug: "insurance", description: "Lorem impsum" },
      {
        name: "Household repairs",
        slug: "householdrepairs",
        description: "Lorem impsum",
      },
    ],
  },
  {
    name: "Blog",
    items: [
      { name: "Blog Post", slug: "blogpost", description: "Lorem Impsum" },
      { name: "Outline", slug: "blogoutline", description: "Lorem impsum" },
    ],
  },
  {
    name: "Recipes",
    items: [
      { name: "Food", slug: "food", description: "Lorem impsum" },
      { name: "Beverage", slug: "beverage", description: "Lorem impsum" },
    ],
  },
];
