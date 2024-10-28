import useCurrentUser from '@/hooks/useCurrentUser'
import useFavorites from '@/hooks/useFavorites'
import axios from 'axios'
import React, { useCallback, useEffect, useMemo } from 'react'
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'


interface FavoritesButtonProps {
    movieId: string
}
const FavoritesButton: React.FC<FavoritesButtonProps> = ({movieId}) => {
    
    const {mutate: mutateFavorites} = useFavorites()
    const {data: currentUser, mutate} = useCurrentUser()


    const isFavorite = useMemo(()=>{
        const list = currentUser?.favoriteIds || [];
        // console.log("FavBtN List:",list)
        return list.includes(movieId)
    },[currentUser, movieId])

    const toggleFavorites = useCallback( async ()=>{
        let response;
        if(isFavorite){
          response = await axios.delete('/api/favorite',{data:{movieId}})
        }else{
          response = await axios.post('/api/favorite',{data:{movieId}})
        }
        const updatedFavID = response?.data?.favoriteIds;

        mutate({
            ...currentUser,
            favoriteIds: updatedFavID
        })
        mutateFavorites()
    },[movieId, isFavorite, currentUser, mutate, mutateFavorites])

    const Icon = isFavorite? AiOutlineCheck : AiOutlinePlus

    useEffect(()=>{
      console.log('movieid', movieId)
      console.log('currentUser', currentUser)
      console.log('isFavorite', isFavorite)

    },[movieId, currentUser, isFavorite])


  return (
    <div onClick={toggleFavorites} className='rounded-full cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 flex justify-center items-center transition hover:border-neutral-300'>
      <Icon className='text-white' size={25}/>
    </div>
  )
}

export default FavoritesButton
