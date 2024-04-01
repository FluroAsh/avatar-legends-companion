// import { Suspense } from "react"
import { QueryClient } from "@tanstack/react-query"

import * as Form from "@/app/ui/create-character-form"
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
      {/* NOTE: Sits outside the form provider to prevent re-rendering when changing playbook */}
      <Form.Stepper />
      <Form.Form name="create-character">
        {/* TODO: Investigate abstracting away the conditional step rendering. 
          Might also consider moving it into the Form component for handling form validation etc with React Form/Zod */}
        {/* TODO: Investigate if we can just abstract this away with a useMultiStepForm hook */}
        {(!step || step === "1") && <Form.StepOne />}
        {step === "2" && <Form.StepTwo />}
        {step === "3" && <Form.StepThree />}
        {step === "4" && <Form.StepFour />}
      </Form.Form>
      <Form.NavButtons />
    </div>
  )
}
