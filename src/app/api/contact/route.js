import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

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
      throw error;
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Contact submission saved successfully in Supabase.',
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Supabase Error in /api/contact:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to save submission to Supabase.',
      },
      { status: 500 }
    );
  }
}
