import './globals.css'

export const metadata = {
  title: 'Traditional Health Centre',
  description: 'Our mission is simple, to bring those who are far from Health close to it.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
