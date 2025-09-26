'use client';
import { Phone, MessageCircle, CheckCircle, Shield, Clock, IndianRupee, Home, AlertTriangle } from "lucide-react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  location: z.string().min(2, 'Location is required'),
  budget: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function FunnelPage() {
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
      
      const response = await fetch('/api/funnel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const errorMessage = result.error || response.statusText || 'Failed to send request';
        throw new Error(errorMessage);
      }

      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section - Fear-Driven */}
      <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-zinc-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-amber-300 animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Stop Wasting 18 Months and <span className="text-amber-300">₹50 Lakhs</span> on a Construction Nightmare
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            How Most Homebuyers Get Ripped Off with Delays, Cost Overruns, and Poor Quality — And How You Can Secure a Modern, Fast-Built Dream Home in Just <span className="font-bold text-amber-300">10 Weeks</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#cta" 
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl"
            >
              Get FREE Feasibility Report
            </a>
            <a 
              href="https://wa.me/919205510427?text=Hi! I want to avoid construction nightmares. Tell me about your 10-week prefab homes." 
              className="flex items-center gap-2 bg-gradient-to-r from-stone-700 to-stone-800 px-6 py-4 rounded-xl text-lg font-semibold hover:from-stone-800 hover:to-stone-900 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: The Crushing Reality */}
      <section className="py-20 px-4 bg-gradient-to-b from-stone-50 to-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              The Harsh Truth About Building a Home the 'Traditional' Way…
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              {[
                "You'll be stuck in limbo for up to 18 months, living in uncertainty and paying rent for somewhere else.",
                "Hidden costs and constant price hikes will drain your savings — most homeowners pay 30-70% more than estimated.",
                "Shoddy workmanship could leave your family at risk: cracked walls, leaking roofs, termite infestations, and unsafe structures."
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white border-l-4 border-stone-600 rounded-r-xl shadow-md hover:shadow-lg transition-shadow">
                  <AlertTriangle className="w-6 h-6 text-stone-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              {[
                "You'll waste countless hours negotiating with unreliable contractors who vanish the moment money changes hands.",
                "Your dream home might become a financial and emotional nightmare that haunts you for years.",
                "Monsoon delays, material shortages, and labor strikes will push your timeline even further."
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white border-l-4 border-stone-600 rounded-r-xl shadow-md hover:shadow-lg transition-shadow">
                  <AlertTriangle className="w-6 h-6 text-stone-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-stone-800 to-zinc-900 text-white p-8 rounded-2xl shadow-xl">
            <p className="text-2xl font-semibold">Sound familiar? You're not alone — and it's not your fault.</p>
          </div>
        </div>
      </section>

      {/* Section 2: The Solution */}
      <section className="py-20 px-4 bg-gradient-to-br from-stone-50 via-neutral-50 to-stone-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Imagine Instead…A Stress-Free New Home Built in <span className="text-stone-700">10 Weeks</span>, Delivered Exactly As Promised
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              {[
                {
                  icon: <Home className="w-6 h-6 text-stone-700" />,
                  text: "A modern, precision-engineered steel frame home built off-site and assembled quickly at your plot."
                },
                {
                  icon: <IndianRupee className="w-6 h-6 text-stone-700" />,
                  text: "Crystal-clear, fixed pricing with zero hidden costs — know exactly what you pay upfront."
                },
                {
                  icon: <Shield className="w-6 h-6 text-stone-700" />,
                  text: "25-year warranty against structural failure — built stronger, safer, and to last generations."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white border-l-4 border-stone-600 rounded-r-xl shadow-md hover:shadow-lg transition-shadow">
                  {item.icon}
                  <p className="text-gray-700 text-lg">{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              {[
                {
                  icon: <CheckCircle className="w-6 h-6 text-stone-700" />,
                  text: "Peace of mind with full transparent progress updates and a dedicated expert guiding you every step."
                },
                {
                  icon: <Clock className="w-6 h-6 text-stone-700" />,
                  text: "Eco-friendly materials that save water, reduce emissions, and protect your family's future."
                },
                {
                  icon: <Home className="w-6 h-6 text-stone-700" />,
                  text: "A beautiful, energy-efficient home your friends and family will admire — ready for you to move in fast."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-white border-l-4 border-stone-600 rounded-r-xl shadow-md hover:shadow-lg transition-shadow">
                  {item.icon}
                  <p className="text-gray-700 text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center bg-gradient-to-r from-stone-700 to-stone-800 text-white p-8 rounded-2xl shadow-xl">
            <p className="text-2xl font-semibold">This is the future of homebuilding. It's time to leave construction nightmares behind for good.</p>
          </div>
        </div>
      </section>

      {/* Section 3: Guarantee */}
      <section className="py-20 px-4 bg-gradient-to-br from-stone-900 via-zinc-900 to-stone-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-20 h-20 text-amber-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Iron-Clad 10-Week Delivery Guarantee
          </h2>
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-2xl mb-8 transform hover:scale-105 transition-all shadow-2xl">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              Complete your home in 10 weeks, or we'll pay you ₹50,000. No questions asked.
            </p>
          </div>
          <p className="text-xl opacity-90">
            This is how confident we are in our LGSF prefab construction process — a level of certainty no traditional builder can offer.
          </p>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section id="cta" className="py-20 px-4 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ready to Build Smart?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover exactly how much your new prefab home will cost, how long it will take, and how easy it is to get started — delivered within 48 hours.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-stone-200">
            {isSuccess && (
              <div className="mb-8 p-6 bg-stone-50 border border-stone-300 text-stone-700 rounded-xl">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  <span className="font-semibold">Thank you! Your feasibility report request has been submitted. We'll contact you within 24 hours.</span>
                </div>
              </div>
            )}
            
            {error && (
              <div className="mb-8 p-6 bg-amber-50 border border-amber-200 text-amber-700 rounded-xl">
                <div className="flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  <span className="font-semibold">{error}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    {...register('name')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    {...register('phone')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                    }`}
                    placeholder="+91 92055 10427"
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  {...register('email')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Plot Location (City) *</label>
                <input 
                  type="text" 
                  {...register('location')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all ${
                    errors.location ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                  }`}
                  placeholder="e.g., Gurgaon, Bangalore, Pune"
                  disabled={isSubmitting}
                />
                {errors.location && (
                  <p className="mt-2 text-sm text-red-600">{errors.location.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Approximate Budget Range</label>
                <select {...register('budget')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" disabled={isSubmitting}>
                  <option value="">Select budget range</option>
                  <option value="25-40">₹25-40 Lakhs</option>
                  <option value="40-60">₹40-60 Lakhs</option>
                  <option value="60-80">₹60-80 Lakhs</option>
                  <option value="80+">₹80+ Lakhs</option>
                </select>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:from-amber-700 hover:to-orange-700 transition-all transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  'Get Your FREE Custom Feasibility Report Now'
                )}
              </button>
              
              <p className="text-sm text-gray-600 text-center">
                ✓ No spam, ever. ✓ Report delivered in 48 hours. ✓ 100% confidential.
              </p>
            </form>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">Prefer to talk directly?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919205510427" 
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-stone-700 to-stone-800 text-white px-6 py-3 rounded-xl hover:from-stone-800 hover:to-stone-900 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call: +91 92055 10427
              </a>
              <a 
                href="https://wa.me/919205510427?text=Hi! I want my FREE feasibility report for a prefab home." 
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-stone-600 to-stone-700 text-white px-6 py-3 rounded-xl hover:from-stone-700 hover:to-stone-800 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-b from-stone-100 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              What Our Clients Say About Their <span className="text-stone-700">10-Week Journey</span>
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from families who escaped construction nightmares
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-stone-600 to-stone-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  R
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-gray-800">Rajesh & Priya Sharma</h4>
                  <p className="text-gray-600">Gurgaon • 3 BHK Villa</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "We were stuck with a traditional builder for 14 months with no end in sight. Switching to prefab was the best decision we made. Our home was completed in exactly 9 weeks, and the quality is outstanding. No more sleepless nights worrying about delays!"
                </p>
              </div>
              <div className="flex items-center text-sm text-stone-600 font-semibold">
                <CheckCircle className="w-4 h-4 mr-2" />
                Completed in 9 weeks • Saved ₹12 lakhs
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-stone-200 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-gray-800">Ankit Mehta</h4>
                  <p className="text-gray-600">Bangalore • 4 BHK Duplex</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "As a software engineer, I appreciate precision and timelines. The transparency was incredible - I could track progress daily. The steel frame structure feels more solid than traditional construction, and we moved in exactly on the promised date!"
                </p>
              </div>
              <div className="flex items-center text-sm text-stone-600 font-semibold">
                <CheckCircle className="w-4 h-4 mr-2" />
                Completed in 10 weeks • Zero delays
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 px-4 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-stone-700">500+</div>
              <div className="text-sm text-gray-600">Homes Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">10</div>
              <div className="text-sm text-gray-600">Weeks Average</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-stone-700">25</div>
              <div className="text-sm text-gray-600">Year Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600">98%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
