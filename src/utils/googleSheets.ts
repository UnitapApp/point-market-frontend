export const dynamic = "force-dynamic"
export const revalidate = 60

export async function getSheetData(): Promise<
  { user: string; total_volume: number; Point: number }[]
> {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/SYMMIO/home/refs/heads/main/SymmPoints_season1%20-%20Sheet1.csv",
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const csvText = await response.text()
    const rows = csvText.split("\n").slice(1) // Skip header row

    return rows
      .map((row) => {
        // user,total_volume,Percentage,Point

        const [user, total_volume, percentage, points] = row.split(",")
        return {
          user,
          total_volume: parseFloat(total_volume) || 0,
          Point: parseFloat(points) || 0,
        }
      })
      .sort((a, b) => b.Point - a.Point)
      .map((item, key) => ({ ...item, id: key + 1 }))
  } catch (error) {
    console.error("Error fetching sheet data:", error)
    return []
  }
}
