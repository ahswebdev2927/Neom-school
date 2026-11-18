import React from 'react';
import Contact from '../../Components/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us & Campus Visit | NEOM School Santosh Nagar Hyderabad",
  description: "Get in touch with NEOM School Hyderabad. Located at SBI Road, New Santosh Nagar, Saidabad. Call +91 7075571346 to schedule a campus tour.",
  alternates: {
    canonical: "https://www.neomeducationhyd.com/contact/",
  },
};

const page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default page;
