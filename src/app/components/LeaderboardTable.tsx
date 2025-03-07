"use client"

import React, { useEffect, useMemo, useState } from "react"
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  SortDescriptor,
  Pagination,
  cn,
} from "@nextui-org/react"
import Image from "next/image"
import { CiUser, CiWallet } from "react-icons/ci"
import { useWalletAccount } from "@/utils/wallet"
import { isAddressEqual } from "viem"

const columns = [
  { name: "Rank", uid: "rank" },
  { name: "ENS / Wallet Address", uid: "user" },
  { name: "Points", uid: "Point" },
  { name: "Total Volume", uid: "total_volume" },
]

export default function LeaderboardTable({
  search,
  setSearch,
  data: pointsData,
}: {
  data: any[]
  search: string
  setSearch: (value: string) => void
}) {
  const dataItems = useMemo(
    () =>
      pointsData
        .filter((item) =>
          item.user.toLowerCase().includes(search.toLowerCase()),
        )
        .sort((a, b) => b.Point - a.Point)
        .map((item, key) => ({ ...item, rank: key + 1, id: key })),
    [search],
  )
  const rowsPerPage = 15

  const [page, setPage] = useState(1)

  const data = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return dataItems.slice(start, end)
  }, [page, dataItems])

  const { address } = useWalletAccount()

  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "rank",
    direction: "ascending",
  })

  const pages = Math.ceil(dataItems.length / rowsPerPage)

  useEffect(() => {
    if (page > pages) {
      setPage(1)
    }
  }, [page, pages])

  const renderCell = React.useCallback((item: any, columnKey: string) => {
    const cellValue = item[columnKey]

    switch (columnKey) {
      case "user":
        if (item.ens) {
          return (
            <span className="flex items-center gap-2">
              <CiUser size={25} /> {item.ens}
            </span>
          )
        }

        return (
          <span className="flex items-center gap-2">
            <CiWallet size={25} />
            {item.user.slice(0, 14) + "..." + item.user.slice(30, 42)}
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

      case "Point":
        return `${item.Point}`

      case "total_volume":
        return <span className="text-white">{cellValue}</span>

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
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
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
          <TableRow
            className={cn(
              address && isAddressEqual(address, item.user)
                ? "bg-stone-800"
                : "",
            )}
            key={item.id}
          >
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
