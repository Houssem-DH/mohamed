import React from 'react'
import scene from '@/public/scene.gif'
import Image from 'next/image'
export default function sence() {
  return (
<div className="container mx-auto p-8 min-h-screen">
     
      <div>
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Sence</h1>
    <div className="border border-indigo-500 rounded-lg overflow-hidden shadow-md bordered-div">
      <Image
        src={scene} 
        alt="Animated GIF"
        className="w-full h-auto"
      ></Image>
    </div>
    </div>
   
  </div>
  )
}
