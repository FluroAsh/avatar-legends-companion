import { FormProvider } from "@/lib/contexts/FormContext"
import { PlaybookProvider } from "@/lib/contexts/PlaybookContext"
import * as Character from "@/ui/form"

import { PocComponent } from "./poc-component"

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const { step } = searchParams ?? {}

  return (
    <div>
      <FormProvider>
        <PlaybookProvider>
          <Character.Stepper urlStep={step} />
          <Character.Form name="create-character">
            {/* TODO: Investigate abstracting away the conditional step rendering. 
          Might also consider moving it into the Form component for handling form validation etc with React Form/Zod */}
            {/* TODO: Investigate if we can just abstract this away with a useMultiStepForm hook */}
            {(!step || step === "1") && (
              <div className="flex flex-col w-full gap-10">
                <section className="flex justify-center gap-5">
                  <div>
                    <Character.SelectPlaybook />
                    <Character.InputName />
                  </div>
                  <Character.SelectBackground />
                  <Character.SelectDemeanour />
                </section>

                {/* NOTE: Placeholders for remaining sections */}
                <section className="flex justify-between bg-orange-600">
                  <div>Select Stats</div>
                  <div>Balance</div>
                  <div>Connections</div>
                </section>

                <section className="flex justify-center bg-sky-600">
                  <div>Training</div>
                </section>

                <section className="flex justify-between bg-purple-600">
                  <div>Character Details</div>
                  <div>Bad Habits</div>
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
      </FormProvider>
    </div>
  )
}
