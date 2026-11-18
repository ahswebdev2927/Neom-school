import { GraduationCap, Shield, Heart, Monitor, Target } from "lucide-react";
import Card from "@/Components/Home/Card";

const reasons = [
  {
    icon: GraduationCap,
    title: "Qualified Teachers",
    description: "Experienced, certified, and passionate educators who nurture each child's potential.",
  },
  {
    icon: Shield,
    title: "Safe Campus",
    description: "CCTV surveillance, secured entry, and trained staff ensuring a protected environment.",
  },
  {
    icon: Heart,
    title: "Activity-Based Learning",
    description: "Hands-on activities, games, and exploration make learning fun and effective.",
  },
  {
  icon: Monitor,
  title: "Smart Classrooms & Robotic Labs",
  description: "Interactive digital boards, modern teaching aids, and fully equipped robotic labs for hands-on STEM learning.",
},
  {
    icon: Target,
    title: "Holistic Development",
    description: "Focus on academics, sports, arts, and life skills for well-rounded growth.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-background-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
            Why Choose NEOM School for All-Round Development?
          </h2>
          <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}