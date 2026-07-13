import { assetPath } from "@/lib/asset-path";

export const ARCHIVE_VERSION = "v1.0.0";

export type Person = {
  id: string;
  slug: string;
  name: string;
  role: string;
  city: string;
  version: string;
  phrase: string;
  hoverLine: string;
  image: string;
  featured?: boolean;
  statement?: string;
  bio?: string[];
  identity?: string[];
  context?: string[];
  status?: string;
  focus?: string[];
  principles?: string[];
  favoritePiece?: string;
  environmentImages?: string[];
  workUrl?: string;
  interview?: { question: string; answer: string }[];
};

const RAW_PEOPLE: Person[] = [
  {
    id: "andrew",
    slug: "andrew",
    name: "andrew.md",
    role: "Designer",
    city: "Moscow",
    version: "v36.0",
    phrase: "Builds systems between design and code.",
    hoverLine: "Currently between interfaces and humans.",
    image: "/generated/person-founder.png",
    featured: true,
    statement: "I build systems for people.\nNot for interfaces.",
    bio: [
      "Andrew works between design, code and artificial intelligence.",
      "His work is about making complex systems understandable for humans.",
    ],
    identity: ["Designer", "AI Builder", "Systems Thinker", "Human"],
    context: ["Design systems", "Artificial intelligence", "Interfaces", "Tools"],
    status: "Still learning.",
    focus: ["Design systems", "AI workflows", "Human in the loop"],
    principles: [
      "Systems should serve people, not the other way around.",
      "Clarity is a form of respect.",
      "Documentation is an act of care.",
    ],
    favoritePiece: "Context — white",
    environmentImages: [
      "/generated/tech-laptop-hand.png",
      "/generated/tech-collaboration.png",
    ],
    workUrl: "https://instagram.com/iamhumanmd",
    interview: [
      {
        question: "What are you working on right now?",
        answer:
          "Trying to make AI tools feel less like machines and more like collaborators.",
      },
      {
        question: "What does human.md mean to you?",
        answer:
          "A reminder that behind every system there is a person — with context, memory, and doubt.",
      },
    ],
  },
  {
    id: "anna",
    slug: "anna",
    name: "anna.md",
    role: "Product Designer",
    city: "Moscow",
    version: "v30.2",
    phrase: "Designs interfaces that remember people.",
    hoverLine: "Turns user flows into human flows.",
    image: "/generated/person-product-designer.png",
    identity: ["Product Designer", "Systems Thinker", "Human"],
    context: ["UX", "Design systems", "AI products"],
    status: "Mapping the edge cases.",
    principles: [
      "Every flow has a human on the other side.",
      "A good interface lowers the temperature.",
    ],
    favoritePiece: "Memory — black",
    environmentImages: ["/generated/tech-collaboration.png"],
    interview: [
      {
        question: "What do you notice first in a product?",
        answer: "Where the user starts blaming themselves.",
      },
    ],
  },
  {
    id: "alex",
    slug: "alex",
    name: "alex.md",
    role: "Engineer",
    city: "Berlin",
    version: "v29.7",
    phrase: "Turns ambiguity into working systems.",
    hoverLine: "Prefers prototypes to presentations.",
    image: "/generated/person-engineer.png",
    identity: ["Engineer", "Builder", "Human"],
    context: ["Infrastructure", "Open source", "Tools"],
    status: "Shipping quietly.",
    principles: ["Make it work, then make it clear."],
    favoritePiece: "Branch — white",
    environmentImages: ["/generated/tech-workspace.png"],
    interview: [
      {
        question: "What keeps you up at night?",
        answer: "Systems that work but nobody understands.",
      },
    ],
  },
  {
    id: "maria",
    slug: "maria",
    name: "maria.md",
    role: "Product Manager",
    city: "Amsterdam",
    version: "v32.1",
    phrase: "Finds the human reason behind the roadmap.",
    hoverLine: "Turns ambiguity into priorities.",
    image: "/generated/person-ml-researcher.png",
    identity: ["Product Manager", "Prioritizer", "Human"],
    context: ["Roadmaps", "User research", "Launches"],
    status: "Clarifying tradeoffs.",
    principles: ["A roadmap is a record of choices."],
    favoritePiece: "Human — black",
    environmentImages: ["/generated/tech-collaboration.png"],
    interview: [
      {
        question: "What makes a product decision honest?",
        answer: "When it names who benefits and who pays the cost.",
      },
    ],
  },
  {
    id: "ivan",
    slug: "ivan",
    name: "ivan.md",
    role: "ML Researcher",
    city: "Saint Petersburg",
    version: "v31.4",
    phrase: "Studies models without forgetting people.",
    hoverLine: "Reads evals before demos.",
    image: "/generated/person-sre.png",
    identity: ["ML Researcher", "Evaluator", "Human"],
    context: ["Language models", "Benchmarks", "Alignment"],
    status: "Revising assumptions.",
    principles: ["A good eval starts with a real human failure."],
    favoritePiece: "README — white",
    environmentImages: ["/generated/tech-laptop-hand.png"],
    interview: [
      {
        question: "What are you researching?",
        answer: "Where model capability ends and human judgment begins.",
      },
    ],
  },
  {
    id: "lena",
    slug: "lena",
    name: "lena.md",
    role: "Frontend Engineer",
    city: "Tbilisi",
    version: "v27.9",
    phrase: "Builds interfaces people can trust.",
    hoverLine: "Notices every state between loading and done.",
    image: "/generated/person-frontend-engineer.png",
    identity: ["Frontend Engineer", "Interaction Builder", "Human"],
    context: ["React", "Accessibility", "Performance"],
    status: "Polishing states.",
    principles: ["The interface is part of the system, not decoration."],
    favoritePiece: "Silence — black",
    environmentImages: ["/generated/tech-workspace.png"],
    interview: [
      {
        question: "What makes an interface feel good?",
        answer: "When it responds before the user starts doubting it.",
      },
    ],
  },
  {
    id: "nikita",
    slug: "nikita",
    name: "nikita.md",
    role: "DevRel",
    city: "Tokyo",
    version: "v28.7",
    phrase: "Explains tools without removing the wonder.",
    hoverLine: "Turns APIs into stories people can use.",
    image: "/generated/person-devrel.png",
    identity: ["Developer Advocate", "Technical Communicator", "Human"],
    context: ["APIs", "Docs", "Community"],
    status: "Translating complexity.",
    principles: ["Documentation is part of the product."],
    favoritePiece: "Context — black",
    environmentImages: ["/generated/tech-collaboration.png"],
    interview: [
      {
        question: "What makes good documentation?",
        answer: "When the reader feels capable before they finish the page.",
      },
    ],
  },
  {
    id: "mateo",
    slug: "mateo",
    name: "mateo.md",
    role: "Security Engineer",
    city: "Madrid",
    version: "v34.2",
    phrase: "Looks for the paths nobody meant to create.",
    hoverLine: "Trusts logs more than promises.",
    image: "/generated/person-security-engineer.png",
    identity: ["Security Engineer", "Threat Modeler", "Human"],
    context: ["Risk", "Incidents", "Trust"],
    status: "Reading the logs.",
    principles: ["Trust is designed, tested, and repaired."],
    favoritePiece: "Memory — white",
    environmentImages: ["/generated/tech-laptop-hand.png"],
    interview: [
      {
        question: "What do you protect first?",
        answer: "The humans who have to live with the system after it fails.",
      },
    ],
  },
];

function withAssetPaths(person: Person): Person {
  return {
    ...person,
    image: assetPath(person.image),
    environmentImages: person.environmentImages?.map(assetPath),
  };
}

export const PEOPLE = RAW_PEOPLE.map(withAssetPaths);

export function getPersonBySlug(slug: string): Person | undefined {
  return PEOPLE.find((person) => person.slug === slug);
}

export function getFeaturedPerson(): Person {
  return PEOPLE.find((person) => person.featured) ?? PEOPLE[0];
}
