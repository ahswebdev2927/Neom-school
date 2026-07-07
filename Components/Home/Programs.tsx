const programs = [
  {
    name: "Playgroup",
    age: "2 - 3 years",
    description: "A gentle introduction to school through play, music, and social interaction.",
    icon: "🧸",
  },
  {
    name: "Nursery",
    age: "3 - 4 years",
    description: "Building foundational skills with sensory activities and early learning concepts.",
    icon: "🎨",
  },
  {
    name: "LKG",
    age: "4 - 5 years",
    description: "Introduction to letters, numbers, and creative expression in a structured setting.",
    icon: "📖",
  },
  {
    name: "UKG",
    age: "5 - 6 years",
    description: "Preparing for formal schooling with language, math, and problem-solving activities.",
    icon: "🔢",
  },
  {
    name: "Grade 1 – Grade 7",
    age: "6 - 13 years",
    description: "Comprehensive curriculum with focus on academics, sports, and co-curricular excellence.",
    icon: "🏆",
  },
];

export default function Programs() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
            Our Programs
          </h2>
          <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Age-appropriate curricula designed to foster curiosity, confidence, and a love for learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="bg-background-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-r-4 border-leaf-green hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{program.icon}</div>
              <h3 className="font-heading font-bold text-xl text-primary-blue mb-2">
                {program.name}
              </h3>
              <p className="text-soft-orange font-semibold mb-3">{program.age}</p>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}