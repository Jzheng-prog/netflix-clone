import Input from '@/components/Input'
import React, { useCallback, useState } from 'react'

const Auth = () => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [variant, setVariant] = useState('login')

  const toggleVariant = useCallback(()=>{
    setVariant((currentVaraint)=> currentVaraint === 'login'? 'register': 'login')
  },[])

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpg")] bg-no-repeat bg-fixed bg-cover'>
      <div className='bg-black w-full h-full lg:bg-opacity-50'> 
        <nav className='px-12 py-5'>
            <img src="/images/Netflix-logo.png" alt="" className='h-[100px]'/>
        </nav>
        <div className='flex justify-center'>
          <div className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className='text-white text-4xl mb-8 font-semibold'>
              {variant === 'login'? 'Sign in': 'Register'}
            </h2>
            <div className='flex flex-col gap-4'>
              {
                variant === 'register' && (
                  <Input
                    value={username}
                    label='username'
                    id='username'
                    type='username'
                    onChange={(e:any)=>setUsername(e.target.value)}
                  />
                )
              }
            
            <Input
                value={email}
                label='email'
                id='email'
                type='email'
                onChange={(e:any)=>setEmail(e.target.value)}
            />
            <Input
              value={password}
              label='password'
              id='password'
              type='password'
              onChange={(e:any)=>setPassword(e.target.value)}
            />
            <button className='bg-red-600 py-3 text-white rounded-md  w-full mt-10 hover:bg-red-700 transition'>
              {variant === 'login'? 'Login':'Sign up'}
            </button>
            <p className='text-neutral-500 mt-12'>
              {variant === 'login'?'First Time using Netflix?': 'Already Have an Account?'}
              <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                {variant === 'login'?'Create an Account':'Login'}
              </span>
            </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
