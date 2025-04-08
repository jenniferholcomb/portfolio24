import { useEffect, useState } from "react";
import useResize from "./hooks/useResize";
import { motion } from "framer-motion-3d";
import { useMemo } from 'react';
import { Decal, Line, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import styles from "./Bio.module.scss";
import profileImg from "/img/profilepic.webp";
import profileImg2 from "/img/coastJen.webp";
import profileImg3 from "/img/piper.webp";
// import { degToRad } from "three/src/math/MathUtils";

function getEllipseShape() {
  const shape = new THREE.Shape();
  const ellipseShape = shape.ellipse(0,0,2,3,0, Math.PI*2, false,0);

  return ellipseShape;
}

const duration = 0.5;

const ovalVariants = {
  load: {
    rotateY: [ 0, -0.5, 0.5, -0.25, 0.1, 0 ],
    // scale: 1,
    transition: {
      ease: "easeInOut",
      duration,
      rotateY: {
        delay: 3,
        duration,
        repeatDelay: 2,
        repeat: 1
      }
    },
  },
  rest: {
    rotateY: 0,
    transition: {
      duration: 0.85,
      type: "spring",
      damping: 6,
      // ease: "easeIn"
    }
  },
  hover: {
    rotateY: -3.2,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut"
    }
  },
  tap: {
    rotateY: -3.2,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeInOut"
    }
  }
};

