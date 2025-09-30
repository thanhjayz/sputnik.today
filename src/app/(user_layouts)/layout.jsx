

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title: 'Sputnik.today',
  description: 'Build with Next.js',
}

export default function user_layouts({ children }) {
  return (
    <>
    <Header className="" />
    {children}
    <Footer />
    </>
    
  )
}
