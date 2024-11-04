import React, { useCallback, useEffect, useState } from 'react'
import NavbarItem from './NavbarItem'
import {BsChevronDown, BsSearch, BsBell} from 'react-icons/bs'
import MobileMenu from './MobileMenu'
import AccountMenu from './AccountMenu'
import Image from 'next/image'

const Top_OFFSET = 66;

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false)
    const [showAccMenu, setShowAccMenu] = useState(false)
    const [showBG, setShowBG] = useState(false)

    const toggleMobileMenu = useCallback(()=>{
        setShowMenu((curr)=>!curr)
    },[])
    const toggleAccMenu = useCallback(()=>{
        setShowAccMenu((curr)=>!curr)
    },[])

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > Top_OFFSET){
                setShowBG(true)
            }else{
                setShowBG(false)
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })
  return (
    <nav className='w-full fixed z-40'>
        <div className={`
        px-4 
        md:px-16
        py-5
        flex 
        flex-row
        items-center
        transition
        duration-500
        ${showBG ? 'bg-zinc-900 bg-opacity-90' : ''
        }
        `}>
            <Image src="/images/Netflix-logo.png" alt="logo" className='h-[150px]' width={150} height={150}/>
            <div className='flex-row ml-8 gap-7 hidden lg:flex'>
                <NavbarItem label='Home' />
                <NavbarItem label='Series' />
                <NavbarItem label='New' />
                <NavbarItem label='Popular' />
                <NavbarItem label='My List' />
                <NavbarItem label='Browse by languages' />
            </div>

            <div onClick={()=>toggleMobileMenu()} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                <p className='text-white text-sm hover:text-gray-500'>Browse</p>
                <BsChevronDown className={`text-white transition ${showMenu? 'rotate-180':'rotate-0'}`}/>
                <MobileMenu visible={showMenu}/>
            </div>
            <div className='flex flex-row ml-auto gap-7 items-center'>
                <div className='text-white hover:text-gray-300 cursor-pointer'>
                    <BsSearch/>
                </div>
                <div className='text-white hover:text-gray-300 cursor-pointer'>
                    <BsBell/>
                </div>
                <div onClick={()=>toggleAccMenu()} className='flex flex-row items-center gap-2 cursor-pointer relative'>
                    <div className='w-8 h-8 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
                        <Image src="/images/blue-prof.jpg" alt="blue-prof" width={100} height={100}/>
                    </div>
                    <BsChevronDown className={`text-white transition ${showAccMenu? 'rotate-180':'rotate-0'}`}/>
                    <AccountMenu visible={showAccMenu}/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
