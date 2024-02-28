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

type FormStore = {
  playbook: Field
  characterName: Field
  background: FieldArray
  demeanour: FieldArray
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
      update: (partial) =>
        set((state) => ({ ...state, ...partial }), false, "UPDATE_FORM"),
    }),
    { name: FORM_STORE_KEY }
  )
)

export { useFormStore }
