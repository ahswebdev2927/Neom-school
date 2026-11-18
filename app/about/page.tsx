import React from 'react';
import About from '@/Components/about/index';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | NEOM School – Cambridge International School in Santosh Nagar",
  description: "Learn about NEOM School's mission, philosophy, caring educators, and commitment to future-ready holistic education in Santosh Nagar, Hyderabad.",
  alternates: {
    canonical: "https://www.neomeducationhyd.com/about/",
  },
};

const page = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default page;