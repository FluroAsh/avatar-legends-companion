"use client"

import { useFormStore } from "@/stores/form-store"
import { type Move } from "@/types/api"

import { useSuspensePlaybook } from "@/utils/query-client"
import MoveCard from "./MoveCard"

export default function BasicMoves() {
  const update = useFormStore((state) => state.update)
  const basicMoves = useFormStore((state) => state.basicMoves)
  const playbook = useFormStore((state) => state.playbook)

  const { data: playbookData } = useSuspensePlaybook(playbook.value)

  const handleChange = (value: string) => (checked: boolean) => {
    if (checked && basicMoves.values.length === 2) return

    update({
      basicMoves: {
        values: checked
          ? [...basicMoves.values, value]
          : basicMoves.values.filter((m) => m !== value),
        error: "",
      },
    })
  }

  return (
    <div>
      <div className="pl-1">
        <p className="font-bold leading-7 capitalize ext-xl ">
          Basic Moves － {basicMoves.values.length} / 2
        </p>
        <p className="text-xs text-neutral-300">
          Select <i>two</i> basic moves
        </p>
      </div>
      <div className="grid gap-4 py-2 sm:grid-cols-2">
        {playbookData.moves.map((moveData: Move) => (
          <MoveCard
            key={moveData.move}
            moveData={moveData}
            onChange={handleChange}
            isSelected={basicMoves.values.includes(moveData.move)}
            values={basicMoves.values}
            maxSelection={2}
          />
        ))}
      </div>
    </div>
  )
}
