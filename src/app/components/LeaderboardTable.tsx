"use client"

import React, { useState } from "react"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  SortDescriptor,
} from "@nextui-org/react"
import { numberWithCommas } from "@/utils"
import Image from "next/image"
import { CiUser, CiWallet } from "react-icons/ci"
import { FaUser } from "react-icons/fa6"

const columns = [
  { name: "Rank", uid: "rank" },
  { name: "ENS / Wallet Address", uid: "address" },
  { name: "uPnL", uid: "upnl" },
  { name: "Points", uid: "points" },
]

export default function LeaderboardTable() {
  const data = [
    {
      id: 1,
      address: "0xB8F4846aCE41d3763bEe47c7C04a43f526ac3bc7",
      upnl: 312324,
      points: 3232323,
      rank: 1,
    },
    {
      id: 2,
      address: "0xB8F4846aCE41d3763bEe47c7C04a43f526ac3bc7",
      upnl: 312324,
      points: 3232323,
      rank: 2,
    },
    {
      id: 3,
      address: "0xB8F4846aCE41d3763bEe47c7C04a43f526ac3bc7",
      upnl: 312324,
      points: 3232323,
      rank: 3,
    },
    {
      id: 4,
      address: "0xB8F4846aCE41d3763bEe47c7C04a43f526ac3bc7",
      ens: "Ali Maktabi",
      upnl: 312324,
      points: 3232323,
      rank: 4,
    },
  ]

  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "rank",
    direction: "ascending",
  })

  const renderCell = React.useCallback((item: any, columnKey: string) => {
    const cellValue = item[columnKey]

    switch (columnKey) {
      case "address":
        if (item.ens) {
          return (
            <span className="flex items-center gap-2">
              <CiUser size={25} /> {item.ens}
            </span>
          )
        }

        return (
          <span className="flex items-center gap-2">
            <CiWallet size={25} /> {item.address.slice(0, 32) + "..."}
          </span>
        )

      case "rank":
        if (cellValue < 4) {
          return (
            <Image
              className="ml-3"
              alt={`rank ${cellValue}`}
              src={`/imgs/main/rank-${cellValue}.svg`}
              width={32}
              height={50}
            />
          )
        }

        return (
          <div className="w-14 grid place-items-center h-8 rounded-2xl bg-[#847D7D4D] text-white">
            {cellValue}
          </div>
        )

      case "upnl":
        return `$ ${numberWithCommas(item.upnl)}`

      case "points":
        return <span className="text-white">{numberWithCommas(cellValue)}</span>

      default:
        return cellValue ?? "-"
    }
  }, [])

  const classNames = React.useMemo(
    () => ({
      th: [
        "!rounded-none",
        "py-5",
        "text-white",
        "border-t border-b border-[#847D7D4D]",
      ],
      td: [
        "text-gray100 font-semibold",
        "border-b py-3 border-[#847D7D4D]",
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
      // isCompact
      onSortChange={setSortDescriptor}
      radius="none"
      removeWrapper
      aria-label="Example table with custom cells, pagination and sorting"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-foreground after:text-background text-background",
        },
      }}
      classNames={{
        ...classNames,
      }}
      topContentPlacement="outside"
    >
      <TableHeader className="bg-[#FF7A6E26]" columns={columns}>
        {(column) => (
          <TableColumn
            className="bg-[#FF7A6E26]"
            key={column.uid}
            allowsSorting
            align={column.uid === "actions" ? "center" : "start"}
          >
            <span className="inline-block w-[90%]">{column.name}</span>
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={data}>
        {(item: any) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell align="center">
                {renderCell(item, columnKey as string)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
