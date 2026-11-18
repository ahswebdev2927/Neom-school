import React from 'react';
import Facilities from '@/Components/facilities';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "World-Class Campus Facilities | Smart Classrooms & Robotics Lab | NEOM School",
  description: "Discover state-of-the-art facilities at NEOM School: Smart Classrooms, Robotics STEM Lab, Library, CCTV Secured Campus, and Sports Ground in Santosh Nagar.",
  alternates: {
    canonical: "https://www.neomeducationhyd.com/facilities/",
  },
};

const page = () => {
  return (
    <div>
      <Facilities />
    </div>
  );
};

export default page;