"use client"

import { ChangeEventHandler, FC } from "react"

const AbiReader: FC<{
  value: any
  onChange: (value: any) => void
}> = ({ onChange, value }) => {
  const parseAbi: ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0]

    if (file && file.type === "application/json") {
      const reader = new FileReader()

      reader.onload = function (e) {
        if (!e.target || !e.target.result) return

        try {
          const jsonObject = JSON.parse(e.target.result.toString())
          onChange({ target: { name: "abi", value: jsonObject } })
          console.log("JSON file parsed successfully:", jsonObject)
        } catch (error) {
          console.error("Error parsing JSON file:", error)
        }
      }

      reader.readAsText(file)
    } else {
      console.error("Invalid file type selected. Please select a JSON file.")
    }
  }

  return (
    <label className="flex h-[43px] cursor-pointer items-center overflow-hidden rounded-xl border border-[#212130] bg-[#1E1E2C] pr-3 text-xs">
      <input
        type="file"
        className="pl-4 w-full"
        onChange={parseAbi}
        accept=".json"
      />
    </label>
  )
}

export default AbiReader
