import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Cincy Boxing',
  description: 'Get in touch with Cincy Boxing for personalized boxing training in Cincinnati. Mobile training available throughout Greater Cincinnati and Northern Kentucky.',
  openGraph: {
    title: 'Contact Cincy Boxing',
    description: 'Ready to start your boxing journey? Contact us today for personalized training.',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 bg-boxing-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading text-white mb-6">
            LET&apos;S GET <span className="text-boxing-red">STARTED</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your fitness with personalized boxing training?
            Fill out the form below and I&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-8">
              <h2 className="text-3xl font-heading text-white mb-6">
                SEND A MESSAGE
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Sidebar Info - Takes 1 column */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
              <h3 className="text-2xl font-heading text-white mb-4">
                QUICK CONTACT
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-boxing-red flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-white font-heading">CALL/TEXT</p>
                    <p className="text-gray-300">(513) XXX-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-boxing-red flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-white font-heading">EMAIL</p>
                    <p className="text-gray-300">info@cincyboxing.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-boxing-red flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-heading">LOCATION</p>
                    <p className="text-gray-300">
                      Mobile Training Throughout Greater Cincinnati & Northern Kentucky
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Hours */}
            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
              <h3 className="text-2xl font-heading text-white mb-4">
                TRAINING HOURS
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white font-medium">6am - 8pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white font-medium">7am - 2pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white font-medium">By Appointment</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4 pt-4 border-t border-boxing-gray">
                Flexible scheduling available. I come to you!
              </p>
            </div>

            {/* Service Areas */}
            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
              <h3 className="text-2xl font-heading text-white mb-4">
                SERVICE AREAS
              </h3>
              <p className="text-gray-300 mb-4">
                I provide mobile boxing training throughout:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-boxing-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Downtown Cincinnati
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-boxing-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Northern Kentucky
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-boxing-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  All Cincinnati Neighborhoods
                </li>
              </ul>
              <Link
                href="/neighborhoods"
                className="inline-block mt-4 text-boxing-red hover:text-boxing-gold transition-colors font-medium"
              >
                View All Service Areas →
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-heading text-white text-center mb-12">
            FREQUENTLY ASKED <span className="text-boxing-red">QUESTIONS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
              <h3 className="text-xl font-heading text-boxing-gold mb-3">
                How quickly will I hear back?
              </h3>
              <p className="text-gray-300">
                I typically respond within 24 hours, often sooner. If you need immediate assistance,
                feel free to call or text me directly.
              </p>
            </div>

            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
              <h3 className="text-xl font-heading text-boxing-gold mb-3">
                Do I need any equipment to start?
              </h3>
              <p className="text-gray-300">
                Nope! I bring all the equipment to you. Just wear comfortable workout clothes and
                be ready to work. You can also{' '}
                <Link href="/shop" className="text-boxing-red hover:text-boxing-gold transition-colors">
                  shop boxing equipment
                </Link>{' '}
                if you want to train on your own.
              </p>
            </div>

            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
              <h3 className="text-xl font-heading text-boxing-gold mb-3">
                What if I&apos;ve never boxed before?
              </h3>
              <p className="text-gray-300">
                Perfect! Most of my clients start with zero boxing experience. I&apos;ll teach you
                proper technique from day one and build a program tailored to your fitness level.
              </p>
            </div>

            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
              <h3 className="text-xl font-heading text-boxing-gold mb-3">
                How do sessions work?
              </h3>
              <p className="text-gray-300">
                Sessions are 60 minutes and can be at your home, apartment gym, park, or another
                preferred location. I&apos;ll work around your schedule and come to you.
              </p>
            </div>

            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
              <h3 className="text-xl font-heading text-boxing-gold mb-3">
                What are your rates?
              </h3>
              <p className="text-gray-300">
                Pricing varies based on package and frequency. I offer single sessions,
                4-session packages, and monthly unlimited options. Contact me for current rates
                and special offers.
              </p>
            </div>

            <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
              <h3 className="text-xl font-heading text-boxing-gold mb-3">
                Can I book online?
              </h3>
              <p className="text-gray-300">
                Yes! Use the{' '}
                <Link href="/book" className="text-boxing-red hover:text-boxing-gold transition-colors">
                  online booking system
                </Link>{' '}
                to schedule your first session or reach out via this form if you have questions first.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-boxing-dark border border-boxing-red rounded-lg p-12">
          <h2 className="text-4xl font-heading text-white mb-4">
            READY TO <span className="text-boxing-red">START TRAINING?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait to start your transformation. Book your first session now or
            send a message above to learn more.
          </p>
          <Link
            href="/book"
            className="inline-block gradient-red text-white font-heading text-2xl px-12 py-4 rounded-md hover:shadow-lg hover:shadow-boxing-red/50 transition-all"
          >
            BOOK YOUR FIRST SESSION
          </Link>
        </div>
      </div>
    </div>
  );
}
