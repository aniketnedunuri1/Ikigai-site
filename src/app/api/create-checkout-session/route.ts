

import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
export async function POST(req: NextRequest) {
  try {
    const { line_items } = await req.json(); // Parse incoming JSON

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
    });

    return NextResponse.json({ url: session.url }); // Return session URL
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}