"use client"; // For FAQ accordion interactivity

import { useState } from "react";
import Image from "next/image";
import Button from "@/Components/ui/Button";
import Faq from '@/Components/admisisons/faq'
import {
  CheckCircle,
  FileText,
  Calendar,
  ClipboardList,
  Users,
  BookOpen,
  Bus,
  Shield,
  Heart,
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Phone,
  Cpu
} from "lucide-react";


export default function AdmissionsPage() {
  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-blue/10 to-sky-blue/10 py-20 overflow-hidden">
        <div className="absolute top-10 left-10 text-7xl opacity-20 animate-float">📝</div>
        <div className="absolute bottom-10 right-10 text-7xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>🎓</div>
        
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4 animate-fade-in-up">
            Admissions Open 2026–27
          </h1>
          <div className="w-24 h-1 bg-leaf-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Join the NEOM family! Limited seats available for the upcoming academic year.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* <Button href="/contact" variant="primary">Apply Now</Button> */}
            <Button href="tel:7075571346" variant="secondary"><Phone className="w-5 h-5 mr-2" />  Contact : 7075571346</Button>
            <Button href="https://wa.me/917075571346" variant="whatsapp">
             <svg className="w-9 h-9 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
      </svg>
            WhatsApp</Button>
          </div>
          
        </div>
      </section>

      {/* Why Choose NEOM (short) */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
              Why Families Choose NEOM
            </h2>
            <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <Reason icon={Shield} text="Safe & Secure Campus" />
            <Reason icon={GraduationCap} text="Qualified Teachers" />
            <Reason icon={Heart} text="Loving Environment" />
            <Reason icon={BookOpen} text="Holistic Development" />
            <Reason icon={Cpu} text="Technically Oriented" />
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
              Admission Process
            </h2>
            <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
            <p className="text-gray-600 mt-4">Simple and transparent steps to join NEOM School</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProcessStep
              number="01"
              title="Enquiry"
              description="Fill the enquiry form or contact us for information."
              icon={FileText}
            />
            <ProcessStep
              number="02"
              title="Visit Campus"
              description="Schedule a visit to see our facilities and meet the team."
              icon={Users}
            />
            <ProcessStep
              number="03"
              title="Submit Application"
              description="Complete the application form with required documents."
              icon={ClipboardList}
            />
            <ProcessStep
              number="04"
              title="Confirmation"
              description="Receive admission confirmation and complete formalities."
              icon={CheckCircle}
            />
          </div>
        </div>
      </section>

      {/* Age Criteria */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
              Age Criteria
            </h2>
            <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
            <AgeCard grade="Playgroup" age="2 - 3 years" />
            <AgeCard grade="Nursery" age="3 - 4 years" />
            <AgeCard grade="LKG" age="4 - 5 years" />
            <AgeCard grade="UKG" age="5 - 6 years" />
            <AgeCard grade="Grade 1" age="6 - 7 years" />
            <AgeCard grade="Grades 2-7" age="As per respective class" />
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-16 bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
              Documents Required
            </h2>
            <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="font-heading font-bold text-xl text-primary-blue mb-4 flex items-center gap-2">
                <ClipboardList className="text-leaf-green" /> For All Grades
              </h3>
              <ul className="space-y-3">
                <DocItem>Birth Certificate (original & copy)</DocItem>
                <DocItem>Passport size photographs (4 copies)</DocItem>
                <DocItem>Address proof (Aadhar / Voter ID / Passport)</DocItem>
                <DocItem>Medical / Vaccination records</DocItem>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="font-heading font-bold text-xl text-primary-blue mb-4 flex items-center gap-2">
                <BookOpen className="text-leaf-green" /> For Grades 1 & Above
              </h3>
              <ul className="space-y-3">
                <DocItem>Previous school report card</DocItem>
                <DocItem>Transfer Certificate (TC) from last school</DocItem>
                <DocItem>Migration certificate (if applicable)</DocItem>
                <DocItem>Any other relevant certificates</DocItem>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure (overview) */}
      {/* <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
              Fee Structure
            </h2>
            <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto bg-background-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-700 mb-6 text-center">
              Our fees are affordable and competitive. Please contact the school office for detailed fee breakdown.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeeItem label="Admission Fee" amount="One-time, contact school" />
              <FeeItem label="Tuition Fee (Monthly)" amount="Contact school" />
              <FeeItem label="Transport Fee (Optional)" amount="As per distance" />
              <FeeItem label="Activity Fee" amount="Included in tuition" />
            </div>
            <p className="text-sm text-gray-500 mt-6 text-center">
              *Fees are subject to revision as per school policy.
            </p>
          </div>
        </div>
      </section> */}

      {/* FAQ Accordion */}
      {/* <section className="py-16 bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
          </div>
          <div className=" mx-auto">
            <FAQ
              question="What is the admission process?"
              answer="The process begins with an enquiry, followed by a campus visit, submission of application and documents, and finally confirmation. You can start by filling the enquiry form online or contacting us."
            />
            <FAQ
              question="Is there an entrance test?"
              answer="For Playgroup to UKG, there is no formal test; an informal interaction is conducted. For Grade 1 and above, a basic assessment in English and Math may be taken to understand the child's level."
            />
            <FAQ
              question="What are the school timings?"
              answer="School timings are 9:00 AM to 12:30 PM for Playgroup and Nursery, and 9:00 AM to 3:00 PM for LKG to Grade 7."
            />
            <FAQ
              question="Do you provide transportation?"
              answer="Yes, we have a fleet of safe, GPS-equipped buses covering major routes in and around Saidabad. Please contact the office for route details."
            />
            <FAQ
              question="What is the student-teacher ratio?"
              answer="We maintain a low student-teacher ratio of 20:1 in pre-primary and 25:1 in primary grades to ensure individual attention."
            />
          </div>
        </div>
      </section> */}
      <Faq/>

      {/* Final Call to Action */}
      {/* <section className="py-20 bg-gradient-to-r from-primary-blue to-sky-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Begin the Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Secure your child's seat today. Limited seats available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" variant="primary" className="bg-white text-primary-blue hover:bg-gray-100">
              Apply Now
            </Button>
            <Button href="tel:+917075571346" variant="outline" className="border-white text-white hover:bg-white/20">
              Call Us
            </Button>
            <Button href="https://wa.me/917075571346" variant="whatsapp">
              WhatsApp
            </Button>
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-gradient-to-r from-primary-blue to-sky-blue text-white">
  <div className="container-custom text-center">
    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
      Ready to Begin the Journey?
    </h2>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Secure your child's seat today. Limited seats available.
    </p>
    <div className="flex flex-wrap gap-4 justify-center">
    {/* Admission Enquire - primary variant */}
    {/* <a
      href="/admissions"
      className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-white text-primary-blue hover:bg-gray-100"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
      Admission Enquire
    </a> */}

    {/* Contact Us - outline variant */}
    <a
      href="tel:+917075571346"
      className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-white text-white hover:bg-white/20"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Contact : 7075571346
    </a>

    {/* WhatsApp - green variant */}
    <a
      href="https://wa.me/917075571346"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-green-500 text-white hover:bg-green-600"
    >
      <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
      </svg>
      WhatsApp
    </a>
  </div>
  </div>
</section>

      {/* Decorative footer */}
      <div className="h-2 bg-gradient-to-r from-primary-blue via-leaf-green to-soft-orange"></div>
    </div>
  );
}

