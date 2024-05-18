import { DEFAULT_PLAYBOOK, TRAINING_KEYS } from "./constants"

/* API Helpers */
async function fetchPlaybook(playbook: string | undefined) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/playbooks?type=${
      playbook || DEFAULT_PLAYBOOK
    }`
  )
  const data = await res.json()
  return data
}

/* Training Helpers */
export type Training = keyof typeof TRAINING_KEYS
type Intensity = 100 | 300 | 500 | 700 | 900
type ColorProps = {
  text: string
  background: string
  border: string
  fill: string
}

const COLORS = (training: Training, intensity: Intensity = 500) =>
  ({
    text: `text-${training}-${intensity}`,
    background: `bg-${training}-${intensity}`,
    border: `border-${training}-${intensity}`,
    fill: `fill-${training}-${intensity}`,
  }) satisfies ColorProps

export { fetchPlaybook, COLORS }
