'use client'

import React from 'react'
import Link from 'next/link'
import { LogInSubmit } from '@/app/utils/authUtils'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'

type Props = {}

function LogInForm({}: Props) {
  const emailRef = React.useRef<HTMLInputElement | null>(null)
  const passwordRef = React.useRef<HTMLInputElement | null>(null)
  const session = useSession()

  return (
    <div className="relative h-[95vh] flex flex-col justify-center overflow-hidden">
      {session?.status === 'authenticated' ? (
        <div className="text-center tracking-widest">
          <h2 className="text-3xl font-bold">您已登入</h2>
          <p className="text-xl mt-1">
            點此回到
            <Link className=" text-slate-600 hover:text-slate-900" href={'/'}>
              首頁
            </Link>
          </p>
        </div>
      ) : (
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-slate-700 ">
            Log in
          </h1>
          <form className="mt-6" onSubmit={LogInSubmit}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 "
              >
                Email
              </label>
              <input
                ref={emailRef}
                name="email"
                type="email"
                className="caret-transparent focus:caret-black tracking-widest block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-700 focus:ring-slate-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                ref={passwordRef}
                name="password"
                type="password"
                className="caret-transparent focus:caret-black block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-700 focus:ring-slate-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <Link
              href="/reset-password"
              className="text-xs text-slate-600 hover:underline"
            >
              Forget Password?
            </Link>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-700 rounded-md hover:bg-slate-600 focus:outline-none focus:bg-slate-600"
              >
                Login
              </button>
            </div>
          </form>
          <div className="relative mt-4">
            <div className="text-slate-600 text-sm h-full text-center relative">
              or
            </div>
            <div className="border-t-2 absolute w-[45%] top-1/2"></div>
            <div className="border-t-2 absolute w-[45%] top-1/2 right-0"></div>
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={() => {
                signIn('github')
              }}
              className="py-2 px-4 flex justify-center items-center bg-black hover:bg-gray-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            >
              <i className="bx bxl-github text-xl -ml-2 pr-1"></i>
              <span className="ml-1">Sign in with Github</span>
            </button>
            <button
              type="button"
              className="mt-2 py-2 px-4 w-full flex justify-center items-center bg-[#fff] hover:bg-[#f1f1f1da]  focus:ring-offset-blue-200 text-dark transition ease-in duration-200 text-center text-base font-normal shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              onClick={() => {
                signIn('google')
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </svg>
              Sign up with Google
            </button>
          </div>
          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {' '}
            Don&apos;t have an account?{' '}
            <Link
              href="/sign-up"
              className="font-medium text-slate-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      )}
    </div>
  )
}

export default LogInForm
