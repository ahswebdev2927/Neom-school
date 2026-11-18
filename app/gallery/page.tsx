import React from 'react';
import Gallery from '@/Components/gallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Photo Gallery | Campus Life & Student Activities | NEOM School",
  description: "View glimpses of campus life, classroom learning, cultural events, science exhibits, and sports at NEOM School Santosh Nagar, Hyderabad.",
  alternates: {
    canonical: "https://www.neomeducationhyd.com/gallery/",
  },
};

const page = () => {
  return (
    <div>
      <Gallery />
    </div>
  );
};

export default page;