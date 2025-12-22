import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get Make.com webhook URL from environment variable
    const makeWebhookUrl = process.env.MAKE_CONTACT_FORM_WEBHOOK_URL;

    if (!makeWebhookUrl) {
      console.error('MAKE_CONTACT_FORM_WEBHOOK_URL not configured');
      // Still return success to user but log error
      // This allows form to work even if Make.com isn't set up yet
      console.log('Contact form submission (Make.com not configured):', body);
      return NextResponse.json({ success: true });
    }

    // Send to Make.com webhook
    const makeResponse = await fetch(makeWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        phone: body.phone || '',
        neighborhood: body.neighborhood || '',
        interests: body.interests || '',
        message: body.message || '',
        source: 'Website Contact Form',
        timestamp: body.timestamp || new Date().toISOString(),
        // Additional metadata for Make.com
        leadStatus: 'New Lead',
        customerType: 'Prospect',
        tags: 'Website Inquiry',
      }),
    });

    if (!makeResponse.ok) {
      console.error('Make.com webhook error:', await makeResponse.text());
      // Still return success to user but log error
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
