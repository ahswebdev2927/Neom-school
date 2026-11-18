import Image from "next/image";
import Link from "next/link";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] py-10 sm:py-14 md:py-16 lg:py-20 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="NEOM School Santosh Nagar Campus - Future-Ready Learning and Smart Classrooms"
          fill
          className="object-cover"
          priority
        />
        {/* Vibrant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/85 via-leaf-green/65 to-soft-orange/75 mix-blend-multiply"></div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-72 md:w-96 h-72 md:h-96 bg-white/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 md:w-96 h-72 md:h-96 bg-white/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: "1s" }}></div>

      {/* Floating icons */}
      <div className="hidden sm:block absolute top-12 md:top-20 left-6 md:left-10 text-5xl md:text-8xl text-white/20 animate-float pointer-events-none">🎓</div>
      <div className="hidden sm:block absolute bottom-16 md:bottom-20 right-6 md:right-10 text-5xl md:text-8xl text-white/20 animate-float-slow pointer-events-none">📘</div>
      <div className="hidden lg:block absolute top-1/2 right-16 text-6xl text-white/20 animate-float pointer-events-none" style={{ animationDelay: "2s" }}>🔬</div>

      {/* Content */}
      <div className="relative z-20 container-custom px-4 sm:px-6 w-full flex items-center justify-center my-auto pb-10 sm:pb-14 md:pb-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Animated badge */}
          <div className="inline-block px-4 py-1.5 sm:px-6 sm:py-2 bg-white/25 backdrop-blur-md rounded-full text-xs sm:text-sm font-semibold tracking-wide mb-3 sm:mb-4 md:mb-5 border border-white/40 shadow-lg animate-fade-in-up">
            ⭐ NEOM School — Shaping Future-Ready Learners
          </div>

          {/* Main heading with animated gradient */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.15] mb-2 sm:mb-3 animate-fade-in-up">
            Best <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Cambridge Pathway</span> &amp; Future-Ready School in <span className="bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">Santosh Nagar</span>
          </h1>

          {/* Sub-tagline */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-yellow-200 mb-2 sm:mb-3 italic animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
            Dare to Dream, Learn to Excel
          </p>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            A place where curiosity meets knowledge. Join our community of passionate learners and dedicated educators from Playgroup to Grade 7.
          </p>

          {/* Stats with icons */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 md:gap-10 mb-6 sm:mb-8 md:mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-2 sm:gap-3 bg-black/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/10">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white/25 backdrop-blur rounded-full flex items-center justify-center text-base sm:text-xl">👥</div>
              <div className="text-left">
                <div className="text-base sm:text-xl md:text-2xl font-bold leading-tight">200+</div>
                <div className="text-[10px] sm:text-xs text-gray-200">Students</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-black/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/10">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white/25 backdrop-blur rounded-full flex items-center justify-center text-base sm:text-xl">👩‍🏫</div>
              <div className="text-left">
                <div className="text-base sm:text-xl md:text-2xl font-bold leading-tight">14:1</div>
                <div className="text-[10px] sm:text-xs text-gray-200">Student-Teacher Ratio</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-black/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-white/10">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-white/25 backdrop-blur rounded-full flex items-center justify-center text-base sm:text-xl">🏆</div>
              <div className="text-left">
                <div className="text-base sm:text-xl md:text-2xl font-bold leading-tight">100%</div>
                <div className="text-[10px] sm:text-xs text-gray-200">Success</div>
              </div>
            </div>
          </div>

          {/* Buttons with hover effects (custom styled) */}
          <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {/* Primary button - Apply Now */}
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center px-5 py-2.5 sm:px-7 sm:py-3.5 text-sm sm:text-base md:text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:-translate-y-1 bg-amber-500 hover:bg-amber-600 text-white"
            >
              <GraduationCap className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              Admission Enquiry
              <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* WhatsApp button */}
            <Link
              href="https://wa.me/917075571346"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 sm:px-7 sm:py-3.5 text-sm sm:text-base md:text-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:-translate-y-1 bg-green-500 text-white hover:bg-green-600"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
              </svg>
              WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path fill="white" fillOpacity="0.2" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}