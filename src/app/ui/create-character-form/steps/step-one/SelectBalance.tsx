"use client"

import { useFormStore } from "@/stores/form-store"

import { Slider } from "@/app/ui/slider"
import { usePlaybook } from "@/utils/query-client"

type SelectBalanceProps = React.ComponentProps<typeof Slider>

export default function SelectBalance({ ...props }: SelectBalanceProps) {
  const update = useFormStore((state) => state.update)
  const balance = useFormStore((state) => state.balance)
  const playbook = useFormStore((state) => state.playbook)

  const { data: playbookData } = usePlaybook(playbook.value)
  const [balance1, balance2] = playbookData.balance

  const handleChange = (value: number[]) => {
    const labels = {
      "-1": balance1,
      "0": "neutral",
      "1": balance2,
    } as Record<string, string>

    const balanceLabel = labels[value[0]]

    update({
      balance: {
        selected: balanceLabel,
        value: value,
        error: "",
      },
    })
  }

  return (
    <div className="rounded-lg bg-primary h-fit border min-w-[250px]">
      <div className="flex justify-between px-4 py-2">
        <div>
          <h1 className="text-lg font-bold">Balance</h1>
          <p className="text-xs text-neutral-300">Shift Once (Optional)</p>
        </div>
        <div className="pt-1 my-auto text-sm font-bold capitalize text-neutral-300">
          {balance.selected}
        </div>
      </div>

      <div className="p-4 border-t bg-muted border-neutral-600">
        <div className="flex flex-col">
          <div className="flex justify-between pb-3">
            <span className="text-xs font-semibold capitalize text-neutral-400">
              {balance1}
            </span>
            <span className="text-xs font-semibold capitalize text-neutral-400">
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
