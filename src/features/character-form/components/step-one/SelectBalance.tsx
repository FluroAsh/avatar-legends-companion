"use client"

import { useFormStore } from "@/stores/form-store"

import { Slider } from "@/components/slider"
import { usePlaybook } from "@/utils/query-client"
import FormContainer from "../form-container"

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
    <FormContainer
      heading="balance"
      subheading="Shift Once (Optional)"
      rightNode={
        <div className="pt-1 my-auto text-sm font-bold capitalize text-neutral-300">
          {balance.selected}
        </div>
      }
      className="min-w-[250px]"
    >
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
    </FormContainer>
  )
}
