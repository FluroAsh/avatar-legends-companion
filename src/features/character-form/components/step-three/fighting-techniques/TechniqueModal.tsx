import React, { useState, type Dispatch, type SetStateAction } from "react"
import { LuFilter, LuFlame, LuGlobe } from "react-icons/lu"
import { cn } from "@/utils/helpers"

import { type Techniques } from "@/features/character-form/utils"
import { Input } from "@/components/input"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/dialog"
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
} from "@/components/dropdown-menu"

import { Button } from "@/components/button"
import { STANCES } from "@/lib/constants"
import type { Technique } from "@/types/api"

import { ColoredStanceIcon } from "@/lib/icons"
import { useFormStore } from "@/stores/form-store"

// ---- Technique List/Items ---- //
const TechniqueItems = ({
  stickyTitle,
  stickyIcon,
  techniques,
  onClick,
  resetModal,
}: {
  stickyTitle: string
  stickyIcon: React.ReactNode
  techniques: Technique[]
  onClick: (
    _technique: Pick<Technique, "technique" | "stance" | "description">
  ) => void
  resetModal: () => void
}) => (
  <>
    <div className="sticky top-0 left-0 z-10 p-2 shadow-lg bg-muted">
      <div className="flex items-center gap-2 pointer-events-none">
        {stickyIcon}
        <span className="text-sm font-semibold tracking-wide">
          {stickyTitle}
        </span>
      </div>
    </div>

    <ul className="flex flex-col">
      {techniques.map(({ technique, stance, description, type }) => (
        <li
          key={technique}
          className="odd:bg-primary even:bg-[#3B4246] hover:opacity-50 transition-opacity" // NOTE: Do we have a color for this?
        >
          <button
            name={technique}
            className="flex items-center w-full gap-2 p-2 px-4"
            onClick={() => {
              onClick({ technique, stance, description })
              resetModal()
            }}
          >
            <ColoredStanceIcon stance={stance} size="md" />
            {/* TODO: Style by "base" using an "element" color map */}
            {type !== "Universal" && <span className="text-xs">{type}</span>}
            <span className="truncate">{technique}</span>
          </button>
        </li>
      ))}
    </ul>
  </>
)

// ---- Technique Modal ---- //
export default function TechniqueModal({
  techniques: { universal, training },
}: {
  techniques: Omit<Techniques, "fallback">
}) {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [selectedTechniques, setSelectedTechniques] = useState<string[]>(
    Object.values(STANCES)
  )

  const update = useFormStore((state) => state.update)

  const handleSelectTechnique = ({
    technique,
    stance,
    description,
  }: Pick<Technique, "technique" | "stance" | "description">) => {
    resetModal()

    // TODO: Update the formStore with the selected technique
    // - Display this in the "SelectedTechnique" component

    update({
      fightingTechnique: {
        value: { technique, stance, description },
        error: "",
      },
    })
  }

  const resetModal = () => {
    setShowModal(false)
    setSearchTerm("")
    setSelectedTechniques(Object.values(STANCES))
  }

  const filterTechniques = (techniques: Technique[]) =>
    techniques.filter(({ stance, technique }) => {
      const matchesSearchTerm =
        searchTerm && searchTerm.trim() !== ""
          ? new RegExp(searchTerm, "i").test(technique)
          : true
      const isSelectedTechnique = selectedTechniques.includes(stance)
      return matchesSearchTerm && isSelectedTechnique
    })

  // Filtering based on stance (if any) - use useState array to store selected stances

  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      <DialogTrigger
        className={cn(
          "absolute bottom-0 px-3 py-1 text-sm font-semibold transition",
          "translate-y-1/2 rounded-sm bg-primary w-fit border",
          "hover:brightness-125 hover:border-neutral-600"
        )}
      >
        Change Technique
      </DialogTrigger>

      <DialogContent
        className="h-[80%] max-h-[700px] p-0 gap-0 overflow-hidden bg-muted flex flex-col"
        aria-describedby="select-technique"
        aria-description="Select a technique from the list of available techniques"
      >
        <DialogTitle className="sr-only">Select a Technique</DialogTitle>

        <div className="p-4 bg-primary">
          <div className="flex gap-4 pr-[48px]">
            <Input
              type="text"
              placeholder="Search"
              className="flex-[2] px-3 py-2 bg-neutral-600 rounded-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />

            <StanceDropdown
              selectedTechniques={selectedTechniques}
              setSelectedTechniques={setSelectedTechniques}
            />
          </div>
        </div>

        <div className="h-full overflow-y-auto">
          {/* TODO: If hovering/active, show a "description" hover card with the technique description (should follow cursor) */}
          <TechniqueItems
            stickyTitle="Universal Techniques"
            stickyIcon={<LuGlobe />}
            techniques={filterTechniques(universal)}
            onClick={handleSelectTechnique}
            resetModal={resetModal}
          />

          <TechniqueItems
            stickyTitle="Element Techniques"
            stickyIcon={<LuFlame />} //  TODO: Replace with a custom "element" icon (Earth, Wind, Water, Fire, Weapons or Science)
            techniques={filterTechniques(training)}
            onClick={handleSelectTechnique}
            resetModal={resetModal}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

// ---- Stance Dropdown ---- //
const StanceDropdown = ({
  selectedTechniques,
  setSelectedTechniques,
}: {
  setSelectedTechniques: Dispatch<SetStateAction<string[]>>
  selectedTechniques: string[]
}) => {
  const handleChangeStance = (stance: string) => (_checked: boolean) => {
    selectedTechniques.includes(stance)
      ? setSelectedTechniques((prev) => prev.filter((s) => s !== stance))
      : setSelectedTechniques((prev) => [...prev, stance])
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="p-2 px-4 text-sm rounded-sm bg-secondary"
        asChild
      >
        <Button variant="primary" className="h-[35px]">
          <LuFilter className="mr-1" strokeWidth={3} />
          Filter
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="flex flex-col p-1 rounded-sm w-52">
        <DropdownMenuLabel className="p-2 text-xs font-semibold">
          Select Stances
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {Object.values(STANCES).map((stance) => (
            <DropdownMenuCheckboxItem
              key={stance}
              onCheckedChange={handleChangeStance(stance)}
              checked={selectedTechniques.includes(stance)}
              className="p-2 pl-8 text-xs transition-colors hover:bg-accent hover:cursor-pointer"
            >
              <div className="flex gap-1 mr-2">
                <ColoredStanceIcon stance={stance} size="sm" />
              </div>
              {stance.replace("and", "&")}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
