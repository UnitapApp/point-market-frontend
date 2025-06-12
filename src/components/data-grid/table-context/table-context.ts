import type { Table } from "@tanstack/react-table"
import { createContext } from "react"

export type TableContextType<TData> = {
  loading?: boolean
  table: Table<TData>
  serverSide?: boolean
  disableSorting?: boolean
  disablePagination?: boolean
  onRowClick?: (data: TData, event: React.MouseEvent) => void
}

export const TableContext = createContext<TableContextType<any> | null>(null)
