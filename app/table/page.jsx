"use client"
import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "@/components/Tabla";

export default function table() {
  return (
    <div className="container mx-auto mt-8">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Table</h1>
    <div className="border border-gray-300 p-4 w-full h-auto">
    <Canvas
          camera={{ position: [-10, 5, 7] }}
          style={{height: "720px" }}
          className='w-full h-auto'
        >
          {/* Ambient light to provide some overall illumination */}
          <ambientLight intensity={0.5} />
          {/* Directional light simulating sunlight */}
          <directionalLight position={[20, 10, 10]} intensity={1} />
          <directionalLight position={[0, 0, 0]} intensity={1} />
          <directionalLight position={[-10, -10, -10]} intensity={1} />
          <directionalLight position={[-20, -20, -20]} intensity={1} />
          {/* Point light for additional lighting, if needed */}
          <pointLight position={[10, 10, 10]} />
          
          <Model /> {/* Use the Model component here */}
          
          <OrbitControls />
        </Canvas>
    </div>
  </div>
  )
}
