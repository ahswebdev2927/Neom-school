import { BookOpen, FlaskConical, Puzzle, Palette, Users } from "lucide-react";

// const approaches = [
//   { icon: BookOpen, title: "Phonics-based reading", description: "Systematic phonics instruction for strong literacy skills." },
//   { icon: FlaskConical, title: "Experiential learning", description: "Learning by doing through experiments and real-world experiences." },
//   { icon: Puzzle, title: "Project-based learning", description: "Hands-on projects that encourage critical thinking and collaboration." },
//   { icon: Palette, title: "Creative activities", description: "Art, music, and drama to nurture creativity and self-expression." },
//   { icon: Users, title: "Personality development", description: "Focus on communication, confidence, and social skills." },
// ];

import { Sprout, Brain, Search, MessageSquare, BarChart, Target } from 'lucide-react'; // adjust import path as needed

const approaches = [
  {
    icon: Sprout,
    title: "Child-Centered Learning",
    description: "Every lesson suits different learning styles, encouraging curiosity, independence, and a love for learning from an early age."
  },
  {
    icon: Brain,
    title: "Concept-Based Understanding",
    description: "Deep conceptual understanding instead of rote memorization. Students ask questions, think critically, and apply knowledge to real life."
  },
  {
    icon: Search,
    title: "Inquiry & Exploration",
    description: "Learning driven by inquiry through hands-on activities, discussions, and projects. Students explore ideas and develop problem-solving skills."
  },
  {
    icon: MessageSquare,
    title: "Communication & Collaboration",
    description: "Strong emphasis on reading, writing, speaking, and listening. Collaborative learning builds teamwork, confidence, and leadership."
  },
  {
    icon: BarChart,
    title: "Continuous Assessment",
    description: "Ongoing, meaningful assessment with regular feedback to track progress, identify strengths, and support individual growth without pressure."
  },
  {
    icon: Target,
    title: "Skill Development for Life",
    description: "Essential life skills like creativity, critical thinking, resilience, and adaptability—preparing students for future success."
  }
];

export default function LearningApproach() {
  return (
    <section className="py-20 bg-background-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
            Our Learning Approach
          </h2>
          <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <div className="bg-primary-blue/10 p-3 rounded-full">
                <item.icon className="w-6 h-6 text-primary-blue" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}