import React from "react"

function UserLayout({ children }: { children: React.ReactNode }) {
  return <div className="container">{children}</div>
}

export default UserLayout
