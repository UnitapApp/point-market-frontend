import { ColumnDef, Table } from "@tanstack/react-table"

export const getGridTemplateColumns = (table: Table<any>) => {
  const columns = table.getAllColumns()

  return columns
    .map((column) => {
      const { size, gridSize, minSize, maxSize } =
        column.columnDef as ColumnDef<any>

      if (gridSize) return gridSize
      if (size) return ToPixel(size)

      return `minmax(${ToPixel(minSize)}, ${ToPixel(maxSize) ?? "1fr"})`
    })
    .join(" ")
}

const ToPixel = (number?: number) => {
  return number ? `${number}px` : null
}
