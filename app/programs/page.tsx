import React from 'react';
import Programs from '@/Components/programs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Academic Programs (Playgroup to Grade 7) | NEOM School Santosh Nagar",
  description: "Explore our Cambridge pathway academic programs from Playgroup, Nursery, Kindergarten to Grade 7 at NEOM School Hyderabad.",
  alternates: {
    canonical: "https://www.neomeducationhyd.com/programs/",
  },
};

const page = () => {
  return (
    <div>
      <Programs />
    </div>
  );
};

export default page;