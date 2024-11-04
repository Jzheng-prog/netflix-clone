import React from 'react'
import { signOut } from 'next-auth/react'
import useCurrentUser from '@/hooks/useCurrentUser'
import Image from 'next/image'
interface AccountMenuProps{
    visible: boolean
}
const AccountMenu:React.FC<AccountMenuProps> = ({visible}) => {

    const {data} = useCurrentUser()

    if(!visible){
        return null
    }
  return (
    <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border border-gray-800 flex'>
      <div className='flex flex-col gap-3'>
        <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
            <Image className="w-8 rounded-md" src="/images/blue-prof.jpg" alt="blue-profile" width={50} height={50} />
            <p className='text-white text-sm group-hover/item:underline'>{data?.name}</p>
        </div>
        <hr  className='bg-gray-600 border-0 h-px my-4'/>
        <div onClick={()=>signOut()} className='text-white px-3 text-center'>
            Sign out of Netflix
        </div>
      </div>
    </div>
  )
}

export default AccountMenu
