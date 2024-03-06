"use client"

// export const CheckboxSkeleton = () => (
//   <div className="w-full">
//     <div className="bg-slate-400 w-14">Loading...</div>
//     <div className="grid w-full grid-cols-2 bg-slate-400">
// <div className="bg-slate-600"></div>
// <div className="bg-slate-600"></div>
// <div className="bg-slate-600"></div>
// <div className="bg-slate-600"></div>
// <div className="bg-slate-600"></div>
// <div className="bg-slate-600"></div>
//     </div>
//   </div>
// )

// Unhandled Runtime Error
// Error: Unexpected token '<', "<!DOCTYPE "... is not valid JSON

//updateDehydratedSuspenseComponent
// node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js (16356:0)
// updateSuspenseComponent
// node_modules/next/dist/compiled/react-dom/cjs/react-dom.development.js (16056:0)
export const CheckboxSkeleton = () => (
  <div className="w-full bg-slate-300">
    <div>Loading...</div>
    <div className="w-1/2 bg-slate-600"></div>
    <div className="w-1/2 bg-slate-600"></div>
    <div className="w-1/2 bg-slate-600"></div>
    <div className="w-1/2 bg-slate-600"></div>
    <div className="w-1/2 bg-slate-600"></div>
    <div className="w-1/2 bg-slate-600"></div>
  </div>
)

// export { CheckboxSkeleton }
