import useMovie from '@/hooks/useMovie'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Watch = () => {
    const router = useRouter()
    const {movieId} = router.query
    const {data} = useMovie(movieId as string)

    // useEffect(()=>{
    //     console.log('moviesss dat:', data)
    // },[])

  return (
    <div className='h-screen w-screen bg-black'>
        <nav className='
        fixed
        w-full
        flex flex-row
        items-center
        gap-8
        bg-opacity-70
        z-10 p-4'>
            <AiOutlineArrowLeft 
            className='text-white cursor-pointer' 
            size={40}
            onClick={()=>router.push('/')}/>
            <p className='text-white text-1xl md:text-3xl font-bold'>
                <span>Watching:</span> 
                {data?.title}</p>
        </nav>
        <video className='h-full w-full' src={data?.videoUrl} autoPlay controls></video>
    </div>
  )
}

export default Watch
