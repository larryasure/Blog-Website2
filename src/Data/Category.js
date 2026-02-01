import techImg from "../assets/tech.jpg";
import lifestyleImg from "../assets/lifestyle.jpg";
import businessImg from "../assets/business.jpg";
import designImg from "../assets/design.jpg";
import educationImg from "../assets/education.jpg";
import opinionImg from "../assets/Opinion.jpg";

export const categories = [
  {
    id: 1,
    name: "Technology",
    slug: "technology",
    color: "bg-blue-600",
    image: techImg,
    description: "Articles about software, tools, and the future of tech.",
  },
  {
    id: 2,
    name: "Lifestyle",
    slug: "lifestyle",
    color: "bg-pink-500",
    image: lifestyleImg,
    description: "Habits, routines, and better living.",
  },
  {
    id: 3,
    name: "Business",
    slug: "business",
    color: "bg-green-600",
    image: businessImg,
    description: "Startups, growth, and entrepreneurship.",
  },
  {
    id: 4,
    name: "Design",
    slug: "design",
    color: "bg-purple-600",
    image: designImg,
    description: "UI, UX, and modern design systems.",
  },
  {
    id: 5,
    name: "Education",
    slug: "education",
    color: "bg-yellow-500",
    image: educationImg,
    description: "Learning, studying, and self-improvement.",
  },
  {
    id: 6,
    name: "Opinion",
    slug: "opinion",
    color: "bg-red-500",
    image: opinionImg,
    description: "Thoughts, takes, and perspectives.",
  },
];