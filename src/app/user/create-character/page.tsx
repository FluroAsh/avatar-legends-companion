// import { Suspense } from "react"
import { QueryClient } from "@tanstack/react-query"

import * as Character from "@/app/ui/create-character-form"
// import { CheckboxSkeleton } from "@/app/ui/skeletons"

import { fetchPlaybook } from "@/lib/utils"

import { PocComponent } from "./poc-component"

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const qc = new QueryClient()
  const { step } = searchParams ?? {}

  const data = await fetchPlaybook("bold")

  // receives the data as expected
  // but is not being set in the query cache
  console.log("data", data)
  qc.setQueryData(["bold"], {
    playbook: "test",
  })

  // Fetch the initial playbook data and return in the serverside HTML
  qc.prefetchQuery({
    queryKey: ["bold"],
    queryFn: () => fetchPlaybook("bold"),
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
          <div className="flex flex-col w-full gap-10 mt-4">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-rows-1 border rounded-lg gap-4 p-4 shadow-sm bg-[#343c40]">
              <div className="flex flex-col col-span-1 gap-4 sm:col-span-2 md:col-span-1">
                <Character.SelectPlaybook />
                <Character.InputName />
              </div>
              <Character.SelectBackground />
              {/* <Suspense fallback={<CheckboxSkeleton />}> */}
              {/* <Character.SelectDemeanour /> */}
              {/* </Suspense> */}
            </section>

            {/* NOTE: Placeholders for remaining sections */}
            <section className="grid justify-between grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3 ">
              {/* <Character.SelectStats />
              <Character.SelectBalance />
              <Character.SelectConnections /> */}
            </section>

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
      {/* DEBUG: This component is for testing */}
      <PocComponent />
    </div>
  )
}
