"use client"

import { useFormStore } from "@/stores/form-store"

import { Input } from "@/app/ui/input"
import { usePlaybook } from "@/utils/query-client"
import FormContainer from "../../form-container"

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

  const { data } = usePlaybook(playbook)
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
    <FormContainer
      heading="connections"
      subheading="Who do you, or don't you, have a connection with?"
      stacked
      className="md:col-span-2"
    >
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
    </FormContainer>
  )
}
