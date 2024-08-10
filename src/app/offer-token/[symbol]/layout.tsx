import { FC, PropsWithChildren } from "react"
import OfferTokenProvider from "./providers"

const OfferTokenLayout: FC<
  PropsWithChildren & { params: { symbol: string } }
> = ({ children, params }) => {
  return (
    <OfferTokenProvider symbol={params.symbol}>{children}</OfferTokenProvider>
  )
}

export default OfferTokenLayout
