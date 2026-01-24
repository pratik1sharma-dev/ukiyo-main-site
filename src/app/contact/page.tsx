'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional().refine((val) => !val || val.length >= 10, {
    message: 'Mobile number must be at least 10 digits'
  }).refine((val) => !val || /^[0-9+\-\s()]+$/.test(val), {
    message: 'Invalid mobile number format'
  }),
  projectType: z.string().min(1, 'Please select a project type'),
  location: z.string().min(2, 'Location is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setError('');
      console.log('Submitting form data:', data);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      const result = await response.json().catch(() => ({}));
      console.log('Response data:', result);

      if (!response.ok) {
        const errorMessage = result.error || response.statusText || 'Failed to send message';
        console.error('API Error:', errorMessage);
        throw new Error(errorMessage);
      }

      console.log('Form submitted successfully');
      setIsSuccess(true);
      reset();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      console.error('Form submission error:', errorMessage, err);
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-32 h-1 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] mx-auto mb-8 rounded-full"></div>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#232323] mb-8 leading-tight">
            Get in <span className="text-[#e7a77e]">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#6b7280] leading-relaxed max-w-4xl mx-auto">
            Ready to start a conversation? Let's discuss how we can bring your vision to life with sustainable, innovative design solutions.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#f6f2ed] to-[#f0ebe6] rounded-2xl p-8 md:p-12 shadow-xl border border-[#e7d8c9]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                Start a Conversation
              </h2>
              <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
                Tell us about your project, ideas, or questions. We'd love to hear from you and explore how we can work together.
              </p>
            </div>
            
            {isSuccess && (
              <div className="mb-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl shadow-lg">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700 mb-4">Thank you for reaching out. We've received your message and will get back to you within 24 hours.</p>
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <p className="text-sm font-semibold text-green-800 mb-2">Need a faster response?</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a 
                          href="https://wa.me/919876543210?text=Hi!%20I%20just%20submitted%20a%20contact%20form%20and%20would%20like%20to%20discuss%20my%20project."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium text-sm"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                          </svg>
                          Chat on WhatsApp
                        </a>
                        <a 
                          href="tel:+919876543210"
                          className="inline-flex items-center justify-center px-4 py-2 bg-[#e7a77e] text-white rounded-lg hover:bg-[#d18e64] transition-colors duration-200 font-medium text-sm"
                        >
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                          </svg>
                          Call Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {error && (
              <div className="mb-8 p-6 bg-red-50 border border-red-200 text-red-700 rounded-xl">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="font-semibold">{error}</span>
                </div>
              </div>
            )}

            {!isSuccess && (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#232323] mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className={`w-full p-4 rounded-xl border bg-white text-[#232323] transition-all duration-200 ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-[#e7d8c9] focus:ring-[#e7a77e] focus:border-[#e7a77e]'
                    } placeholder:text-[#9ca3af] focus:ring-2 focus:border-transparent`}
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#232323] mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={`w-full p-4 rounded-xl border bg-white text-[#232323] transition-all duration-200 ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-[#e7d8c9] focus:ring-[#e7a77e] focus:border-[#e7a77e]'
                    } placeholder:text-[#9ca3af] focus:ring-2 focus:border-transparent`}
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#232323] mb-2">
                    Mobile Number <span className="text-[#6b7280] font-normal">(Optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className={`w-full p-4 rounded-xl border bg-white text-[#232323] transition-all duration-200 ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-[#e7d8c9] focus:ring-[#e7a77e] focus:border-[#e7a77e]'
                    } placeholder:text-[#9ca3af] focus:ring-2 focus:border-transparent`}
                    placeholder="+91 9876543210"
                    disabled={isSubmitting}
                  />
                  <p className="mt-2 text-xs text-[#6b7280] flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                    We guarantee we will not spam you. Your number helps us respond faster.
                  </p>
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-[#232323] mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    {...register('projectType')}
                    className={`w-full p-4 rounded-xl border bg-white text-[#232323] transition-all duration-200 ${
                      errors.projectType ? 'border-red-500 focus:ring-red-500' : 'border-[#e7d8c9] focus:ring-[#e7a77e] focus:border-[#e7a77e]'
                    } focus:ring-2 focus:border-transparent`}
                    disabled={isSubmitting}
                  >
                    <option value="">Select project type</option>
                    <option value="landscape">Landscape Design</option>
                    <option value="interior">Interior Design</option>
                    <option value="urban">Urban Design</option>
                    <option value="architecture">Architecture</option>
                    <option value="commercial">Commercial Landscape</option>
                    <option value="residential">Residential Design</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.projectType && (
                    <p className="mt-2 text-sm text-red-600">{errors.projectType.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-[#232323] mb-2">
                  Location/City *
                </label>
                <input
                  id="location"
                  type="text"
                  {...register('location')}
                  className={`w-full p-4 rounded-xl border bg-white text-[#232323] transition-all duration-200 ${
                    errors.location ? 'border-red-500 focus:ring-red-500' : 'border-[#e7d8c9] focus:ring-[#e7a77e] focus:border-[#e7a77e]'
                  } placeholder:text-[#9ca3af] focus:ring-2 focus:border-transparent`}
                  placeholder="Delhi NCR, Gurgaon, Mumbai, etc."
                  disabled={isSubmitting}
                />
                {errors.location && (
                  <p className="mt-2 text-sm text-red-600">{errors.location.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#232323] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={6}
                  {...register('message')}
                  className={`w-full p-4 rounded-xl border bg-white text-[#232323] transition-all duration-200 resize-none ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-[#e7d8c9] focus:ring-[#e7a77e] focus:border-[#e7a77e]'
                  } placeholder:text-[#9ca3af] focus:ring-2 focus:border-transparent`}
                  placeholder="Tell us about your project, ideas, or questions..."
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#e7a77e] to-[#f59e42] text-white font-semibold rounded-full hover:from-[#e38d5f] hover:to-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e7a77e]/20 to-[#f59e42]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#e7a77e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#232323] mb-2">Email</h3>
              <p className="text-[#6b7280]">hello@ukiyohabitat.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e7a77e]/20 to-[#f59e42]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#e7a77e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#232323] mb-2">Location</h3>
              <p className="text-[#6b7280]">Delhi, India</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#e7a77e]/20 to-[#f59e42]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#e7a77e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#232323] mb-2">Response Time</h3>
              <p className="text-[#6b7280]">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}