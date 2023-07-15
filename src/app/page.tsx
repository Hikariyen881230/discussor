'use client'

import Topics from './components/Topics/Topics'

export default function Home() {
  return (
    <div className="container px-12 mt-9">
      <h2 className="text-4xl font-normal topic">
        <i className="bx bxs-hot text-red-900 pr-1"></i>
        熱門主題
      </h2>
      <div className="mt-5">
        <Topics />
      </div>
      <div className="test"></div>
    </div>
  )
}
