"use client"

import { useEffect, useState } from "react"
import { useFormStore } from "@/stores/formStore"
import { useQueryClient } from "@tanstack/react-query"

import { Slider } from "@/app/ui/slider"

type SelectBalanceProps = React.ComponentProps<typeof Slider>

export default function SelectBalance({ ...props }: SelectBalanceProps) {
  const [balanceLabel, setBalanceLabel] = useState<string>("neutral")
  const update = useFormStore((state) => state.update)
  const balance = useFormStore((state) => state.balance)
  const playbook = useFormStore((state) => state.playbook)

  useEffect(() => setBalanceLabel("neutral"), [playbook.value])

  // Whenver the playbookData.class changes, we want to update the balance label back to "neutral"
  const queryBalance = useQueryClient().getQueryData<any>([playbook || "bold"])

  if (!balance) return null

  const [balance1, balance2] = queryBalance

  const handleChange = (value: number[]) => {
    const labels = {
      "-1": balance1,
      "0": "neutral",
      "1": balance2,
    } as Record<string, string>

    setBalanceLabel(labels[value[0]])
    update({
      balance: {
        value: value,
        error: "",
      },
    })
  }

  return (
    <div className="rounded-lg bg-[#343c40] h-fit border">
      <div className="flex justify-between px-4 py-2">
        <div>
          <h1 className="text-lg font-bold">Balance</h1>
          <p className="text-xs text-neutral-300">Shift Once (Optional)</p>
        </div>
        <div className="pt-1 my-auto text-sm capitalize text-neutral-300">
          {balanceLabel}
        </div>
      </div>

      <div className="bg-[#2a2c2e] px-4 py-4 border-t border-neutral-600">
        <div className="flex flex-col">
          <div className="flex justify-between pb-3">
            <span className="text-xs font-bold capitalize text-neutral-400">
              {balance1}
            </span>
            <span className="text-xs font-bold capitalize text-neutral-400">
              {balance2}
            </span>
          </div>
          <Slider
            className="min-w-[150px] hover:cursor-pointer"
            defaultValue={[0]}
            min={-1}
            max={1}
            step={1}
            value={balance.value}
            onValueChange={handleChange}
            {...props}
          />
        </div>
      </div>
    </div>
  )
}
