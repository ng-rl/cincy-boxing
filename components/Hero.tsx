import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=80"
          alt="Boxing training session"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-overlay"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-heading text-white mb-6 tracking-wider drop-shadow-lg">
          CINCY <span className="text-boxing-red">BOXING</span>
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-boxing-gold font-heading mb-8 drop-shadow-md">
          BOXING TRAINING IN CINCINNATI
        </p>
        <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light">
          Pick a program. Customize your training. Start today.
        </p>
        <Link
          href="/build"
          className="inline-block gradient-red text-white px-12 py-5 rounded-lg font-heading text-3xl hover:shadow-2xl hover:shadow-boxing-red/50 transition-all duration-300 transform hover:scale-105"
        >
          BUILD YOUR TRAINING
        </Link>
        <p className="mt-6 text-white/80 text-lg drop-shadow-md">
          One program. Customize how you train it.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
