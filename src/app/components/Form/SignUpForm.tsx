'use client'

import React from 'react'
import Link from 'next/link'
import { SignUpSubmit } from '@/app/utils/authUtils'
import { useSession } from 'next-auth/react'

type Props = {}

function SignUpForm({}: Props) {
  const emailRef = React.useRef<HTMLInputElement | null>(null)
  const passwordRef = React.useRef<HTMLInputElement | null>(null)
  const confirmPasswordRef = React.useRef<HTMLInputElement | null>(null)
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
            Sign up
          </h1>
          <form className="mt-6" onSubmit={SignUpSubmit}>
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
            <div className="mb-2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-gray-800"
              >
                Confirm Password
              </label>
              <input
                ref={confirmPasswordRef}
                name="confirmPassword"
                type="password"
                className="caret-transparent focus:caret-black block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-700 focus:ring-slate-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-700 rounded-md hover:bg-slate-600 focus:outline-none focus:bg-slate-600"
              >
                Sign up
              </button>
            </div>
            <p className="mt-8 text-xs font-light text-center text-gray-700">
              {' '}
              Back to{' '}
              <Link
                href="/login"
                className="font-medium text-slate-600 hover:underline"
              >
                Log in
              </Link>
            </p>
          </form>
        </div>
      )}
    </div>
  )
}

export default SignUpForm
