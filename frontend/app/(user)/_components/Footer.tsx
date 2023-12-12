import Image from "next/image"
import Link from "next/link"

const Footer = ({font}:any) => {
  return (
    <footer  className='bg-[#6B932F] text-white relative' >
      <div className={`max-w-[65rem] w-full py-5 px-10 mx-auto bg-[#ACC35B] rounded-[25px] absolute transform -top-20 left-1/2 transform -translate-x-1/2 ${font[1]} z-30`}>
        <div className="flex items-center justify-between">
          <div>
              <p className="text-[65px]">LEARNING TO EXPERT</p>
              <div className="bg-[#6B932F] w-full h-2"></div>
              <p className="text-[34px]">Only $40 for access EXPERT COURSE</p>
            </div>
            <Link href={'/'} className="cursor-pointer">
              <div className="rounded-full py-1 px-16 bg-white text-[#B9DA77] inline-block cursor-pointer">
                <p className="text-[40px]">JOIN NOW</p>
              </div>
            </Link>
       </div>
      </div>
      <div className={`max-w-[1440px] h-96 mx-auto flex justify-center pt-[9rem] gap-x-[10rem] relative font-bold ${font[0]}`}>
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px]">
          <Image 
            src={"/image/nabila26.png"} 
            alt={""}    
            objectFit="contain"
            fill     
          />
        </div>
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px]">
          <Image 
            src={"/image/nahida4.png"} 
            alt={""}    
            objectFit="contain"
            fill     
          />
        </div>
        <div>
          <p>Potter No Counter</p>
          <p>© 2024 . NC Dev</p>
        </div>
        <ul className="flex gap-x-[10rem]">
          <li>Navigation</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer