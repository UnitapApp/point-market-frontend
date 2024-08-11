import { FC, useMemo, useState } from "react"

const MethodSelection: FC<{
  setConditionData: (value: any) => void
  conditionData: any
  errorMessage?: string
}> = ({ setConditionData, conditionData, errorMessage }) => {
  const [showMethods, setShowMethods] = useState(false)

  const methods = useMemo(() => {
    if (!conditionData.abi) return []

    const data = conditionData.abi.filter(
      (item: any) => item.type === "function",
    )
    return data
  }, [conditionData])

  const handleSelectMethod = (
    method: string,
    paramsMap: { name: string; type: string }[],
  ) => {
    setShowMethods(false)
    setConditionData((prev: any) => ({
      ...prev,
      selectedMethod: method,
      functionSignature: `${method}(${paramsMap.map((item) => item.type).join(",")})`,
      paramsMask: paramsMap.map((item) => "*"),
    }))
  }
  return (
    <div className="relative">
      <div className="relative">
        <div
          onClick={setShowMethods.bind(null, !showMethods)}
          className="flex cursor-pointer items-center justify-between rounded-xl border border-gray50 bg-gray40 p-3 px-6"
        >
          <div
            className={`conditionData.selectedMethod text-sm ${conditionData.selectedMethod ? "text-gray100" : "text-gray80"}`}
          >
            {conditionData.selectedMethod
              ? conditionData.selectedMethod
              : "Select Method"}
          </div>
          <svg
            width="12"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.7071 0.292893C13.3166 -0.0976309 12.6834 -0.0976309 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292894 0.292893C-0.0976312 0.683417 -0.0976312 1.31658 0.292894 1.70711L6.29289 7.70711C6.68342 8.09763 7.31658 8.09763 7.70711 7.70711L13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893Z"
              fill="white"
            />
          </svg>
        </div>
        <div
          className={`absolute ${showMethods ? "flex flex-col" : "hidden"} z-100 mt-1 h-[120px] w-full overflow-y-scroll rounded-xl border-gray50 bg-gray40`}
        >
          {methods.map((item: any, key: number) => (
            <div
              key={key}
              className="flex h-[44px] w-full cursor-pointer items-center p-4 hover:bg-gray50"
              onClick={() =>
                handleSelectMethod(
                  item.name,
                  item.inputs.map((item: any) => ({
                    type: item.internalType,
                    name: item.name,
                  })),
                )
              }
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-[14px] text-2xs text-error">
        {errorMessage}
      </div>
    </div>
  )
}

export default MethodSelection
