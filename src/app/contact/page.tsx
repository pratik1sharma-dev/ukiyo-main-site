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
    <section className="max-w-xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-[#232323] text-center">Contact Us</h1>
      
      {isSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className={`w-full p-3 rounded border bg-white text-gray-900 ${
              errors.name ? 'border-red-500' : 'border-[#b7c9c9]'
            } placeholder:text-[#888] focus:ring-2 focus:ring-[#e7a77e] focus:border-transparent`}
            placeholder="John Doe"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={`w-full p-3 rounded border bg-white text-gray-900 ${
              errors.email ? 'border-red-500' : 'border-[#b7c9c9]'
            } placeholder:text-[#888] focus:ring-2 focus:ring-[#e7a77e] focus:border-transparent`}
            placeholder="you@example.com"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className={`w-full p-3 rounded border bg-white text-gray-900 ${
              errors.message ? 'border-red-500' : 'border-[#b7c9c9]'
            } placeholder:text-[#888] focus:ring-2 focus:ring-[#e7a77e] focus:border-transparent`}
            placeholder="How can we help you?"
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-[#e7a77e] hover:bg-[#e38d5f] text-white font-semibold rounded-full px-7 py-3 transition-colors shadow-md text-base ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}