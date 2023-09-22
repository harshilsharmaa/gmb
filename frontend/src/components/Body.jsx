import React,{useEffect} from 'react'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './Profile';
import Auth from './Auth';
import { BACKEND_URL } from '../utils/constants';
import { addUser, setUserLoading } from '../utils/slices/userSlice';
import axios from 'axios'
import { useDispatch } from 'react-redux';

const Body = () => {

    const dispatch = useDispatch();

    const getUserProfile = async()=>{
        try {
          dispatch(setUserLoading(true));
          const {data} = await axios.get(`${BACKEND_URL}/user/profile`, {withCredentials: true});
          if(data.user){
            dispatch(addUser(data.user));
            dispatch(setUserLoading(false));
          }
        } catch (error) {
          console.log(error)
          dispatch(setUserLoading(false));
        }
      }
  
    useEffect(()=>{
        getUserProfile();
    },[])

  return (
    <div>
        <RouterProvider router={appRouter}/>    
    </div>
  )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Profile/>
    },
    {
        path: "/profile",
        element: <Profile/>
    },
    {
        path: "/login",
        element: <Auth/>
    }
])

export default Body