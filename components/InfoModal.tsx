import useInfoModal from '@/hooks/useInfoModal';
import useMovie from '@/hooks/useMovie';
import React, { useCallback, useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import PlayButton from './PlayButton';
import FavoritesButton from './FavoritesButton';

interface InforModalProps {
    visible?: boolean,
    onClose: any;
}
const InfoModal:React.FC<InforModalProps> = ({visible, onClose}) => {

    const [isVisible, setIsVisible] = useState(!!visible)
    const {movieId} = useInfoModal();

    const {data = {}} = useMovie(movieId)

    useEffect(()=>{
        setIsVisible(!!visible)
    },[visible])

    const handleClosed = useCallback(()=>{

        // console.log('inside handlclosed!s')
        setIsVisible(false)
        setTimeout(()=>{
            onClose()
        },300)
    },[onClose])

    if(!visible){
        return null
    }
  return (
    <div className='z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0'>
      <div className='relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden'>
        <div className={`${isVisible? 'scale-100':'scale-0'}
            transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}>
            <div className='relative h-96'>
                <video 
                className='w-full brightness-[60%] object-cover h-full'
                src={data?.videoUrl}
                autoPlay
                muted
                loop
                poster={data?.thumbnailUrl}
                ></video>
                <div 
                onClick={handleClosed}
                className='absolute top-3 right-3 h-10 w-10 rounded-full bg-black flex items-center justify-center bg-opacity-70 cursor-pointer'>
                    <AiOutlineClose className='text-white' size={20}/>
                </div>
                <div className='absolute bottom-[10%] left-10'>
                    <p className='text-white text-3xl md:text-4xl h-full'>{data?.title}</p>
                    <div className='flex flex-row gap-4 items-center'>
                        <PlayButton movieId={data?.id}/>
                        <FavoritesButton movieId={data?.id}/>
                    </div>
                </div>
            </div>
            <div className='px-12 py-8'>
                    <p className='text-green-400 font-semibold text-lg'>new</p>
                    <p className='text-white  font-semibold text-lg'>{data?.genre}</p>
                    <p className='text-white font-semibold text-lg'>{data?.duration}</p>
                    <p className='text-white  font-semibold text-lg'>{data?.description}</p>


            </div>
        </div>
      </div>
    </div>
  )
}

export default InfoModal
