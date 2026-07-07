// import Image from "next/image";
// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "Iqbal Hussain",
//     parentOf: "LKG Student",
//     content:
//       "NEOM School has been a wonderful place for my child. The teachers are caring and the campus is safe. My son looks forward to school every day!",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     name: "Naznee Hasina",
//     parentOf: "UKG Student",
//     content:
//       "The activity-based learning approach has made a huge difference. My daughter is more confident and curious. Highly recommend!",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     name: "Jayashree",
//     parentOf: "Grade 2 Student",
//     content:
//       "Excellent infrastructure and dedicated staff. The school truly focuses on holistic development. We are very happy parents.",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
//   {
//     name: "Hafeez Khan",
//     parentOf: "Nursery Student",
//     content:
//       "The transition to school was smooth thanks to the nurturing environment. My child loves the playground and the teachers.",
//     rating: 5,
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section className="py-20 bg-background-white">
//       <div className="container-custom">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
//             What Parents Say
//           </h2>
//           <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {testimonials.map((t, idx) => (
//             <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary-blue">
//                   <Image src={t.image} alt={t.name} fill className="object-cover" />
//                 </div>
//                 <div>
//                   <h3 className="font-heading font-bold text-primary-blue">{t.name}</h3>
//                   <p className="text-sm text-gray-500">{t.parentOf}</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 mb-4 italic">"{t.content}"</p>
//               <div className="flex text-soft-orange">
//                 {[...Array(t.rating)].map((_, i) => (
//                   <Star key={i} size={18} fill="currentColor" />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Iqbal Hussain",
    parentOf: "LKG Student",
    content:
      "NEOM School has been a wonderful place for my child. The teachers are caring and the campus is safe. My son looks forward to school every day!",
    rating: 5,
  },
  {
    name: "Naznee Hasina",
    parentOf: "UKG Student",
    content:
      "The activity-based learning approach has made a huge difference. My daughter is more confident and curious. Highly recommend!",
    rating: 5,
  },
  {
    name: "Jayashree",
    parentOf: "Grade 2 Student",
    content:
      "Excellent infrastructure and dedicated staff. The school truly focuses on holistic development. We are very happy parents.",
    rating: 5,
  },
  {
    name: "Hafeez Khan",
    parentOf: "Nursery Student",
    content:
      "The transition to school was smooth thanks to the nurturing environment. My child loves the playground and the teachers.",
    rating: 5,
  },
];

// Helper to get initials from name
const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

// Array of background colors for avatars (cycling)
const avatarColors = [
  "bg-primary-blue",
  "bg-leaf-green",
  "bg-soft-orange",
  "bg-purple-500",
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
            What Parents Say
          </h2>
          <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-4">
                {/* Avatar placeholder instead of image */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold ${avatarColors[idx % avatarColors.length]}`}
                >
                  {getInitials(t.name)}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary-blue">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.parentOf}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{t.content}"</p>
              <div className="flex text-soft-orange">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}