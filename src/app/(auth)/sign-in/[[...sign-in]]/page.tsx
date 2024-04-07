import { SignIn } from "@clerk/nextjs"

import { PATHNAME } from "@/lib/paths"

export default function Page() {
  // TODO: Make this page a little... sexier...

  return (
    <div>
      <SignIn
        redirectUrl={PATHNAME.USER.profile}
        appearance={{
          elements: {
            card: "bg-slate-700/50 text-neutral-100 rounded-md border border-slate-500 z-10 relative",
            socialButtonsIconButton:
              "bg-neutral-100 hover:bg-neutral-300 hover:opacity-50",
            header: "text-neutral-100",
            headerTitle: "text-white font-bold",
            headerSubtitle: "text-neutral-300",
            dividerText: "text-neutral-300",
            dividerLine: "bg-slate-100",
            formFieldLabel: "text-neutral-100 focus:ring-ring",
            formFieldInfoText: "[&>*]:font-bold underline",
            formButtonPrimary: "bg-neutral-900 hover:bg-neutral-800",
            footerActionText: "text-white font-bold",
            footerActionLink: "text-neutral-300 hover:text-neutral-100",
          },
        }}
      />
    </div>
  )
}
