import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { resend } from '@/lib/resend';
import { getContactEmailHtml } from '@/lib/emailTemplates';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, city, service, loanAmount, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and Phone number are required.' },
        { status: 400 }
      );
    }

    // 1. Save to Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name,
          phone,
          email: email || null,
          city: city || 'Noida',
          service: service || 'Home Loan',
          loan_amount: loanAmount || null,
          message: message || null,
        },
      ])
      .select();

    if (error) {
      console.error('Supabase Save Error:', error);
    }

    // 2. Send Email Notification via Resend to propertysure2@gmail.com
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'Property Sure Leads <notifications@propertysure.in>',
          to: 'propertysure2@gmail.com',
          subject: `🔔 New Contact Lead: ${name} (${phone}) - ${service || 'Enquiry'}`,
          html: getContactEmailHtml({ name, phone, email, city, service, loanAmount, message }),
        });
      } catch (emailErr) {
        console.error('Resend Email Error:', emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Contact submission saved and email sent successfully.',
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in /api/contact:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to process contact submission.',
      },
      { status: 500 }
    );
  }
}
