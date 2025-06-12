"use client"

import React, { useMemo } from "react"
import { DataGrid } from "@/components/data-grid"
import Image from "next/image"
import { CiUser, CiWallet } from "react-icons/ci"
import { useWalletAccount } from "@/utils/wallet"
import { isAddressEqual } from "viem"
import { numberWithCommas } from "@/utils"

export default function LeaderboardTable({
  search,
  setSearch,
  data: pointsData,
  daysToFilter,
  season,
  loading = false,
}: {
  data: any[]
  search: string
  setSearch: (value: string) => void
  daysToFilter: number
  season: number
  loading?: boolean
}) {
  // Filter data based on search
  const filteredItems = useMemo(() => {
    const items = pointsData
      .sort((a, b) => b.Point - a.Point)
      .map((item, key) => ({
        ...item,
        rank: key + 1,
        id: key,
        Point: Math.round(item.Point * 1000000) / 1000000,
      }))
    return items.filter((item) =>
      item.user.toLowerCase().includes(search.toLowerCase()),
    )
  }, [pointsData, search])

  // Define columns dynamically based on season
  const columns = useMemo(() => {
    const baseColumns = [
      {
        header: "Rank",
        accessorKey: "rank",
        cell: ({ row }: { row: any }) => {
          const rank = row.original.rank
          if (rank < 4) {
            return (
              <Image
                className="ml-3"
                alt={`rank ${rank}`}
                src={`/imgs/main/rank-${rank}.svg`}
                width={32}
                height={50}
              />
            )
          }
          return (
            <div className="w-14 grid place-items-center h-8 rounded-2xl bg-[#847D7D4D] text-white">
              {rank}
            </div>
          )
        },
      },
      {
        header: "ENS / Wallet Address",
        accessorKey: "user",
        cell: ({ row }: { row: any }) => {
          const { user, ens } = row.original
          if (ens) {
            return (
              <span className="flex items-center gap-2">
                <CiUser size={25} /> {ens}
              </span>
            )
          }
          return (
            <span className="flex items-center gap-2">
              <CiWallet size={25} />
              {user.slice(0, 14) + "..." + user.slice(30, 42)}
            </span>
          )
        },
      },
      {
        header: "Points",
        accessorKey: "Point",
        cell: ({ row }: { row: any }) => numberWithCommas(row.original.Point),
      },
      {
        header: "Total Volume",
        accessorKey: "total_volume",
        cell: ({ row }: { row: any }) =>
          `$${numberWithCommas(row.original.total_volume)}`,
      },
    ]

    return season === 2
      ? baseColumns.filter((col) => col.accessorKey !== "total_volume")
      : baseColumns
  }, [season])

  const { address } = useWalletAccount()

  // Conditional row styling
  const getRowClassName = (row: any) => {
    if (address && isAddressEqual(address, row.original.user)) {
      return "bg-stone-800"
    }
    return ""
  }

  return (
    <DataGrid
      columns={columns}
      data={filteredItems}
      disableSorting={false}
      disablePagination={false}
      loading={loading}
    />
  )
}
