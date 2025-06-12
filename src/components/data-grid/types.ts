import { RowData } from "@tanstack/react-table"

declare module "@tanstack/react-table" {
  interface ColumnDefBase<TData extends RowData> {
    gridSize?: string
    filter?: React.ReactNode
  }
}
