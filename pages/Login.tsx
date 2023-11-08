import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@mui/material'
import { useForm, SubmitHandler } from "react-hook-form"
import { Interface } from 'readline'
import Link from 'next/link'
import { useRouter } from 'next/router'


interface Inputs  {
  email: string
  password: string
}

function Login() {
  const router=useRouter()
  const routerHandle=()=>{
    router.push("/")
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
const onSubmit=(data:Inputs)=>console.log(data)

 
  return (
    <div className='relative flex  h-screen w-screen md:items-center md:justify-center md:bg-transparent'>
     <Head>
        <title>Netflix</title>
        <link rel='icon' href='/fabicon.ico'/>
    </Head>
   <button  onClick={()=>router.push("/")}>

  
    <Image
    alt='img'
    src="https://rb.gy/p2hphi"
    layout='fill'
    className='-z-10 !hidden opacity-60 sm:!inline'
    objectFit='cover'/>
       <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
       alt='img'
      />
       </button>
      <form onSubmit={handleSubmit(onSubmit) } className='relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 w-full md:max-w-md md:px-14'>
        <h1 className='text-4xl font-semibold'>Sign In</h1>
        <div className='flex flex-col space-y-4'>
          <label htmlFor="" className='w-full'>
            <input {...register("email", { required: true,pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} type="email" className='input' name="email" placeholder='Email'/>
          </label>
         {
          errors.email?.type ==="required"&&(<p className="text-orange-500 text-sm">Email is required</p>)
         }
         {
          errors.email?.type ==="pattern"&&(<p className="text-orange-500 text-sm">Please enter a valid email</p>)
         }
          <label htmlFor="" className='w-full'>
            <input {...register("password", { required: true,minLength:6,maxLength:20 })} type="password" name="password"  placeholder='password' className='input'/>
          </label>
          {
            errors.password?.type==="required"&&(<p className="text-orange-500 text-sm">password is required</p>)
          }
          {
            errors.password?.type==="minLength"&&(<p className="text-orange-500 text-sm">password must contains at least 6 character</p>)
          }
          {
            errors.password?.type==="maxLength"&&(<p className="text-orange-500 text-sm">password cant exceed 20 character</p>)
          }
        </div>
        <button type='submit' className='w-full rounded bg-[#e50904] text-white font-semibold h-10'>Sign In</button>
        <div className='text-gray-500'>
          New to Netflix?
          <Button   className='text-[#e5e5e5] hover:underline'>Sign up now</Button>
        </div>
      </form>
    
    </div>
  )
}

export default Login