import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // console.log(req)

  const { title, content, tags } = await req.json()
  return NextResponse.json({
    title: title,
    content: content,
    tags: tags,
  })
}
