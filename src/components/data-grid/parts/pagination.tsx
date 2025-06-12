import { Button } from "@/shared/shadcn/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/shadcn/components/ui/select";
import { BodyMedium } from "@/shared/shadcn/components/ui/typography";
import { useTableInstance } from "../table-context/use-table-instance";

export function Pagination() {
  const { table, serverSide, disablePagination } = useTableInstance();

  if (disablePagination) return null;

  const { pagination } = table.getState();
  const rowCount = table.getRowCount();
  const pageCount = table.getPageCount();
  const pageSize = pagination.pageSize;
  const pageIndex = pagination.pageIndex + 1;

  const startRow = (pageIndex - 1) * pageSize + 1;
  const endRow = Math.min(pageIndex * pageSize, rowCount);

  return (
    <div className="grid min-h-[64px] select-none grid-cols-[1fr_auto] border-y px-4 sm:px-8">
      <div className="flex items-center gap-2 align-middle text-sm">
        <BodyMedium className="">Rows per page</BodyMedium>

        <Select
          value={table.getState().pagination.pageSize.toString()}
          onValueChange={(value) => table.setPageSize(Number(value))}
        >
          <SelectTrigger className="w-16">
            <SelectValue placeholder="Select page size" />
          </SelectTrigger>

          <SelectContent className="min-w-16">
            <SelectGroup>
              {[10, 25, 50, 100].map((pageSize) => (
                <SelectItem key={pageSize} value={pageSize.toString()}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <span className="text-muted-foreground max-2xl:hidden">
          {startRow}-{endRow} of {rowCount}
        </span>
      </div>

      <div className="flex items-center gap-10">
        <BodyMedium className="max-md:hidden">
          Page {pageIndex} of {serverSide ? Math.ceil(rowCount / pageSize) : pageCount}
        </BodyMedium>

        <div className="flex h-full items-center">
          <Button
            variant="ghost"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="h-full w-[85px] border-x px-4 md:min-w-[125px]"
          >
            Previous
          </Button>
          <Button
            variant="ghost"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="h-full w-[80px] border-r px-4 md:min-w-[120px]"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
