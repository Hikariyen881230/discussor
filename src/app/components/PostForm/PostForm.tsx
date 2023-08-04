'use client'

import React, { useState } from 'react'
import Button from '../Button/Button'
import { postSubmit } from '@/app/utils/postUtils'
import { useSession } from 'next-auth/react'

type Props = {}

const PostForm = (props: Props) => {
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState<string>('')
  const { data: session } = useSession()

  function addTag(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      event.preventDefault()
      const tag = newTag.replace(/\s+/g, ' ').trim()
      if (tag.length > 0 && !tags.includes(tag)) {
        const newTags = tag.split(',')
        setTags((prevTags) => [...prevTags, ...newTags])
      }
      setNewTag('')
    }
  }
  function deleteTag(index: number) {
    let newTags = [...tags]
    newTags.splice(index, 1)
    setTags([...newTags])
  }

  return (
    <div className="h-[95vh] flex items-center justify-center">
      <form
        className="w-3/5 min-h-5/6 shadow-md border border-slate-400 rounded py-6 px-12 text-slate-700"
        onSubmit={postSubmit}
      >
        <div>
          <h2 className="text-2xl">新貼文</h2>
        </div>
        <section className="mt-4">
          <div>
            <label htmlFor="title" className="block text-xl">
              標題
            </label>
            <input
              className="post-input shadow-md mt-2"
              type="text"
              name="title"
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-xl">
              內文
            </label>
            <textarea
              className="post-input shadow-md mt-2"
              name="content"
            ></textarea>
          </div>
          <div className="tags-content mt-4">
            <div className="flex gap-2 items-end">
              <h3 className="text-xl">標籤</h3>
              <p className="text-slate-500 text-sm">按Enter新增標籤</p>
            </div>
            <div className="tag-box">
              <ul className="flex p-2 rounded mt-2">
                {tags.map((tag, index) => {
                  return (
                    <li key={index}>
                      {tag}{' '}
                      <i
                        className="bx bx-x"
                        onClick={() => {
                          deleteTag(index)
                        }}
                      ></i>
                    </li>
                  )
                })}
                <input
                  value={newTag}
                  type="text"
                  className="flex-1 border-none outline-none p-[5px]"
                  onChange={(e) => {
                    setNewTag(e.target.value)
                  }}
                  onKeyDown={(e) => {
                    addTag(e)
                  }}
                />
                <input type="text" name="tags" hidden defaultValue={tags} />
                <input
                  type="text"
                  name="userId"
                  hidden
                  defaultValue={session?.user.id}
                />
              </ul>
            </div>
          </div>
          <div className="w-full flex justify-end mt-5">
            <Button text="發文" />
          </div>
        </section>
      </form>
    </div>
  )
}

export default PostForm
