import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Book a Session',
  description: 'Book your boxing training session with Cincy Boxing. Available in-person throughout the Cincinnati area.',
  openGraph: {
    title: 'Book a Boxing Session - Cincy Boxing',
    description: 'Schedule your boxing training session in Cincinnati today.',
  },
};

export default function BookPage() {
  return (
    <div className="min-h-screen pt-20 bg-boxing-black">
      {/* Header */}
      <div className="bg-boxing-dark border-b border-boxing-gray py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-heading text-white mb-4">
            BOOK YOUR <span className="text-boxing-red">SESSION</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            Ready to start your boxing journey? Choose a time that works for you and let's get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-300">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-boxing-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Cincinnati Area</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-boxing-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-boxing-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>In-Person & Outdoor Options</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cal.com Embed */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-4 sm:p-8">
          {/* Cal.com inline embed */}
          <div
            className="cal-inline-embed"
            data-cal-link="cincyboxing"
            data-cal-config='{"theme":"dark"}'
            style={{ width: '100%', height: '900px', overflow: 'scroll' }}
          ></div>

          <Script
            id="cal-embed"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function (C, A, L) {
                  let p = function (a, ar) {
                    a.q.push(ar);
                  };
                  let d = C.document;
                  C.Cal = C.Cal || function () {
                    let cal = C.Cal;
                    let ar = arguments;
                    if (!cal.loaded) {
                      cal.ns = {};
                      cal.q = cal.q || [];
                      d.head.appendChild(d.createElement("script")).src = A;
                      cal.loaded = true;
                    }
                    if (ar[0] === L) {
                      const api = function () {
                        p(api, arguments);
                      };
                      const namespace = ar[1];
                      api.q = api.q || [];
                      typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
                      return;
                    }
                    p(cal, ar);
                  };
                })(window, "https://app.cal.com/embed/embed.js", "init");
                Cal("init", {origin:"https://cal.com"});
              `,
            }}
          />
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
            <h2 className="text-2xl font-heading text-white mb-4">WHAT TO EXPECT</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-boxing-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Personalized training tailored to your goals and fitness level</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-boxing-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Professional boxing equipment provided (gloves, pads, wraps)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-boxing-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>High-intensity workout combining cardio and strength</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-boxing-red mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Proper boxing technique and form instruction</span>
              </li>
            </ul>
          </div>

          <div className="bg-boxing-dark border border-boxing-gray rounded-lg p-6">
            <h2 className="text-2xl font-heading text-white mb-4">PRICING & PACKAGES</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex justify-between items-center border-b border-boxing-gray pb-3">
                <span className="font-medium">Single Session</span>
                <span className="text-boxing-gold font-bold">$75</span>
              </li>
              <li className="flex justify-between items-center border-b border-boxing-gray pb-3">
                <span className="font-medium">5-Session Package</span>
                <span className="text-boxing-gold font-bold">$350</span>
              </li>
              <li className="flex justify-between items-center border-b border-boxing-gray pb-3">
                <span className="font-medium">10-Session Package</span>
                <span className="text-boxing-gold font-bold">$650</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium">Small Group (2-4 people)</span>
                <span className="text-boxing-gold font-bold">$40/person</span>
              </li>
            </ul>
            <p className="text-gray-400 text-sm mt-4 italic">
              Packages save you money and help build consistency in your training.
            </p>
          </div>
        </div>

        {/* Contact Note */}
        <div className="mt-8 bg-boxing-red/10 border border-boxing-red rounded-lg p-6 text-center">
          <p className="text-gray-300 text-lg">
            Have questions or need a custom training plan?{' '}
            <a href="mailto:info@cincyboxing.com" className="text-boxing-gold hover:text-white transition-colors font-bold">
              Contact us directly
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
