// As client component
'use client'

import '../styles/layout.css'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

export default function SideMenu() {
  const [collapse, setCollapse] = useState(false)

  function hanldeCollapse() {
    setCollapse(!collapse)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <div
      className={`sidebar relative h-screen px-4 py-2 bg-slate-900 ${
        !collapse ? 'active' : ''
      }`}
    >
      <div className="logoContent relative">
        <div
          className={`logo text-white flex w-full h-14  items-center ${
            !collapse ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <i className="bx bx-pulse text-2xl mr-1"></i>
          <div className="logo-name text-2xl font-medium">Discussor</div>
        </div>
        <i
          className="btn-menu cursor-pointer bx bx-menu text-white absolute text-3xl text-center top-4 right-2"
          onClick={hanldeCollapse}
        ></i>
      </div>
      <ul className="menu-list mt-5 text-white">
        <li>
          <i
            role="button"
            className="bx bx-search absolute h-full pr-1 z-10 text-center"
            onClick={hanldeCollapse}
          ></i>
          <form
            method="GET"
            onSubmit={(e) => {
              handleSubmit(e)
            }}
          >
            <input className="search-bar" type="text" placeholder="搜尋" />
            <button hidden type="submit"></button>
          </form>
          <span className="tool-tip">搜尋</span>
        </li>
        <li>
          <Link href="/">
            <i className="bx bx-home-alt"></i>
            <span className={`link-name`}>首頁</span>
          </Link>
          <span className="tool-tip">首頁</span>
        </li>
        <li>
          <Link href="/my-forum">
            <i className="bx bx-bookmark-heart"></i>
            <span className={`link-name`}>我的討論版</span>
          </Link>
          <span className="tool-tip">我的討論版</span>
        </li>
        <li>
          <Link href="/overview">
            <i className="bx bx-category"></i>
            <span className={`link-name`}>所有討論版</span>
          </Link>
          <span className="tool-tip">所有討論版</span>
        </li>
        <li>
          <Link href="/member-center">
            <i className="bx bx-user"></i>
            <span className={`link-name`}>會員中心</span>
          </Link>
          <span className="tool-tip">會員中心</span>
        </li>

        <li>
          <Link href="/settings">
            <i className="bx bx-cog"></i>
            <span className={`link-name`}>設定</span>
          </Link>
          <span className="tool-tip">設定</span>
        </li>
      </ul>
      <div className="porfile-content text-white absolute bottom-0 left-0 w-full">
        <div className="profile relative py-3 h-20 w-full flex items-center flex-wrap">
          <div className="porfile-details h-full flex items-center py-2 -ml-6">
            <Image
              className="rounded-md object-cover"
              src="/avatar.jpg"
              width={45}
              height={45}
              alt=""
            />
            <div className="ml-3">
              <div className="name font-medium text-lg">Keith</div>
              <div className="career font-light">Web Developer</div>
            </div>
          </div>
          <button className="btn-logout -mr-4">
            <i className="bx bx-log-out text-2xl h-full"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
