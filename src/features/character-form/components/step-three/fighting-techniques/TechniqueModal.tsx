import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/dialog"

import { Techniques } from "@/features/character-form/utils"
import { cn } from "@/utils/helpers"

export default function TechniqueModal({
  techniques,
}: {
  techniques: Omit<Techniques, "initial">
}) {
  // Receive ALL techniques, sort it "Universal" and "{element} Techniques"

  // Techniques...
  // - Universal Techniques are static
  // - Sort {element} techniques by name

  const { universal, training } = techniques

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

      <DialogContent aria-describedby="selected-technique">
        <DialogTitle className="sr-only">Select a Technique</DialogTitle>

        <div>
          <div className="flex gap-4 pr-[48px] pb-4">
            {/* Search Bar */}
            <div className="flex-[2] p-1 bg-neutral-600 rounded-sm">Search</div>
            {/* Dropdown */}
            <div className="flex-1 p-1 bg-amber-600 min-w-[100px] rounded-sm">
              Dropdown
            </div>
          </div>

          <div className="relative overflow-y-auto max-h-[400px]">
            <div className="mb-4">
              {/* Heading (Universal Techniques) */}
              <p className="sticky top-0 left-0 mb-2 bg-neutral-400 text-neutral-900">
                Universal Techniques
              </p>
              {/* Techniques (.map these) */}
              {/* onClick open another modal with information about the technique */}
              <div className="flex flex-col gap-2 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <p key={i} className="flex items-center gap-2">
                    <div className="bg-red-300 size-4" />
                    Technique {i + 1}
                  </p>
                ))}
              </div>

              {/* Heading ({element} Techniques) */}
              <p className="sticky top-0 left-0 mb-2 bg-neutral-400 text-neutral-900">
                Element Techniques
              </p>
              {/* Techniques (.map these) */}
              <div className="flex flex-col gap-2">
                {Array.from({ length: 10 }).map((_, i) => (
                  <p key={i} className="flex items-center gap-2">
                    <div className="bg-red-300 size-4" />
                    Technique {i + 1}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
