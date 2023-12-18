'use client'
import { checkAuth } from '@/utils/checkAuth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function Home() {
  const router = useRouter()
  const [transactionData, setTransactionData] = useState([]);
  const [isSubscribedRed, setIsSubscribedRed] = useState(false);
  const [isSubscribedBlue, setIsSubscribedBlue] = useState(false);

  useEffect(() => {
    // Cek apakah pengguna telah login
    if (!checkAuth()) {
      // Jika tidak, redirect ke halaman login
      router.push('/login');
    }else {
      router.push('/')
      fetchTransactionData(Cookies.get('id'));

    }
  }, []);

  const fetchTransactionData = async (searchUsername: any) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/get_transactions_all_users?user_id=${searchUsername || ''}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTransactionData(data);
      } else {
        console.error('Error fetching user data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    transactionData?.data?.map((data: any) => {
      if (data.transaction_type == 'Red') {
        setIsSubscribedRed(true);
      } else if (data.transaction_type == 'Blue') {
        setIsSubscribedBlue(true);
      }
    });
  }, [transactionData]);

  return (
    <main>
      <section className='px-6 h-screen w-full mt-5 flex justify-center items-center flex-col'>
        <div className='w-full'>
          <div className='text-center'>
            <p className='text-[40px]'>POTTER X NAHIDA</p>
            <p className='text-[35px]'>Silahkan pilih road map yang ingin anda pelajari</p>
          </div>
          <div className='flex justify-between mt-16'>
            <Link href={!isSubscribedBlue ? '/red' : '/roadmapRed' }>
              <div className='bg-red-500 px-5 py-3 text-[70px] rounded-[3rem] border-4 border-black'>
                <p className='text-white'>Read Team</p>
              </div>
            </Link>
            <Link href={!isSubscribedRed ? '/blue' : '/roadmapBlue' }>
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
