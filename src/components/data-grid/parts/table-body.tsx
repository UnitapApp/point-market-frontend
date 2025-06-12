import { TableBody, TableCell, TableRow } from "@/shared/shadcn/components/ui/table";
import { cn } from "@/shared/shadcn/lib/utils";
import { flexRender } from "@tanstack/react-table";
import { useMemo } from "react";
import { useTableInstance } from "../table-context/use-table-instance";
import { getGridTemplateColumns } from "../utils/columnSizing";

export function Body<TData>() {
  const { table, loading, onRowClick } = useTableInstance<TData>();

  const gridTemplateColumns = useMemo(() => getGridTemplateColumns(table), [table]);

  if (!table.getRowModel().rows?.length) {
    return (
      <TableBody>
        <TableRow style={{ gridTemplateColumns }} className="grid min-h-[500px] px-4">
          <TableCell className="col-span-full my-auto text-center">No results.</TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow
          key={row.id}
          style={{ gridTemplateColumns }}
          data-state={row.getIsSelected() && "selected"}
          onClick={(event) => !loading && onRowClick?.(row.original, event)}
          className={cn("grid px-4", onRowClick && !loading && "cursor-pointer")}
        >
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id} className="my-auto overflow-hidden text-ellipsis">
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
