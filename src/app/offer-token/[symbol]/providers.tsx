"use client"

import {
  fetchSymbolOrders,
  fetchSymbolsList,
  fetchWalletBalance,
} from "@/utils/api/point-market"
import { useWalletAccount } from "@/utils/wallet"
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

export type OrderingMode = "buy" | "sell"

export const OfferTokenContext = createContext({
  symbol: "",
  balances: [] as { value: number; symbol: string }[],
  selectedSymbol: "",
  setSelectedSymbol: (value: string) => {},
  balance: 0 as number | undefined,
  orderingMode: "buy" as OrderingMode,
  setOrderingMode: (value: OrderingMode) => {},
  symbols: [] as { name: string; id: number }[],
  isMarketPrice: false,
  setIsMarketPrice: (value: boolean) => {},
  orders: { buys: [], sells: [] },
})

export const useOfferTokenContext = () => useContext(OfferTokenContext)

const OfferTokenProvider: FC<PropsWithChildren & { symbol: string }> = ({
  symbol,
  children,
}) => {
  const [balances, setBalances] = useState<{ value: number; symbol: string }[]>(
    [],
  )

  const [orders, setOrders] = useState({ buys: [], sells: [] })

  const [isMarketPrice, setIsMarketPrice] = useState(false)

  const [orderingMode, setOrderingMode] = useState("buy" as OrderingMode)

  const [selectedSymbol, setSelectedSymbol] = useState(symbol as string)

  const [symbols, setSymbols] = useState([])
  const { address } = useWalletAccount()

  const balance = useMemo(
    () =>
      balances.find((item: any) => item.symbol_name === selectedSymbol)?.value,
    [selectedSymbol, symbols],
  )

  useEffect(() => {
    if (address) fetchWalletBalance(address).then((res) => setBalances(res))

    fetchSymbolsList().then((res) => {
      setSymbols(res)
      setSelectedSymbol(res[0].name)
    })

    fetchSymbolOrders(selectedSymbol).then(setOrders)
  }, [selectedSymbol])

  return (
    <OfferTokenContext.Provider
      value={{
        symbol,
        balances,
        selectedSymbol,
        setSelectedSymbol,
        balance,
        orderingMode,
        setOrderingMode,
        symbols,
        isMarketPrice,
        setIsMarketPrice,
        orders,
      }}
    >
      {children}
    </OfferTokenContext.Provider>
  )
}

export default OfferTokenProvider
