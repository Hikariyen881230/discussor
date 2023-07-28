import './globals.css'
import SideMenu from './components/Sidemenu/Sidemenu'
import Providers from './components/Providers/Providers'

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
      <body className="h-screen relative">
        <Providers>
          <div className="flex h-full relative">
            <SideMenu />
            <main className="relative flex-1 overflow-y-scroll sm:overflow-y-auto m-0 sm:m-3">
              <div className="absolute left-24 sm:static w-full">
                {children}
              </div>
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
