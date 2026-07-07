import { Monitor, BookOpen, Play, Bus, ShieldCheck, Droplets } from "lucide-react";

const facilities = [
  { icon: Monitor, title: "Smart Classrooms" },
  { icon: BookOpen, title: "Library" },
  { icon: Play, title: "Playground" },
  { icon: Bus, title: "Transport" },
  { icon: ShieldCheck, title: "CCTV Security" },
  { icon: Droplets, title: "Hygienic Washrooms" },
];

export default function Facilities() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
            Our Facilities
          </h2>
          <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {facilities.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 rounded-xl bg-background-white hover:bg-sky-blue/10 transition-all group cursor-default"
            >
              <item.icon className="w-12 h-12  mb-3 group-hover:scale-110 transition-transform" />
              <span className="text-center font-medium text-gray-700">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}