import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/dialog"
import { cn } from "@/utils/helpers"

import { Techniques } from "@/features/character-form/utils"

export default function TechniqueModal({
  techniques: { universal, training },
}: {
  techniques: Omit<Techniques, "initial">
}) {
  return (
    <Dialog>
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
        className="h-[80%] max-h-[600px]"
        aria-describedby="select-technique"
        aria-description="Select a technique from the list of available techniques"
      >
        <DialogTitle className="sr-only">Select a Technique</DialogTitle>

        <div className="sticky top-0 left-0 flex gap-4 pr-[48px] pb-4">
          {/* Search Bar */}
          <div className="flex-[2] p-1 bg-neutral-600 rounded-sm">Search</div>
          {/* Dropdown */}
          <div className="flex-1 p-1 bg-amber-600 min-w-[100px] rounded-sm">
            Dropdown
          </div>
        </div>

        <div className="relative mb-4 overflow-y-auto">
          <p className="sticky top-0 left-0 mb-2 bg-neutral-400 text-neutral-900">
            Universal Techniques
          </p>
          {/* onClick open another modal with information about the technique */}
          <div className="flex flex-col gap-2 mb-4">
            {universal.map(({ technique }) => (
              <div key={technique} className="flex items-center gap-2">
                <div className="bg-red-300 size-4" />
                {technique}
              </div>
            ))}
          </div>

          <p className="sticky top-0 left-0 mb-2 bg-neutral-400 text-neutral-900">
            Element Techniques
          </p>
          {/* onClick open another modal with information about the technique */}
          <div className="flex flex-col gap-2">
            {training.map(({ technique }) => (
              <div key={technique} className="flex items-center gap-2">
                <div className="bg-red-300 size-4" />
                {technique}
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
