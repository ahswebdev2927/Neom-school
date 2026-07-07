// import Button from "@/Components/ui/Button";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative bg-gradient-to-br from-primary-blue/5 via-white to-soft-orange/5 overflow-hidden">
//       {/* Abstract background shapes */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-blue/10 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-leaf-green/10 rounded-full blur-3xl"></div>
//       </div>

//       {/* Floating icons as SVGs (or emojis with improved styling) */}
//       <div className="absolute top-20 left-10 text-7xl opacity-10 animate-float">📚</div>
//       <div className="absolute bottom-20 right-10 text-7xl opacity-10 animate-float-slow">✏️</div>
//       <div className="absolute top-40 right-20 text-6xl opacity-10 animate-float" style={{ animationDelay: "2s" }}>🎓</div>

//       <div className="container-custom relative z-10 py-20 md:py-28 flex flex-col lg:flex-row items-center gap-12">
//         {/* Left content */}
//         <div className="lg:w-1/2 text-center lg:text-left space-y-6">
//           <div className="inline-block px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold tracking-wide animate-fade-in-up">
//             🏫 Welcome to NEOM School
//           </div>
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
//             Dare to Dream,
//             <br />
//             <span className="bg-gradient-to-r from-primary-blue to-leaf-green bg-clip-text text-transparent">
//               Learn to Excel
//             </span>
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
//             Empowering students with 21st-century skills in a nurturing environment. Join us to shape a brighter tomorrow.
//           </p>

//           {/* Stats */}
//           <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
//             <div>
//               <div className="text-3xl font-bold text-primary-blue">500+</div>
//               <div className="text-sm text-gray-500">Students</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-primary-blue">15+</div>
//               <div className="text-sm text-gray-500">Years</div>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-primary-blue">98%</div>
//               <div className="text-sm text-gray-500">Success Rate</div>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
//             <Button href="/admissions" variant="primary" className="group">
//               Apply Now
//               <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </Button>
//             <Button href="/contact" variant="secondary">
//               Enquire Now
//             </Button>
//             <Button href="https://wa.me/917075571346" variant="whatsapp" className="flex items-center">
//               <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
//               </svg>
//               WhatsApp
//             </Button>
//           </div>
//         </div>

//         {/* Right image with decorative elements */}
//         <div className="lg:w-1/2 relative group">
//           <div className="relative h-80 w-full md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 group-hover:scale-105">
//             <Image
//               src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//               alt="Happy children learning"
//               fill
//               className="object-cover"
//               priority
//             />
//             {/* Gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue/20 to-transparent"></div>
//           </div>

//           {/* Floating card */}
//           <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 animate-float-slow">
//             <div className="w-12 h-12 bg-leaf-green/20 rounded-full flex items-center justify-center text-2xl">
//               🎯
//             </div>
//             <div>
//               <p className="text-sm font-semibold text-gray-800">Quality Education</p>
//               <p className="text-xs text-gray-500">Since 2009</p>
//             </div>
//           </div>

//           {/* Decorative blobs */}
//           <div className="absolute -top-4 -right-4 w-24 h-24 bg-soft-orange/30 rounded-full -z-10 animate-float"></div>
//           <div className="absolute -bottom-8 left-10 w-16 h-16 bg-primary-blue/30 rounded-full -z-10 animate-float" style={{ animationDelay: "1s" }}></div>
//         </div>
//       </div>

//       {/* Bottom wave */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
//           <path fill="white" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
//         </svg>
//       </div>
//     </section>
//   );
// }


// import Button from "@/Components/ui/Button";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative bg-[#f8f5f0] overflow-hidden min-h-screen flex items-center py-16">
//       {/* Background grid */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(10,61,128,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(10,61,128,0.04) 1px, transparent 1px)",
//           backgroundSize: "48px 48px",
//         }}
//       />

