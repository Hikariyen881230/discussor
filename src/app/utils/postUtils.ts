import axios from 'axios'

interface FormData {
  userId: string
  title: string
  content: string
  tags?: string[]
}

const getFormData = (event: React.FormEvent<HTMLFormElement>): FormData => {
  const formData = new FormData(event.target as HTMLFormElement)

  const tags = formData.getAll('tags')[0].toString().split(',')

  return {
    userId: formData.get('userId') as string,
    title: formData.get('title') as string,
    content: formData.get('content') as string,
    tags: tags,
  }
}

export const postSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  const formData = getFormData(event)

  const response = await axios.request({
    method: 'post',
    url: '/api/newPost',
    data: {
      userId: formData.userId,
      title: formData.title,
      content: formData.content,
      tags: formData.tags,
    },
  })
}
