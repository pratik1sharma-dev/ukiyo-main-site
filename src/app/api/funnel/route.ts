import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendEmail, createEmailResponse } from '@/lib/email';

export async function OPTIONS() {
  return NextResponse.json({}, { status: 204 });
}

export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

const funnelFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  location: z.string().min(2, 'Location is required'),
  budget: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, location, budget } = funnelFormSchema.parse(body);

    // Log incoming request data
    console.log('Received funnel form submission:', { name, email, phone, location, budget });

    const result = await sendEmail({
      from: `Prefab Homes Funnel <${process.env.RESEND_FROM_EMAIL}>`,
      subject: `🏠 NEW PREFAB HOME LEAD: ${name} from ${location}`,
      text: `
        NEW PREFAB HOME LEAD - FEASIBILITY REPORT REQUEST
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Location: ${location}
        Budget Range: ${budget || 'Not specified'}
        
        Source: Prefab Homes Funnel Page
        Timestamp: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
        
        FOLLOW UP REQUIRED: Send feasibility report within 48 hours as promised.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #e74c3c; margin-bottom: 20px; text-align: center;">🏠 NEW PREFAB HOME LEAD</h1>
            
            <div style="background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin-bottom: 20px;">
              <strong>⚡ URGENT: Feasibility Report Request</strong><br>
              Customer expects response within 48 hours as promised on funnel page.
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Name</td>
                <td style="padding: 12px; border: 1px solid #dee2e6;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Email</td>
                <td style="padding: 12px; border: 1px solid #dee2e6;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Phone</td>
                <td style="padding: 12px; border: 1px solid #dee2e6;"><a href="tel:${phone}">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Location</td>
                <td style="padding: 12px; border: 1px solid #dee2e6;">${location}</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Budget Range</td>
                <td style="padding: 12px; border: 1px solid #dee2e6;">${budget ? `₹${budget} Lakhs` : 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Source</td>
                <td style="padding: 12px; border: 1px solid #dee2e6;">Prefab Homes Funnel Page</td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 12px; border: 1px solid #dee2e6; font-weight: bold;">Timestamp</td>
                <td style="padding: 12px; border: 1px solid #dee2e6;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</td>
              </tr>
            </table>
            
            <div style="background-color: #d4edda; border-left: 4px solid #28a745; padding: 15px; margin-bottom: 20px;">
              <strong>📋 Next Steps:</strong><br>
              1. Call/WhatsApp within 2 hours if possible<br>
              2. Send customized feasibility report within 48 hours<br>
              3. Include pricing, timeline, and location-specific details<br>
              4. Follow up if no response within 1 week
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="tel:${phone}" style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin-right: 10px;">📞 Call Now</a>
              <a href="https://wa.me/91${phone.replace(/[^0-9]/g, '')}?text=Hi ${name}! Thank you for your interest in our prefab homes. I'm calling regarding your feasibility report request." style="background-color: #25d366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      `,
    });

    return createEmailResponse(result);
  } catch (error) {
    console.error('Error sending funnel lead email:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send lead information' },
      { status: 500 }
    );
  }
}
