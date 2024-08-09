import type { Metadata } from "next"
import { config } from "@/utils/wallet/wagmi"
import { Noto_Sans } from "next/font/google"
import UnitapProvider from "@/context"
import Progressbar from "@/components/progress"
import { SpeedInsights } from "@vercel/speed-insights/next"
import StyledJsxRegistry from "@/components/styled-components"
import { ConnectWalletModal } from "@/components/containers/modals/ConnectWalletModal"
import GoogleAnalytics from "@/components/google-analytics"

import "./globals.scss"

import { headers } from "next/headers"
import { cookieToInitialState } from "wagmi"
import { Providers } from "./providers"
import AxiosApiManager from "@/components/axios-api-manager"
import EventContextProvider from "@/context/eventProvider"
import { ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

const notoSansFont = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  adjustFontFallback: false,
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Unitap",
  description: "Bright ID faucet",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const initialState = cookieToInitialState(config, headers().get("cookie"))

  return (
    <html lang="en" dir="ltr" className="dark">
      <body className={`dark:bg-gray10 dark:text-white ${notoSansFont}`}>
        <Providers initialState={initialState}>
          <UnitapProvider>
            <StyledJsxRegistry>
              <EventContextProvider>
                <div id="app">
                  <main className="flex min-h-[calc(100vh)] flex-col">
                    {children}
                  </main>
                </div>
              </EventContextProvider>

              <ConnectWalletModal />
            </StyledJsxRegistry>
            <AxiosApiManager />
          </UnitapProvider>
        </Providers>

        <ToastContainer />
        <Progressbar />

        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}

        <SpeedInsights />
      </body>
    </html>
  )
}
