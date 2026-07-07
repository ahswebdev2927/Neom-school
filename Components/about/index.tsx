import Image from "next/image";
import Button from "@/Components/ui/Button";
import { Heart, Target, BookOpen, Users, Award, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-blue/10 to-sky-blue/10 py-20 overflow-hidden">
        <div className="absolute top-10 left-10 text-7xl opacity-20 animate-float">📚</div>
        <div className="absolute bottom-10 right-10 text-7xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>✏️</div>
        
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4 animate-fade-in-up">
            About NEOM School
          </h1>
          <div className="w-24 h-1 bg-leaf-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A place where children discover their potential, build character, and develop a lifelong love for learning.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative h-80 w-full lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/neom-imgs/welcome.jpg"
                  alt="School building"
                  fill
                  className="object-cover"
                />
              </div>
              {/* <div className="absolute -bottom-4 -left-4 bg-soft-orange text-white py-2 px-6 rounded-full shadow-lg font-bold">
                Est. 2010
              </div> */}
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
                Our Story
              </h2>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                NEOM School was founded in 2010 with a simple yet powerful vision: to create a safe, nurturing environment where every child can thrive academically, socially, and emotionally. What began as a small preschool with just 20 students has grown into a trusted institution serving over 500 students from Playgroup to Grade 7.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over the years, we have remained committed to our core belief that education should be joyful, holistic, and rooted in strong values. Our dedicated team of educators works tirelessly to inspire curiosity, creativity, and confidence in every child who walks through our doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
<section className="py-20 bg-background-white">
  <div className="container-custom">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
        Our Mission, Vision & Values
      </h2>
      <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Mission Card */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group text-center">
        <div className="bg-primary-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-blue/20 transition">
          <Target className="w-10 h-10 text-primary-blue" />
        </div>
        <h3 className="font-heading font-bold text-xl text-primary-blue mb-3">Our Mission</h3>
        <p className="text-gray-600">
          To provide a learning environment that encourages children to bring out the best in
          themselves and enables their all-round development through the joy of learning, the
          appreciation and embodiment of values, and the celebration of diversity.
        </p>
      </div>

      {/* Vision Card */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group text-center">
        <div className="bg-leaf-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-leaf-green/20 transition">
          <BookOpen className="w-10 h-10 text-leaf-green" />
        </div>
        <h3 className="font-heading font-bold text-xl text-primary-blue mb-3">Our Vision</h3>
        <p className="text-gray-600">
          Our vision is to provide a happy, caring and stimulating learning environment where
          children will recognize and achieve their fullest potential so that they can make their
          best contribution to the society. We impart an educational experience that is world-class
          in every respect and prepares children for global citizenship and prepares them to
          explore the opportunities and face the challenges of an ever-evolving world, with
          confidence and strength of character.
        </p>
      </div>

      {/* Values Card */}
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition group text-center">
        <div className="bg-soft-orange/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-soft-orange/20 transition">
          <Heart className="w-10 h-10 text-soft-orange" />
        </div>
        <h3 className="font-heading font-bold text-xl text-primary-blue mb-3">Our Values</h3>
        <p className="text-gray-600 mb-4">
          Our values are more than just words; they are lived, modelled, and nurtured every day.
          At NEOM, we believe in:
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Collaboration",
            "Compassion",
            "Determination",
            "Equity",
            "Gratitude",
            "Integrity",
            "Resilience",
            "Respect",
            "Responsibility",
            "Trust",
          ].map((value) => (
            <span
              key={value}
              className="inline-block bg-soft-orange/10 text-gray-700 text-sm px-3 py-1 rounded-full"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Principal's Message */}
      {/* <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3 relative">
              <div className="relative h-80 w-80 mx-auto rounded-full overflow-hidden border-4 border-primary-blue shadow-2xl">
                <Image
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Principal Mrs. Anjali Sharma"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-2">
                Principal's Message
              </h2>
              <h3 className="text-xl text-soft-orange font-semibold mb-4">Mrs. Anjali Sharma</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-gray-200">"</span>
                <p className="text-lg text-gray-700 leading-relaxed pl-8 relative z-10">
                  At NEOM School, we believe that every child is a unique gift, full of potential waiting to be unfolded. Our dedicated team works tirelessly to create an environment where children feel safe, loved, and inspired to explore. Education is not just about academics; it's about building character, nurturing curiosity, and instilling values that last a lifetime. I invite you to visit our campus and experience the warmth and excellence that define NEOM School.
                </p>
                <span className="absolute bottom-0 right-2 text-6xl text-gray-200">"</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            {/* Image container - vertical rectangle */}
            <div className="lg:w-2/5 relative">
              <div className="relative h-full min-h-[180px] md:min-h-[220px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-blue">
                <Image
                  src="/najma pic.jpg" // Replace with actual photo of Najma Jahara
                  alt="Principal Najma Jahara"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="lg:w-3/5">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-2">
                Principal's Message
              </h2>
              <h3 className="text-xl text-soft-orange font-semibold mb-4">Najma Jahara</h3>
              <div className="w-20 h-1 bg-leaf-green mb-6"></div>
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-6xl text-gray-200">"</span>
                <p className="text-lg text-gray-700 leading-relaxed pl-8 relative z-10">
                  Welcome to NEOM School! It gives me immense pleasure to welcome you to a learning
                  community where excellence, values, and innovation come together. At NEOM School, we
                  are committed to providing a nurturing and inspiring environment that empowers every
                  child to reach their full potential. As a school offering both the Cambridge and SSC
                  curriculum, we strive to blend global standards with strong foundational learning. Our
                  approach focuses on STEAM education, Holistic development, discipline, and the
                  nurturing of responsible global citizens who are prepared to thrive in an ever-evolving
                  world. We strongly believe that education goes beyond textbooks. It is about shaping
                  character, instilling values, and developing critical thinking, creativity, and
                  confidence. Our dedicated educators work tirelessly to ensure that each child is guided
                  with care, encouraged to explore, and supported to grow academically, socially, and
                  emotionally. At NEOM School, we also emphasize strong moral and general values, helping
                  our students become respectful, compassionate, and responsible individuals. We value
                  the partnership between parents and the school, as together we can build a strong
                  foundation for our children’s future success. Let us join hands in shaping bright minds
                  and building a better tomorrow. Warm regards, Najma Jahara Principal, NEOM School
                </p>
                <span className="absolute bottom-0 right-2 text-6xl text-gray-200">"</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Key Features / Why Choose Us (expanded) */}
      <section className="py-20 bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
              What Makes Us Special
            </h2>
            <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Users}
              title="Experienced Teachers"
              description="Our educators are highly qualified, passionate, and committed to each child's growth."
            />
            <FeatureCard
              icon={Heart}
              title="Caring Environment"
              description="A warm, inclusive atmosphere where every child feels valued and supported."
            />
            <FeatureCard
              icon={Target}
              title="Holistic Curriculum"
              description="Balanced focus on academics, sports, arts, and life skills."
            />
            <FeatureCard
              icon={Award}
              title="Proven Track Record"
              description="Consistent academic excellence and co-curricular achievements."
            />
          </div>
        </div>
      </section>

      {/* School Stats */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat number="15+" label="Years of Excellence" />
            <Stat number="500+" label="Happy Students" />
            <Stat number="40+" label="Qualified Teachers" />
            <Stat number="10+" label="Awards Won" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
            Experience the NEOM Difference
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Visit our campus, meet our team, and see firsthand how we nurture young minds.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/admissions" variant="primary">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                         Admission Process</Button>
                        <Button href="/contact" variant="secondary">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                        Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Decorative footer element */}
      <div className="h-2 bg-gradient-to-r from-primary-blue via-leaf-green to-soft-orange"></div>
    </div>
  );
}

// Helper component for feature cards
function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition group">
      <div className="bg-primary-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-blue/20 transition">
        <Icon className="w-6 h-6 text-primary-blue" />
      </div>
      <h3 className="font-heading font-bold text-lg text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

// Helper component for stats
function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-heading font-bold mb-2">{number}</div>
      <div className="text-sm md:text-base text-sky-blue">{label}</div>
    </div>
  );
}