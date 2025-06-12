import {
  TableHead,
  TableHeader,
  TableHeaderRow,
} from "@/shared/shadcn/components/ui/table"
import { cn } from "@/shared/shadcn/lib/utils"
import { flexRender, SortDirection } from "@tanstack/react-table"
import { ArrowDown, ArrowDownUp, ArrowUp, LucideProps } from "lucide-react"
import { ComponentType, useMemo } from "react"
import { useTableInstance } from "../table-context/use-table-instance"
import { getGridTemplateColumns } from "../utils/columnSizing"
import { NotificationBadge } from "@/components/notification-badge"

export function Header<TData>() {
  const { table, disableSorting } = useTableInstance<TData>()

  const gridTemplateColumns = useMemo(
    () => getGridTemplateColumns(table),
    [table],
  )

  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableHeaderRow
          key={headerGroup.id}
          className="grid select-none px-4"
          style={{ gridTemplateColumns }}
        >
          {headerGroup.headers.map((header) => {
            const { filter } = header.column.columnDef
            const SortIcon =
              Icons[header.column.getIsSorted() as keyof typeof Icons]
            const isSorted = Boolean(header.column.getIsSorted())

            return (
              <TableHead
                key={header.id}
                colSpan={header.colSpan}
                className="flex items-center justify-between gap-2 hover:bg-primary-15"
              >
                {header.isPlaceholder ? null : (
                  <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </span>
                )}

                <div className="flex items-center justify-center gap-0.5">
                  {!disableSorting && header.column.getCanSort() && (
                    <NotificationBadge
                      show={isSorted}
                      className="cursor-pointer p-1"
                      label={header.column.getSortIndex() + 1}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <SortIcon
                        size={16}
                        className={cn(
                          "text-muted-foreground",
                          isSorted && "text-foreground",
                        )}
                      />
                    </NotificationBadge>
                  )}

                  {filter}
                </div>
              </TableHead>
            )
          })}
        </TableHeaderRow>
      ))}
    </TableHeader>
  )
}

const Icons: Record<"false" | SortDirection, ComponentType<LucideProps>> = {
  desc: ArrowUp,
  asc: ArrowDown,
  false: ArrowDownUp,
}
