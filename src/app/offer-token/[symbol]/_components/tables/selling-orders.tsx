"use client"

import React from "react"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react"
import { useOfferTokenContext } from "../../providers"

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
}

const columns = [
  { name: "Price", uid: "price" },
  { name: "Amount", uid: "amount" },
  { name: "Total", uid: "total" },
  { name: "My Size", uid: "mySize" },
]
export default function SellingOrders() {
  const { orders } = useOfferTokenContext()

  const renderCell = React.useCallback((item: any, columnKey: string) => {
    const cellValue = item[columnKey]

    switch (columnKey) {
      case "price":
        const wholeNumber = cellValue.toFixed(3)
        const afterDigits = cellValue.toString().substring(wholeNumber.length)
        return (
          <p className="text-error">
            {wholeNumber}
            <span className="text-error-light">{afterDigits}</span>
          </p>
        )

      case "total":
        return item.amount * item.price

      default:
        return cellValue ?? "-"
    }
  }, [])

  const classNames = React.useMemo(
    () => ({
      th: ["bg-transparent", "text-gray80"],
      td: [
        "text-gray100 font-semibold",

        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    [],
  )

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Example table with custom cells, pagination and sorting"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-foreground after:text-background text-background",
        },
      }}
      classNames={classNames}
      topContentPlacement="outside"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No orders found"} items={orders.sells}>
        {(item: any) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey as string)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