const OvalShape = ({ flipPhoto }) => {
  const [ isMobile, isDesktop, isWdDesktop, isTablet, isMdDesktop ] = useResize();

  const [action, setAction] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const { gl } = useThree(); // Get the WebGL renderer

  const texture = useTexture(profileImg);
  const texture2 = useTexture(profileImg2);
  const texture3 = useTexture(profileImg3);

  const maxAnisotropy = gl.capabilities.getMaxAnisotropy();

  const handleTap = () => {
    console.log('we here')
    setIsTapped((prev) => !prev);
  };

  useMemo(() => {
    if (texture && texture2 && texture3) {
      const maxAnisotropy = gl.capabilities.getMaxAnisotropy();
      texture.anisotropy = maxAnisotropy;
      texture2.anisotropy = maxAnisotropy;
      texture3.anisotropy = maxAnisotropy;
  
      // Enable mipmaps for better quality
      texture.generateMipmaps = true;
      texture2.generateMipmaps = true;
      texture3.generateMipmaps = true;
  
      // Use Trilinear Filtering
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      
      texture2.minFilter = THREE.LinearMipmapLinearFilter;
      texture2.magFilter = THREE.LinearFilter;

      texture3.minFilter = THREE.LinearMipMapLinearFilter;
      texture3.magFilter = THREE.LinearFilter;
  
      // Ensure correct color space
      texture.colorSpace = THREE.SRGBColorSpace;
      texture2.colorSpace = THREE.SRGBColorSpace;
      texture3.colorSpace = THREE.SRGBColorSpace;
    }
  }, [texture, texture2, texture3, gl]);
  
  const points = useMemo(() => {
    const points = [];
    const curve = new THREE.EllipseCurve(0, 0, 2.6, 3.7, 0, 2 * Math.PI, false, 0).getPoints(128);
    const geometry = new THREE.BufferGeometry().setFromPoints(curve);

    let positions = geometry.attributes.position
    for (let i = 0; i < positions.count; i++) {
      let p = new THREE.Vector3().fromBufferAttribute(positions, i);
      points.push(p);
    }
    return points;
  }, [])

  useEffect(() => {
    setTimeout(()=>{
      setAction(true)
     }, 7000)
   }, [setAction]);

  useEffect(() => {
    if (isTapped) {
      const timeout = setTimeout(() => setIsTapped(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [isTapped]);

  return (
    <>
      <motion.mesh
        position-x={0}
        scale={1}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: [0, 0.71, 0.2, 1.01] }}
      >
        <Line points={points} color={`${!isMobile ? "#e5ddcc" : "#ADBEB2"}`} lineWidth={2} linecap="square" /> 
        <motion.mesh
          variants={ovalVariants}
          scale={1.1}
          animate={action ? (isTapped ? "tap" : "rest") : "load"}
          whileHover={"hover"}
          onTap={() => setIsTapped(true)}
          onPointerDown={() => setIsTapped(true)}
          onAnimationComplete={() => setIsTapped(false)}
        >
          <shapeGeometry args={[getEllipseShape(), 128]}/>
          <meshNormalMaterial />
          <Decal 
            ref={Decal}
            position={[0, 0, 0]} 
            rotation={[0, 0, 0]} 
            scale={[5, 6.4, 5]} 
            map={texture} >
            <meshStandardMaterial 
              map={texture} 
              polygonOffset
              polygonOffsetFactor={-1} 
              side={THREE.FrontSide} 
              // metalness={0.4} contrast
              // roughness={0.9} shininess
              encoding={THREE.sRGBEncoding} 
            />
          </Decal>
          <Decal 
            ref={Decal}
            position={[0, 0, 0]} 
            rotation={[0, 0, 0]} 
            scale={[4.2, 6.2, 5]} 
            map={flipPhoto ? texture2 : texture3} >
            <meshStandardMaterial map={texture2} polygonOffset
            polygonOffsetFactor={-1} side={THREE.BackSide}/>
          </Decal>
        </motion.mesh>
      </motion.mesh>
    </>
  )
}

export default OvalShape;

// import { useEffect, useState, useRef } from "react";
// import useResize from "./hooks/useResize";
// import { motion } from "framer-motion-3d";
// import { extend } from "@react-three/fiber";
// import { Mesh } from "three";
// import { useMemo } from 'react';
// import { Decal, Line, useTexture } from '@react-three/drei';
// import * as THREE from 'three';

// // import styles from "./Bio.module.scss";
// import profileImg from "./../img/profilepic.webp";
// import profileImg2 from "./../img/windyjen.webp";
// // import { degToRad } from "three/src/math/MathUtils";

// extend({ Mesh });

// function getEllipseShape() {
//   const shape = new THREE.Shape();
//   const ellipseShape = shape.ellipse(0,0,2,3,0, Math.PI*2, false,0);

//   return ellipseShape;
// }

// const duration = 0.5;

// const ovalVariants = {
//   load: {
//     rotateY: [ 0, -0.5, 0.5, -0.25, 0.1, 0 ],
//     // scale: 1,
//     transition: {
//       ease: "easeInOut",
//       duration,
//       rotateY: {
//         delay: 3,
//         duration,
//         repeatDelay: 2,
//         repeat: 1
//       }
//     },
//   },
//   rest: {
//     rotateY: 0,
//     transition: {
//       duration: 0.85,
//       type: "spring",
//       damping: 6,
//       // ease: "easeIn"
//     }
//   },
//   hover: {
//     rotateY: -3.2,
//     transition: {
//       duration: 0.4,
//       type: "tween",
//       ease: "easeInOut"
//     }
//   }
// };

// const OvalShape = () => {
//   const [ isMobile, isDesktop ] = useResize();

//   const texture = useTexture(profileImg);
//   const texture2 = useTexture(profileImg2);
//   const decalRef = useRef();

//   const points = useMemo(() => {
//     const points = [];
//     const curve = new THREE.EllipseCurve(0, 0, 2.6, 3.7, 0, 2 * Math.PI, false, 0).getPoints(128);
//     const geometry = new THREE.BufferGeometry().setFromPoints(curve);

//     let positions = geometry.attributes.position;
//     for (let i = 0; i < positions.count; i++) {
//       let p = new THREE.Vector3().fromBufferAttribute(positions, i);
//       points.push(p);
//     }
//     return points;
//   }, [])

//   const [action, setAction] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setAction(true);
//      }, 7000)
//    }, [setAction]);

//   return (
//     <>
//       <motion.mesh
//         position-x={0}
//         scale={1}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 3, ease: [0, 0.71, 0.2, 1.01] }}
//       >
//         <Line 
//           points={points} 
//           color={`${isDesktop ? "#e5ddcc" : "#78A0DB"}`} 
//           lineWidth={2} 
//           linecap="square" /> 
//         <motion.mesh
//           variants={ovalVariants}
//           scale={1.1}
//           animate={action ? "rest" : "load"}
//           transition={{ duration: 2, ease: "easeInOut" }}
//           // onAnimationComplete={() => setCompleted()}
//           whileHover={"hover"}
//         >
//           <shapeGeometry args={[getEllipseShape(), 128]}/>
//           <meshNormalMaterial />
//           <Decal 
//             ref={Decal}
//             position={[0, 0, 0]} 
//             rotation={[0, 0, 0]} 
//             scale={[5, 6.4, 5]} 
//             map={texture} 
//           >
//             <meshStandardMaterial 
//               map={texture} 
//               polygonOffset
//               polygonOffsetFactor={-1} 
//               side={THREE.FrontSide} 
//             />
//           </Decal>
//           <Decal 
//             ref={Decal}
//             position={[0, 0, 0]} 
//             rotation={[0, 0, 0]} 
//             scale={[4.2, 6.2, 5]} 
//             map={texture2} 
//           >
//             <meshStandardMaterial 
//               map={texture2} 
//               polygonOffset
//               polygonOffsetFactor={-1} 
//               side={THREE.BackSide}
//             />
//           </Decal>
//         </motion.mesh>
//       </motion.mesh>
//     </>
//   )
// }

// export default OvalShape;

 // initial={{ rotateY: 0 }}
          // animate={{
          //   rotateY: [ 0, -0.5, 0.5, 0 ],
          //   ease: "easeIn",
          //   repeatType: "reverse"
          // }}
          // transition={{
          //   delay: 5,
          //   repeat: 2,
          //   duration: 1
          // }}
          // transition={{
          //   rotateY: [ 0, -0.5, 0.5, 0 ],
          //   times: [6, 6.5, 7, 7.5]
          // }}
          // initial={{ opacity: 0, rotateY: 0 }}
          // animate={{ 
          //   opacity: 1, 
          //   rotateY: 0,
            // transition: {

            //   delay: 3,
            //   type: "tween",
            //   repeat: 2,
            //   duration: 0.7
            // }
          // }}
          // transition={{
          //   rotateY: -1,
          // }}
          // transition={{ duration: 3 }}
          // whileHover={{           
          //       rotateZ: 0,
          //       rotateY: -3.2,
          //       scale: 1,
          //       transition: {
          //         rotateZ: { duration: 1.5, ease: "linear", repeat: Infinity }
          //       }
          //     }}
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