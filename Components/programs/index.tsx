// import Image from "next/image";
// import Button from "@/Components/ui/Button";
// import {
//   Baby,
//   Flower2,
//   BookOpen,
//   Calculator,
//   Microscope,
//   Palette,
//   Music,
//   Trophy,
//   Heart,
//   Users,
// } from "lucide-react";

// export default function ProgramsPage() {
//   return (
//     <div className="bg-background-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-primary-blue/10 to-sky-blue/10 py-20 overflow-hidden">
//         <div className="absolute top-10 left-10 text-7xl opacity-20 animate-float">📚</div>
//         <div className="absolute bottom-10 right-10 text-7xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>🎨</div>
        
//         <div className="container-custom text-center relative z-10">
//           <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4 animate-fade-in-up">
//             Our Academic Programs
//           </h1>
//           <div className="w-24 h-1 bg-leaf-green mx-auto mb-6"></div>
//           <p className="text-xl text-gray-700 max-w-3xl mx-auto">
//             Age-appropriate, child-centric curricula designed to nurture curious minds and confident learners.
//           </p>
//         </div>
//       </section>

//       {/* Pre-Primary Section */}
//       <section className="py-20 bg-white">
//         <div className="container-custom">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
//               Pre-Primary (Playgroup – UKG)
//             </h2>
//             <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               Where learning begins with play, exploration, and warmth.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <ProgramCard
//               icon={Baby}
//               title="Playgroup"
//               age="1.5 - 2.5 years"
//               description="A gentle introduction to school through sensory play, music, and social interaction in a nurturing environment."
//               highlights={["Sensory play", "Rhymes & stories", "Gross motor skills"]}
//               color="soft-orange"
//             />
//             <ProgramCard
//               icon={Flower2}
//               title="Nursery"
//               age="2.5 - 3.5 years"
//               description="Building foundational skills with creative activities, early language, and number concepts."
//               highlights={["Art & craft", "Pre-literacy", "Social skills"]}
//               color="leaf-green"
//             />
//             <ProgramCard
//               icon={BookOpen}
//               title="LKG"
//               age="3.5 - 4.5 years"
//               description="Introduction to letters, numbers, and environmental awareness through fun, hands-on learning."
//               highlights={["Phonics", "Number concepts", "EVS"]}
//               color="sky-blue"
//             />
//             <ProgramCard
//               icon={Heart}
//               title="UKG"
//               age="4.5 - 5.5 years"
//               description="Preparing for formal schooling with language development, mathematical thinking, and problem-solving."
//               highlights={["Reading readiness", "Simple arithmetic", "General knowledge"]}
//               color="primary-blue"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Primary Section */}
//       <section className="py-20 bg-background-white">
//         <div className="container-custom">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
//               Primary (Grade 1 – Grade 7)
//             </h2>
//             <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               A robust curriculum that balances academics, co-curriculars, and life skills.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <ProgramCard
//               icon={Calculator}
//               title="Grade 1 – 3"
//               age="6 - 9 years"
//               description="Foundation for literacy, numeracy, and environmental studies with integrated activities."
//               highlights={["English, Math, EVS", "Art & Craft", "Physical Education"]}
//               color="soft-orange"
//               compact
//             />
//             <ProgramCard
//               icon={Microscope}
//               title="Grade 4 – 5"
//               age="9 - 11 years"
//               description="Introduction to Science, Social Studies, and advanced language skills with project-based learning."
//               highlights={["Science, Social Studies", "Computer Science", "Value Education"]}
//               color="leaf-green"
//               compact
//             />
//             <ProgramCard
//               icon={Trophy}
//               title="Grade 6 – 7"
//               age="11 - 13 years"
//               description="Preparing for higher classes with in-depth subject knowledge, critical thinking, and leadership opportunities."
//               highlights={["All core subjects", "Second Language (Hindi)", "Life Skills"]}
//               color="primary-blue"
//               compact
//             />
//           </div>
//         </div>
//       </section>

//       {/* Beyond Academics (Co-curricular) */}
//       <section className="py-20 bg-white">
//         <div className="container-custom">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
//               Beyond Academics
//             </h2>
//             <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
//             <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//               We believe in holistic development through a rich co-curricular program.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             <ActivityCard icon={Palette} title="Art & Craft" description="Creativity through drawing, painting, and handwork." />
//             <ActivityCard icon={Music} title="Music & Dance" description="Vocal music, instruments, and rhythmic movement." />
//             <ActivityCard icon={Trophy} title="Sports & Games" description="Physical education, athletics, and team sports." />
//             <ActivityCard icon={Users} title="Clubs & Events" description="Literary, science, and cultural clubs with events." />
//           </div>
//         </div>
//       </section>

