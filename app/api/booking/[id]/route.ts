import { NextResponse } from 'next/server';
import { deleteBooking, updateBooking } from '@/lib/actions/book.action';

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await req.json();
    const resolvedParams = await Promise.resolve(params);
    const updatedBook = await updateBooking(resolvedParams.id, body);
    return NextResponse.json(updatedBook);
  } catch (error: any) {
    console.error("Error updating booking:", error);
    return NextResponse.json(
      { error: 'Failed to update booking', details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }>}
) {
  try {
    const resolvedParams = await Promise.resolve(params);
    const id = resolvedParams.id;
    console.log(id)
    await deleteBooking(id);
    
    return NextResponse.json({ success: true, message: "Car deleted successfully" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}