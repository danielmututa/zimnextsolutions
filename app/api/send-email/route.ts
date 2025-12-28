import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    console.log('✅ API route hit');
    
    const { name, email, message, service } = await request.json();
    console.log('📥 Received data:', { name, email, service });

    if (!process.env.RESEND_API_KEY) {
      console.error('❌ Missing RESEND_API_KEY');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

   const data = await resend.emails.send({
  from: 'Contact Form <onboarding@resend.dev>',
  to: 'mututadaniel54@gmail.com', // ← Change this to YOUR email
  subject: `New Contact: ${service}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `,
});

    console.log('✅ Email sent:', data);
    return NextResponse.json({ success: true, data });
    
  } catch (error) {
    console.error('❌ Error in API route:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}














// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(request: Request) {
//   try {
//     const { name, email, message, service } = await request.json();

//     const data = await resend.emails.send({
//       from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain later
//       to: 'zimnextsolutions@gmail.com',
//       subject: `New Contact Form: ${service}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Service:</strong> ${service}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     });

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }