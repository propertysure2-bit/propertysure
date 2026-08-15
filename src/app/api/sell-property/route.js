import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { resend } from '@/lib/resend';
import { getSellPropertyEmailHtml } from '@/lib/emailTemplates';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, mobile, email, city, propertyType, propertyValue, images } = body;

    if (!name || !mobile) {
      return NextResponse.json(
        { success: false, error: 'Name and Mobile number are required.' },
        { status: 400 }
      );
    }

    const imageStr = Array.isArray(images) ? images.join(', ') : (images || '');

    // 1. Save to Supabase
    const { data, error } = await supabase
      .from('sell_property_submissions')
      .insert([
        {
          name,
          mobile,
          email: email || null,
          city: city || 'Noida',
          property_type: propertyType || 'Apartment',
          property_value: propertyValue || null,
          images: imageStr || null,
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
          subject: `🏡 New Property Listing: ${name} (${mobile}) - ${propertyType || 'Property'}`,
          html: getSellPropertyEmailHtml({ name, mobile, email, city, propertyType, propertyValue, images }),
        });
      } catch (emailErr) {
        console.error('Resend Email Error:', emailErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Sell property submission saved and email sent successfully.',
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error in /api/sell-property:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to process property submission.',
      },
      { status: 500 }
    );
  }
}
