import type { Metadata } from "next"
import { config } from "@/utils/wallet/wagmi"
import { Archivo } from "next/font/google"

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
import Header from "./components/Header"
import Footer from "./components/Footer"

const archivoFont = Archivo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  adjustFontFallback: false,
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Symmio | Points Program",
  description: "Symmio Points Program",
  icons: ["/favicon.svg"],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const initialState = cookieToInitialState(
    config,
    (await headers()).get("cookie"),
  )

  return (
    <html lang="en" dir="ltr" className="dark">
      <body className={`dark:bg-body dark:text-white ${archivoFont.className}`}>
        <Providers initialState={initialState}>
          <UnitapProvider>
            <StyledJsxRegistry>
              <EventContextProvider>
                <div id="app">
                  <Header />
                  <main className="flex min-h-[calc(100vh)] w-screen overflow-x-hidden mt-16 flex-col">
                    {children}
                  </main>
                  <Footer />
                </div>
              </EventContextProvider>

              <ConnectWalletModal />
            </StyledJsxRegistry>
            <AxiosApiManager />
          </UnitapProvider>
        </Providers>

        <ToastContainer theme="dark" />
        <Progressbar />

        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}

        <SpeedInsights />
      </body>
    </html>
  )
}
