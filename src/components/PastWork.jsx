import React, {useEffect} from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./PastWork.module.scss";

import acc5 from "./../img/accessory/astor_body.webp";
import acc6 from "./../img/accessory/wrist_hairy.webp";
import acc4 from "./../img/accessory/beach.webp";
import acc2 from "./../img/accessory/black_tote.webp";
import acc3 from "./../img/accessory/vote_wallet.webp";
import acc1 from "./../img/accessory/wallet_model.webp";
import acc7 from "./../img/accessory/wallace_interior.webp";
import acc8 from "./../img/accessory/workshop.webp";
import acc9 from "./../img/accessory/wrist_strap.webp";

function PastWork() {
  const [ isMobile, isDesktop ] = useResize();

  const printImg = (imgNum, pic) => {
    console.log(imgNum)
    console.log(pic)
  }

  const imgArr = [ {pic: acc1, altText: "tote on model"}, 
                   {pic: acc2, altText: "hairy wristlet"}, 
                   {pic: acc3, altText: "bags on beach"}, 
                   {pic: acc4, altText: "black tote cloesup"}, 
                   {pic: acc5, altText: "wallet embossed with vote"}, 
                   {pic: acc6, altText: "wallet with model"},
                   {pic: acc7, altText: "wallet interior"}, 
                   {pic: acc8, altText: "workshop"}, 
                   {pic: acc9, altText: "wallets with wrist straps"} ];

  return (
    <>
      <div className={styles.pastWorkWrapper}>
        {
          isMobile ?
            <Header />
          : null
        }
        {/* <hi className={styles.aboutPageTitle}>Past Work</hi> */}
        <div className={styles.imgContainer}>
          <div className={styles.cubeWrap}>
            {imgArr.map((img, index) => 
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="170" 
                height="170" 
                viewBox="0 0 312 312" 
                // className={`accItem-${index + 1}`}
                className={styles.accItem}
                key={index + 1}
              >
                <defs>
                  <pattern
                    id={`pattern${index + 1}`}
                    patternUnits="objectBoundingBox"
                    width="1"
                    height="1">
                    <image
                      href={img.pic}
                      height={320}
                      x={0}
                      y={-1}
                      opacity={(.88)}
                      alt={`${img.altText}`}
                    />
                  </pattern>
                </defs>
                <path 
                  d="M0.529999 156C0.529999 122.55 1.91 94.82 9 47.63C13.47 17.89 28.66 0.530029 66.34 0.530029C85.46 0.530029 100.98 0.530029 156 0.530029C211.01 0.530029 226.53 0.530029 245.66 0.530029C283.35 0.530029 298.53 17.89 303 47.63C310.09 94.82 311.47 122.55 311.47 156C311.47 189.45 310.09 217.18 303 264.37C298.53 294.11 283.35 311.47 245.66 311.47C226.54 311.47 211.02 311.47 156 311.47C100.99 311.47 85.47 311.47 66.34 311.47C28.65 311.47 13.47 294.11 9 264.37C1.91 217.18 0.529999 189.45 0.529999 156Z" 
                  // fill={`${"url(#pattern"} ${index + 1} ${")"}`}
                  fill={`url(#pattern${index + 1})`}
                />
              </svg>
            )} 
          </div>
        </div>
      </div>
    </>
  );
}

export default PastWork;




      // import acc4 from "./../img/accessory/float_bag.webp";
      // import acc7 from "./../img/accessory/brown_tote.webp";
      // import acc8 from "./../img/accessory/wallet_fan.webp";
      // import acc10 from "./../img/accessory/screenprint.webp";
      // import acc11 from "./../img/accessory/key_fac.webp";
      // import acc12 from "./../img/accessory/red_handle.webp";
      // import acc13 from "./../img/accessory/wrist_lineup.webp";
      // import acc16 from "./../img/accessory/red_bags.webp";


      // <img src={acc4} alt="black bag on glass float" className={`${"accItem-4"}`}/>
      // <img src={acc7} alt="brown tote on model" className={`${"accItem-7"}`}/>
      // <img src={acc8} alt="stacked wallets" className={`${"accItem-8"}`}/>
      // <img src={acc10} alt="screenprinter with logo screen" className={`${"accItem-10"}`}/>
      // <img src={acc11} alt="fanned key rings" className={`${"accItem-11"}`}/>
      // <img src={acc12} alt="bag on lap" className={`${"accItem-12"}`}/>
      // <img src={acc13} alt="four wristlets in a line" className={`${"accItem-13"}`}/>
      // <img src={acc16} alt="red bags on table" className={`${"accItem-16"}`} /> 