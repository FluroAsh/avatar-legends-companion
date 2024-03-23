import { Suspense } from "react"
import { QueryClient } from "@tanstack/react-query"

import * as Form from "@/app/ui/create-character-form"
import {
  BalanceSkeleton,
  CheckboxSkeleton,
  ConnectionsSkeleton,
  StatsSkeleton,
} from "@/app/ui/shared/skeletons"
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
      <Form.Stepper urlStep={step} />
      <Form.Form name="create-character">
        {/* TODO: Investigate abstracting away the conditional step rendering. 
          Might also consider moving it into the Form component for handling form validation etc with React Form/Zod */}
        {/* TODO: Investigate if we can just abstract this away with a useMultiStepForm hook */}
        {(!step || step === "1") && (
          <div className="flex flex-col w-full gap-4 mt-4">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-1 border rounded-lg gap-4 p-4 shadow-sm bg-[#343c40]">
              <div className="flex flex-col col-span-1 gap-4 sm:col-span-2 md:col-span-1">
                <Form.SelectPlaybook />
                <Form.InputName />
              </div>
              <Form.SelectBackground />
              <Suspense fallback={<CheckboxSkeleton />}>
                <Form.SelectDemeanour />
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
                <Form.SelectStats />
                <Form.SelectBalance />
                <Form.SelectConnections />
              </Suspense>
            </section>

            <section className="flex justify-center w-full">
              <Form.SelectTraining />
            </section>
          </div>
        )}
        {/* NOTE: Placeholders for remaining sections */}
        {step === "2" && (
          <div className="flex flex-col w-full gap-4 mt-4">
            <p>Step 2</p>
            <section className="flex justify-between bg-purple-600">
              <Form.InputCharacterDetails />
              <Form.SelectBadHabits />
            </section>
          </div>
        )}
        {step === "3" && (
          <div className="flex flex-col w-full gap-4 mt-4">
            <p>Step 3</p>
          </div>
        )}
        {step === "4" && (
          <div className="flex flex-col w-full gap-4 mt-4">
            <p>Step 4</p>
            <button className="p-5 rounded-lg bg-lime-500" type="submit">
              Create Character
            </button>
          </div>
        )}
      </Form.Form>
    </div>
  )
}
