"use client"
import { Metadata } from "next"
import { Rubik_Mono_One } from "next/font/google"
import PointNameInput from "./components/PointNameInput"
import AddCondition from "./components/AddCondition"

import { useState } from "react"
import { Chain } from "@/types"
import { isAddress } from "viem"

import "./styles.scss"
import { useGlobalContext } from "@/context/globalProvider"
import { useWalletAccount } from "@/utils/wallet"
import { useSignMessage } from "wagmi"
import { makePointApi } from "@/utils/api/point-market"
import { toast } from "react-toastify"

const RubikMonoOne = Rubik_Mono_One({
  weight: ["400"],
  display: "swap",
  adjustFontFallback: false,
  subsets: ["latin"],
})

export interface ConditionDataProps {
  nameOfPoint: string | null
  conditionName: string | null
  chain: Chain | null
  abi: any | null
  contractAddress: string | null
  numberOfPoints: number | null
  selectedMethod: string | null
  paramsMask?: string[]
  functionSignature?: string
}

const initialConditionData = {
  abi: null,
  nameOfPoint: null,
  conditionName: null,
  chain: null,
  contractAddress: null,
  numberOfPoints: null,
  selectedMethod: null,
}

const MainPage = () => {
  const [name, setName] = useState("")
  const [conditionData, setConditionData] =
    useState<ConditionDataProps>(initialConditionData)

  const {
    data: signMessageData,
    error,
    signMessage,
    variables,
    signMessageAsync,
  } = useSignMessage()

  const [loading, setLoading] = useState(false)

  const { setIsWalletPromptOpen } = useGlobalContext()
  const { isConnected, address } = useWalletAccount()

  const [isOpen, setIsOpen] = useState(false)

  const [conditionList, setConditionList] = useState<ConditionDataProps[]>([])

  const handleSetConditionData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setConditionData((prev) => ({
      ...prev,
      [name]: name == "numberOfPoints" ? value.replace(/[^0-9]/g, "") : value,
    }))
  }

  const isCompleteConditionFiled =
    conditionData.chain &&
    conditionData.conditionName &&
    conditionData.contractAddress &&
    name &&
    conditionData.numberOfPoints &&
    conditionData.selectedMethod &&
    isAddress(conditionData.contractAddress!)

  const handleAddCondition = () => {
    if (!isCompleteConditionFiled) return
    setIsOpen(false)
    setConditionList([...conditionList, conditionData])
    setConditionData(initialConditionData)
  }

  const handleRemoveCondition = (index: number) => {
    setConditionList((prev) => prev.filter((item, i) => i !== index))
  }

  const handleSubmit = () => {
    if (conditionList.length == 0 || !address) return

    const message = JSON.stringify({
      name,
      modifiers: conditionList.map(
        ({
          abi,
          conditionName,
          selectedMethod,
          paramsMask,
          functionSignature,
          numberOfPoints,
          ...item
        }) => ({
          ...item,
          chain: Number(item.chain?.chainId),
          params_mask: paramsMask,
          function_signature: functionSignature,
          value: Number(numberOfPoints),
          receiver: -1,
        })
      ),
    })

    signMessageAsync({
      message,
    }).then((res) => {
      makePointApi(message, address, res).then(() =>
        toast.success("Symbol created successfully")
      )
    })
  }

  return (
    <div className="flex w-full mt-20 items-center justify-center">
      <div className="bg-gray[#13131E] relative flex bg-[url('/assets/images/hackathon/bg-cover.svg')] bg-contain bg-no-repeat min-h-[478px] w-full max-w-[572px] flex-col items-center rounded-[20px] border-2 border-gray30 px-5 pt-[60px] md:px-0 ">
        <div className="title-text mb-9 text-center">
          <div
            className={`text-[24px] font-normal ${RubikMonoOne.className} gradient-text-hackaThon`}
          >
            UNITAP HACKATHON
          </div>
          <div className="text-sm font-medium mt-5 text-gray100">
            Where you can convert users action to
          </div>
          <div className="text-sm font-medium text-gray100">
            point in your platform.
          </div>
        </div>
        <div className="flex min-h-[210px] w-full flex-col items-center">
          <PointNameInput name={name} setName={setName} />

          <AddCondition
            conditionData={{ ...conditionData, nameOfPoint: name }}
            handleSetConditionData={handleSetConditionData}
            setConditionData={setConditionData}
            handleAddCondition={handleAddCondition}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            conditionList={conditionList}
            handleRemoveCondition={(index: number) =>
              handleRemoveCondition(index)
            }
          />
        </div>
        {isConnected ? (
          <button
            className={`${conditionList.length > 0 && "cursor-pointer border border-space-green bg-dark-space-green text-space-green"} mb-5 flex py-3 w-full max-w-[452px] select-none items-center justify-center rounded-xl border-2 border-gray70 bg-gray50 text-center text-sm font-bold leading-5 text-gray80`}
            onClick={handleSubmit}
          >
            Submit
          </button>
        ) : (
          <button
            onClick={setIsWalletPromptOpen.bind(null, true)}
            className={`"cursor-pointer border border-space-green bg-dark-space-green text-space-green mb-5 flex py-3 w-full max-w-[452px] select-none items-center justify-center rounded-xl text-center text-sm font-bold leading-5`}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  )
}

export default MainPage
