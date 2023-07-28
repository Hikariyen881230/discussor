import bcrypt from 'bcrypt'
import prisma from '../../libs/prismaDB'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { email, password } = await req.json()
  if (!email || !password) {
    return new NextResponse('請檢查是否填入正確的資料', { status: 400 })
  }
  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (exist) {
    throw new Error('信箱已存在!')
  }
  const hashedPassword = (await bcrypt.hash(password, 10)) as string
  const user = await prisma.user.create({
    data: {
      email,
      hashedPassword,
    },
  })

  return NextResponse.json(user)
}
