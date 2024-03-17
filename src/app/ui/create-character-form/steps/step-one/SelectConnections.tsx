"use client"

import { useFormStore } from "@/stores/formStore"

import { Input } from "@/app/ui/input"
import { useSuspensePlaybook } from "@/utils/query-client"

const ConnectionText = ({
  text,
  value,
  placeholder,
  onChange,
}: {
  text: string
  value: string
  placeholder: string
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
  <div className="text-sm">
    <Input
      type="text"
      variant="inline"
      className="float-left"
      placeholder={placeholder}
      autoCorrect="off"
      autoComplete="off"
      value={value}
      onChange={onChange}
    />
    <span className="leading-6">{text}</span>
  </div>
)

export default function SelectConnections() {
  const connectionValues = useFormStore((state) => state.connections.values)
  const playbook = useFormStore((state) => state.playbook.value)
  const update = useFormStore((state) => state.update)
  const { data } = useSuspensePlaybook(playbook)
  const [connectionText1, connectionText2] = data?.connections

  const handleChange = (valueIdx: number, value: string) => {
    const newValues = [...connectionValues]
    newValues[valueIdx] = value

    update({
      connections: {
        values: newValues,
        error: "",
      },
    })
  }

  return (
    <div className="overflow-hidden border rounded-lg shadow-sm md:col-span-2">
      <div className="px-4 py-2 bg-[#343C40]">
        <p className="text-lg font-bold">Connections</p>
        <p className="text-xs">
          Who do you, or don&apos;t you, have a connection with?
        </p>
      </div>

      <div className="flex flex-col gap-4 p-4 bg-[#2A2C2E] border-t border-neutral-600">
        <ConnectionText
          text={connectionText1}
          value={connectionValues[0]}
          placeholder="Prince Zuko"
          onChange={(e) => handleChange(0, e.target.value)}
        />

        <ConnectionText
          text={connectionText2}
          value={connectionValues[1]}
          placeholder="Avatar Aang"
          onChange={(e) => handleChange(1, e.target.value)}
        />
      </div>
    </div>
  )
}
