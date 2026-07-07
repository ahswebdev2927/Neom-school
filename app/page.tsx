import React from 'react';
import Home from '@/Components/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NEOM School Hyderabad | Best School for Playgroup to Grade 7",
  description: "NEOM School Hyderabad offers Playgroup to Grade 7 education with experienced teachers, smart classrooms, robotics labs, and activity-based learning. Admissions Open 2026-27.",
  alternates: {
    canonical: "https://www.neomeducationhyd.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "NEOM School",
    "url": "https://www.neomeducationhyd.com/",
    "logo": "https://www.neomeducationhyd.com/logo/logo.png",
    "telephone": "+91-7075571346",
    "email": "neomeducationhyd@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "17-1-72/B, SBI Road, New Santosh Nagar, Saidabad",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500059",
      "addressCountry": "IN"
    },
    "sameAs": [],
    "description": "NEOM School provides quality education from Playgroup to Grade 7 through activity-based learning, smart classrooms, robotics labs, and holistic development.",
    "openingHours": "Mo-Sa 09:00-17:00"
  };

  return (
    <div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Home/>
    </div>
  );
};

export default page;