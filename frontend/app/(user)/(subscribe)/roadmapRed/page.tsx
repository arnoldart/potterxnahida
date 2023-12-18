'use client'
import { checkAuth } from '@/utils/checkAuth';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const RoadMapRedPage = () => {
  const router = useRouter();
  useEffect(() => {
    // Check if the user is authenticated
    if (!checkAuth()) {
      // If not authenticated, redirect to the login page
      router.push('/login');
    } else {
      // If authenticated, fetch user data
    }
  }, []);
  return (
    <div className='flex justify-center mb-[10rem] mt-[10rem]'>
      <Image
        src="/image/roadmap_red.png"
        alt="roadmap_blue"
        width={1000}
        height={1000}
      />
    </div>
  )
}

export default RoadMapRedPage