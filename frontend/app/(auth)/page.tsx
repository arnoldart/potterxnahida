import Image from 'next/image'

export default function Auth() {
  return (
    <main>
      <section className='flex justify-center items-center h-screen w-auto max-w-[30rem] mx-auto'>
        <div className='flex-1'>
          gambar
        </div>
        <div className='flex-1'>
          <p className='text-center'>Selamat Datang</p>
          <form className='text-black'>
            <input className='' type="text" placeholder='Username' />
            <input className='' type="text" placeholder='Nomor Telepon' />
          </form>
          <div className='bg-blue-700 cursor-pointer'>
            <p className='text-center'>Login</p>
          </div>
        </div>
      </section>
    </main>
  )
}
