


// "use client";
// import { useState, useEffect } from "react";
// import { Phone, Mail, Menu, X, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

// import Link from "next/link";
// import Image from "next/image";

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "Admissions", href: "/admissions" },
//   { name: "Programs", href: "/programs" },
//   { name: "Facilities", href: "/facilities" },
//   { name: "Gallery", href: "/gallery" },
//   // { name: "Achievements", href: "/achievements" },
//   { name: "About Us", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className="sticky top-0 z-50">
//       {/* Top Contact Bar */}
//       {/* <div className="bg-primary-blue text-white py-2 text-sm">
//         <div className="container-custom flex flex-wrap justify-between items-center">
//           <div className="flex gap-4">
//             <span className="flex items-center gap-1"><Phone size={16} /> +91 7075571346</span>
//             <span className="flex items-center gap-1"><Phone size={16} /> WhatsApp: +91 7075571346</span>
//             <span className="flex items-center gap-1"><Mail size={16} /> neomeducationhyd@gmail.com</span>
//           </div>
//           <div className="hidden md:block">
           
//           </div>
//         </div>
//       </div> */}
//       <div className="bg-primary-blue text-white py-2 text-sm">
//       <div className="container-custom flex flex-wrap justify-between items-center">
//         {/* Left side - Contact Information */}
//         <div className="flex gap-4">
//           {/* Phone call link */}
//           <a href="tel:+917075571346" className="flex items-center gap-1 hover:underline">
//             <Phone size={16} /> +91 7075571346
//           </a>

//           {/* WhatsApp link */}
//           <a 
//             href="https://wa.me/917075571346" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:underline"
//           >
//             <Phone size={16} /> WhatsApp: +91 7075571346
//           </a>

//           {/* Email link */}
//           <a href="mailto:neomeducationhyd@gmail.com" className="flex items-center gap-1 hover:underline">
//             <Mail size={16} /> neomeducationhyd@gmail.com
//           </a>
//         </div>

//         {/* Right side - Social Media Icons */}
//         <div className="flex items-center gap-3">
//           <span className="hidden sm:inline text-white/80 text-xs">Follow us:</span>
//           <a 
//             href="https://facebook.com/neomeducation" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="hover:text-blue-200 transition-colors duration-200"
//             aria-label="Facebook"
//           >
//             <Facebook size={16} />
//           </a>
//           <a 
//             href="https://instagram.com/neomeducation" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="hover:text-blue-200 transition-colors duration-200"
//             aria-label="Instagram"
//           >
//             <Instagram size={16} />
//           </a>
//           <a 
//             href="https://twitter.com/neomeducation" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="hover:text-blue-200 transition-colors duration-200"
//             aria-label="Twitter"
//           >
//             <Twitter size={16} />
//           </a>
//           <a 
//             href="https://linkedin.com/company/neomeducation" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="hover:text-blue-200 transition-colors duration-200"
//             aria-label="LinkedIn"
//           >
//             <Linkedin size={16} />
//           </a>
//           <a 
//             href="https://youtube.com/c/neomeducation" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="hover:text-blue-200 transition-colors duration-200"
//             aria-label="YouTube"
//           >
//             <Youtube size={16} />
//           </a>
//         </div>
//       </div>
//     </div>



//       {/* <div className="bg-primary-blue text-white py-2 text-sm">
//         <div className="container-custom flex flex-wrap justify-between items-center">
//         <div className="flex gap-4">
          
//           <a href="tel:+917075571346" className="flex items-center gap-1 hover:underline">
//             <Phone size={16} /> +91 7075571346
//           </a>

         
//           <a 
//             href="https://wa.me/917075571346" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:underline"
//           >
//             <Phone size={16} /> WhatsApp: +91 7075571346
//           </a>

         
//           <a href="mailto:neomeducationhyd@gmail.com" className="flex items-center gap-1 hover:underline">
//             <Mail size={16} /> neomeducationhyd@gmail.com
//           </a>
//         </div>
//         <div className="hidden md:block"></div>
//         </div>
//       </div>   */}

//       {/* Main Navigation */}
//       <nav
//         className={`bg-white transition-shadow ${
//           isScrolled ? "shadow-md" : ""
//         }`}
//       >
//         <div className="container-custom flex justify-between items-center py-3">
//           {/* Logo placeholder - use the uploaded logo */}
//           <Link href="/" className="flex items-center space-x-2">
          
//           <Image
//             src="logo/logo.png"
//             alt="Nemo Logo"
//             width={60}
//             height={0}
//             className="object-contain"
//             priority
//           />
//             {/* <div className="relative h-12 w-12 bg-gradient-to-br from-primary-blue to-sky-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
//               NEOM
//             </div> */}
//             {/* <span className="ml-2 font-heading font-bold text-4xl text-primary-blue">
//               NEOM SCHOOL
//             </span> */}
//             <span 
//               className="ml-2 font-bold text-4xl text-primary-blue"
//               // style={{ fontFamily: "'Quicksand', 'Nunito', sans-serif" }}
//             >
//               NEOM SCHOOL
//             </span>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="text-gray-700 hover:text-primary-blue font-medium transition"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden bg-white py-4 px-4 shadow-lg">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 href={link.href}
//                 className="block py-2 text-gray-700 hover:text-primary-blue"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // 👈 import for active route

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Admissions", href: "/admissions" },
  { name: "Programs", href: "/programs" },
  { name: "Facilities", href: "/facilities" },
  { name: "Gallery", href: "/gallery" },
  // { name: "Achievements", href: "/achievements" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // 👈 get current path

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to check if link is active
  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-primary-blue text-white py-2 text-sm">
        <div className="container-custom flex flex-wrap justify-between items-center">
          {/* Left side - Contact Information */}
          <div className="flex gap-4">
            <a href="tel:+917075571346" className="flex items-center gap-1 hover:underline">
              <Phone size={16} /> +91 7075571346
            </a>
            <a
              href="https://wa.me/917075571346"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <Phone size={16} /> WhatsApp: +91 7075571346
            </a>
            <a href="mailto:neomeducationhyd@gmail.com" className="flex items-center gap-1 hover:underline">
              <Mail size={16} /> neomeducationhyd@gmail.com
            </a>
          </div>

          {/* Right side - Social Media Icons */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-white/80 text-xs">Follow us:</span>
            <a
              href="https://facebook.com/neomschool"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://instagram.com/neom_schools"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            {/* <a
              href="https://twitter.com/neomeducation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a> */}
            {/* <a
              href="https://linkedin.com/company/neomeducation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a> */}
            <a
              href="https://youtube.com/@neomschools"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-white transition-shadow ${isScrolled ? "shadow-md" : ""}`}>
        <div className="container-custom flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo/logo.png"
              alt="NEOM School Santosh Nagar Logo"
              width={60}
              height={0}
              className="object-contain"
              priority
            />
            <span className="ml-2 font-bold text-4xl text-primary-blue">NEOM SCHOOL</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition ${
                    active
                      ? "text-primary-blue border-b-2 border-primary-blue pb-1"
                      : "text-gray-700 hover:text-primary-blue"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block py-2 transition ${
                    active ? "text-primary-blue font-semibold" : "text-gray-700 hover:text-primary-blue"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}