//       {/* Learning Approach Summary */}
//       <section className="py-16 bg-primary-blue text-white">
//         <div className="container-custom text-center">
//           <h2 className="text-3xl font-heading font-bold mb-6">Our Learning Approach</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             <div>
//               <div className="text-4xl mb-2">🧩</div>
//               <h3 className="font-heading font-semibold text-lg mb-2">Activity-Based</h3>
//               <p className="text-sm text-sky-blue">Hands-on activities for deeper understanding</p>
//             </div>
//             <div>
//               <div className="text-4xl mb-2">💡</div>
//               <h3 className="font-heading font-semibold text-lg mb-2">Experiential</h3>
//               <p className="text-sm text-sky-blue">Real-world experiences and field trips</p>
//             </div>
//             <div>
//               <div className="text-4xl mb-2">📐</div>
//               <h3 className="font-heading font-semibold text-lg mb-2">Project-Based</h3>
//               <p className="text-sm text-sky-blue">Collaborative projects fostering critical thinking</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 bg-white">
//         <div className="container-custom text-center">
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
//             Ready to Enroll Your Child?
//           </h2>
//           <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
//             Give your child the gift of quality education in a safe, nurturing environment.
//           </p>
//           <div className="flex flex-wrap gap-4 justify-center">
//             <Button href="/admissions" variant="primary">View Admission Process</Button>
//             <Button href="/contact" variant="secondary">Contact Us</Button>
//           </div>
//         </div>
//       </section>

//       {/* Decorative footer */}
//       <div className="h-2 bg-gradient-to-r from-primary-blue via-leaf-green to-soft-orange"></div>
//     </div>
//   );
// }

// // Program Card Component
// function ProgramCard({
//   icon: Icon,
//   title,
//   age,
//   description,
//   highlights,
//   color = "primary-blue",
//   compact = false,
// }: {
//   icon: any;
//   title: string;
//   age: string;
//   description: string;
//   highlights: string[];
//   color?: "primary-blue" | "leaf-green" | "soft-orange" | "sky-blue";
//   compact?: boolean;
// }) {
//   const colorClasses = {
//     "primary-blue": "bg-primary-blue/10 text-primary-blue",
//     "leaf-green": "bg-leaf-green/10 text-leaf-green",
//     "soft-orange": "bg-soft-orange/10 text-soft-orange",
//     "sky-blue": "bg-sky-blue/10 text-sky-blue",
//   };

//   return (
//     <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${compact ? 'h-full' : ''}`}>
//       <div className={`w-16 h-16 rounded-full ${colorClasses[color]} flex items-center justify-center mb-4`}>
//         <Icon className="w-8 h-8" />
//       </div>
//       <h3 className="font-heading font-bold text-xl text-primary-blue mb-1">{title}</h3>
//       <p className="text-sm font-semibold text-soft-orange mb-3">{age}</p>
//       <p className="text-gray-600 text-sm mb-4">{description}</p>
//       <div className="border-t border-gray-100 pt-3">
//         <p className="text-xs font-semibold text-gray-500 mb-2">Highlights:</p>
//         <ul className="space-y-1">
//           {highlights.map((item, idx) => (
//             <li key={idx} className="text-sm text-gray-700 flex items-center gap-1">
//               <span className="w-1.5 h-1.5 rounded-full bg-leaf-green"></span>
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// // Activity Card for Co-curricular
// function ActivityCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
//   return (
//     <div className="bg-background-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition group">
//       <div className="bg-primary-blue/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-blue/20 transition">
//         <Icon className="w-7 h-7 text-primary-blue" />
//       </div>
//       <h3 className="font-heading font-bold text-lg text-primary-blue mb-1">{title}</h3>
//       <p className="text-sm text-gray-600">{description}</p>
//     </div>
//   );
// }

import Image from "next/image";
import Button from "@/Components/ui/Button";
import {
  Baby,
  Flower2,
  BookOpen,
  Calculator,
  Microscope,
  Palette,
  Music,
  Trophy,
  Heart,
  Users,
  MessageCircle,
  Mic,
  Shield
} from "lucide-react";

