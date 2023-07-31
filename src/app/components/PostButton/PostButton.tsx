import React from 'react'
import Link from 'next/link'

type Props = {
  position: string
  top?: string
  left?: string
  bottom?: string
  right?: string
}

function PostButton({ position, top, left, bottom, right }: Props) {
  return (
    <div
      className={`${position} ${top} ${bottom} ${left} ${right} w-9 h-9 md:w-12 md:h-12 `}
    >
      <div className="bg-slate-700 rounded h-full w-full flex justify-center items-center hover:bg-slate-500 transition cursor-pointer">
        <Link href="/new-post">
          <i className="bx bxs-edit text-2xl text-white"></i>
        </Link>
      </div>
    </div>
  )
}

export default PostButton
