import { QueryClient } from "@tanstack/react-query"

import * as Form from "@/app/ui/create-character-form"
import SkipLink from "@/app/ui/shared/skip-link"
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
      <SkipLink id="main-content" />
      <Form.Stepper />
      <Form.Form name="create-character">
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
