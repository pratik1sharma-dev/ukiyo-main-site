import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { z } from 'zod';

console.log('ALL ENV:', process.env);

// Initialize Resend only if API key is available
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  console.log('Resend API Key exists:', !!apiKey);
  console.log('RESEND_FROM_EMAIL:', process.env.RESEND_FROM_EMAIL);
  console.log('RESEND_TO_EMAIL:', process.env.RESEND_TO_EMAIL);
  
  if (!apiKey) {
    console.warn('RESEND_API_KEY is not set. Email functionality will be disabled.');
    return null;
  }
  return new Resend(apiKey);
};

const resend = getResendClient();

export async function OPTIONS() {
  return NextResponse.json({}, { status: 204 });
}

export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = contactFormSchema.parse(body);

    // Log incoming request data
    console.log('Received contact form submission:', { name, email, message });

    // If Resend is not initialized (missing API key), return success in development
    if (!resend) {
      const message = 'Email functionality is disabled - RESEND_API_KEY is not set';
      console.warn(message);
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Email would be sent in production with data:', { name, email, message });
        return NextResponse.json({ 
          success: true, 
          message: 'Email would be sent in production',
          debug: { name, email, message }
        });
      }
      
      return NextResponse.json(
        { 
          error: 'Email service is not configured',
          debug: { message: 'RESEND_API_KEY is missing from environment variables' }
        },
        { status: 500 }
      );
    }

    const data = await resend.emails.send({
      from: `Contact Form <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.RESEND_TO_EMAIL!,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
