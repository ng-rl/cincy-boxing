'use client';

import { useState } from 'react';
import { neighborhoods } from '@/data/neighborhoods';

interface FormData {
  name: string;
  email: string;
  phone: string;
  neighborhood: string;
  interests: string[];
  message: string;
}

const interestOptions = [
  '1-on-1 Training',
  'Group Classes',
  'Boxing Equipment',
  'Nutrition Coaching',
  'Competition Prep',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    neighborhood: '',
    interests: [],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          interests: formData.interests.join(', '),
          source: 'Website Contact Form',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          neighborhood: '',
          interests: [],
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-white font-heading text-lg mb-2">
          NAME *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-boxing-dark border border-boxing-gray rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-boxing-red transition-colors"
          placeholder="Your full name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-white font-heading text-lg mb-2">
          EMAIL *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-boxing-dark border border-boxing-gray rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-boxing-red transition-colors"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-white font-heading text-lg mb-2">
          PHONE
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-boxing-dark border border-boxing-gray rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-boxing-red transition-colors"
          placeholder="(513) 555-0123"
        />
      </div>

      {/* Neighborhood */}
      <div>
        <label htmlFor="neighborhood" className="block text-white font-heading text-lg mb-2">
          NEIGHBORHOOD
        </label>
        <select
          id="neighborhood"
          name="neighborhood"
          value={formData.neighborhood}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-boxing-dark border border-boxing-gray rounded-md text-white focus:outline-none focus:border-boxing-red transition-colors"
        >
          <option value="">Select your neighborhood</option>
          <optgroup label="Cincinnati, OH">
            {neighborhoods
              .filter((n) => !n.slug.includes('covington') && !n.slug.includes('newport'))
              .map((n) => (
                <option key={n.slug} value={n.name}>
                  {n.name}
                </option>
              ))}
          </optgroup>
          <optgroup label="Northern Kentucky">
            {neighborhoods
              .filter((n) => n.slug.includes('covington') || n.slug.includes('newport'))
              .map((n) => (
                <option key={n.slug} value={n.name}>
                  {n.name}
                </option>
              ))}
          </optgroup>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Interests */}
      <div>
        <label className="block text-white font-heading text-lg mb-3">
          WHAT ARE YOU INTERESTED IN?
        </label>
        <div className="space-y-2">
          {interestOptions.map((interest) => (
            <label
              key={interest}
              className="flex items-center gap-3 text-gray-300 cursor-pointer hover:text-white transition-colors"
            >
              <input
                type="checkbox"
                checked={formData.interests.includes(interest)}
                onChange={() => handleInterestToggle(interest)}
                className="w-5 h-5 bg-boxing-dark border-2 border-boxing-gray rounded checked:bg-boxing-red checked:border-boxing-red focus:outline-none focus:ring-2 focus:ring-boxing-red focus:ring-offset-2 focus:ring-offset-boxing-black transition-colors"
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-white font-heading text-lg mb-2">
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className="w-full px-4 py-3 bg-boxing-dark border border-boxing-gray rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-boxing-red transition-colors resize-vertical"
          placeholder="Tell me about your fitness goals, experience level, and what you're looking to achieve..."
        />
      </div>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="bg-green-900/30 border border-green-500 rounded-lg p-4">
          <div className="flex items-center gap-2 text-green-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-heading text-lg">
              Message sent successfully! I&apos;ll get back to you within 24 hours.
            </span>
          </div>
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="bg-red-900/30 border border-red-500 rounded-lg p-4">
          <div className="flex items-center gap-2 text-red-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-heading text-lg">
              Something went wrong. Please try again or call/text (513) XXX-XXXX.
            </span>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full gradient-red text-white font-heading text-2xl py-4 rounded-md hover:shadow-lg hover:shadow-boxing-red/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
      </button>

      <p className="text-gray-400 text-sm text-center">
        By submitting this form, you agree to receive communications from Cincy Boxing.
        You can unsubscribe at any time.
      </p>
    </form>
  );
}
