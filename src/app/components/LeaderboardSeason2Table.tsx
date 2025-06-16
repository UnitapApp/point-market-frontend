"use client"

import React, { useEffect, useMemo, useState } from "react"
import { DataGrid, TableParams } from "@/components/data-grid"
import Image from "next/image"
import { CiUser, CiWallet } from "react-icons/ci"
import { useWalletAccount } from "@/utils/wallet"
import { isAddressEqual } from "viem"
import { numberWithCommas } from "@/utils"
import { useQuery } from "@tanstack/react-query"
import { fetchLeaderboardData } from "@/utils/api/point-market"

export default function LeaderboardSeason2Table({
  search,
  setSearch,
  daysToFilter,
  season,
}: {
  search: string
  setSearch: (value: string) => void
  daysToFilter: number
  season: number
}) {
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      pageIndex: 0,
      pageSize: 10,
    },
    sorting: [],
  })

  const { data, isLoading } = useQuery({
    queryKey: [
      "leaderboard",
      season,
      tableParams.pagination?.pageIndex,
      tableParams.pagination?.pageSize,
      tableParams.sorting,
      search,
    ],
    queryFn: () =>
      fetchLeaderboardData(
        season,
        (tableParams.pagination?.pageIndex || 0) + 1,
        tableParams.pagination?.pageSize || 10,
        tableParams.sorting?.[0]?.id,
        tableParams.sorting?.[0]?.desc ? "desc" : "asc",
        search,
      ),
  })

  // useEffect(() => {
  //   if (!data?.pagination) return

  //   setTableParams
  // }, [data])

  const columns = useMemo(() => {
    const baseColumns = [
      {
        header: "Rank",
        accessorKey: "id",
        cell: ({ row }: { row: any }) => {
          const rank = row.original.id
          if (rank < 4) {
            return (
              <Image
                className="ml-3"
                alt={"rank " + rank}
                src={"/imgs/main/rank-" + rank + ".svg"}
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
      // {
      //   header: "Total Volume",
      //   accessorKey: "total_volume",
      //   cell: ({ row }: { row: any }) =>
      //     `$${numberWithCommas(row.original.total_volume)}`,
      // },
    ]

    return baseColumns
  }, [season])

  const { address } = useWalletAccount()

  const getRowClassName = (row: any) => {
    if (address && isAddressEqual(address, row.original.user)) {
      return "bg-stone-800"
    }
    return ""
  }

  const handleParamsChange = (params: TableParams) => {
    console.log("CHANGING", params)
    setTableParams(params)
  }

  console.log(tableParams)

  return (
    <DataGrid
      columns={columns}
      data={data?.data ?? []}
      loading={isLoading}
      serverSide={true}
      rowCount={data?.pagination?.totalRecords}
      tableParams={tableParams}
      onParamsChange={handleParamsChange}
    />
  )
}
