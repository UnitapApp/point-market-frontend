import { FC, PropsWithChildren } from "react"
import OfferTokenProvider from "./providers"
import WalletManager from "./_components/wallet-manager"

const OfferTokenLayout: FC<
  PropsWithChildren & { params: { symbol: string } }
> = ({ children, params }) => {
  return (
    <OfferTokenProvider symbol={params.symbol}>
      {children}

      <WalletManager />
    </OfferTokenProvider>
  )
}

export default OfferTokenLayout
