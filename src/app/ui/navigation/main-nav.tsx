import Link from "next/link"

function MainNav() {
  return (
    <div>
      <Link href="/">
        <img
          src="/images/legends-logo_1x.webp"
          alt="Avatar Legends"
          width={250}
        />
      </Link>
      {/* Signed In */}
      {/* List of Characters */}
      {/*  Option to Create a Character (redirect) */}
    </div>
  )
}

export default MainNav
