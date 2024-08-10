"use client"

import { Select, SelectItem } from "@nextui-org/react"
import Image from "next/image"
import { useOfferTokenContext } from "../../providers"
import { useMemo } from "react"

const tokens: any[] = []

// const createTradingCombos = (symbols: string[]) => {
//   const symbolTrades: [string, string][] = []
//   for (let i = 0; i < symbols.length; i++) {
//     for (let j = i + 1; j < symbols.length; j++) {
//       symbolTrades.push([symbols[i], symbols[j]])
//     }
//   }

//   return symbolTrades
// }

const CurrencySelect = () => {
  const { symbols, setSelectedSymbol, selectedSymbol } = useOfferTokenContext()

  return (
    <div className="background-dashboard rounded-4xl flex items-center gap-4 border-2 border-gray60 p-10">
      <Select
        aria-label="currency-select"
        className="max-w-xs"
        placeholder="USDC / UXP"
        value={selectedSymbol ?? ""}
        selectedKeys={[selectedSymbol ?? ""]}
        onChange={(e) => setSelectedSymbol(e.target.value)}
        size="lg"
        radius="lg"
        startContent={
          <Image
            src="/assets/images/offer-token/coins.svg"
            alt="coins"
            width={40}
            height={40}
          />
        }
      >
        {symbols.map((symbol) => (
          <SelectItem key={symbol.name}>{`${symbol.name} / USDC`}</SelectItem>
        ))}
      </Select>

      <div className="ml-auto text-center">
        <p className="text-gray90">24h Change</p>
        <p className="font-semibold text-white">-1,172.00</p>
      </div>

      <div className="text-center">
        <p className="text-gray90">24h Change</p>
        <p className="font-semibold text-white">-1,172.00</p>
      </div>

      <div className="text-center">
        <p className="text-gray90">24h Change</p>
        <p className="font-semibold text-white">-1,172.00</p>
      </div>
    </div>
  )
}

export default CurrencySelect
