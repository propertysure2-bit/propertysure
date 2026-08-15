import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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
      throw error;
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Sell property listing saved successfully in Supabase.',
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Supabase Error in /api/sell-property:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to save property submission to Supabase.',
      },
      { status: 500 }
    );
  }
}
