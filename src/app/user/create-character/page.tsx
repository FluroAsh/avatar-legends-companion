import * as Character from "@/app/ui/create-character-form"
import { PlaybookProvider } from "@/lib/contexts/PlaybookContext"

import { PocComponent } from "./poc-component"

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const { step } = searchParams ?? {}
  console.log(step)

  return (
    <div>
      <Character.Stepper urlStep={step} />

      <PlaybookProvider>
        <Character.Form name="create-character">
          {/* TODO: Investigate abstracting away the conditional step rendering. 
          Might also consider moving it into the Form component for handling form validation etc with React Form/Zod */}
          {/* TODO: Investigate if we can just abstract this away with a useMultiStepForm hook */}
          {(!step || step === "1") && (
            <div className="flex flex-col w-full gap-10 mt-4">
              <section className="flex justify-center gap-5 bg-slate-600">
                <div>
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
