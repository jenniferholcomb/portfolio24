import { useRef } from "react";
import { motion } from "framer-motion-3d";
import { useMemo } from 'react';
import { Decal, Environment, Line, OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import styles from "./GreenControl.module.scss";
import profileImg from "./../img/profilepic.png";
import profileImg2 from "./../img/Isla1.png";
import { degToRad } from "three/src/math/MathUtils";

function getEllipseShape() {

  const shape = new THREE.Shape();
  const ellipseShape = shape.ellipse(0,0,2,3,0, Math.PI*2, false,0);

  // var geometry = new THREE.ShapeBufferGeometry( path );
  // var material = new THREE.MeshBasicMaterial( { color: 0x59d1c1} );
  // var ellipse = new THREE.Mesh( geometry, material );
  // scene.add(ellipse);

  return ellipseShape;
}

const OvalShape = (isHover) => {

  const texture = useTexture(profileImg);
  const texture2 = useTexture(profileImg2);

  const currTexture = useRef(texture);

  const points = useMemo(() => {
    const points = []
    const curve = new THREE.EllipseCurve(0, 0, 2.3, 3.3, 0, 2 * Math.PI, false, 0).getPoints(128);
    const geometry = new THREE.BufferGeometry().setFromPoints(curve);

    let positions = geometry.attributes.position
    for (let i = 0; i < positions.count; i++) {
      let p = new THREE.Vector3().fromBufferAttribute(positions, i)
      points.push(p)
    }
    return points
  }, [])

  // const lineMaterial = new THREE.LineBasicMaterial( {
  //   color: '#cbdaef',
  //   linewidth: 3,
  //   linecap: 'square', //ignored by WebGLRenderer
  //   linejoin:  'round' //ignored by WebGLRenderer
  // } );

  return (
    <>
      {/* <OrbitControls /> */}
      {/* <Environment preset="dawn" /> */}
      <mesh>

        <Line points={points} color="#e5ddcc" lineWidth={2.5} linecap="square" />
        <motion.mesh
          // initial={{ opacity: 0, scale: 0.5 }}
          // animate={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 3 }}
          whileHover={{           
                rotateZ: 0,
                rotateY: -3.2,
                scale: 1,
                transition: {
                  rotateZ: { duration: 1.5, ease: "linear", repeat: Infinity }
                }}}
          // rotation={[Math.PI / 2, 0, degToRad(360)]}
          // scale={1}
          // animate={[isHover ? "hover" : ""]}
          // variants={{
          //   initial: {
          //     x: [0, 0],
          //     y: [0, 0],
          //     scale: 1
          //   },
          //   hover: {
          //     rotateZ: 0,
          //     rotateY: 0.3,
          //     scale: 1.3,
          //     transition: {
          //       rotateZ: { duration: 1.5, ease: "linear", repeat: Infinity }
          //     }
          //   }
          // }}
        >

          <shapeGeometry args={[getEllipseShape(), 128]}/>
          
          <meshNormalMaterial />
          <Decal 
            ref={Decal}
            position={[0, 0, 0]} 
            rotation={[0, 0, 0]} 
            scale={[5, 6.4, 5]} 
            map={texture} >
            <meshStandardMaterial map={texture} polygonOffset
            polygonOffsetFactor={-1} side={THREE.FrontSide} />
          </Decal>
          <Decal 
            ref={Decal}
            position={[0, 0, 0]} 
            rotation={[0, 0, 0]} 
            scale={[5, 6.4, 5]} 
            map={texture2} >
            <meshStandardMaterial map={texture2} polygonOffset
            polygonOffsetFactor={-1} side={THREE.BackSide}/>
          </Decal>
        </motion.mesh>
      </mesh>
    </>


  )
}

export default OvalShape;