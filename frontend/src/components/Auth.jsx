import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, setUserLoading } from '../utils/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const {user, loading} = useSelector((store)=>store.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(()=>{
        if(user){
            navigate('/profile');
        }
    },[user])

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            dispatch(setUserLoading(true));
            const {data} = await axios.post(`${BACKEND_URL}/auth/login`,{email, password}, {
                headers:{
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            if(data?.user){
                dispatch(addUser(data.user));
            }
            dispatch(setUserLoading(false));
            
        } catch (error) {
            console.log(error);
            setError(error.response.data.error);
            dispatch(setUserLoading(true));
        }
    }

  return (
    <div className='flex flex-col sm:flex-row h-screen w-full bg-gray-100'>
        <div className='w-screen m-auto p-3 sm:w-[60%] bg-gray-100 flex flex-col justify-center '>
            <div className=' flex flex-col m-auto bg-white p-3 rounded-lg'>
                <h2 className='text-4xl font-bold'>Sign In</h2>
                <h4>Sign in to your account</h4>
                {error && <h1 className='text-red-600 text-center'>{error}</h1> }
                <form onSubmit={(e)=>handleSubmit(e)} className='mt-3 p-5 w-96 flex flex-col bg-white rounded-xl'>
                    <label className='text-gray-700'>Email Address</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} className='mt-1 bg-gray-100 px-3 py-2 w-80 rounded-lg m-auto'></input>

                    <label className='text-gray-700 mt-4'>Password</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} className='mt-1 bg-gray-100 px-3 py-2 w-80 rounded-lg m-auto'></input>

                    <a className='text-blue-800 text-sm cursor-pointer font-medium mt-4'>Forgot Password?</a>

                    <button type='submit' className='mt-4 bg-black text-white px-8 py-2 rounded-xl w-80 m-auto'>Sign In</button>
                </form>
                <h4 className='text-gray-500 text-center text-base font-medium mt-4'>Don't have an account? <a className='text-blue-800 cursor-pointer'>Register here</a></h4>
            </div>
        </div>
        </div>
  )
}

export default Auth