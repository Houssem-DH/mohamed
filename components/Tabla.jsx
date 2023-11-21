"use client"
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/tabla.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={materials.Material} position={[2.72, 0.786, 2.862]} scale={[4.857, 0.076, -2.616]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.003']} position={[0.329, -0.217, 0]} scale={[1, 0.11, 1]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.002']} position={[4.284, -0.161, 0.057]} scale={[1, 0.11, 1]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.005']} position={[4.324, -0.217, 5.834]} rotation={[Math.PI, -0.029, Math.PI]} scale={[1, 0.11, 1]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.004']} position={[0.321, -0.257, 5.897]} rotation={[Math.PI, -0.029, Math.PI]} scale={[1, 0.11, 1]} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.007']} position={[0.01, -1.903, 2.982]} scale={25696.877} />
    </group>
  )
}

useGLTF.preload('/tabla.glb')
