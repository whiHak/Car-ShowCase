import { getCarById } from "@/lib/actions/car.action";
import { NextResponse } from "next/server";

export const revalidate = 3600; // Revalidate every hour

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await Promise.resolve(params);
    const id = resolvedParams.id;

    if (!id) {
      return NextResponse.json(
        { message: "Car ID is required" },
        { status: 400 }
      );
    }

    const car = await getCarById(id);

    if (!car) {
      return NextResponse.json({ message: "Car not found" }, { status: 404 });
    }

    // Cache the response for 1 hour
    const response = NextResponse.json(car, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });

    return response;
  } catch (error) {
    console.error("Error in GET /api/cars/[id]:", error);

    // Check if error is related to invalid ObjectId
    if (error instanceof Error && error.message.includes("ObjectId")) {
      return NextResponse.json(
        { message: "Invalid car ID format" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