//       {/* Ambient blobs */}
//       <div className="absolute -top-32 -right-20 w-[520px] h-[520px] rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)" }} />
//       <div className="absolute -bottom-24 -left-16 w-[400px] h-[400px] rounded-full pointer-events-none"
//         style={{ background: "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 70%)" }} />

//       <div className="container mx-auto px-6 md:px-10 max-w-7xl relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

//           {/* ── LEFT COLUMN ── */}
//           <div className="animate-fade-in-up">

//             {/* Admissions Tag */}
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/10 border border-blue-900/15 text-[11px] font-bold text-blue-900 tracking-widest uppercase mb-6">
//               <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
//               Admissions Open 2025–26
//             </div>

//             {/* Headline */}
//             <h1
//               className="font-serif text-[clamp(40px,5.5vw,68px)] font-black leading-[1.05] text-[#0d1b2a] mb-2"
//               style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//             >
//               Where Young{" "}
//               <span className="italic text-[#0a3d80] relative inline-block">
//                 Minds
//                 <span
//                   className="absolute bottom-0.5 left-0 right-0 h-[6px] rounded-sm opacity-50"
//                   style={{ background: "linear-gradient(90deg, #f97316, #fbbf24)" }}
//                 />
//               </span>{" "}
//               Learn<br />
//               to Soar
//             </h1>

//             {/* Sub-tagline */}
//             <p
//               className="text-xl md:text-2xl text-slate-400 italic mb-7"
//               style={{ fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400 }}
//             >
//               Dare to Dream, Learn to Excel
//             </p>

//             {/* Description */}
//             <p className="text-base text-slate-500 leading-relaxed max-w-md mb-9">
//               NEOM School provides a nurturing environment where every child&apos;s
//               potential is celebrated. World-class educators, modern facilities, and a
//               curriculum built for tomorrow&apos;s leaders.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-3 mb-11">
//               <Button href="/admissions" variant="primary">Apply Now</Button>
//               <Button href="/contact" variant="secondary">Enquire Today</Button>
//               <Button href="https://wa.me/917075571346" variant="whatsapp">
//                 WhatsApp Us
//               </Button>
//             </div>

//             {/* Stats Row */}
//             <div className="flex items-stretch gap-7">
//               {[
//                 { num: "1,200+", label: "Students" },
//                 { num: "15 yrs", label: "Excellence" },
//                 { num: "98%", label: "Pass Rate" },
//               ].map((stat, i) => (
//                 <div key={stat.label} className="flex items-stretch gap-7">
//                   {i > 0 && <div className="w-px bg-slate-200 self-stretch" />}
//                   <div>
//                     <p
//                       className="text-2xl font-black text-[#0d1b2a] leading-tight"
//                       style={{ fontFamily: "'Fraunces', Georgia, serif" }}
//                     >
//                       {stat.num}
//                     </p>
//                     <p className="text-[11px] font-semibold tracking-widest uppercase text-slate-400 mt-0.5">
//                       {stat.label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ── RIGHT COLUMN ── */}
//           <div className="relative animate-fade-in-up [animation-delay:200ms]">

//             {/* Orange accent square */}
//             <div className="absolute -top-4 -left-4 w-20 h-20 rounded-[18px] bg-orange-500 z-0 opacity-90" />

//             {/* Blue backing shape */}
//             <div
//               className="absolute top-5 -right-5 -bottom-5 left-5 rounded-[32px] z-0"
//               style={{ background: "linear-gradient(135deg, #0a3d80 0%, #1e6fbf 100%)" }}
//             />

//             {/* Main image */}
//             <div className="relative w-full pt-[105%] z-10">
//               <Image
//                 src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                 alt="Happy children learning at NEOM School"
//                 fill
//                 className="object-cover rounded-[28px]"
//                 priority
//               />
//               {/* gradient overlay */}
//               <div className="absolute inset-0 rounded-[28px] bg-gradient-to-t from-blue-950/30 to-transparent" />
//             </div>

