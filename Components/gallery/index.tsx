"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import ReelsSection from "./ReelsSection";

// Sample gallery images – replace with your own or fetch from an API
// const galleryImages = [
//   {
//     id: 1,
//     src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     alt: "Students in classroom",
//     category: "Academics",
//   },
//   {
//     id: 2,
//     src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     alt: "Children reading together",
//     category: "Academics",
//   },
//   {
//     id: 3,
//     src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     alt: "Playground fun",
//     category: "Play",
//   },
//   {
//     id: 4,
//     src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     alt: "Smart classroom",
//     category: "Facilities",
//   },
//   {
//     id: 5,
//     src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     alt: "Art class",
//     category: "Activities",
//   },
//   {
//     id: 6,
//     src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     alt: "Happy students",
//     category: "Events",
//   },
//   {
//     id: 7,
//     src: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     alt: "Annual day performance",
//     category: "Events",
//   },
//   {
//     id: 8,
//     src: "https://images.unsplash.com/photo-1505533542167-8c89838bb19f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     alt: "Teacher with students",
//     category: "Academics",
//   },
//   {
//     id: 9,
//     src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//     alt: "Science experiment",
//     category: "Activities",
//   },
// ];

const galleryImages = [
  { id: 1, src: "/neom-imgs/15.jpg", alt: "Kids in classroom", category: "Academics" },
  { id: 2, src: "/neom-imgs/12.jpg", alt: "Kids in classroom", category: "Academics" },
  { id: 3, src: "/neom-imgs/11.jpg", alt: "Kids in classroom", category: "Academics" },
  { id: 4, src: "/neom-imgs/14.jpg", alt: "Kids in classroom", category: "Academics" },
  { id: 5, src: "/neom-imgs/13.jpg", alt: "Kids in classroom", category: "Academics" },
  { id: 6, src: "/neom-imgs/16.jpg", alt: "Kids in classroom", category: "Academics" },
  { id: 7, src: "/neom-imgs/Kidsinclassroom.jpg", alt: "Kids in classroom", category: "Academics" },
  { id: 8, src: "/neom-imgs/Childrenreading.jpg", alt: "Children reading", category: "Academics" },
  { id: 9, src: "/neom-imgs/IMG-20260206-WA0017.jpg", alt: "Art class", category: "Activities" },
  { id: 10, src: "/neom-imgs/IMG-20250529-WA0014.jpg", alt: "Playground", category: "Play" },
  { id: 11, src: "/neom-imgs/IMG-20260206-WA0002.jpg", alt: "School library", category: "Facilities" },
  { id: 12, src: "/neom-imgs/IMG-20260206-WA0044.jpg", alt: "Students with teacher", category: "Academics" },
  { id: 13, src: "/neom-imgs/IMG-20260206-WA0012.jpg", alt: "Students with teacher 2", category: "Academics" },
];

// Categories for filtering (optional, can be extended)
const categories = ["All", "Academics", "Play", "Facilities", "Activities", "Events"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  // Open lightbox with specific image
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Navigate to previous/next image
  const goPrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };
  const goNext = () => {
    setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (      
    <div className="bg-background-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-blue/10 to-sky-blue/10 py-20 overflow-hidden">
        <div className="absolute top-10 left-10 text-7xl opacity-20 animate-float">📸</div>
        <div className="absolute bottom-10 right-10 text-7xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>🖼️</div>
        
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4 animate-fade-in-up">
            Our Gallery
          </h1>
          <div className="w-24 h-1 bg-leaf-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A glimpse into the joyful moments, learning experiences, and celebrations at NEOM School.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      {/* <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-primary-blue text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-primary-blue/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container-custom">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No images found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, idx) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
                  onClick={() => openLightbox(idx)}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-semibold text-lg">{image.alt}</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary-blue text-xs font-semibold px-2 py-1 rounded-full">
                    {image.category}
                  </div> */}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Our Memories Video Reels Section */}
      <ReelsSection />

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
            onClick={() => setLightboxOpen(false)}
          >
            <X size={32} />
          </button>
          <button
            className="absolute left-4 text-white hover:text-gray-300 transition bg-black/50 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            <ChevronLeft size={36} />
          </button>
          <button
            className="absolute right-4 text-white hover:text-gray-300 transition bg-black/50 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            <ChevronRight size={36} />
          </button>
          <div
            className="relative max-w-5xl w-full mx-4 h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[currentImageIndex].src}
              alt={filteredImages[currentImageIndex].alt}
              fill
              className="object-contain"
            />
            {/* <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2">
              <p className="text-lg">{filteredImages[currentImageIndex].alt}</p>
              <p className="text-sm text-gray-200">{filteredImages[currentImageIndex].category}</p>
            </div> */}
          </div>
        </div>
      )}

      {/* Decorative footer */}
      <div className="h-2 bg-gradient-to-r from-primary-blue via-leaf-green to-soft-orange"></div>
    </div>
  );
}