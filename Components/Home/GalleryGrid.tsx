// import Image from "next/image";

// // const images = [
// //   { src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Kids in classroom" },
// //   { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Children reading" },
// //   { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Art class" },
// //   { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Playground" },
// //   { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "School library" },
// //   { src: "https://images.unsplash.com/photo-1505533542167-8c89838bb19f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", alt: "Students with teacher" },
// // ];

// const images = [
//   { src: "/neom-imgs/Kidsinclassroom.jpg", alt: "Kids in classroom" },
//   { src: "/neom-imgs/Childrenreading.jpg", alt: "Children reading" },
//   { src: "/neom-imgs/IMG-20260206-WA0044.jpg", alt: "Art class" },
//   { src: "/neom-imgs/IMG-20250529-WA0014.jpg", alt: "Playground" },
//   { src: "/neom-imgs/IMG-20260206-WA0017.jpg", alt: "School library" },
//   { src: "/neom-imgs/IMG-20260206-WA0012.jpg", alt: "Students with teacher" },
// ];

// export default function GalleryGrid() {
//   return (
//     <section className="py-20 bg-background-white">
//       <div className="container-custom">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
//             Photo Gallery
//           </h2>
//           <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
//           <p className="text-gray-600 mt-4">Glimpses of joy, learning, and growth at NEOM School.</p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {images.map((img, idx) => (
//             <div key={idx} className="relative h-72 rounded-2xl overflow-hidden shadow-lg group">
//               <Image
//                 src={img.src}
//                 alt={img.alt}
//                 fill
//                 className="object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";

// const images = [
//   { src: "/neom-imgs/Kidsinclassroom.jpg", alt: "Kids in classroom" },
//   { src: "/neom-imgs/Childrenreading.jpg", alt: "Children reading" },
//   { src: "/neom-imgs/IMG-20260206-WA0017.jpg", alt: "Art class" },
//   { src: "/neom-imgs/IMG-20250529-WA0014.jpg", alt: "Playground" },
//   { src: "/neom-imgs/IMG-20260206-WA0002.jpg", alt: "School library" },
//   { src: "/neom-imgs/IMG-20260206-WA0044.jpg", alt: "Students with teacher" },
//   { src: "/neom-imgs/IMG-20260206-WA0012.jpg", alt: "Students with teacher 2" },
//   { src: "/neom-imgs/IMG-20260206-WA0012.jpg", alt: "Students with teacher 3" },
//   { src: "/neom-imgs/IMG-20260206-WA0012.jpg", alt: "Students with teacher 4" },
//   { src: "/neom-imgs/IMG-20260206-WA0012.jpg", alt: "Students with teacher 5" },
// ];

// export default function GalleryGrid() {
//   return (
//     <section className="py-20 bg-background-white">
//       <div className="container-custom">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
//             Photo Gallery
//           </h2>
//           <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
//           <p className="text-gray-600 mt-4">
//             Glimpses of joy, learning, and growth at NEOM School.
//           </p>
//         </div>

//         {/* Custom grid layout */}
//         <div className="grid grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[280px]">
//           {/* Top-left: 2x2 grid using images[0-3] */}
//           <div className="col-span-2 row-span-2 grid grid-cols-2 gap-6">
//             {[0, 1, 2, 3].map((idx) => (
//               <div key={idx} className="relative rounded-2xl overflow-hidden shadow-lg group">
//                 <Image
//                   src={images[idx].src}
//                   alt={images[idx].alt}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
//               </div>
//             ))}
//           </div>

//           {/* Top-right: tall image using images[4] */}
//           <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-lg group">
//             <Image
//               src={images[4].src}
//               alt={images[4].alt}
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
//           </div>

//           {/* Bottom-left: tall image using images[5] */}
//           {/* <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-lg group">
//             <Image
//               src={images[5].src}
//               alt={images[5].alt}
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
//           </div> */}

//           {/* Bottom-right: 2x2 grid using images[6-9] */}
//           {/* <div className="col-span-2 row-span-2 grid grid-cols-2 gap-6">
//             {[6, 7, 8, 9].map((idx) => (
//               <div key={idx} className="relative rounded-2xl overflow-hidden shadow-lg group">
//                 <Image
//                   src={images[idx].src}
//                   alt={images[idx].alt}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
//               </div>
//             ))}
//           </div> */}
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { src: "/neom-imgs/15.jpg", alt: "Kids in classroom" },
  { src: "/neom-imgs/12.jpg", alt: "Kids in classroom" },
  { src: "/neom-imgs/11.jpg", alt: "Kids in classroom" },
  { src: "/neom-imgs/14.jpg", alt: "Kids in classroom" },
  { src: "/neom-imgs/13.jpg", alt: "Kids in classroom" },
  { src: "/neom-imgs/16.jpg", alt: "Kids in classroom" },
  { src: "/neom-imgs/Kidsinclassroom.jpg", alt: "Kids in classroom" },
  { src: "/neom-imgs/Childrenreading.jpg", alt: "Children reading" },
  { src: "/neom-imgs/IMG-20260206-WA0017.jpg", alt: "Art class" },
  { src: "/neom-imgs/IMG-20250529-WA0014.jpg", alt: "Playground" },
  { src: "/neom-imgs/IMG-20260206-WA0002.jpg", alt: "School library" },
  { src: "/neom-imgs/IMG-20260206-WA0044.jpg", alt: "Students with teacher" },
  { src: "/neom-imgs/IMG-20260206-WA0012.jpg", alt: "Students with teacher 2" },
  { src: "/neom-imgs/IMG-20260206-WA0012.jpg", alt: "Students with teacher 3" },
  { src: "/neom-imgs/IMG-20260206-WA0012.jpg", alt: "Students with teacher 4" },
  { src: "/neom-imgs/IMG-20260206-WA0012.jpg", alt: "Students with teacher 5" },
];

export default function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev !== null && prev < images.length - 1 ? prev + 1 : prev
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goPrev = () =>
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  const goNext = () =>
    setSelectedIndex((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : prev
    );

  return (
    <section className="py-20 bg-background-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
            Photo Gallery
          </h2>
          <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
          <p className="text-gray-600 mt-4">
            Glimpses of joy, learning, and growth at NEOM School.
          </p>
        </div>

        {/* Custom grid layout */}
        <div className="grid grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[280px]">
          {/* Top-left: 2x2 grid using images[0-3] */}
          <div className="col-span-2 row-span-2 grid grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={images[idx].src}
                  alt={images[idx].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              </div>
            ))}
          </div>

          {/* Top-right: tall image using images[4] */}
          <div
            className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
            onClick={() => openLightbox(4)}
          >
            <Image
              src={images[4].src}
              alt={images[4].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
          </div>

          {/* Bottom-left: tall image using images[5] (commented – uncomment when ready) */}
          {/* <div className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden shadow-lg group">
            <Image
              src={images[5].src}
              alt={images[5].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
          </div> */}

          {/* Bottom-right: 2x2 grid using images[6-9] (commented – uncomment when ready) */}
          {/* <div className="col-span-2 row-span-2 grid grid-cols-2 gap-6">
            {[6, 7, 8, 9].map((idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src={images[idx].src}
                  alt={images[idx].alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-auto h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 md:top-4 md:right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition z-10"
              aria-label="Close lightbox"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous button */}
            {selectedIndex > 0 && (
              <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
                aria-label="Previous image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {/* Next button */}
            {selectedIndex < images.length - 1 && (
              <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition"
                aria-label="Next image"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            {/* Image */}
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}