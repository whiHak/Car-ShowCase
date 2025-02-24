import { NextResponse } from 'next/server';
import { createBooking } from '@/lib/actions/book.action';

export async function POST(req: Request) {
        try {
            const body = await req.json();
            const book = await createBooking(body);
            return NextResponse.json(book, { status: 201 });
        } catch (error: any) {
            console.error("Error creating booking:", error); // Log the error
            return NextResponse.json(
                { error: 'Failed to create booking', details: error.message },
                { status: 500 }
            );
        }
}
