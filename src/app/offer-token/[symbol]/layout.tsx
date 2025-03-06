import { FC, PropsWithChildren } from "react"
import OfferTokenProvider from "./providers"
import WalletManager from "./_components/wallet-manager"

const OfferTokenLayout: FC<
  PropsWithChildren & { params: Promise<{ symbol: string }> }
> = async ({ children, params }) => {
  return (
    <OfferTokenProvider symbol={(await params).symbol}>
      {children}

      <WalletManager />
    </OfferTokenProvider>
  )
}

export default OfferTokenLayout
