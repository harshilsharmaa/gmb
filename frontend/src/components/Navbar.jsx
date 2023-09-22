import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const {user} = useSelector((store)=>store.user);
    console.log(user);

  return (
    <div className='flex justify-between items-center mt-2 px-8 sm:pl-6'>
        <h3 className='font-bold text-xl hidden sm:block'>GLG</h3>
        <div className='flex items-center'>
            <div className=' items-center bg-white rounded-lg pr-2 hidden sm:flex'>
                <input type='text' className='rounded-l-lg outline-none px-3 py-2 w-56' placeholder='Search...'/>
            </div>
            
            {
                user?.photoURL? <img
                className="h-8 ml-5 rounded-full"
                src={user.photoURL}
                alt="user icon"
                />
                :
                <img
                    className="h-8 ml-5"
                    src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
                    alt="user icon"
                />
            }
        </div>
    </div>
  )
}

export default Navbar

// <span className='ml-5'>{notificationIcon}</span>