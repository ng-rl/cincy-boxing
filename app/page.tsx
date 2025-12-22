import Hero from '@/components/Hero';
import Image from 'next/image';
import Link from 'next/link';
import { programs } from '@/data/programs';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-boxing-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading text-white mb-4">
              CHOOSE YOUR <span className="text-boxing-red">PROGRAM</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Every program is 4 weeks. Fixed curriculum. Fixed outcome. Add coaching if you want extra support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-boxing-dark border border-boxing-gray rounded-lg overflow-hidden hover:border-boxing-red transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-56">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-boxing-black via-boxing-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-3xl font-heading text-white mb-1">
                      {program.name}
                    </h3>
                    <p className="text-gray-300">{program.tagline}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-boxing-red text-white font-heading text-xl px-4 py-2 rounded-md">
                    ${program.basePrice}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-400 mb-6">
                    {program.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {program.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                        <svg className="w-5 h-5 text-boxing-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/build"
                    className="block w-full gradient-red text-white font-heading text-xl py-3 rounded-md text-center hover:shadow-lg hover:shadow-boxing-red/50 transition-all"
                  >
                    START THIS PROGRAM
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/build"
              className="inline-block bg-boxing-dark border-2 border-boxing-gold text-boxing-gold px-8 py-4 rounded-md font-heading text-xl hover:bg-boxing-gold hover:text-boxing-black transition-all"
            >
              BUILD YOUR TRAINING →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-boxing-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-heading text-white mb-4">
              HOW IT <span className="text-boxing-red">WORKS</span>
            </h2>
            <p className="text-gray-400 text-xl">
              Build your perfect training experience in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-boxing-red text-white font-heading text-3xl rounded-full mb-6">
                1
              </div>
              <h3 className="text-2xl font-heading text-white mb-3">CHOOSE PROGRAM</h3>
              <p className="text-gray-400">
                Pick from 3 proven programs. Fixed curriculum, clear outcomes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-boxing-red text-white font-heading text-3xl rounded-full mb-6">
                2
              </div>
              <h3 className="text-2xl font-heading text-white mb-3">ADD COACHING</h3>
              <p className="text-gray-400">
                Train solo, get virtual support, or in-person coaching. Your choice.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-boxing-red text-white font-heading text-3xl rounded-full mb-6">
                3
              </div>
              <h3 className="text-2xl font-heading text-white mb-3">ADD GEAR</h3>
              <p className="text-gray-400">
                Need equipment? We'll recommend exactly what you need. Optional.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-boxing-red text-white font-heading text-3xl rounded-full mb-6">
                4
              </div>
              <h3 className="text-2xl font-heading text-white mb-3">START TRAINING</h3>
              <p className="text-gray-400">
                Instant access to your program. Schedule coaching. Get results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-boxing-black">
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
                  Welcome to Cincy Boxing, Cincinnati&apos;s premier destination for professional boxing training.
                  With over 10 years of experience in competitive boxing and fitness training, we bring authentic
                  boxing technique and high-intensity workouts to help you achieve your goals.
                </p>
                <p>
                  Whether you&apos;re looking to get in the best shape of your life, learn proper boxing fundamentals,
                  or train for competition, our expert coaching will push you to new heights. We specialize in
                  personalized training programs tailored to your fitness level and objectives.
                </p>
                <p>
                  Based in Cincinnati, Ohio, we serve clients throughout the Greater Cincinnati area with
                  flexible training options including self-guided programs, virtual coaching, and in-person training.
                </p>
                <p className="text-boxing-gold font-bold text-xl">
                  Train like a fighter. Feel like a champion.
                </p>
              </div>
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
                &quot;Best training experience I&apos;ve ever had! Lost 30 pounds in 3 months and learned real boxing
                skills. The personalized attention makes all the difference.&quot;
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
                &quot;As a complete beginner, I was nervous to start boxing. The coaching was patient,
                encouraging, and incredibly effective. I&apos;m hooked!&quot;
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
                &quot;Incredible workouts that push you to your limits. My cardio and strength have improved
                dramatically. Highly recommend to anyone serious about fitness.&quot;
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
            READY TO <span className="text-boxing-gold">START TRAINING?</span>
          </h2>
          <p className="text-2xl text-white/90 mb-10">
            Pick a program. Customize your training. Transform your fitness.
          </p>
          <Link
            href="/build"
            className="inline-block bg-white text-boxing-red px-12 py-5 rounded-lg font-heading text-3xl hover:bg-boxing-gold hover:text-boxing-black transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            BUILD YOUR TRAINING
          </Link>
          <p className="mt-6 text-white/80 text-lg">
            Serving Greater Cincinnati & Northern Kentucky
          </p>
        </div>
      </section>
    </>
  );
}
