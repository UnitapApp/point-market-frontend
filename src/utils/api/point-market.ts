import axios from "axios"

const marketClient = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_POINT_MARKET_API_URL as string,
})

export const makePointApi = (
  message: string,
  address: string,
  signature: string
) => {
  return marketClient.post("/api/symbol/create", {
    message,
    signature,
    address,
  })
}
