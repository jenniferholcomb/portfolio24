import React from "react";
import { Canvas, useLoader } from '@react-three/fiber';
import { useMemo } from 'react';
import { Decal, Line, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import styles from "./GreenControl.module.scss";
import profileImg from "./../img/profilepic.png";

function getEllipseShape() {
  const x = 0, y = 0;

  const ellipseShape = new THREE.Shape();

  ellipseShape.ellipse(0,0,2,3,0, Math.PI*2, false,0).getPoints(128);

  // var geometry = new THREE.ShapeBufferGeometry( path );
  // var material = new THREE.MeshBasicMaterial( { color: 0x59d1c1} );
  // var ellipse = new THREE.Mesh( geometry, material );
  // scene.add(ellipse);

  return ellipseShape;
}

const OvalShape = () => {

  const texture = useTexture(profileImg);

  const points = useMemo(() => {
    const points = []
    const geometry = new THREE.BufferGeometry().setFromPoints(
      new THREE.EllipseCurve(0, 0, 2.5, 3.5, 0, 2 * Math.PI, false, 0).getPoints(128)
    )
    let positions = geometry.attributes.position
    for (let i = 0; i < positions.count; i++) {
      let p = new THREE.Vector3().fromBufferAttribute(positions, i)
      points.push(p)
    }
    return points
  }, [])

  // const texture = useTexture("./img/profilepic.png");

  return (
    
      
    <>
      <OrbitControls />
        <mesh>
          <shapeGeometry args={[getEllipseShape()]}/>
          <Line points={points} color="turquoise" lineWidth={3} />
          <meshNormalMaterial />
          <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={texture} >
            <meshBasicMaterial map={texture} />
          </Decal>

        </mesh>
        {/* <Line points={points} color="turquoise" lineWidth={20} rotation={[0, 0, 1]} />
        <Line points={points} color="turquoise" lineWidth={20} rotation={[0, 0, -1]} /> */}
    </>


  )
}

export default OvalShape;