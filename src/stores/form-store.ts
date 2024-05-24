import { create } from "zustand"
import { devtools } from "zustand/middleware"

const FORM_STORE_KEY = "alc-form-store"
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
  basicMoves: FieldArray
  fightingTechnique: Field
  update: (_partial: Partial<FormStore>) => void
}

const useFormStore = create(
  devtools<FormStore>(
    (set) => ({
      // ---- Step 1 ---- //
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
      // ---- Step 2 ---- //
      // ---- Step 3 ---- //
      basicMoves: {
        values: [],
        error: "",
      },
      fightingTechnique: {
        value: "",
        error: "",
      },
      // ---- Step 4 ---- //
      update: (partial) =>
        set((state) => ({ ...state, ...partial }), false, "FORM_UPDATE"),
    }),
    { name: FORM_STORE_KEY }
  )
)

export { useFormStore }
