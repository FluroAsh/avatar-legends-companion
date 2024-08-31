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
  playbookTechniques,
  subclasses,
  moves,
}: PlaybookQueryByName[0]) => {
  const [fPlaybook, fBaseStats, fSubclasses, fPlaybookTechnqiques, fMoves] =
    excludeColumns(
      [playbook, baseStats, subclasses, playbookTechniques, moves],
      [
        "id",
        "subclassId",
        "baseStatsId",
        "playbook_technique_id",
        "playbook_id",
      ]
    )

  return {
    ...fPlaybook,
    baseStats: fBaseStats,
    startingTechnique: fPlaybookTechnqiques,
    subclasses: fSubclasses,
    moves: fMoves,
  }
}
