import Link from 'next/link'
import { cardProps } from '@/app/types/propTypes'
import '../styles/layout.css'

const Card = (props: cardProps) => {
  const { topic, url } = props

  return (
    <div className="bg-gradient-to-bl from-slate-500 to-slate-700 w-full sm:w-3/4 rounded-md h-12 relative sm:left-12 transition ease-in duration-200 border-2 border-slate-600">
      <Link
        className="card text-md card-topics w-full h-full flex items-center justify-center tracking-widest text-white"
        href={url as string}
      >
        {topic}
      </Link>
    </div>
  )
}

export default Card
