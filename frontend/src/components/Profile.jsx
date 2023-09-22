import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const {user, loading} = useSelector((store)=>store.user);

    const navigate = useNavigate();

    useEffect(()=>{
        if(!user){
            navigate('/login');
        }
    },[user])

    if(!user){
        navigate('/login');
        return null;
    }

  return (
    <div>
        <div className='m-auto text-center'>
            <h1 className='text-4xl'>Welcome Admin</h1>
            <h1 className='text-3xl'>Email: {user?.email}</h1>
        </div>
    </div>
  )
}

export default Profile