import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail, createEmailResponse } from '@/lib/email';

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

    const result = await sendEmail({
      from: `Contact Form <${process.env.RESEND_FROM_EMAIL}>`,
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

    return createEmailResponse(result);
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
