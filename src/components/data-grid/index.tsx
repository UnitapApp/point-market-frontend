import { Skeleton } from "@/shared/shadcn/components/ui/skeleton"
import { Table } from "@/shared/shadcn/components/ui/table"
import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  TableOptions,
  useReactTable,
  type PaginationState,
  type SortingState,
} from "@tanstack/react-table"
import { omit } from "lodash"
import { useEffect, useImperativeHandle, useMemo, useState } from "react"
import { defaultPaginationState } from "./constants"
import { Pagination } from "./parts/pagination"
import { Body } from "./parts/table-body"
import { Header } from "./parts/table-header"
import { TableContext } from "./table-context/table-context"
import "./types"

export type TableParams = {
  pagination?: PaginationState
  sorting?: SortingState
}

export type DataGridRef = {
  resetSorting: VoidFunction
  resetPagination: VoidFunction
}

interface TableProps<TData>
  extends Omit<TableOptions<TData>, "getCoreRowModel"> {
  loading?: boolean
  rowCount?: number
  serverSide?: boolean
  loadingRowsCount?: number
  disableSorting?: boolean
  disablePagination?: boolean
  tableParams?: TableParams
  ref?: React.Ref<DataGridRef>
  onParamsChange?: (params: TableParams) => void
  onRowClick?: (data: TData, event: React.MouseEvent) => void
}

export function DataGrid<TData>(props: TableProps<TData>) {
  const {
    ref,
    data,
    loading,
    columns,
    tableParams,
    rowCount = 0,
    disableSorting,
    disablePagination,
    serverSide = false,
    loadingRowsCount = 5,
    onRowClick,
    onParamsChange,
  } = props

  const [sorting, setSorting] = useState<SortingState>(
    tableParams?.sorting || [],
  )
  const [pagination, setPagination] = useState<PaginationState>(
    tableParams?.pagination || defaultPaginationState,
  )

  useImperativeHandle(ref, () => ({
    resetSorting: () => setSorting([]),
    resetPagination: () => setPagination(defaultPaginationState),
  }))

  const tableColumns = useMemo(
    () =>
      loading
        ? columns.map((column) => ({
            ...column,
            cell: () => <Skeleton className="h-4 w-1/2" />,
          }))
        : columns,
    [loading, columns],
  )

  const tableData = useMemo(
    () =>
      loading
        ? Array(
            disablePagination ? loadingRowsCount : pagination.pageSize,
          ).fill({})
        : data,
    [loading, disablePagination, loadingRowsCount, pagination.pageSize, data],
  )

  const table = useReactTable({
    data: tableData,
    columns: tableColumns,
    enableMultiSort: true,
    manualSorting: serverSide,
    manualPagination: serverSide,
    state: { sorting, pagination },
    rowCount: serverSide ? rowCount : undefined,
    defaultColumn: { size: undefined, minSize: 150, maxSize: undefined },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel:
      serverSide || disableSorting ? undefined : getSortedRowModel(),
    getPaginationRowModel:
      serverSide || disablePagination ? undefined : getPaginationRowModel(),
  })

  useEffect(() => {
    if (!loading && !data.length && pagination.pageIndex > 0) {
      setPagination({ pageIndex: 0, pageSize: 10 })
    }
  }, [data.length, loading, onParamsChange, pagination.pageIndex])

  useEffect(() => {
    const omitKeys = []
    if (disableSorting) omitKeys.push("sorting")
    if (disablePagination) omitKeys.push("pagination")

    const params = omit({ sorting, pagination }, omitKeys)

    // Only call onParamsChange if the values are actually different
    const isParamsDifferent =
      JSON.stringify(params) !== JSON.stringify(tableParams)
    if (isParamsDifferent) {
      onParamsChange?.(params)
    }
  }, [
    disablePagination,
    disableSorting,
    onParamsChange,
    pagination,
    sorting,
    tableParams,
  ])

  return (
    <TableContext.Provider
      value={{
        table,
        loading,
        serverSide,
        disablePagination,
        disableSorting,
        onRowClick,
      }}
    >
      <Table>
        <Header />
        <Body />
      </Table>

      <Pagination />
    </TableContext.Provider>
  )
}
