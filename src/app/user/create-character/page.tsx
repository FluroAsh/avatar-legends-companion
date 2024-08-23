import { QueryClient } from "@tanstack/react-query"

import * as Form from "@/features/character-form"
import SkipLink from "@/components/skip-link"
import { DEFAULT_PLAYBOOK } from "@/lib/constants"
import { fetchPlaybook } from "@/lib/helpers"

const currentStep = {
  "1": <Form.StepOne />,
  "2": <Form.StepTwo />,
  "3": <Form.StepThree />,
  "4": <Form.StepFour />,
} as Record<string, JSX.Element>

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const qc = new QueryClient()
  const { step } = searchParams ?? {}

  const initialPlaybook = await fetchPlaybook(DEFAULT_PLAYBOOK)

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
        {currentStep[step ?? "1"]}
        <Form.NavButtons />
      </Form.Form>
    </div>
  )
}
