import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// ---- Resend configuration ----
const RESEND_API_KEY = process.env.RESEND_API_KEY!;
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL!;
const RESEND_TO_EMAIL = process.env.RESEND_TO_EMAIL!;

// Initialize Resend only if API key is available
const getResendClient = () => {
  const apiKey = RESEND_API_KEY;
  
  if (!apiKey) {
    console.warn('RESEND_API_KEY is not set. Email functionality will be disabled.');
    return null;
  }
  return new Resend(apiKey);
};

const resend = getResendClient();

export interface EmailOptions {
  from?: string;
  to?: string;
  subject: string;
  text: string;
  html?: string;
}

export interface EmailResponse {
  success: boolean;
  data?: any;
  error?: string;
  message?: string;
  debug?: any;
}

/**
 * Generic email sending utility using Resend
 * Handles development mode and error cases gracefully
 */
export async function sendEmail(options: EmailOptions): Promise<EmailResponse> {
  const {
    from = `Ukiyo Habitat <${RESEND_FROM_EMAIL}>`,
    to = RESEND_TO_EMAIL,
    subject,
    text,
    html
  } = options;

  try {
    // If Resend is not initialized (missing API key), handle gracefully
    if (!resend) {
      const message = 'Email functionality is disabled - RESEND_API_KEY is not set';
      console.warn(message);
      
      if (process.env.NODE_ENV === 'development') {
        console.log('Email would be sent in production:', { from, to, subject, text });
        return {
          success: true,
          message: 'Email would be sent in production',
          debug: { from, to, subject, text }
        };
      }
      
      return {
        success: false,
        error: 'Email service is not configured'
      };
    }

    const data = await resend.emails.send({
      from,
      to,
      subject,
      text,
      html
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: 'Failed to send email'
    };
  }
}

/**
 * Helper to create standardized API responses for email operations
 */
export function createEmailResponse(result: EmailResponse, successStatus = 200, errorStatus = 500) {
  if (result.success) {
    return NextResponse.json(result, { status: successStatus });
  } else {
    return NextResponse.json(result, { status: errorStatus });
  }
}
