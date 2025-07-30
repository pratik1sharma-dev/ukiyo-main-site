'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
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
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      console.error('Form submission error:', errorMessage, err);
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
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
              <div className="mb-8 p-6 bg-green-50 border border-green-200 text-green-700 rounded-xl">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span className="font-semibold">Thank you for your message! We'll get back to you soon.</span>
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