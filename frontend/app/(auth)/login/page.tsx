'use client'

import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { checkAuth } from '@/utils/checkAuth';

export default function Auth() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter()

  useEffect(() => {
    // Cek apakah pengguna telah login
    if (!checkAuth()) {
      // Jika tidak, redirect ke halaman login
      router.push('/login');
    }else {
      router.push('/')
    }
  }, []);

  const handlerLogin = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.token;
        const role = responseData.role;
        const id = responseData.id;

        Cookies.set('token', token, { expires: 1, path: '/' });
        Cookies.set('id', id, { expires: 1, path: '/' });

        if (role === 'admin') {
          console.log('Admin login berhasil!');
          router.push('/dashboard');
          // Lakukan navigasi atau tindakan lain untuk admin
        } else {
          console.log('User login berhasil!');
          router.push('/');
          // Lakukan navigasi atau tindakan lain untuk user
        }

      } else {
        // Registrasi gagal, Anda dapat menangani kesalahan di sini
        console.error('Login gagal!');
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
            {/* Menambahkan style untuk memperbesar input */}
            <input onChange={(e) => setUsername(e.target.value)} className='p-2 text-lg outline-none border border-gray-500' type="text" placeholder='Username' required />
            <input onChange={(e) => setPassword(e.target.value)} className='p-2 text-lg outline-none border border-gray-500' type="text" placeholder='Password' required />
          </form>
          <div onClick={handlerLogin} className='bg-blue-700 cursor-pointer mt-3 rounded py-3'>
            <p className='text-center text-white text-xl'>Login</p>
          </div>
          <p className='text-black'>Belum punya akun?</p>
          <Link href='/register'>
            <p className='text-blue-500'>buat akun baru</p>
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
