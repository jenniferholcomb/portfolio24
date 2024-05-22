import { useRef } from "react";
import styles from "./GreenControl.module.scss";
// import { motion } from "framer-motion";
import profileImg from "./../img/profilepic.png";
import profileImg2 from "./../img/Isla1.png";
import profileImg3 from "./../img/Isla2.png";

function Oval(props) {
  const ref = useRef();
  const imgArr = [profileImg, profileImg2, profileImg3];

  console.log(props);

  return (
    <>
      {/* <defs>
        <pattern
          id="pattern"
          patternUnits="objectBoundingBox"
          width="1"
          height="3">
          <image
            href={imgArr[props.currentImg]}
            height={222}
            x={-15}
            y={-12}
            alt="profile picture"
          />
        </pattern>
      </defs> */}
      <mesh
        {...props}
        ref={ref} >
        {/* <ellipse 
          className={styles.filledOval}
          cx="83" 
          cy="110.5" 
          rx="70" 
          ry="98"
          fill="url(#pattern)"/> */}
        <boxGeometry args={[6, 6, 3]} />
      </mesh>
    </>
  );
};

export default Oval;

// const [isHover, setIsHover] = useState(false);
// const [currentKey, setCurrentKey] = useState(0);
// const imgArr = [profileImg, profileImg2, profileImg3];

// const handleMouseEnter = () => {
//   setIsHover(true);
// };

// const handleMouseLeave = () => {
//   const updateKey = currentKey;
//   updateKey === 2 ? setCurrentKey(0) : setCurrentKey(currentKey + 1);
//   setIsHover(false);
// };

// const ovalStyle = {
//   background: isHover ? 'blue' : 'red',
//   color: 'white',
//   padding: '10px 20px',
//   borderRadius: '5px',
//   transition: 'background 0.3s',
//   cursor: 'pointer',
// };

//  {/* <button
//         style={ovalStyle}
//         // onMouseEnter={handleMouseEnter}
//         // onMouseLeave={handleMouseLeave}
//       >
//         Hover Me
//       </button> */}
//       <div className={styles.bioImgWrap}>
//         <svg 
//           // viewBox="0 0 500 70" 
//           width="166px"
//           height="222px"
//           xmlns="/#pattern" 
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave} 
//         >
            // <defs>
            //   <pattern
            //     id="pattern"
            //     patternUnits="objectBoundingBox"
            //     width="1"
            //     height="3">
            //     <image
            //       href={imgArr[currentKey]}
            //       height={222}
            //       x={-15}
            //       y={-12}
            //       alt="profile picture"
            //     />
            //   </pattern>
            // </defs>
//           <ellipse 
//             cx="83" 
//             cy="110.5" 
//             rx="80" 
//             ry="108" 
//             stroke="#F5EBDE" 
//             fill="none" 
//             strokeWidth="3" />
//           <ellipse 
//             className={styles.filledOval}
//             cx="83" 
//             cy="110.5" 
//             rx="72" 
//             ry="100"
//             fill="url(#pattern)" />
//         </svg> 
//       </div>