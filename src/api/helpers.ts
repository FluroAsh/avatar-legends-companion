import { type PlaybookQueryByName } from "./service"

export const transformPlaybook = ({
  playbook,
  baseStats,
  techniques,
  subclasses,
  moves,
}: PlaybookQueryByName[0]) => ({
  ...playbook,
  baseStats,
  techniques,
  subclasses,
  moves,
})
