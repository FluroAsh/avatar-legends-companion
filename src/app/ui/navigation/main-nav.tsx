import Image from "next/image"
import Link from "next/link"

function MainNav() {
  return (
    <div>
      <Link href="/">
        <Image
          src="/images/legends-logo_1x.webp"
          alt="Avatar Legends"
          width={250}
          height={50}
        />
      </Link>
      {/* Signed In */}
      {/* List of Characters */}
      {/*  Option to Create a Character (redirect) */}
    </div>
  )
}

export default MainNav
