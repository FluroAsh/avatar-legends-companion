import { create } from "zustand"
import { devtools } from "zustand/middleware"

const FORM_STORE_KEY = "ALC Form Store"
type FormStore = {
  playbook: {
    value: string
    error: string
  }
  characterName: {
    value: string
    error: string
  }
  background: {
    values: string[]
    error: string
  }
  demeanour: {
    values: string[]
    error: string
  }
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
