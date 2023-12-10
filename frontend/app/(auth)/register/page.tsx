import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
  return (
    <main>
      <section className='flex justify-center items-center h-screen w-auto px-10 mx-auto gap-x-[2rem]'>
        <div className='flex-1'>
          <div style={{ width: '550px', height: '550px', position: "relative" }}>
            <Image
              src='/image/nahida1.png'
              objectFit='contain'
              layout='fill'
              alt='nahida login'
            />
          </div>
        </div>
        <div className='flex-1 bg-white p-5 rounded'>
          <p className='text-center'>Selamat Datang</p>
          <form className='text-black flex flex-col gap-y-3 mt-3'>
            {/* Menambahkan style untuk memperbesar input */}
            <input className='p-2 text-lg outline-none border border-gray-500' type="text" placeholder='Username' />
            <input className='p-2 text-lg outline-none border border-gray-500' type="text" placeholder='Email' />
            <input className='p-2 text-lg outline-none border border-gray-500' type="text" placeholder='Password' />
          </form>
          <div className='bg-blue-700 cursor-pointer mt-3 rounded py-3'>
            <p className='text-center text-white text-xl'>Register</p>
          </div>
          <Link href='/'>
            <p className='text-blue-500'>Sudah punya akun?</p>
          </Link>
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
