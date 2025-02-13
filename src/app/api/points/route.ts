import { getSheetData } from "@/utils/googleSheets"
import { NextResponse } from "next/server"

export const revalidate = 60 // Cache for 60 seconds

export async function GET() {
  try {
    const data = await getSheetData()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch sheet data" },
      { status: 500 },
    )
  }
}
