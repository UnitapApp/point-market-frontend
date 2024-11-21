import React, { useEffect, useState } from "react"
import { ConditionDataProps } from "../page.old"
import ChainList from "./ChainList"
import { Address, isAddress } from "viem"
import { getContractAbiApi } from "../helper/getContractAbi"
import AbiReader from "./abiReader"
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react"
import MethodSelection from "./methodSelection"

interface ModalProps {
  isOpen: boolean
  handleCloseModal: () => void
  conditionData: ConditionDataProps
  handleSetConditionData: (e: any) => void
  setConditionData: React.Dispatch<React.SetStateAction<ConditionDataProps>>
  handleAddCondition: () => void
}

const AddConditionModal = ({
  isOpen,
  handleCloseModal,
  conditionData,
  handleSetConditionData,
  setConditionData,
  handleAddCondition,
}: ModalProps) => {
  const [getMethodLoading, setGetMethodLoading] = useState<boolean>(false)

  const handlePaste = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText()
      conditionData.contractAddress = clipboardText
      setConditionData((prev) => ({ ...prev, contractAddress: clipboardText }))
      console.log(clipboardText)
    } catch (error) {
      console.error("Failed to read clipboard contents:", error)
    }
  }

  const isCompleteConditionFiled =
    conditionData.chain &&
    conditionData.conditionName &&
    conditionData.contractAddress &&
    conditionData.nameOfPoint &&
    conditionData.numberOfPoints &&
    conditionData.selectedMethod &&
    isAddress(conditionData.contractAddress)

  const initialErrorMessage = {
    name: "",
    chain: "",
    contractAddress: "",
    selectedMethod: "",
    pointNumber: "",
  }
  const [errorMessages, setErrorMessage] = useState(initialErrorMessage)

  const handleGetMethods = async () => {
    setGetMethodLoading(true)
    try {
      await getContractAbiApi(conditionData.contractAddress! as Address)
    } finally {
      setGetMethodLoading(false)
    }
  }

  useEffect(() => {
    if (
      conditionData.contractAddress &&
      isAddress(conditionData.contractAddress)
    ) {
      handleGetMethods()
    }
  }, [conditionData.contractAddress])

  const checkConditions = () => {
    setErrorMessage({
      name: conditionData.conditionName ? "" : "required",
      chain: conditionData.chain ? "" : "required",
      contractAddress:
        conditionData.contractAddress &&
        isAddress(conditionData.contractAddress)
          ? ""
          : "Please enter valid Contract Address",
      selectedMethod: conditionData.selectedMethod
        ? ""
        : "Please select method",
      pointNumber: conditionData.numberOfPoints ? "" : "required",
    })

    console.log(isCompleteConditionFiled)

    if (!isCompleteConditionFiled) return

    handleAddCondition()
  }

  return (
    <Modal
      className="bg-gray20"
      isOpen={isOpen}
      onOpenChange={handleCloseModal}
    >
      <ModalContent>
        <ModalHeader className="justify-center">
          <div>Add Condition</div>
        </ModalHeader>
        <ModalBody className="flex flex-col gap-4 px-3">
          <div className="relative">
            <div className=" flex h-[43px] cursor-pointer items-center overflow-hidden rounded-xl border border-[#212130] bg-[#1E1E2C] pr-3 text-xs">
              <input
                type="text"
                placeholder="Condition Name"
                className="h-full w-full bg-inherit pl-3 placeholder-gray80"
                value={conditionData.conditionName ?? ""}
                onChange={handleSetConditionData}
                name="conditionName"
              />
            </div>
            <div className="absolute -bottom-[14px] text-2xs text-error">
              {errorMessages.name}
            </div>
          </div>
          <div className="relative">
            <ChainList
              setConditionData={setConditionData}
              conditionData={conditionData}
            />
            <div className="absolute -bottom-[14px] text-2xs text-error">
              {errorMessages.chain}
            </div>
          </div>
          <div className=" relative">
            <div className="flex h-[43px] items-center overflow-hidden rounded-xl border border-[#212130] bg-[#1E1E2C] pr-3 text-xs">
              <input
                type="text"
                placeholder="Contract Address"
                className="h-full w-full bg-inherit pl-3 placeholder-gray80"
                value={conditionData.contractAddress ?? ""}
                name="contractAddress"
                onChange={handleSetConditionData}
              />
              <div
                onClick={handlePaste}
                className="flex h-[19px] w-[42px] cursor-pointer items-center justify-center rounded-[6px] border border-gray80 text-2xs font-semibold text-gray90"
              >
                Paste
              </div>
            </div>
            <div className="absolute -bottom-[14px] text-2xs text-error">
              {errorMessages.contractAddress}
            </div>
          </div>
          <div className=" relative">
            <AbiReader
              onChange={handleSetConditionData}
              value={conditionData.abi}
            />
            <div className="absolute -bottom-[14px] text-2xs text-error">
              {errorMessages.contractAddress}
            </div>
          </div>
          <MethodSelection
            conditionData={conditionData}
            setConditionData={setConditionData}
            errorMessage={errorMessages.selectedMethod}
          />
          <div className="relative">
            <div className="flex h-[43px] overflow-hidden rounded-xl border border-[#212130] bg-[#1E1E2C] px-2">
              <input
                className="h-full w-full bg-inherit text-xs placeholder-gray80"
                placeholder="Number of Points"
                value={conditionData.numberOfPoints ?? ""}
                onChange={handleSetConditionData}
                name="numberOfPoints"
                type="text"
                inputMode="numeric"
                pattern="[0-9]"
              />
            </div>
            <div className="absolute -bottom-[14px] text-2xs text-error">
              {errorMessages.pointNumber}
            </div>
          </div>
          <button
            onClick={checkConditions}
            className={`${!isCompleteConditionFiled && "opacity-50"} mt-5 flex h-[43px] w-full  items-center justify-center rounded-xl border border-[#2C6E59] bg-dark-space-green`}
            // disabled={!!isCompleteConditionFiled}
          >
            Add Condition
          </button>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AddConditionModal
