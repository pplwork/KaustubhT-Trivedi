import Image from 'next/image'
import React from 'react'
import { BeakerIcon, GlobeIcon, SparklesIcon, VideoCameraIcon, ChatIcon, BellIcon, PlusIcon, SpeakerphoneIcon, MenuIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, HomeIcon, SearchCircleIcon, } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'

function Header() {

    const { data: session } = useSession()


    return (
        <div className='sticky top-0 z -50 flex bg-white px-4 py-2 shadow-sm'>
            <div className='relative h-10 w-20 flex-shrink-0'>
                <Image objectFit='contain' src={'https://links.papareact.com/fqy'} layout="fill" />
            </div>
            <div className='flex items-center mx-7 xl:min-w-[300px]'>
                <HomeIcon className='h-5 w-5' />
                <p className='flex-1 hidden lg:inline ml-2'>Home</p>
                <ChevronDownIcon className='h-5 w-5' />
            </div>

            {/* search box */}
            <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1'>
                <SearchCircleIcon className='h-6 w-6 text-gray-400' />
                <input className='flex-1 bg-transparent outline-none' type="text" placeholder='Search Reddit' />
                <button type='submit' hidden></button>
            </form>
            <div className='text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex'>
                <SparklesIcon className="icon" />
                <GlobeIcon className="icon" />
                <VideoCameraIcon className="icon" />
                <hr className='h-10 border border-gray-100' />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <PlusIcon className="icon" />
                <SpeakerphoneIcon className="icon" />
            </div>
            <div className='ml-5 flex items-center lg:hidden'>
                <MenuIcon className='icon' />
            </div>
            {/* Sign In / Sign Out button */}
            {session ? (<div onClick={() => signOut()} className='hidden lg:flex items-center space-x-2 border border-gray-100 hover:cursor-pointer'>
                <div className='relative h-5 w-5 flex-shrink-0'>
                    <Image objectFit='contain' src="https://links.papareact.com/23l" alt="" layout='fill' />
                </div>
                <div className='flex-1 text-xs'>
                    <p className='truncate'>{session.user?.name}</p>
                    <p className='text-gray-400'>☀️1 karma</p>
                </div>
                <ChevronDownIcon className='h-5 flex-shrink-0 text-gray-500'/>

            </div >) : (<div onClick={() => signIn()} className='hidden lg:flex items-center space-x-2 border border-gray-100 hover:cursor-pointer'>
                <div className='relative h-5 w-5 flex-shrink-0'>
                    <Image objectFit='contain' src="https://links.papareact.com/23l" alt="" layout='fill' />
                </div>
                <p className='text-gray-400'>Sign In</p>
            </div >)
            }

        </div >

    )
}

export default Header