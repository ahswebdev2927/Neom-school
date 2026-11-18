import React from 'react';
import Admisstions from '@/Components/admisisons';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Admissions Open 2026–27 | NEOM School Santosh Nagar Hyderabad",
  description: "Enroll your child at NEOM School Hyderabad. Admissions open for Playgroup, Nursery, LKG, UKG, and Grades 1 to 7 with Cambridge pathway curriculum.",
  alternates: {
    canonical: "https://www.neomeducationhyd.com/admissions/",
  },
};

const page = () => {
  return (
    <div>
      <Admisstions />
    </div>
  );
};

export default page;