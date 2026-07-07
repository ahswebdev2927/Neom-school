import Image from "next/image";
import Button from "@/Components/ui/Button";
import {
  Monitor,
  BookOpen,
  Play,
  Bus,
  ShieldCheck,
  Droplets,
  Utensils,
  Heart,
  Wifi,
  Trees,
  Mic,
  Stethoscope,
} from "lucide-react";

export default function FacilitiesPage() {
  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-blue/10 to-sky-blue/10 py-20 overflow-hidden">
        <div className="absolute top-10 left-10 text-7xl opacity-20 animate-float">🏫</div>
        <div className="absolute bottom-10 right-10 text-7xl opacity-20 animate-float" style={{ animationDelay: "1s" }}>⚽</div>
        
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-blue mb-4 animate-fade-in-up">
            Our Facilities
          </h1>
          <div className="w-24 h-1 bg-leaf-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A safe, stimulating, and well-equipped environment where children love to learn and grow.
          </p>
        </div>
      </section>

      {/* Main Facilities Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FacilityCard
              icon={Monitor}
              title="Smart Classrooms"
              description="All classrooms are equipped with interactive digital boards, projectors, and modern teaching aids to make learning engaging and effective."
              image="/neom-imgs/SmartClassrooms.jpg"
              // image="https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <FacilityCard
              icon={BookOpen}
              title="Library"
              description="A well-stocked library with age-appropriate books, reference materials, and a cozy reading corner to foster a love for reading."
              // image="/neom-imgs/SmartClassrooms.jpg"
              image="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <FacilityCard
              icon={Play}
              title="Play Area"
              description="Spacious, safe outdoor play area with modern equipment for physical activities, sports, and free play."
              image="/neom-imgs/Childrenreading.jpg"
              // image="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <FacilityCard
              icon={Bus}
              title="Transport"
              description="Fleet of GPS-enabled, safe school buses with trained drivers and attendants covering major routes."
              // image="/neom-imgs/SmartClassrooms.jpg"
              image="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            <FacilityCard
              icon={ShieldCheck}
              title="CCTV Security"
              description="24/7 CCTV surveillance across campus, secure entry/exit, and full-time security personnel for complete safety."
              // image="/neom-imgs/SmartClassrooms.jpg"
              image="https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
            {/* <FacilityCard
              icon={Droplets}
              title="Hygienic Washrooms"
              description="Clean, child-friendly, and well-maintained washrooms with separate facilities for boys and girls."
              image="/neom-imgs/SmartClassrooms.jpg"
              // image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            /> */}
            {/* <FacilityCard
              icon={Utensils}
              title="Nutritious Meals"
              description="Hygienically prepared, nutritious midday meals and snacks following a planned menu."
              image="/neom-imgs/SmartClassrooms.jpg"
              // image="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            /> */}
            {/* <FacilityCard
              icon={Heart}
              title="Medical Room"
              description="First-aid facility with trained staff and tie-up with nearby hospitals for emergencies."
              image="/neom-imgs/SmartClassrooms.jpg"
              // image="https://images.unsplash.com/photo-1584515979956-d9f2e4d2b1b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            /> */}
            <FacilityCard
              icon={Wifi}
              title="Digital Infrastructure"
              description="High-speed Wi-Fi, computer lab with latest systems, and digital resources for tech-enabled learning."
              image="/hero.jpg"
              // image="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Safety & Comfort Section */}
      <section className="py-20 bg-background-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-4">
              Safety & Comfort First
            </h2>
            <div className="w-24 h-1 bg-leaf-green mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg flex items-start gap-4">
              <div className="bg-primary-blue/10 p-3 rounded-full">
                <ShieldCheck className="w-8 h-8 text-primary-blue" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-primary-blue mb-2">Secure Campus</h3>
                <p className="text-gray-600">
                  Single-point entry, visitor management system, and CCTV coverage ensure a protected environment.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg flex items-start gap-4">
              <div className="bg-leaf-green/10 p-3 rounded-full">
                <Trees className="w-8 h-8 text-leaf-green" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-primary-blue mb-2">Green Campus</h3>
                <p className="text-gray-600">
                  Lush greenery, plants, and open spaces create a refreshing and eco-friendly learning atmosphere.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg flex items-start gap-4">
              <div className="bg-soft-orange/10 p-3 rounded-full">
                <Mic className="w-8 h-8 text-soft-orange" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-primary-blue mb-2">Activity Rooms</h3>
                <p className="text-gray-600">
                  Dedicated spaces for art, music, dance, and indoor games to nurture creativity.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg flex items-start gap-4">
              <div className="bg-sky-blue/10 p-3 rounded-full">
                <Stethoscope className="w-8 h-8 text-sky-blue" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-primary-blue mb-2">Health & Hygiene</h3>
                <p className="text-gray-600">
                  Regular health check-ups, hygiene awareness, and clean drinking water throughout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-white">
  <div className="container-custom">
    <div className="bg-gradient-to-r from-primary-blue to-sky-blue rounded-3xl p-12 text-white text-center relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">
        Experience Our Facilities Firsthand
      </h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto relative z-10">
        Schedule a personal tour and see why NEOM School is the right choice for your child.
      </p>
      <a
        href="/contact"
        className="inline-block bg-white text-primary-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg relative z-10"
      >
        Schedule a Visit
      </a>
    </div>
  </div>
</section>

      {/* Decorative footer */}
      <div className="h-2 bg-gradient-to-r from-primary-blue via-leaf-green to-soft-orange"></div>
    </div>
  );
}

// Facility Card Component
function FacilityCard({
  icon: Icon,
  title,
  description,
  image,
}: {
  icon: any;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-background-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-primary-blue/10 p-2 rounded-lg">
            <Icon className="w-6 h-6 text-primary-blue" />
          </div>
          <h3 className="font-heading font-bold text-xl text-primary-blue">{title}</h3>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}