'use client'
import { checkAuth, removeToken } from "@/utils/checkAuth";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";

const NavbarAdmin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(checkAuth());
  const router = useRouter();

  const handleLogin = () => {
    if (isLoggedIn) {
      removeToken();
      setIsLoggedIn(false);
      router.push('/login');
    }
  };
  return (
    <div className="h-screen w-[10rem] bg-gray-200 text-center flex-2 px-5 py-3 flex flex-col justify-between">
      <div>
        <p className="font-bold">ADMIN PAGE</p>
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
      <div onClick={handleLogin} className="bg-red-500 text-white rounded cursor-pointer">
        <p>Logout</p>
      </div>
    </div>
  )
}

export default NavbarAdmin