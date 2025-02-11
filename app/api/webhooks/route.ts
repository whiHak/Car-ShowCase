import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { clerkClient, WebhookEvent } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { createuser } from '@/lib/actions/user.actions'

// Add GET method handler
export async function GET() {
  return new Response('Webhook endpoint is working!', {
    status: 200,
  })
}

// Existing POST method handler
export async function POST(req: Request) {
  try {
    const SIGNING_SECRET = process.env.SIGNING_SECRET

    if (!SIGNING_SECRET) {
      console.error('Missing SIGNING_SECRET');
      return new Response('Error: Missing SIGNING_SECRET', {
        status: 500,
      })
    }

    // Create new Svix instance with secret
    const wh = new Webhook(SIGNING_SECRET)

    // Get headers
    const headerPayload = await headers()
    const svix_id = headerPayload.get('svix-id')
    const svix_timestamp = headerPayload.get('svix-timestamp')
    const svix_signature = headerPayload.get('svix-signature')

    // Log headers for debugging
    console.log('Headers:', {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature
    })

    // If there are no headers, error out
    if (!svix_id || !svix_timestamp || !svix_signature) {
      console.error('Missing required headers');
      return new Response('Error: Missing Svix headers', {
        status: 400,
      })
    }

    // Get body
    const payload = await req.json()
    console.log('Payload:', payload)
    const body = JSON.stringify(payload)

    let evt: WebhookEvent

    // Verify payload with headers
    try {
      evt = wh.verify(body, {
        'svix-id': svix_id,
        'svix-timestamp': svix_timestamp,
        'svix-signature': svix_signature,
      }) as WebhookEvent
    } catch (err) {
      console.error('Verification error:', err)
      return new Response('Error: Verification error', {
        status: 400,
      })
    }

    const eventType = evt.type

    const haha = async() =>{

        const user = {
          clerkId: "jgjg",
          email: "bers@fadjh.com",
          phoneNumber: "phone_numbers[0]",
          username: "asdfa",
          firstName: "fasdfasd",
          lastName: "asdfa",
          photo: "image_url",
        };
      
        const newUser = await createuser(user);
        console.log(newUser)
    
        
        return NextResponse.json({ message: 'OK', user: newUser })
    }
    haha();    

    return new Response('Webhook received', { status: 200 })
  } catch (error) {
    console.error('Webhook error:', error);
    return new Response('Internal Server Error', {
      status: 500,
    })
  }
}