'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerRegister = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/add_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        // Registrasi berhasil, Anda mungkin ingin melakukan navigasi atau menangani respons API sesuai kebutuhan
        console.log('Registrasi berhasil!');
      } else {
        // Registrasi gagal, Anda dapat menangani kesalahan di sini
        console.error('Registrasi gagal!');
      }
    } catch (e) {
      console.error('Error Register', e)
    }
  }

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
            <input onChange={(e) => setUsername(e.target.value)} className='p-2 text-lg outline-none border border-gray-500' type="text" placeholder='Username' />
            <input onChange={(e) => setEmail(e.target.value)} className='p-2 text-lg outline-none border border-gray-500' type="text" placeholder='Email' />
            <input onChange={(e) => setPassword(e.target.value)} className='p-2 text-lg outline-none border border-gray-500' type="text" placeholder='Password' />
          </form>
          <div onClick={handlerRegister} className='bg-blue-700 cursor-pointer mt-3 rounded py-3'>
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
