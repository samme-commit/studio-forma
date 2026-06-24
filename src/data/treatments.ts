import {
  faDroplet,
  faScissors,
  faPersonBurst,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

export const treatments = [
  {
    title: "Signature Cut",
    category: "Cutting",
    description:
      "A personalized haircut shaped around your hair type, face shape and everyday styling routine.",
    duration: "60 min",
    price: "From 650 SEK",
    icon: faScissors,
  },
  {
    title: "Color Refresh",
    category: "Color",
    description:
      "Refresh faded tones, add depth or bring your current color back to life with a soft finish.",
    duration: "90 min",
    price: "From 1 200 SEK",
    icon: faDroplet,
  },
  {
    title: "Balayage Session",
    category: "Color",
    description:
      "Natural dimension, soft transitions and a premium low-maintenance color result.",
    duration: "150 min",
    price: "From 1 800 SEK",
    icon: faWandMagicSparkles,
  },
  {
    title: "Gloss Treatment",
    category: "Care",
    description:
      "A shine-focused treatment designed to improve tone, smoothness and overall hair feel.",
    duration: "45 min",
    price: "From 450 SEK",
    icon: faPersonBurst,
  },
];