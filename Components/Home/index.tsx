import Hero from "@/Components/Home/Hero";
import WelcomeSection from "@/Components/Home/WelcomeSection";
import WhyChooseUs from "@/Components/Home/WhyChooseUs";
import Programs from "@/Components/Home/Programs";
import LearningApproach from "@/Components/Home/LearningApproach";
import Facilities from "@/Components/Home/Facilities";
import GalleryGrid from "@/Components/Home/GalleryGrid";
import Achievements from "@/Components/Home/Achievements";
import Testimonials from "@/Components/Home/Testimonials";
import AdmissionCTA from "@/Components/Home/AdmissionCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <WhyChooseUs />
      <Programs />
      <LearningApproach />
      <Facilities />
      <GalleryGrid />
      <Achievements />
      <Testimonials />
      <AdmissionCTA />
    </>
  );
}