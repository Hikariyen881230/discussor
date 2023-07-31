import React from 'react'

type Props = {
  text: string
}

export default function Button({ text }: Props) {
  return (
    <button className="px-2 py-2 min-w-[75px] bg-slate-700 text-white rounded-sm text-md hover:bg-slate-600 transition">
      {text}
    </button>
  )
}
