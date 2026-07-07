// // app/(routes)/services/page.tsx
// 'use client'

// import Link from 'next/link'
// import { ChevronRight } from 'lucide-react'
// import { useMounted } from '@/app/hooks/useUI'
// import { Container } from '@/Components/ui/Container'
// import { Button } from '@/Components/ui/Button'
// import { serviceCategories } from '@/app/lib/data/services-data'
// import { ServiceCategoryNav } from '@/Components/services/ServiceCategoryNav'

// export default function ServicesPage() {
//   const mounted = useMounted()

//   if (!mounted) return null

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-black to-gray-900 text-white pt-32 pb-20 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.2)_0%,transparent_50%)]"></div>
//         </div>
        
//         <Container className="relative z-10">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
//               Our Premium{' '}
//               <span className="text-golden">Services</span>
//             </h1>
            
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               From skincare to bridal makeup, experience the finest beauty services 
//               delivered by our expert team of professionals.
//             </p>
//           </div>
//         </Container>
//       </section>
      
//       <ServiceCategoryNav />
      
//       {/* Categories Grid */}
//       <section className="py-20 bg-gray-50">
//         <Container>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {serviceCategories.map((category) => {
//               const Icon = category.icon
//               return (
//                 <Link
//                   key={category.id}
//                   href={category.href}
//                   className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
//                 >
//                   <div className="w-16 h-16 bg-golden/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-golden transition-colors">
//                     <Icon size={32} className="text-golden group-hover:text-black transition-colors" />
//                   </div>
                  
//                   <h3 className="font-display text-2xl font-bold text-black mb-2">
//                     {category.name}
//                   </h3>
                  
//                   <p className="text-gray-600 mb-4">
//                     {category.description}
//                   </p>
                  
//                   <div className="flex items-center text-golden font-medium group-hover:gap-2 transition-all">
//                     <span>Explore Services</span>
//                     <ChevronRight size={16} />
//                   </div>
//                 </Link>
//               )
//             })}
//           </div>
//         </Container>
//       </section>
      
//       {/* CTA Section */}
//       <section className="py-20 bg-white">
//         <Container>
//           <div className="bg-gradient-to-r from-golden/20 to-transparent rounded-3xl p-12 text-center">
//             <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
//               Need Help Choosing?
//             </h2>
//             <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
//               Our experts can help you select the perfect service for your needs
//             </p>
//             <Button href="/contact" variant="primary" className="!px-8 !py-4">
//               Contact Us
//             </Button>
//           </div>
//         </Container>
//       </section>
//     </>
//   )
// }


// app/(routes)/services/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { useMounted } from '@/app/hooks/useUI'
import { Container } from '@/Components/ui/Container'
import { Button } from '@/Components/ui/Button'
import { serviceCategories } from '@/app/lib/data/services-data'
import { ServiceCategoryNav } from '@/Components/services/ServiceCategoryNav'

