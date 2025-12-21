import Hero from '@/components/Hero';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-boxing-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=800&q=80"
                alt="Boxing trainer with client"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-5xl font-heading text-white mb-6">
                ABOUT <span className="text-boxing-red">CINCY BOXING</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Welcome to Cincy Boxing, Cincinnati's premier destination for professional boxing personal training.
                  With over 10 years of experience in competitive boxing and fitness training, we bring authentic
                  boxing technique and high-intensity workouts to help you achieve your goals.
                </p>
                <p>
                  Whether you're looking to get in the best shape of your life, learn proper boxing fundamentals,
                  or train for competition, our expert coaching will push you to new heights. We specialize in
                  personalized training programs tailored to your fitness level and objectives.
                </p>
                <p>
                  Based in Cincinnati, Ohio, we serve clients throughout the Greater Cincinnati area with
                  flexible training options including private sessions, small group classes, and outdoor training
                  when weather permits.
                </p>
                <p className="text-boxing-gold font-bold text-xl">
                  Train like a fighter. Feel like a champion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-boxing-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading text-white mb-4">
              OUR <span className="text-boxing-red">SERVICES</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Comprehensive boxing training programs designed to transform your fitness and fighting skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-8 hover:border-boxing-red transition-all duration-300 group">
              <div className="text-boxing-red mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading text-white mb-3">PRIVATE 1-ON-1 SESSIONS</h3>
              <p className="text-gray-400">
                Personalized training focused entirely on your goals. Perfect technique, customized workouts,
                and maximum results with dedicated attention.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-8 hover:border-boxing-red transition-all duration-300 group">
              <div className="text-boxing-red mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading text-white mb-3">SMALL GROUP TRAINING</h3>
              <p className="text-gray-400">
                Train with 2-4 people in an energetic, competitive environment. Build camaraderie while
                pushing each other to new limits.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-8 hover:border-boxing-red transition-all duration-300 group">
              <div className="text-boxing-red mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading text-white mb-3">BOXING FITNESS CLASSES</h3>
              <p className="text-gray-400">
                High-intensity boxing workouts that burn calories, build strength, and improve cardio.
                No experience necessary.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-8 hover:border-boxing-red transition-all duration-300 group">
              <div className="text-boxing-red mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-heading text-white mb-3">TECHNIQUE & PAD WORK</h3>
              <p className="text-gray-400">
                Master proper boxing fundamentals with focused mitt and pad work. Develop speed, accuracy,
                and combinations like a pro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-boxing-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading text-white mb-4">
              CLIENT <span className="text-boxing-red">TESTIMONIALS</span>
            </h2>
            <p className="text-gray-400 text-xl">See what our fighters have to say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-boxing-black border-l-4 border-boxing-red p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-boxing-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Best training experience I've ever had! Lost 30 pounds in 3 months and learned real boxing
                skills. The personalized attention makes all the difference."
              </p>
              <p className="text-white font-bold">- Mike T.</p>
              <p className="text-gray-500 text-sm">Cincinnati, OH</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-boxing-black border-l-4 border-boxing-gold p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-boxing-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "As a complete beginner, I was nervous to start boxing. The coaching was patient,
                encouraging, and incredibly effective. I'm hooked!"
              </p>
              <p className="text-white font-bold">- Sarah L.</p>
              <p className="text-gray-500 text-sm">Hyde Park</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-boxing-black border-l-4 border-boxing-red p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-boxing-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4 italic">
                "Incredible workouts that push you to your limits. My cardio and strength have improved
                dramatically. Highly recommend to anyone serious about fitness."
              </p>
              <p className="text-white font-bold">- James R.</p>
              <p className="text-gray-500 text-sm">Downtown Cincinnati</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-boxing-red to-red-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80"
            alt="Boxing gym background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-heading text-white mb-6">
            READY TO GET <span className="text-boxing-gold">FIGHT READY?</span>
          </h2>
          <p className="text-2xl text-white/90 mb-10">
            Join Cincinnati's premier boxing training program and transform your fitness today.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-boxing-red px-12 py-5 rounded-lg font-heading text-3xl hover:bg-boxing-gold hover:text-boxing-black transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            BOOK YOUR FIRST SESSION
          </Link>
          <p className="mt-6 text-white/80 text-lg">
            Sessions available throughout the Cincinnati area
          </p>
        </div>
      </section>
    </>
  );
}
