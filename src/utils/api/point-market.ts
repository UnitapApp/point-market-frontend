import axios from "axios"

const marketClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_POINT_MARKET_API_URL as string,
})

export const makePointApi = (
  message: string,
  address: string,
  signature: string,
) => {
  return marketClient.post("/symbol/create", {
    message,
    signature,
    address,
  })
}

export const fetchWalletBalance = async (address: string) => {
  const res = await marketClient.get("/symbol/balance", {
    params: {
      address,
    },
  })
  return res.data
}

export const fetchSymbolsList = async () => {
  const res = await marketClient.get("/symbol/list", {})

  return res.data
}

export const createOrderApi = (
  message: string,
  address: string,
  signature: string,
) => {
  return marketClient.post("/market/createOrder", {
    message,
    signature,
    address,
  })
}

export const fetchSymbolOrders = (symbol: string) => {
  return marketClient
    .get("/market/orderbook", {
      params: {
        symbol,
      },
    })
    .then((res) => res.data)
}
