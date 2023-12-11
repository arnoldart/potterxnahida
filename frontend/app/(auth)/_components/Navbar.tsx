import Image from "next/image";
import Link from "next/link";

const NavbarAuth = ({ font }: any) => {
  return (
    <div className={font}>
      <div className="bg-[#6B932F] text-white font-bold">
        <div className="flex items-center justify-between py-3 px-5 max-w-[1400px] w-full mx-auto relative">
          <p className="z-10">POTTER X NABILA</p>
          <ul className="flex gap-x-[1.2rem]">
            <li>
              <Link href="/home">
                <p className="cursor-pointer">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/home">
                <p className="cursor-pointer">Courses</p>
              </Link>
            </li>
            <li>
              <Link href="/qna">
                <p className="cursor-pointer">Q&A</p>
              </Link>
            </li>
            <li>
              <Link href="/subscribe">
                <p className="cursor-pointer">Subscribe</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p className="bg-white text-[#B9DA77] px-5 py-1 rounded-full cursor-pointer">Login</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarAuth;
