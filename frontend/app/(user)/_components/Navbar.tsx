'use client'

import { checkAuth, removeToken } from "@/utils/checkAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = ({ font }: any) => {
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
    <div className={font}>
      <div className="bg-[#6B932F] text-white font-bold">
        <div className="flex items-center justify-between py-3 px-5 max-w-[1400px] w-full mx-auto relative">
          <p className="z-10">POTTER X NABILA</p>
          <ul className="flex gap-x-[1.2rem]">
            <li>
              <Link className="cursor-pointer" href="/">
                Home  
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" href="/qna">
                Q&A 
              </Link>
            </li>
            <li>
              <Link className="cursor-pointer" href="/subscribe">
                Subscribe 
              </Link>
            </li>
            <li>
              <div onClick={handleLogin} className="bg-white text-[#B9DA77] px-5 py-1 rounded-full cursor-pointer">
                <p>Logout</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;