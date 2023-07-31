import PostButton from '../components/PostButton/PostButton'

interface Props {}

export default function MyForum(props: Props) {
  return (
    <div>
      Myforum
      <PostButton position="absolute" right="right-2" bottom="bottom-2" />
    </div>
  )
}