export default function ProgramsPage() {
  // Helper to create WhatsApp link with custom message
  const getWhatsAppLink = (program: string) => {
    const phone = "917075571346";
    const message = `Hello, I would like to inquire about ${program} at your school. Could you please share more details?`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-blue/10 to-sky-blue/10 py-20 overflow-hidden">
        <div className="absolute top-10 left-10 text-7xl opacity-20 animate-float">📚</div>
        <div className="absolute bottom-10 right-10 text-7xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>🎨</div>
        
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4 animate-fade-in-up">
            Our Academic Programs
          </h1>
          <div className="w-24 h-1 bg-leaf-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Age-appropriate, child-centric curricula designed to nurture curious minds and confident learners.
          </p>
        </div>
      </section>

      {/* Pre-Primary Section */}
      {/* Pre-Primary Section */}
<section className="py-20 bg-white">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
        Pre-Primary (Playgroup – UKG)
      </h2>
      <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Where learning begins with play, exploration, and warmth.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ProgramCard
        icon={Baby}
        title="Play Group"
        age="2 - 3 years"
        description="Child-centred learning through play, sensory activities, and structured routines that build school readiness."
        highlights={[
          "Learning Through Play",
          "Language & Communication",
          "Deeniyat / Moral Science",
          "Sensory & Experiential Learning",
          "Social Skills Development"
        ]}
        color="soft-orange"
        whatsappLink={getWhatsAppLink("Play Group")}
      />
      <ProgramCard
        icon={Flower2}
        title="Nursery"
        age="3 - 4 years"
        description="Building communication, literacy, numeracy, and creative expression with a strong focus on personal and social development."
        highlights={[
          "Communication & Language",
          "Creative Expression",
          "Literacy & Numeracy",
          "Deeniyat / Moral Science",
          "Physical & Emotional Development",
          "Understanding the World"
        ]}
        color="leaf-green"
        whatsappLink={getWhatsAppLink("Nursery")}
      />
      <ProgramCard
        icon={BookOpen}
        title="LKG"
        age="4 - 5 years"
        description="Early literacy, numeracy, and communication skills alongside physical and creative development."
        highlights={[
          "Early Literacy & Numeracy",
          "Communication & Language",
          "Personal, Social & Emotional Development",
          "Creative Expression",
          "Understanding the World"
        ]}
        color="sky-blue"
        whatsappLink={getWhatsAppLink("LKG")}
      />
      <ProgramCard
        icon={Heart}
        title="UKG"
        age="5 - 6 years"
        description="Reading fluency, sentence formation, vocabulary building, and logical thinking – ready for Grade 1."
        highlights={[
          "Reading fluency & comprehension",
          "Sentence formation & early writing",
          "Vocabulary & speaking confidence",
          "Numeracy & problem-solving",
          "Deeniyat / Moral Science",
          "Logical thinking"
        ]}
        color="primary-blue"
        whatsappLink={getWhatsAppLink("UKG")}
      />
    </div>
  </div>
</section>

{/* Primary Section */}
<section className="py-20 bg-background-white">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
        Primary (Grade 1 – Grade 7)
      </h2>
      <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        A robust curriculum that balances academics, co-curriculars, and life skills.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProgramCard
        icon={Calculator}
        title="Grade 1 – 3"
        age="6 - 9 years"
        description="Strong foundation in English, Mathematics, Science with inquiry skills and aptitude assessment."
        highlights={[
          "English, Math, Science",
          "Inquiry skills – Aptitude assessment",
          "Visual Art & Physical Education",
          "Martial Art & Digital Literacy",
          "Life Skills"
        ]}
        color="soft-orange"
        compact
        whatsappLink={getWhatsAppLink("Grade 1-3")}
      />
      <ProgramCard
        icon={Microscope}
        title="Grade 4 – 5"
        age="9 - 11 years"
        description="Deeper subject knowledge with multiple languages and integrated co-curriculars."
        highlights={[
          "English, Math, Science",
          "Hindi / Telugu / Urdu / Arabic / Deeniyat",
          "Visual Art, PE, Martial Art",
          "Digital Literacy & Life Skills"
        ]}
        color="leaf-green"
        compact
        whatsappLink={getWhatsAppLink("Grade 4-5")}
      />
      <ProgramCard
        icon={Trophy}
        title="Grade 6 – 7"
        age="11 - 13 years"
        description="Advanced academics with critical thinking, leadership opportunities, and comprehensive language options."
        highlights={[
          "All core subjects (English, Math, Science)",
          "Multiple languages (Hindi/Telugu/Urdu/Arabic/Deeniyat)",
          "Martial Art, Digital Literacy",
          "Life Skills & Aptitude Building"
        ]}
        color="primary-blue"
        compact
        whatsappLink={getWhatsAppLink("Grade 6-7")}
      />
    </div>
  </div>
</section>

      {/* Beyond Academics (Co-curricular) */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
              Beyond Academics
            </h2>
            <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We believe in holistic development through a rich co-curricular program.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <ActivityCard icon={Palette} title="Art & Craft" description="Creativity through drawing, painting, and handwork." />
          <ActivityCard icon={Mic} title="Public Speaking" description="Confidence building, elocution, debates, and presentations." />
          <ActivityCard icon={Trophy} title="Sports & Games" description="Physical education, athletics, and team sports." />
          <ActivityCard icon={Shield} title="Martial Arts" description="Discipline, self-defense, and physical fitness." />
          <ActivityCard icon={Users} title="Clubs & Events" description="Literary, science, and cultural clubs with events." />
        </div>
        </div>
      </section>

      {/* Learning Approach Summary */}
      {/* <section className="py-16 bg-primary-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Our Learning Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl mb-2">🧩</div>
              <h3 className="font-heading font-semibold text-lg mb-2">Activity-Based</h3>
              <p className="text-sm text-sky-blue">Hands-on activities for deeper understanding</p>
            </div>
            <div>
              <div className="text-4xl mb-2">💡</div>
              <h3 className="font-heading font-semibold text-lg mb-2">Experiential</h3>
              <p className="text-sm text-sky-blue">Real-world experiences and field trips</p>
            </div>
            <div>
              <div className="text-4xl mb-2">📐</div>
              <h3 className="font-heading font-semibold text-lg mb-2">Project-Based</h3>
              <p className="text-sm text-sky-blue">Collaborative projects fostering critical thinking</p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-primary-blue text-white">
  <div className="container-custom text-center">
    <h2 className="text-3xl font-heading font-bold mb-6">Our Learning Approach</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      <div>
        <div className="text-4xl mb-2">🧩</div>
        <h3 className="font-heading font-semibold text-lg mb-2">Activity-Based</h3>
        <p className="text-sm text-sky-blue">Hands-on activities for deeper understanding</p>
      </div>
      <div>
        <div className="text-4xl mb-2">💡</div>
        <h3 className="font-heading font-semibold text-lg mb-2">Experiential</h3>
        <p className="text-sm text-sky-blue">Real-world experiences and field trips</p>
      </div>
      <div>
        <div className="text-4xl mb-2">📐</div>
        <h3 className="font-heading font-semibold text-lg mb-2">Project-Based</h3>
        <p className="text-sm text-sky-blue">Collaborative projects fostering critical thinking</p>
      </div>
      <div>
        <div className="text-4xl mb-2">🔍</div>
        <h3 className="font-heading font-semibold text-lg mb-2">Inquiry-Based</h3>
        <p className="text-sm text-sky-blue">Curiosity-driven learning with student-led questions</p>
      </div>
    </div>
  </div>
</section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
            Ready to Enroll Your Child?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Give your child the gift of quality education in a safe, nurturing environment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/admissions" variant="primary">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
             Admission Process</Button>
            <Button href="/contact" variant="secondary">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
            Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Decorative footer */}
      <div className="h-2 bg-gradient-to-r from-primary-blue via-leaf-green to-soft-orange"></div>
    </div>
  );
}

// Program Card Component
function ProgramCard({
  icon: Icon,
  title,
  age,
  description,
  highlights,
  color = "primary-blue",
  compact = false,
  whatsappLink,
}: {
  icon: any;
  title: string;
  age: string;
  description: string;
  highlights: string[];
  color?: "primary-blue" | "leaf-green" | "soft-orange" | "sky-blue";
  compact?: boolean;
  whatsappLink: string;
}) {
  const colorClasses = {
    "primary-blue": "bg-primary-blue/10 text-primary-blue",
    "leaf-green": "bg-leaf-green/10 text-leaf-green",
    "soft-orange": "bg-soft-orange/10 text-soft-orange",
    "sky-blue": "bg-sky-blue/10 text-sky-blue",
  };

  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full ${compact ? '' : ''}`}>
      <div className={`w-16 h-16 rounded-full ${colorClasses[color]} flex items-center justify-center mb-4`}>
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-heading font-bold text-xl text-primary-blue mb-1">{title}</h3>
      <p className="text-sm font-semibold text-soft-orange mb-3">{age}</p>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="border-t border-gray-100 pt-3">
        <p className="text-xs font-semibold text-gray-500 mb-2">Highlights:</p>
        <ul className="space-y-1">
          {highlights.map((item, idx) => (
            <li key={idx} className="text-sm text-gray-700 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf-green"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* WhatsApp Inquiry Button - pushed to bottom with mt-auto */}
      <div className="mt-auto pt-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full py-2 px-4 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm font-medium transition-all duration-200 transform hover:scale-105"
        >
          <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
          </svg>
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}

// Activity Card for Co-curricular
function ActivityCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="bg-background-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition group">
      <div className="bg-primary-blue/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-blue/20 transition">
        <Icon className="w-7 h-7 text-primary-blue" />
      </div>
      <h3 className="font-heading font-bold text-lg text-primary-blue mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}