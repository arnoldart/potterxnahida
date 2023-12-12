import Link from "next/link"

const NavbarAdmin = () => {
  return (
    <div className="h-screen w-[10rem] bg-gray-200 text-center flex-2">
      <p className="mt-3">ADMIN PAGE</p>
      <ul>
        <li>
          <Link href={'/dashboard'}>
            Dashboard
          </Link>
        </li>
        <Link href={'/transaction'}>
          Transaction
        </Link>
      </ul>
    </div>
  )
}

export default NavbarAdmin