import React from 'react'
import Link from 'next/link'

type Props = {}

function QuestionCard({}: Props) {
  return (
    <div className="text-slate-800 shadow-sm border-b-2 border-gray-1 px-6 py-3 w-full h-[8.5rem] bg-slate-50 hover:bg-slate-100">
      <Link href="/" className="h-full w-full flex flex-col justify-between">
        <span className="text-sm text-slate-600">Javascript</span>
        <div>
          <h4 className="text-xl whitespace-nowrap overflow-hidden text-ellipsis">
            #React React-Native存取URL報錯TypeError: Network request
            failed［已解決］
          </h4>
          <p className="whitespace-nowrap overflow-hidden text-ellipsis">
            我在寫一個簡單的登入功能，在使用API 的時候出現TypeError: Network
            request failed 的exception。 我問過chatGPT跟
            搜尋過網絡，大部分的資訊都指向需要在AndroidManifest.xml 新增
            可是我的android/app/src/main
            根本沒有xml這個資料夾，但我還是根據上面連結的方法新增xml folder
            並創建react_native_config.xml，結果卻出現以下錯誤：
          </p>
        </div>
        <div className="flex gap-2">
          <div>
            <i className="bx bx-like"></i>
            <span>18</span>
          </div>
          <div>
            <i className="bx bx-message-dots"></i>5
          </div>
          <div>
            <i className="bx bx-bookmark"></i>
            <span>收藏</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default QuestionCard
