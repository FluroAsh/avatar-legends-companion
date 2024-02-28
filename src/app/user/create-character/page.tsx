import { PlaybookProvider } from "@/contexts/PlaybookContext"

import * as Character from "@/app/ui/create-character-form"

import { PocComponent } from "./poc-component"

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const { step } = searchParams ?? {}

  return (
    <div>
      {/* NOTE: Sits outside the provider to prevent re-rendering when changing playbook */}
      <Character.Stepper urlStep={step} />

      <PlaybookProvider>
        <Character.Form name="create-character">
          {/* TODO: Investigate abstracting away the conditional step rendering. 
          Might also consider moving it into the Form component for handling form validation etc with React Form/Zod */}
          {/* TODO: Investigate if we can just abstract this away with a useMultiStepForm hook */}
          {(!step || step === "1") && (
            <div className="flex flex-col w-full gap-10 mt-4">
              <section className="flex justify-between gap-5 p-5 border rounded-lg shadow-sm bg-[#343c40]">
                <div className="flex flex-col justify-between">
                  <Character.SelectPlaybook />
                  <Character.InputName />
                </div>
                <Character.SelectBackground />
                <Character.SelectDemeanour />
              </section>

              {/* NOTE: Placeholders for remaining sections */}
              <section className="flex justify-between bg-orange-600">
                <Character.SelectStats />
                <Character.SelectBalance />
                <Character.SelectConnections />
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
      </PlaybookProvider>
    </div>
  )
}
