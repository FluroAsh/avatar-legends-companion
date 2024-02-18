import { PlaybookProvider } from "@/lib/contexts/PlaybookContext"
import * as Character from "@/ui/form"

import { PocComponent } from "./poc-component"

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const step = searchParams?.step

  return (
    <>
      <PlaybookProvider>
        <Character.Stepper />
        <Character.Form
          name="create-character"
          archetypeParam={searchParams?.archetype}
        >
          {/* TODO: Investigate abstracting away the conditional step rendering. 
          Might also consider moving it into the Form component for handling form validation etc with React Form/Zod */}
          {(!step || step === "1") && (
            <>
              <div className="">
                <Character.SelectPlaybook />
                <Character.InputName />
              </div>
              <Character.SelectBackground />
              <Character.SelectDemeanour />
            </>
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
    </>
  )
}
