import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
  return (
    <main>
      <section className='h-screen w-full mt-5'>
        <div className='flex flex-col gap-y-5'>
          <div className='h-[20rem] p-7 w-full bg-white rounded-xl border border-4 text-[#6B932F] border-[#6B932F]'>
            <p>Q : bagaimana perasaan developer saat mengembangkan website ini?</p>
            <p>A : Gweh bi lek :V</p>
          </div>
          <div className='h-[20rem] p-7 w-full bg-white rounded-xl border border-4 text-[#6B932F] border-[#6B932F]'>
            <p>Q : bagaimana perasaan developer saat mengembangkan website ini?</p>
            <p>A : Gweh bi lek :V</p>
          </div>
        </div>
      </section>
      <section className="h-[15rem] w-full relative">
        <div className='h-50 w-50 absolute bottom-0'> 
          <Image 
            src='/image/nabila2.png'
            objectFit='contain'
            width={440}
            height={440}
            // fill
            alt='nahida login'
            className='bottom-0 right-0'
          />
        </div>  
      </section>
    </main>
  );
}
