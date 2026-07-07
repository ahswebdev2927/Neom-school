import { useState } from 'react';

// Your FAQ data (extracted for easier management)
const faqItems = [
  {
    id: 'admission',
    question: 'What is the admission process?',
    answer:
      'The process begins with an enquiry, followed by a campus visit, submission of application and documents, and finally confirmation. You can start by filling the enquiry form online or contacting us.',
  },
  {
    id: 'entrance-test',
    question: 'Is there an entrance test?',
    answer:
      'For Playgroup to UKG, there is no formal test; an informal interaction is conducted. For Grade 1 and above, a basic assessment in English and Math may be taken to understand the child’s level.',
  },
{
  id: 'timings',
  question: 'What are the school timings?',
  answer:
    "Play Group: 9:00 AM to 12:30 PM\nPre-Primary (Nursery, LKG, UKG): 9:00 AM to 1:30 PM\nElementary (Grades 1 to 7): 8:30 AM to 2:30 PM",
},
  {
    id: 'transport',
    question: 'Do you provide transportation?',
    answer:
      'Yes, we have a fleet of safe, GPS-equipped buses covering major routes in and around Saidabad. Please contact the office for route details.',
  },
  {
    id: 'ratio',
    question: 'What is the student-teacher ratio?',
    answer:
      'We maintain a low student-teacher ratio of 14:1 in pre-primary and 14:1 in primary grades to ensure individual attention.',
  },
];

// The FAQ component (styling matches typical design; adjust as needed)
const FAQ = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-4 text-left flex justify-between items-center font-medium text-gray-800 hover:text-primary-blue focus:outline-none"
      >
        <span className="text-lg font-semibold">{question}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
};

// Parent section with accordion logic
export default function FAQSection() {
  // Open the first FAQ by default (or set null to have all closed)
  const [openId, setOpenId] = useState(faqItems[0].id);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
        </div>
        <div className="mx-auto">
          {faqItems.map((item) => (
            <FAQ
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}