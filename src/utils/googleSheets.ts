export const dynamic = "force-dynamic"
export const revalidate = 60

export async function getSheetData(): Promise<
  { user: string; total_volume: number; Point: number }[]
> {
  try {
    const SHEET_ID = "1c1WZ0EsWheeWLgL3xHvBusFcaMXsnUdwF15MbnG7KEo"
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`

    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const csvText = await response.text()
    const rows = csvText.split("\n").slice(1) // Skip header row

    return rows
      .map((row) => {
        const [user, total_volume, points] = row.split(",")
        return {
          user,
          total_volume: parseFloat(total_volume) || 0,
          Point: parseFloat(points) || 0,
        }
      })
      .sort((a, b) => b.Point - a.Point)
  } catch (error) {
    console.error("Error fetching sheet data:", error)
    return []
  }
}
