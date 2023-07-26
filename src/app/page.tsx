'use client'

import Topics from './components/Topics/Topics'
import QuestionCard from './components/QuestionCard/QuestionCard'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="pl-1 md:px-12 pt-8">
      <div>
        <h2 className="text-3xl font-normal topic tracking-wider">
          <i className="bx bx-home-alt pr-1"></i>
          熱門主題
        </h2>
        <div className="mt-8 pl-5">
          <Topics />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-normal topic tracking-wider ">
          <i className="bx bx-bulb"></i>最新問題
        </h2>
        <div className=" text-base font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li>
              <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-slate-700 hover:border-slate-700 dark:hover:text-slate-700 text-slate-700 border-slate-700">
                全部
              </button>
            </li>
            <li>
              <button className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-slate-700 hover:border-slate-700 dark:hover:text-slate-700">
                最新
              </button>
            </li>
          </ul>
        </div>
        <div>
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
      </div>
    </div>
  )
}