export default function ServicesPage() {
  const mounted = useMounted()

  if (!mounted) return null

  // Default images for categories (you can replace these with your actual images)
  const categoryImages = {
    skin: '/services/Skincare.jpg',
    hair: '/services/haircare.jpg',
    tattoo: '/services/tattoo.jpg',
    'groom-packages': '/services/groom-makeup.jpg',
    'bridal-makeup': '/services/bridal-makeup.jpg',
    'pre-bridal': '/services/pre-bridal-makeup.jpg'
  }

  // Get popular services for each category
  const getPopularServices = (categoryId: string) => {
    switch(categoryId) {
      case 'skin':
        return ['Hydra Facials', 'Carbon Laser']
      case 'hair':
        return ['Hair Treatments', 'Hair Colour']
      case 'tattoo':
        return ['Custom Tattoos']
      case 'groom-packages':
        return ['Advance Groom Package']
      case 'bridal-makeup':
        return ['MAC Makeup', 'HD Makeup']
      case 'pre-bridal':
        return ['Complete Package']
      default:
        return []
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.2)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.2)_0%,transparent_50%)]"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-golden/20 text-golden px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-golden rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Premium Beauty Services</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our Premium{' '}
              <span className="text-golden relative">
                Services
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 5" preserveAspectRatio="none">
                  <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="#d4af37" strokeWidth="2"/>
                </svg>
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              From skincare to bridal makeup, experience the finest beauty services 
              delivered by our expert team of professionals.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-golden">15+</div>
                <div className="text-sm text-gray-400">Expert Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-golden">5000+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-golden">10+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-golden">30+</div>
                <div className="text-sm text-gray-400">Treatments</div>
              </div>
            </div>
          </div>
        </Container>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0,100 C480,0 960,0 1440,100 L1440,100 L0,100 Z" fill="white"/>
          </svg>
        </div>
      </section>
      
      <ServiceCategoryNav />
      
      {/* Categories Grid - Enhanced with Images */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Explore Our <span className="text-golden">Services</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our wide range of premium beauty and wellness services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon
              const imageSrc = categoryImages[category.id as keyof typeof categoryImages] || '/images/services/placeholder.jpg'
              const popularServices = getPopularServices(category.id)
              
              return (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      priority={index < 3}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Icon with Animation */}
                    <div className="absolute top-4 right-4 w-14 h-14 bg-golden rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <Icon size={28} className="text-black" />
                    </div>
                    
                    {/* Category Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        {category.name}
                      </h3>
                      <p className="text-gray-200 text-sm line-clamp-2">
                        {category.description}
                      </p>
                    </div>

                    {/* Popular Badge */}
                    {(category.id === 'skin' || category.id === 'hair' || category.id === 'bridal-makeup') && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 bg-golden text-black text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
                          Most Popular
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 bg-white">
                    {/* Service Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1.5 bg-golden/10 text-golden rounded-full text-xs font-medium border border-golden/20">
                        {category.id === 'skin' ? '6+ Treatments' : 
                         category.id === 'hair' ? '5+ Services' :
                         category.id === 'tattoo' ? '2 Services' :
                         category.id === 'groom-packages' ? '2 Packages' :
                         category.id === 'bridal-makeup' ? '7+ Options' :
                         '3 Packages'}
                      </span>
                      <span className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        ⏱️ {category.id === 'groom-packages' ? '3-5 hrs' : '30-180 mins'}
                      </span>
                    </div>

                    {/* Popular Services Preview */}
                    {popularServices.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs text-gray-500 mb-2">✨ POPULAR CHOICES</p>
                        <div className="flex flex-wrap gap-2">
                          {popularServices.map((service, idx) => (
                            <span key={idx} className="text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Starting Price Indicator */}
                    {/* <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-1">💰 STARTING FROM</p>
                      <p className="text-lg font-bold text-golden">
                        {category.id === 'tattoo' ? '₹500' : 
                         category.id === 'groom-packages' ? '₹5,999' :
                         category.id === 'bridal-makeup' ? '₹3,999' :
                         category.id === 'pre-bridal' ? '₹7,999' :
                         '₹999'}
                      </p>
                    </div> */}
                    
                    {/* CTA Button */}
                    <div className="flex items-center justify-between border-t pt-4 mt-2">
                      <span className="text-sm text-gray-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Available Today
                      </span>
                      <div className="flex items-center text-golden font-medium group-hover:gap-2 transition-all">
                        <span>Explore Services</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-golden/20 to-transparent blur-xl"></div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button 
              href="/contact" 
              variant="primary" 
              className="!px-8 !py-4 inline-flex items-center gap-2 group"
            >
              <span>Book Your Appointment</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </Container>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              Why Choose <span className="text-golden">Fitonze</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience excellence in every service with our commitment to quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Professionals',
                description: 'Certified specialists with years of experience',
                icon: '👩‍🎨',
                color: 'from-pink-500 to-rose-500'
              },
              {
                title: 'Premium Products',
                description: 'Using only high-quality, branded products',
                icon: '✨',
                color: 'from-purple-500 to-indigo-500'
              },
              {
                title: 'Hygienic Environment',
                description: 'Strict sanitation protocols for your safety',
                icon: '🛡️',
                color: 'from-blue-500 to-cyan-500'
              }
            ].map((feature, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="relative p-8 text-center">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Testimonials Preview */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
              What Our <span className="text-golden">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Priya Sharma',
                service: 'Bridal Makeup',
                comment: 'Amazing experience! The team made me look stunning on my wedding day.',
                rating: 5
              },
              {
                name: 'Rahul Mehta',
                service: 'Groom Package',
                comment: 'Professional service and great attention to detail. Highly recommended!',
                rating: 5
              },
              {
                name: 'Neha Gupta',
                service: 'Skin Treatment',
                comment: 'My skin has never looked better. Thank you Fitonze team!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex text-golden mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-golden/20 rounded-full flex items-center justify-center text-golden font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-golden/10 to-golden/5">
        <Container>
          <div className="relative bg-gradient-to-r from-golden to-amber-600 rounded-3xl p-12 text-center overflow-hidden">
            
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            </div>
            
            
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white/20 rounded-full translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
                Ready to Transform Your Look?
              </h2>
              <p className="text-black/80 text-lg mb-8 max-w-2xl mx-auto">
                Book your appointment today and experience the difference of premium beauty services
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  href="/contact" 
                  variant="secondary" 
                  className="!px-8 !py-4 bg-black text-white hover:bg-gray-900 group"
                >
                  <span className="flex items-center gap-2">
                    Contact Us
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button 
                  href="/book" 
                  variant="primary" 
                  className="!px-8 !py-4 bg-white text-black hover:bg-gray-100 group"
                >
                  <span className="flex items-center gap-2">
                    Book Now
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section> */}

      {/* Floating Book Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Link
          href="/book"
          className="flex items-center gap-2 bg-golden text-black px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <span>Book Now</span>
          <ChevronRight size={18} />
        </Link>
      </div>
    </>
  )
}