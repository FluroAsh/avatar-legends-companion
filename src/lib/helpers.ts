import { DEFAULT_PLAYBOOK } from "./constants"

async function fetchPlaybook(playbook: string | undefined) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/classes?type=${
      playbook || DEFAULT_PLAYBOOK
    }`
  )
  const { data } = await res.json()
  return data
}

export { fetchPlaybook }
