'use client'

import Topics from './components/Topics/Topics'

export default function Home() {
  return (
    <div className="container pl-1 md:px-12 mt-9">
      <h2 className="text-4xl w-full font-normal topic tracking-wider">
        <i className="bx bxs-hot text-red-900 pr-1"></i>
        熱門主題
      </h2>
      <div className="mt-5 pl-5">
        <Topics />
      </div>
      <div className="test h-screen w-2"></div>
    </div>
  )
}
