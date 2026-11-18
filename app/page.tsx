import React from 'react';
import Home from '@/Components/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Best School in Santosh Nagar | NEOM School – Future-Ready Cambridge Learning",
  description: "Searching for the best school in Santosh Nagar? NEOM School offers Cambridge-standard education from Playgroup to Grade 7 with caring teachers, safe campus, and individual attention. Admissions open!",
  keywords: [
    "Best school in Santosh Nagar",
    "Best Cambridge International school near me",
    "Schools with strong academics",
    "Future-ready schools",
    "Schools with caring teachers",
    "Individual attention school",
    "Safe learning environment",
    "NEOM School Hyderabad",
  ],
  alternates: {
    canonical: "https://www.neomeducationhyd.com/",
  },
  openGraph: {
    title: "Best School in Santosh Nagar | NEOM School – Future-Ready Cambridge Learning",
    description: "Searching for the best school in Santosh Nagar? NEOM School offers Cambridge-standard education from Playgroup to Grade 7 with caring teachers, safe campus, and individual attention. Admissions open!",
    url: "https://www.neomeducationhyd.com/",
    siteName: "NEOM School",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best School in Santosh Nagar | NEOM School – Future-Ready Cambridge Learning",
    description: "Searching for the best school in Santosh Nagar? NEOM School offers Cambridge-standard education from Playgroup to Grade 7 with caring teachers, safe campus, and individual attention. Admissions open!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "School",
        "@id": "https://www.neomeducationhyd.com/#school",
        "name": "NEOM School",
        "alternateName": "NEOM Cambridge Pathway School Santosh Nagar",
        "url": "https://www.neomeducationhyd.com/",
        "logo": "https://www.neomeducationhyd.com/logo/logo.png",
        "image": "https://www.neomeducationhyd.com/logo/logo.png",
        "telephone": "+91-7075571346",
        "email": "neomeducationhyd@gmail.com",
        "description": "NEOM School is a premier Cambridge pathway school in Santosh Nagar, Saidabad, Hyderabad offering future-ready learning, 14:1 student-teacher ratio, smart classrooms, robotics labs, caring teachers, safe campus, and individual attention from Playgroup to Grade 7.",
        "openingHours": "Mo-Sa 09:00-17:00",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "17-1-72/B, SBI Road, New Santosh Nagar, Saidabad",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500059",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "17.3487",
          "longitude": "78.5085",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.neomeducationhyd.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best Cambridge pathway school in Santosh Nagar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NEOM School is recognized as one of the best Cambridge pathway schools in Santosh Nagar, Saidabad, offering future-ready education, smart classrooms, and robotics labs from Playgroup to Grade 7.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the student-teacher ratio at NEOM School?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NEOM School maintains a dedicated 14:1 student-teacher ratio to ensure caring teachers and individual attention for every child.",
            },
          },
          {
            "@type": "Question",
            "name": "How safe and secure is the NEOM School campus for students?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NEOM School provides a 100% safe learning environment equipped with 24/7 CCTV surveillance, secure entry-exit gates, and child-safe infrastructure.",
            },
          },
          {
            "@type": "Question",
            "name": "What grades are open for admissions at NEOM School?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Admissions are currently open for Early Childhood (Playgroup, Nursery, LKG, UKG) and Primary to Middle School (Grade 1 to Grade 7).",
            },
          },
        ],
      },
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </div>
  );
};

export default page;