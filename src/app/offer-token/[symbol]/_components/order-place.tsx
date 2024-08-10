"use client"

import TextField from "./text-field"
import RangeInput from "./range-input"
import { useState } from "react"
import { useOfferTokenContext } from "../providers"
import { useWalletAccount } from "@/utils/wallet"
import { useSignMessage } from "wagmi"
import { toast } from "react-toastify"
import { createOrderApi } from "@/utils/api/point-market"
import { Button } from "@nextui-org/react"

const OrderPlace = () => {
  const [sliderValue, setSliderValue] = useState(0)
  const {
    orderingMode,
    setOrderingMode,
    isMarketPrice,
    setIsMarketPrice,
    balance,
    symbol,
    selectedSymbol,
  } = useOfferTokenContext()

  const {
    data: signMessageData,
    error,
    signMessage,
    variables,
    signMessageAsync,
  } = useSignMessage()

  const { address } = useWalletAccount()

  const [loading, setLoading] = useState(false)

  const [order, setOrder] = useState({
    price: 0,
  })

  const submitOrder = () => {
    if (!address || !sliderValue || !symbol || !order.price) return

    setLoading(true)

    const message = JSON.stringify({
      symbol: selectedSymbol,
      name: orderingMode,
      amount: sliderValue,
      price: order.price,
      time: new Date().toISOString(),
      nonce: 1,
    })

    signMessageAsync({
      message,
    })
      .then((res) => {
        return createOrderApi(message, address, res)
      })
      .finally(() => {
        toast.success("Order created successfully"), setLoading(false)
      })
  }

  return (
    <div className="background-dashboard rounded-4xl overflow-hidden border-2 border-gray60">
      <header className="flex items-center">
        <button
          onClick={() => setIsMarketPrice(false)}
          className={`flex-1 border-b-2 transition-all ${isMarketPrice ? "text-gray90 border-transparent" : "border-white bg-gray40 text-white"}  px-10 py-5 text-center`}
        >
          Order
        </button>
        <button
          onClick={() => setIsMarketPrice(true)}
          className={`flex-1 px-10 border-b-2 py-5 transition-all text-center text-gray90 ${isMarketPrice ? "border-white bg-gray40 text-white" : "text-gray90 border-transparent"}`}
        >
          Market Price
        </button>
      </header>

      <main className="p-5">
        <div className="flex overflow-hidden gap-4 font-semibold rounded-xl">
          <button
            onClick={() => setOrderingMode("buy")}
            className={`relative h-12 ${orderingMode === "buy" ? "bg-dark-space-green" : "bg-gray60"} transition-colors flex-1 rounded-xl -ml-5 skew-x-[20deg] py-3 pr-3 text-center text-white`}
          >
            <p className="absolute top-1/2 left-1/2 -skew-x-[20deg] -translate-x-1/2 -translate-y-1/2">
              Buy
            </p>
          </button>
          <button
            onClick={() => setOrderingMode("sell")}
            className={`relative h-12 transition-colors flex-1 rounded-xl -mr-5 skew-x-[20deg] py-3 pr-3 text-center text-white ${orderingMode === "sell" ? "bg-error/30" : "bg-gray60"}`}
          >
            <p className="absolute top-1/2 left-1/2 -skew-x-[20deg] -translate-x-1/2 -translate-y-1/2">
              Sell
            </p>
          </button>
        </div>
        <div className="my-5 rounded-3xl border-2 border-gray60 bg-gray20">
          <div className="flex items-center justify-between py-4 px-5 text-gray90">
            <span>{symbol.toLocaleUpperCase()} Available Balance</span>

            <div>
              <span className="text-gray100 mr-2">
                {(balance ?? 0).toFixed(2)}{" "}
              </span>
              <span className="text-[#4079BC]">
                {symbol.toLocaleUpperCase()}
              </span>
            </div>
          </div>

          <div className="h-[2px] bg-gray60"></div>
          <div className="flex items-center justify-between py-4 px-4 text-gray100">
            <span className="text-gray90">Best Offer for Selling UXP</span>

            <div>
              <span className="text-gray100 mr-2">{32.5698} </span>
              <span className="text-[#4079BC]">
                {symbol.toLocaleUpperCase()}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <TextField
            placeholder={isMarketPrice ? "" : "0.00"}
            disabled={isMarketPrice}
            label="Price"
            value={order.price}
            onChange={(value) =>
              setOrder({ ...order, price: Number(value ?? 0) })
            }
          >
            {isMarketPrice ? (
              <div className="absolute bottom-0 right-5 top-0 flex items-center gap-4 text-space-green font-semibold">
                Market Price
              </div>
            ) : (
              <div className="absolute bottom-0 right-0 top-0 flex items-center gap-4">
                <button className="font-semibold text-[#4079BC] placeholder:text-gray80">
                  USDC
                </button>

                <div className="flex h-full flex-col text-gray100">
                  <button className="bg-[#1B1B29] px-1">+</button>
                  <button className="bg-[#1B1B29] px-1">-</button>
                </div>
              </div>
            )}
          </TextField>
          <TextField
            value={sliderValue}
            onChange={(value) => setSliderValue(Number(value || 0))}
            label="Amount"
            className="mt-5"
          >
            <div className="absolute bottom-0 right-0 top-0 flex items-center gap-4">
              <button className="bg-g-primary bg-clip-text font-semibold text-transparent placeholder:text-gray80">
                UXP
              </button>

              <div className="flex h-full flex-col text-gray100">
                <button className="bg-[#1B1B29] px-1">+</button>
                <button className="bg-[#1B1B29] px-1">-</button>
              </div>
            </div>
          </TextField>

          <div className="mt-8">
            <RangeInput
              value={sliderValue}
              maxLeverage={balance ?? 0}
              onChange={setSliderValue}
              mixedColor="#4CE6A1"
            />
          </div>

          <TextField
            value={(order.price ?? 0) * sliderValue}
            disabled
            className="mt-10"
            label="Total Amount"
          >
            <div className="absolute bottom-0 right-0 top-0 flex items-center gap-4">
              <button className="font-semibold text-[#4079BC] placeholder:text-gray80">
                USDC
              </button>

              <div className="flex h-full flex-col text-gray100">
                <button className="bg-[#1B1B29] px-1">+</button>
                <button className="bg-[#1B1B29] px-1">-</button>
              </div>
            </div>
          </TextField>
        </div>

        <div className="mt-4 rounded-3xl border-2 border-gray60 bg-gray20">
          <div className="flex items-center justify-between p-2 px-4 text-gray90">
            <span>Maximum Fee</span>

            <div>
              {sliderValue / 10}{" "}
              <span className="font-semibold text-[#4079BC]">USDC</span>
            </div>
          </div>

          <div className="h-[2px] bg-gray60"></div>
          <div className="flex items-center justify-between p-2 px-4 text-gray100">
            <span className="font-semibold">Your Receipt</span>

            <div>
              {sliderValue}{" "}
              <span className="bg-g-primary bg-clip-text font-semibold text-transparent">
                {symbol.toLocaleUpperCase()}
              </span>
            </div>
          </div>
        </div>

        <Button
          isLoading={loading}
          onClick={submitOrder}
          className={`mt-7 w-full rounded-2xl border-2 px-5 py-3 text-center font-semibold  ${orderingMode === "buy" ? "bg-dark-space-green text-space-green border-dark-space-green" : "text-error border-error bg-error/10"}`}
        >
          {orderingMode === "buy" ? "Buy " : "Sell "} {selectedSymbol}
        </Button>
      </main>

      <footer className="-mt-20 h-44 bg-[url('/assets/images/offer-token/bg-blur.png')] bg-cover bg-no-repeat">
        {/* <Image
          width={360}
          className="mx-auto"
          height={360}
          src="/assets/images/offer-token/image.png"
          alt="charts"
        /> */}
      </footer>
    </div>
  )
}

export default OrderPlace
