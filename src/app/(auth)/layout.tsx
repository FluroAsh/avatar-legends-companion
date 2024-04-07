function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container relative grid place-items-center">{children}</div>
  )
}

export default AuthLayout