// Helper Components

function Reason({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex flex-col items-center p-4 bg-background-white rounded-xl text-center">
      <Icon className="w-8 h-8 text-leaf-green mb-2" />
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  );
}

function ProcessStep({ number, title, description, icon: Icon }: { number: string; title: string; description: string; icon: any }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition relative">
      <div className="absolute -top-3 -left-3 w-10 h-10 bg-soft-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
        {number}
      </div>
      <div className="mt-4">
        <div className="bg-primary-blue/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary-blue" />
        </div>
        <h3 className="font-heading font-bold text-lg text-primary-blue mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function AgeCard({ grade, age }: { grade: string; age: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md flex items-center gap-4 border-l-4 border-r-4 border-leaf-green">
      <Calendar className="w-8 h-8 text-soft-orange" />
      <div>
        <h3 className="font-heading font-bold text-lg text-primary-blue">{grade}</h3>
        <p className="text-gray-600">{age}</p>
      </div>
    </div>
  );
}

function DocItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <CheckCircle className="w-5 h-5 text-leaf-green mt-0.5 flex-shrink-0" />
      <span className="text-gray-700">{children}</span>
    </li>
  );
}

function FeeItem({ label, amount }: { label: string; amount: string }) {
  return (
    <div className="flex justify-between py-2 border-b border-gray-200">
      <span className="font-medium text-gray-700">{label}</span>
      <span className="text-primary-blue">{amount}</span>
    </div>
  );
}

// function FAQ({ question, answer }: { question: string; answer: string }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
//       <button
//         className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition text-left"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="font-heading font-semibold text-gray-800">{question}</span>
//         {isOpen ? <ChevronUp className="text-primary-blue" /> : <ChevronDown className="text-primary-blue" />}
//       </button>
//       {isOpen && (
//         <div className="p-4 bg-gray-50 border-t border-gray-200">
//           <p className="text-gray-600">{answer}</p>
//         </div>
//       )}
//     </div>
//   );
// }