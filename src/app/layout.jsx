//import

import '@/styles/global.scss';

export const metadata = {
  title: 'Sputnik.today',
  description: 'Build with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
