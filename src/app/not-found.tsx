import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>404 Not Found</h2>
      <p>請確認您的網址是否正確</p>
      <p>
        回到<Link href="/">首頁</Link>
      </p>
    </div>
  )
}
