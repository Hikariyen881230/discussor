import './globals.css'
import SideMenu from './components/Sidemenu/Sidemenu'

export const metadata = {
  title: 'Discussor',
  description: 'All develop could be a discussor here.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* box-icon */}
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <SideMenu />
        {children}
      </body>
    </html>
  )
}
