import { Suspense } from "react"
import { QueryClient } from "@tanstack/react-query"

import * as Character from "@/app/ui/create-character-form"
import {
  BalanceSkeleton,
  CheckboxSkeleton,
  StatsSkeleton,
} from "@/app/ui/skeletons"
import { DEFAULT_PLAYBOOK } from "@/lib/constants"
import { fetchPlaybook } from "@/lib/helpers"

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const qc = new QueryClient()
  const { step } = searchParams ?? {}

  const initialPlaybook = await fetchPlaybook(DEFAULT_PLAYBOOK)

  // Set the query initial data which is used when generating the server-side HTML
  qc.prefetchQuery({
    queryKey: ["playbook", DEFAULT_PLAYBOOK],
    queryFn: () => fetchPlaybook(DEFAULT_PLAYBOOK),
    initialData: initialPlaybook,
  })

  return (
    <div>
      {/* NOTE: Sits outside the provider to prevent re-rendering when changing playbook */}
      <Character.Stepper urlStep={step} />

      <Character.Form name="create-character">
        {/* TODO: Investigate abstracting away the conditional step rendering. 
          Might also consider moving it into the Form component for handling form validation etc with React Form/Zod */}
        {/* TODO: Investigate if we can just abstract this away with a useMultiStepForm hook */}
        {(!step || step === "1") && (
          <div className="flex flex-col w-full gap-4 mt-4">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-1 border rounded-lg gap-4 p-4 shadow-sm bg-[#343c40]">
              <div className="flex flex-col col-span-1 gap-4 sm:col-span-2 md:col-span-1">
                <Character.SelectPlaybook />
                <Character.InputName />
              </div>
              <Character.SelectBackground />
              <Suspense fallback={<CheckboxSkeleton />}>
                <Character.SelectDemeanour />
              </Suspense>
            </section>

            <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* These are all dependent on playbook, so we can suspend and compose a skeleton loader for these together */}
              <Suspense fallback={<StatsSkeleton />}>
                <Character.SelectStats />
              </Suspense>
              <Suspense fallback={<BalanceSkeleton />}>
                <Character.SelectBalance />
              </Suspense>
              <Suspense fallback={<div>Loading...</div>}>
                <Character.SelectConnections />
              </Suspense>
            </section>

            {/* NOTE: Placeholders for remaining sections */}
            <section className="flex justify-center bg-sky-600">
              <Character.SelectTraining />
            </section>

            <section className="flex justify-between bg-purple-600">
              <Character.InputCharacterDetails />
              <Character.SelectBadHabits />
            </section>
          </div>
        )}
        {step === "2" && (
          <>
            <p>Step 2</p>
          </>
        )}
        {step === "3" && (
          <>
            <p>Step 3</p>
            <button className="p-5 rounded-lg bg-lime-500" type="submit">
              Create Character
            </button>
          </>
        )}
      </Character.Form>
    </div>
  )
}
