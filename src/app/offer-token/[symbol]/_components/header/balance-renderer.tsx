"use client"

import { FC } from "react"
import { useOfferTokenContext } from "../../providers"

const BalanceRenderer: FC = () => {
  const { symbol, balance } = useOfferTokenContext()

  return (
    <div className="background-dashboard text-large rounded-4xl flex items-center justify-between border-2 border-gray60 p-9">
      <div>
        <p className="text-gray90">Your Balance in {symbol}</p>
        <p className="mt-1 font-semibold text-white">
          {balance}{" "}
          <span className="bg-g-primary bg-clip-text text-transparent">
            {symbol.toLocaleUpperCase()}
          </span>
        </p>
      </div>
      <button className=" rounded-2xl px-6 py-3 border-2 ml-auto mr-2 border-[#4CE6A1] font-semibold text-black">
        <p className="button-primary bg-clip-text text-transparent">
          Withdraw {symbol.toLocaleUpperCase()}
        </p>
      </button>
      <button className="button-primary rounded-2xl px-6 py-3 font-semibold text-black">
        Deposit More
      </button>
    </div>
  )
}

export default BalanceRenderer
