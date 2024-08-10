"use client"

import React, { useMemo } from "react"
import styled from "styled-components"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"

const Wrapper = styled.div`
  margin-top: 10px;
  padding: 0 5px;
  .rc-slider-mark {
    font-size: 10px;
  }
  .rc-slider-mark-text-active:last-chid {
    color: green;
  }
`

function RangeInput({
  value,
  maxLeverage,
  onChange,
  mixedColor,
}: {
  value: number
  maxLeverage: number
  onChange: any
  mixedColor: string
}) {
  const marks = useMemo(() => {
    if (maxLeverage === 100) {
      return {
        "0": "0",
        25: "25",
        50: "50",
        75: "75",
        100: "100",
      }
    }

    const range = (
      start: number,
      stop: number,
      step = maxLeverage < 10 ? 1 : Math.floor(maxLeverage / 10),
    ) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step,
      ).reduce((a, v) => ({ ...a, [v]: v, [maxLeverage]: maxLeverage }), {})

    return range(1, maxLeverage)
  }, [maxLeverage])
  return (
    <Wrapper>
      <Slider
        styles={{
          track: {
            background: `#4CE6A1`,
            height: 4,
          },
          handle: {
            background:
              "linear-gradient(to bottom right, #4BF2A2 -4.66%, #A89FE7 56.06%, #E1C4F4 73.07%, #DD40CD 111.44%, #DD40CD 111.44%)",
            opacity: 1,
            height: 12,
            width: 12,
            marginTop: -4,
            borderWidth: 0,
            borderRadius: 2,
            transform: "rotate(-45deg)",
            boxShadow: "none",
            backgroundColor: mixedColor,
          },
          rail: {
            width: "calc(100% + 8px)",
            marginLeft: "-4px",
            background: "gray",
          },
          tracks: {
            borderRadius: "4px",
            height: "8px",
            width: "1px",
            borderColor: "#4CE6A1",
          },
        }}
        min={0}
        max={maxLeverage}
        step={0.25}
        marks={marks}
        value={value}
        activeDotStyle={{ borderColor: "#4CE6A1" }}
        onChange={onChange}
      />
    </Wrapper>
  )
}

export default RangeInput