//             {/* Green ring accent */}
//             <div className="absolute bottom-8 -right-8 w-20 h-20 rounded-full border-[5px] border-green-500 opacity-60 z-0" />

//             {/* ── Floating cards ── */}

//             {/* Top-left: Award */}
//             <div className="absolute top-10 -left-10 z-20 bg-white rounded-2xl shadow-2xl shadow-slate-200/80 p-3 flex items-center gap-2.5 animate-float">
//               <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-content text-lg">🏆</div>
//               <div>
//                 <p className="text-[13px] font-bold text-[#0d1b2a] leading-none">Top Ranked</p>
//                 <p className="text-[11px] text-slate-400 mt-0.5 font-medium">Best School 2024</p>
//               </div>
//             </div>

//             {/* Top-right: Rating */}
//             <div
//               className="absolute -top-5 right-10 z-20 bg-white rounded-2xl shadow-2xl shadow-slate-200/80 p-3 flex items-center gap-2.5"
//               style={{ animation: "float 5s 1s ease-in-out infinite" }}
//             >
//               <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-lg">⭐</div>
//               <div>
//                 <p className="text-[13px] font-bold text-[#0d1b2a] leading-none">4.9 Rating</p>
//                 <p className="text-[11px] text-orange-500 mt-0.5 tracking-wide">★★★★★</p>
//               </div>
//             </div>

//             {/* Bottom-right: Graduates */}
//             <div
//               className="absolute bottom-12 -right-8 z-20 bg-white rounded-2xl shadow-2xl shadow-slate-200/80 p-3 flex items-center gap-2.5"
//               style={{ animation: "float 3.5s 0.5s ease-in-out infinite" }}
//             >
//               <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-lg">🎓</div>
//               <div>
//                 <p className="text-[13px] font-bold text-[#0d1b2a] leading-none">300+ Graduates</p>
//                 <p className="text-[11px] text-slate-400 mt-0.5 font-medium">Class of 2024</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }





// import Button from "@/Components/ui/Button";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative h-screen min-h-[700px] overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//           alt="Students in classroom"
//           fill
//           className="object-cover"
//           priority
//         />
//         {/* Vibrant gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/80 via-leaf-green/60 to-soft-orange/70 mix-blend-multiply"></div>
//       </div>

//       {/* Abstract shapes */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

//       {/* Floating icons */}
//       <div className="absolute top-20 left-10 text-8xl text-white/20 animate-float">🎓</div>
//       <div className="absolute bottom-20 right-10 text-8xl text-white/20 animate-float-slow">📘</div>
//       <div className="absolute top-1/2 right-20 text-7xl text-white/20 animate-float" style={{ animationDelay: "2s" }}>🔬</div>

//       {/* Content */}
//       <div className="relative z-20 container-custom h-full flex items-center">
//         <div className="max-w-4xl mx-auto text-center text-white">
//           {/* Animated badge */}
//           <div className="inline-block px-6 py-2 bg-white/30 backdrop-blur-md rounded-full text-sm font-semibold tracking-wide mb-8 border border-white/40 shadow-lg animate-fade-in-up">
//             ⭐ NEOM School — Where Futures Begin
//           </div>

//           {/* Main heading with animated gradient */}
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up">
//             Dare to <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Dream</span>
//             <br />
//             Learn to <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Excel</span>
//           </h1>

//           {/* Description */}
//           <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
//             A place where curiosity meets knowledge. Join our community of passionate learners and dedicated educators.
//           </p>

//           {/* Stats with icons */}
//           <div className="flex flex-wrap justify-center gap-12 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-2xl">👥</div>
//               <div className="text-left">
//                 <div className="text-3xl font-bold">500+</div>
//                 <div className="text-sm text-gray-200">Students</div>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-2xl">📅</div>
//               <div className="text-left">
//                 <div className="text-3xl font-bold">15+</div>
//                 <div className="text-sm text-gray-200">Years</div>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <div className="w-12 h-12 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-2xl">🏆</div>
//               <div className="text-left">
//                 <div className="text-3xl font-bold">98%</div>
//                 <div className="text-sm text-gray-200">Success</div>
//               </div>
//             </div>
//           </div>

