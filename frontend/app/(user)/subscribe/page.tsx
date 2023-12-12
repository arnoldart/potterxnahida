'use client'
import { checkAuth } from '@/utils/checkAuth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Subscribe() {
  const [amount, setAmount] = useState(0);
  const router = useRouter()

  useEffect(() => {
    // Cek apakah pengguna telah login
    if (!checkAuth()) {
      // Jika tidak, redirect ke halaman login
      router.push('/login');
    }
  }, []);

  const handleSubscribe = async () => {
    try {
      const response = await fetch('http://localhost:5000/create_transaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // amount,
          user_id: Number(Cookies.get('id')),
          status: 'Sudah Membayar',
          type: 'Blue',
        }),
      });

      if (response.ok) {
        console.log('Langganan berhasil!');
        router.push('/');
        // Lakukan tindakan lanjutan jika diperlukan
      } else {
        console.error('Gagal melakukan langganan');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

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
              <input onChange={(e) => setAmount(Number(e.target.value))} className='outline-none bg-transparent' type="text" required />
            </form>
            <button onClick={handleSubscribe} className='bg-[#A2C668] w-full text-center border border-black py-3 px-5 rounded-lg cursor-pointer'>
              <p className='text-white'>OK</p>
            </button>
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
