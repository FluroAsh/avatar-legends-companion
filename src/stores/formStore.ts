import { create } from "zustand"
import { devtools } from "zustand/middleware"

const FORM_STORE_KEY = "ALC Form Store"
type Field = {
  value: string
  error: string
}

type FieldArray = {
  values: string[]
  error: string
}

type Stats = {
  selected: string | ""
  creativity: null
  harmony: null
  focus: null
  passion: null
}

type FormStore = {
  playbook: Field
  characterName: Field
  background: FieldArray
  demeanour: FieldArray
  baseStats: Stats
  balance: {
    selected: string
    value: number[]
    error: string
  }
  connections: FieldArray
  training: Field
  update: (_partial: Partial<FormStore>) => void
}

const useFormStore = create(
  devtools<FormStore>(
    (set) => ({
      playbook: {
        value: "",
        error: "",
      },
      characterName: {
        value: "",
        error: "",
      },
      background: {
        values: [],
        error: "",
      },
      demeanour: {
        values: [],
        error: "",
      },
      baseStats: {
        selected: "",
        creativity: null,
        harmony: null,
        focus: null,
        passion: null,
      },
      balance: {
        selected: "neutral",
        value: [0],
        error: "",
      },
      connections: {
        values: ["", ""],
        error: "",
      },
      training: {
        value: "",
        error: "",
      },
      update: (partial) =>
        set((state) => ({ ...state, ...partial }), false, "FORM_UPDATE"),
    }),
    { name: FORM_STORE_KEY }
  )
)

export { useFormStore }
