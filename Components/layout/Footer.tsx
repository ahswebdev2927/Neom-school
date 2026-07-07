// // components/Footer.tsx
// import Link from "next/link";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
//   MapPin,
//   Phone,
//   Mail,
// } from "lucide-react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white pt-16 pb-8">
//       <div className="container-custom">
//         {/* Main footer grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//           {/* Column 1: School Info */}
//           <div>
//             <div>
//               <Image
//                           src="logo/logo.png"
//                           alt="Nemo Logo"
//                           width={125}
//                           height={125}
//                           className="object-contain"
//                           priority
//                         />
//               </div>
//             <div className="flex items-center gap-2 mb-4">
//               {/* Logo placeholder - replace with actual Image component */}  
//               {/* <div className="h-12 w-12 bg-gradient-to-br from-primary-blue to-sky-blue rounded-full flex items-center justify-center text-white font-bold text-xl">
//                 NEOM
//               </div> */}
//               <h3 className="font-heading font-bold text-xl">NEOM SCHOOL</h3>
//             </div>
//             <p className="text-gray-300 mb-4">
//               Safe place for children to learn and grow.
//             </p>
//             <div className="flex space-x-4">
//               <SocialIcon href="https://www.facebook.com/neomschool" icon={Facebook} />
//               {/* <SocialIcon href="#" icon={Twitter} /> */}
//               <SocialIcon href="https://www.instagram.com/neom_schools" icon={Instagram} />
//               <SocialIcon href="https://youtube.com/@neomschools?si=sWLTsmKiOQG6k25R" icon={Youtube} />
//             </div>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div>
//             <h4 className="font-heading font-bold text-lg mb-4 text-white">
//               Quick Links
//             </h4>
//             <ul className="space-y-2">
//               {["About Us", "Admissions", "Programs", "Contact"].map(
//                 (link) => (
//                   <li key={link}>
//                     <Link
//                       href={`/${link.toLowerCase().replace(" ", "")}`}
//                       className="text-gray-300 hover:text-white transition-colors"
//                     >
//                       {link}
//                     </Link>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* Column 3: Programs */}
//           <div>
//             <h4 className="font-heading font-bold text-lg mb-4 text-white">
//               Programs
//             </h4>
//             <ul className="space-y-2">
//               {["Playgroup", "Nursery", "LKG", "UKG", "Grade 1-7"].map(
//                 (prog) => (
//                   <li key={prog}>
//                     <span className="text-gray-300">{prog}</span>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>

//           {/* Column 4: Contact Details */}
//           <div>
//             <h4 className="font-heading font-bold text-lg mb-4 text-white">
//               Get in Touch
//             </h4>
//             <address className="not-italic text-gray-300 space-y-3">
//               <p className="flex items-start gap-2">
//                 <MapPin size={18} className="mt-1 flex-shrink-0 text-sky-blue" />
//                 <span>
//                   17-1-72/B, SBI Colony, SBI Road,
//                   <br />
//                   New Santosh Nagar, Saidabad,
//                   <br />
//                   Hyderabad – 500059
//                 </span>
//               </p>
//               <p className="flex items-center gap-2">
//                 <Phone size={18} className="text-sky-blue" />
//                 <a href="tel:+917075571346" className="hover:text-white transition">
//                   +91 7075571346
//                 </a>
//               </p>
//               <p className="flex items-center gap-2">
//                 <Mail size={18} className="text-sky-blue" />
//                 <a
//                   href="mailto:neomeducationhyd@gmail.com"
//                   className="hover:text-white transition"
//                 >
//                   neomeducationhyd@gmail.com
//                 </a>
//               </p>
//             </address>
//           </div>
//         </div>

//         {/* Bottom bar */}
//         <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
//           <p>
//             &copy; {new Date().getFullYear()} NEOM SCHOOL. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // Social icon component for consistent styling
// const SocialIcon = ({ href, icon: Icon }: { href: string; icon: any }) => (
//   <a
//     href={href}
//     target="_blank"
//     rel="noopener noreferrer"
//     className="bg-gray-800 p-2 rounded-full hover:bg-primary-blue transition-colors duration-300"
//     aria-label="Social media link"
//   >
//     <Icon size={18} />
//   </a>
// );


// components/Footer.tsx
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

// Use the same nav links as in Header
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Admissions", href: "/admissions" },
  { name: "Programs", href: "/programs" },
  { name: "Facilities", href: "/facilities" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom mx-auto px-4">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: School Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="relative h-16 w-16">
                <Image
                  src="/logo/logo.png"  // Fixed path – ensure file exists at public/logo/logo.png
                  alt="NEOM School Logo"
                  fill
                  className="object-contain h-auto"
                  priority
                />
              </div>
              <h3 className="font-heading font-bold text-xl">NEOM SCHOOL</h3>
            </div>
            {/* Large caption under logo */}
            <p className="text-sky-300 text-lg font-medium mb-4">
              Where Curiosity Meets Excellence
            </p>
            <p className="text-gray-300 mb-6">
              A safe and nurturing environment that inspires young minds to
              explore, learn, and grow into confident individuals.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="https://www.facebook.com/neomschool" icon={Facebook} />
              <SocialIcon href="https://www.instagram.com/neom_schools" icon={Instagram} />
              <SocialIcon href="https://youtube.com/@neomschools?si=sWLTsmKiOQG6k25R" icon={Youtube} />
            </div>
          </div>

          {/* Column 2: Quick Links – now includes all nav links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-white border-b border-gray-700 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 mt-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs – links directly to Programs page */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-white border-b border-gray-700 pb-2 inline-block">
              Programs
            </h4>
            <div className="mt-4">
              <p className="text-gray-300 mb-3">
                Discover our comprehensive curriculum designed for holistic
                development.
              </p>
              <Link
                href="/programs"
                className="inline-flex items-center gap-1 text-sky-300 hover:text-white transition-colors group"
              >
                Explore All Programs
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 text-white border-b border-gray-700 pb-2 inline-block">
              Get in Touch
            </h4>
            <address className="not-italic text-gray-300 space-y-3 mt-4">
              {/* <p className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-sky-300" />
                <span>
                  17-1-72/B, SBI Colony, SBI Road,
                  <br />
                  New Santosh Nagar, Saidabad,
                  <br />
                  Hyderabad – 500059
                </span>
              </p> */}
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-leaf-green mt-1 flex-shrink-0" />
                <span>
                  17-1-72/B, SBI ROAD
                  <br />
                  New Santosh Nagar
                  <br />
                  Saidabad
                  <br />
                  Hyderabad - 500059
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} className="text-sky-300" />
                <a href="tel:+917075571346" className="hover:text-white transition">
                  +91 7075571346
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} className="text-sky-300" />
                <a
                  href="mailto:neomeducationhyd@gmail.com"
                  className="hover:text-white transition"
                >
                  neomeducationhyd@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} NEOM SCHOOL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Social icon component for consistent styling
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-800 p-2 rounded-full hover:bg-sky-600 transition-colors duration-300"
    aria-label="Social media link"
  >
    <Icon size={18} />
  </a>
);