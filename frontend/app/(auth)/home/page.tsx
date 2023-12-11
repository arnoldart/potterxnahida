import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className='h-screen w-full mt-5 flex justify-center items-center flex-col'>
        <div className='w-full'>
          <div className='text-center'>
            <p className='text-[40px]'>POTTER X NAHIDA</p>
            <p className='text-[35px]'>Silahkan pilih road map yang ingin anda pelajari</p>
          </div>
          <div className='flex justify-between mt-16'>
            <Link href={''}>
              <div className='bg-red-500 px-5 py-3 text-[70px] rounded-[3rem] border-4 border-black'>
                <p className='text-white'>Read Team</p>
              </div>
            </Link>
            <Link href={''}>
              <div className='bg-blue-500 px-5 py-3 text-[70px] rounded-[3rem] border-4 border-black'>
                <p className='text-white'>Blue Team</p>
              </div>
            </Link>
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
