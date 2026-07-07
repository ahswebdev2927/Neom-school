import { Award, Trophy, Star, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Best School Award 2024",
    description: "Recognized for academic excellence and innovative teaching methods.",
  },
  {
    icon: Award,
    title: "Inter-School Debate Winners",
    description: "Our students secured 1st place in the city-level debate competition.",
  },
  {
  icon: Star,
  title: "100% Success Rate",
  description: "Outstanding results in board exams for 5 years running.",
},
  {
  icon: Medal,
  title: "Olympiad Excellence",
  description: "Consistent top rankers in national & international Olympiad exams.",
},
];

export default function Achievements() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
            Our Achievements
          </h2>
          <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-background-white rounded-xl p-6 shadow-md hover:shadow-xl transition group text-center"
            >
              <div className="bg-soft-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-soft-orange/30 transition">
                <item.icon className="w-8 h-8 text-soft-orange" />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary-blue mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}