export default function AdmissionCTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary-blue to-sky-blue text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom text-center relative z-10">
  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Admissions Open 2026–27</h2>
  <p className="text-xl mb-8 max-w-2xl mx-auto">
    Limited seats available. Give your child the gift of quality education in a safe, nurturing environment.
  </p>
  <div className="flex flex-wrap gap-4 justify-center">
    {/* Admission Enquire - primary variant */}
    <a
      href="/admissions"
      className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 bg-white text-primary-blue hover:bg-gray-100"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
      Admission Enquiry
    </a>

    {/* Contact Us - outline variant */}
    <a
      href="tel:+917075571346"
      className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 border-2 border-white text-white hover:bg-white/20"
    >
      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      Contact Now
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
  );
}