import { type PlaybookQueryByName } from "@/api/service"

const excludeColumns = (tables: Record<string, any>[], columns: string[]) =>
  tables.map((table) => {
    if (Array.isArray(table)) {
      return table.map((t) => {
        const newTable = { ...t }
        columns.forEach((excludedCol) => delete newTable[excludedCol])
        return newTable
      })
    }

    const newTable = { ...table }
    columns.forEach((excludedCol) => delete newTable[excludedCol])
    return newTable
  })

export const transformPlaybook = ({
  playbook,
  baseStats,
  techniques,
  subclasses,
  moves,
}: PlaybookQueryByName[0]) => {
  const [fPlaybook, fBaseStats, fSubclasses, fTechniques, fMoves] =
    excludeColumns(
      [playbook, baseStats, subclasses, techniques, moves],
      ["id", "subclassId", "baseStatsId", "techniqueId", "playbook_id"]
    )

  return {
    ...fPlaybook,
    baseStats: fBaseStats,
    techniques: fTechniques,
    subclasses: fSubclasses,
    moves: fMoves,
  }
}
