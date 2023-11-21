import Image from 'next/image'
import  AboutSection from '@/components/AboutSection'
import Project from '@/components/Project'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AboutSection/>
      <Project/>
     
    </main>
  )
}
