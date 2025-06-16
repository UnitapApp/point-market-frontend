import fs from "fs"
import { parse } from "csv-parse"
import path from "path"
import { NextResponse } from "next/server"

interface QueryParams {
  page?: string
  pageSize?: string
  sortBy?: string
  sortOrder?: "asc" | "desc"
  filter?: string
  filterField?: string
}

export async function GET(req: Request) {
  // parse the url query params from the path
  const query = req.url.split("?")[1]
  const searchParams = new URLSearchParams(query)

  // convert searchParams to object

  const params = Object.fromEntries(searchParams.entries())

  const {
    page = 1,
    pageSize = 10,
    sortBy,
    sortOrder = "asc",
    filter,
    filterField,
  } = (params as QueryParams) ?? {}

  let pageNum = Math.max(1, Number(page))
  let pageSizeNum = Math.min(100, Math.max(1, parseInt(pageSize as string, 10))) // Limit page size between 1 and 100
  const filePath = path.join(process.cwd(), "public", "points-season-2.csv")

  try {
    let records = []
    let totalRecords = 0

    // Read all records first
    const parser = fs
      .createReadStream(filePath)
      .pipe(parse({ columns: true, skip_empty_lines: true }))

    for await (const record of parser) {
      // Add row index as id
      records.push({ ...record, id: totalRecords + 1 })
      totalRecords++
    }

    // Apply filtering if specified
    if (filter && filterField) {
      records = records.filter((record) =>
        String(record[filterField])
          .toLowerCase()
          .includes(String(filter).toLowerCase()),
      )
      totalRecords = records.length
    }

    // Apply sorting if specified
    if (sortBy) {
      records.sort((a, b) => {
        const valueA = a[sortBy]
        const valueB = b[sortBy]

        // Handle numeric sorting
        if (!isNaN(valueA) && !isNaN(valueB)) {
          return sortOrder === "asc"
            ? Number(valueA) - Number(valueB)
            : Number(valueB) - Number(valueA)
        }

        // Handle string sorting
        return sortOrder === "asc"
          ? String(valueA).localeCompare(String(valueB))
          : String(valueB).localeCompare(String(valueA))
      })
    }

    // Recalculate page number if it exceeds total pages
    const totalPages = Math.ceil(totalRecords / pageSizeNum)
    if (pageNum > totalPages) {
      pageNum = totalPages || 1 // If no records, default to page 1
    }

    const start = (pageNum - 1) * pageSizeNum
    console.log({ start, end: start + pageSizeNum })
    const paginatedRecords = records.slice(start, start + pageSizeNum)

    return NextResponse.json({
      data: paginatedRecords,
      pagination: {
        currentPage: pageNum,
        pageSize: pageSizeNum,
        totalRecords,
        totalPages,
      },
    })
  } catch (error) {
    console.error("Error processing CSV:", error)
    return NextResponse.error()
  }
}
