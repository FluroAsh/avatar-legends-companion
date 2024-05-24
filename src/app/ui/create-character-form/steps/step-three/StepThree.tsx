import { Suspense } from "react"
import BasicMoves from "./BasicMoves"

export default function StepThree() {
  return (
    <div className="flex flex-col w-full gap-4 mt-4">
      <Suspense fallback={<div>Loading...</div>}>
        <BasicMoves />
      </Suspense>

      <div>Fighting Techniques</div>
    </div>
  )
}
