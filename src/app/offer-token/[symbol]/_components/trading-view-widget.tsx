"use client"

import React, { useEffect, useRef } from "react"
// import { isMobile } from "react-device-detect";

let tvScriptLoadingPromise: any

export default function TradingViewWidget({ symbol }: { symbol: string }) {
  const onLoadScriptRef = useRef<any>()

  // useEffect(() => {
  //   onLoadScriptRef.current = createWidget;

  //   if (!tvScriptLoadingPromise) {
  //     tvScriptLoadingPromise = new Promise((resolve) => {
  //       const script = document.createElement("script");
  //       script.id = "tradingview-widget-loading-script";
  //       script.src = "https://s3.tradingview.com/tv.js";
  //       script.type = "text/javascript";
  //       script.onload = resolve;
  //       document.head.appendChild(script);
  //     });
  //   }

  //   tvScriptLoadingPromise.then(
  //     () => onLoadScriptRef.current && onLoadScriptRef.current(),
  //   );
  //   return () => {
  //     onLoadScriptRef.current = null;
  //   };

  //   function createWidget() {
  //     if (
  //       typeof window !== "undefined" &&
  //       document.getElementById("tradingview_c6655") &&
  //       !!(window as any).TradingView
  //     ) {
  //       new (window as any).TradingView.widget({
  //         symbol,
  //         autosize: true,
  //         interval: "1",
  //         timezone: "exchange",
  //         theme: "dark",
  //         style: "5",
  //         locale: "en",
  //         styles: "background: white !important",
  //         toolbar_bg: "#f1f3f6",
  //         enable_publishing: false,
  //         hide_side_toolbar: false,
  //         withdateranges: true,
  //         container_id: "tradingview_c6655",
  //       });
  //     }
  //   }
  // }, [symbol]);

  return (
    <div className="h-full rounded-4xl overflow-hidden !border-2 !border-gray60 relative">
      <div className="h-full blur-md w-full bg-[url('/assets/images/offer-token/bg-trading-view-bg.svg')] bg-no-repeat bg-cover">
        {/* <div
        style={{ height: "100%" }}
        className="!rounded-4xl overflow-hidden !border-2 !border-gray60"
      /> */}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <h3 className=" font-mono">Coming Soon</h3>
      </div>
    </div>
  )
}
