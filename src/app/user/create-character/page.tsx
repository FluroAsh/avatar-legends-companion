import { Suspense } from "react"

import ArchetypeRole from "./ArchetypeRole"
import FormComponent from "./FormComponent"

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <main className="flex flex-col justify-center mt-4">
      <div className="text-center ">
        <h1 className="text-2xl">POC</h1>

        <ArchetypeRole />

        {/* TODO: Suspend this component between imports/fetches when it's not cached */}
        <Suspense fallback={<div>Loading...</div>}>
          <FormComponent searchParam={searchParams?.archetype} />
        </Suspense>

        {/* <div className="w-screen max-w-full p-2 mt-2 overflow-scroll text-left break-words border rounded-sm h-[600px] border-slate-300 bg-slate-600/50">
          <pre>{JSON.stringify(data, null, 4)}</pre>
        </div> */}
      </div>
    </main>
  )
}
