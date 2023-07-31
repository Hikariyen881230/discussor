import axios from 'axios'
import { signIn } from 'next-auth/react'

interface FormData {
  email: string
  password: string
  confirmPassword?: string
}

const getFormData = (event: React.FormEvent<HTMLFormElement>): FormData => {
  const formData = new FormData(event.target as HTMLFormElement)

  return {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string | undefined,
  }
}

export const SignUpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const formData = getFormData(event)

  if (formData.password === formData.confirmPassword) {
    try {
      const response = await axios
        .request({
          method: 'post',
          url: '/api/register',
          data: { email: formData.email, password: formData.password },
        })
        .then(() => {
          alert('註冊成功!')
        })
        .catch(() => {
          alert('發生錯誤，請稍後再試!')
        })
    } catch (error) {
      console.error('regist failed:', error)
    }
  } else {
    console.log('Passwords do not match.')
  }
}

export const LogInSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const formData = getFormData(event)
  const result = await signIn('credentials', {
    email: formData.email,
    password: formData.password,
    redirect: true,
    callbackUrl: '/',
  })
    .then(() => {
      alert('登入成功!')
    })
    .catch(() => {
      alert('登入失敗!')
    })
}

export const postSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
}
