import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='bg-black max-w-[1440px] mx-auto' lang="en">
      <body className='w-full mx-auto'>{children}</body>
    </html>
  )
}
