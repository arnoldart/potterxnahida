import Image from 'next/image';
import Link from 'next/link';

export default function Subscribe() {
  return (
    <main>
      <section className='flex justify-center items-center h-screen w-auto px-10 mx-auto gap-x-[2rem]'>
        <div className='flex justify-center items-center flex-col bg-[#DCF9A1] p-[12rem] rounded-xl gap-y-5'>
          <p className='text-[#6B932F] text-[2rem]'>Bayar</p>
          <p className='text-[#6B932F] text-[2rem]'>Berlangganan</p>
          <div className='px-5 py-3 bg-[#EEFCD0] w-full text-center rounded-lg'>
            <p className='text-[#6B932F]'>089687138815</p>
          </div>
          <div>
            <p className='text-[#6B932F]'>alamat email anda</p>
            <form className='bg-[#EEFCD0]'>
              <input className='outline-none bg-transparent' type="text" required />
              <button className='bg-[#A2C668] w-full text-center border border-black py-3 px-5 rounded-lg cursor-pointer'>
                <p className='text-white'>OK</p>
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="h-screen w-full relative">
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
