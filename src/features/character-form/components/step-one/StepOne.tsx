import { Suspense } from "react"

import {
  BalanceSkeleton,
  CheckboxSkeleton,
  ConnectionsSkeleton,
  StatsSkeleton,
} from "@/components/skeletons"
import { cn } from "@/utils/helpers"

import CharacterName from "./InputName"
import SelectBackground from "./SelectBackground"
import SelectBalance from "./SelectBalance"
import SelectConnections from "./SelectConnections"
import SelectDemeanour from "./SelectDemeanour"
import SelectPlaybook from "./SelectPlaybook"
import SelectStats from "./SelectStats"
import SelectTraining from "./SelectTraining"

export default async function StepOne() {
  return (
    <div className="flex flex-col w-full gap-4 mt-4">
      <section
        className={cn(
          "grid grid-cols-1 gap-4 p-4 border rounded-lg shadow-sm bg-primary",
          "sm:grid-cols-2",
          "md:grid-cols-3 md:grid-rows-1"
        )}
      >
        <div className="flex flex-col col-span-1 gap-4 sm:col-span-2 md:col-span-1">
          <SelectPlaybook />
          <CharacterName />
        </div>
        <SelectBackground />
        <Suspense fallback={<CheckboxSkeleton />}>
          <SelectDemeanour />
        </Suspense>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Suspense
          fallback={
            <>
              <StatsSkeleton />
              <BalanceSkeleton />
              <ConnectionsSkeleton />
            </>
          }
        >
          <SelectStats />
          <SelectBalance />
          <SelectConnections />
        </Suspense>
      </section>

      <section className="flex justify-center w-full">
        <SelectTraining />
      </section>
    </div>
  )
}
