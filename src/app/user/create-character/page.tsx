import { PlaybookProvider } from "@/lib/contexts/PlaybookContext"
import * as Character from "@/ui/form"

import { PocComponent } from "./poc-component"

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <>
      <PlaybookProvider>
        <Character.Form searchParam={searchParams?.archetype}>
          <Character.SelectPlaybook />
          <Character.InputName />
          <Character.SelectBackground />
          <Character.SelectDemeanour />
        </Character.Form>
        <PocComponent />
      </PlaybookProvider>
    </>
  )
}
