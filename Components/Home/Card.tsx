import { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-100">
      <div className="w-16 h-16 mx-auto mb-4 bg-primary-blue/10 rounded-full flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors">
        <Icon className="w-8 h-8 text-primary-blue group-hover:scale-110 transition-transform" />
      </div>
      <h3 className="font-heading font-bold text-lg mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}