//           {/* Buttons with hover effects */}
//           <div className="flex flex-wrap gap-6 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
//             <Button href="/admissions" variant="primary" className="bg-leaf-green hover:bg-light-green text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
//               Apply Now
//               <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </Button>
//             <Button href="/contact" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-blue px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
//               Enquire Now
//             </Button>
//             <Button href="https://wa.me/917075571346" variant="whatsapp" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
//               <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
//               </svg>
//               WhatsApp
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom wave */}
//       <div className="absolute bottom-0 left-0 right-0 z-10">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
//           <path fill="white" fillOpacity="0.2" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
//         </svg>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import Link from "next/link";
import { GraduationCap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          // src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Students in classroom"
          fill
          className="object-cover"
          priority
        />
        {/* Vibrant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/80 via-leaf-green/60 to-soft-orange/70 mix-blend-multiply"></div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

      {/* Floating icons */}
      <div className="absolute top-20 left-10 text-8xl text-white/20 animate-float">🎓</div>
      <div className="absolute bottom-20 right-10 text-8xl text-white/20 animate-float-slow">📘</div>
      <div className="absolute top-1/2 right-20 text-7xl text-white/20 animate-float" style={{ animationDelay: "2s" }}>🔬</div>

      {/* Content */}
      <div className="relative z-20 container-custom h-full flex items-center">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Animated badge */}
          <div className="inline-block px-6 py-2 bg-white/30 backdrop-blur-md rounded-full text-sm font-semibold tracking-wide mb-8 border border-white/40 shadow-lg animate-fade-in-up">
            ⭐ NEOM School — Shaping Future-Ready Learners
          </div>

          {/* Main heading with animated gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up">
            Dare to <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Dream</span>
            <br />
            Learn to <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Excel</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            A place where curiosity meets knowledge. Join our community of passionate learners and dedicated educators.
          </p>

          {/* Stats with icons */}
          <div className="flex flex-wrap justify-center gap-12 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-2xl">👥</div>
              <div className="text-left">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm text-gray-200">Students</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-2xl">👩‍🏫</div>
            <div className="text-left">
              <div className="text-3xl font-bold">14:1</div>
              <div className="text-sm text-gray-200">Student-Teacher Ratio</div>
            </div>
            </div>
            
            {/* <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-2xl">📅</div>
              <div className="text-left">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-gray-200">Years</div>
              </div>
            </div> */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/30 backdrop-blur rounded-full flex items-center justify-center text-2xl">🏆</div>
              <div className="text-left">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-gray-200">Success</div>
              </div>
            </div>
          </div>

          {/* Buttons with hover effects (custom styled) */}
          <div className="flex flex-wrap gap-6 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {/* Primary button - Apply Now */}
            <Link
  href="/admissions"
  className="inline-flex items-center justify-center px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:-translate-y-1 bg-amber-500 hover:bg-amber-600 text-white"
>
  <GraduationCap className="mr-2 w-5 h-5" />
  Admission Enquiry
  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
</Link>

            {/* Outline button - Enquire Now */}
            {/* <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:-translate-y-1 border-2 border-white text-white hover:bg-white hover:text-primary-blue"
            >
              Enquire Now
            </a> */}

            {/* WhatsApp button */}
            {/* <a
              href="https://wa.me/917075571346"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:-translate-y-1 bg-green-500 text-white hover:bg-green-600"
            >
              <svg className="w-7 h-7 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
              </svg>
              WhatsApp
            </a> */}
<Link
  href="https://wa.me/917075571346"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:-translate-y-1 bg-green-500 text-white hover:bg-green-600"
>
  {/* Icon size increased to w-9 h-9, margin-right reduced to mr-2 */}
  <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
  </svg>
  WhatsApp
</Link>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path fill="white" fillOpacity="0.2" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}