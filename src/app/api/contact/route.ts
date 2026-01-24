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
  phone: z.string().optional().refine((val) => !val || val.length >= 10, {
    message: 'Mobile number must be at least 10 digits'
  }).refine((val) => !val || /^[0-9+\-\s()]+$/.test(val), {
    message: 'Invalid mobile number format'
  }),
  projectType: z.string().min(1, 'Please select a project type'),
  location: z.string().min(2, 'Location is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectType, location, message } = contactFormSchema.parse(body);

    // Log incoming request data
    console.log('Received contact form submission:', { name, email, phone, projectType, location, message });

    const projectTypeLabels: Record<string, string> = {
      landscape: 'Landscape Design',
      interior: 'Interior Design',
      urban: 'Urban Design',
      architecture: 'Architecture',
      commercial: 'Commercial Landscape',
      residential: 'Residential Design',
      other: 'Other'
    };

    const result = await sendEmail({
      from: `Contact Form <${process.env.RESEND_FROM_EMAIL}>`,
      subject: `New Contact Form Submission: ${projectTypeLabels[projectType] || projectType} - ${location}`,
      text: `
        Name: ${name}
        Email: ${email}
        Mobile: ${phone || 'Not provided'}
        Project Type: ${projectTypeLabels[projectType] || projectType}
        Location: ${location}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #232323; border-bottom: 2px solid #e7a77e; padding-bottom: 10px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; background-color: #f6f2ed; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 10px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f6f2ed; font-weight: bold;">Email:</td>
              <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f6f2ed; font-weight: bold;">Mobile:</td>
              <td style="padding: 10px;">${phone ? `<a href="tel:${phone}">${phone}</a>` : 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f6f2ed; font-weight: bold;">Project Type:</td>
              <td style="padding: 10px;">${projectTypeLabels[projectType] || projectType}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f6f2ed; font-weight: bold;">Location:</td>
              <td style="padding: 10px;">${location}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background-color: #f6f2ed; font-weight: bold; vertical-align: top;">Message:</td>
              <td style="padding: 10px;">${message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
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
