import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-10 text-8xl">📚</div>
      <div className="absolute bottom-10 right-10 opacity-10 text-8xl">✏️</div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-blue mb-6">
              Welcome to <span className="text-soft-orange">NEOM School</span>
            </h2>
            <div className="w-20 h-1 bg-leaf-green mb-6"></div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At NEOM School, we believe every child is unique and deserves a nurturing environment 
              where they can flourish academically, socially, and emotionally. Our mission is to 
              provide quality education that fosters holistic development, critical thinking, and 
              a lifelong love for learning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With a child-centric approach, experienced educators, and a safe, stimulating campus, 
              we ensure that your child's early years are filled with discovery, joy, and growth.
            </p>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative h-80 w-full lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                // src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                src="/neom-imgs/welcome.jpg"
                alt="Children learning together"
                fill
                className="object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-4 -left-4 bg-soft-orange text-white py-2 px-4 rounded-full shadow-lg font-bold">
              Since 2010
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}