import React from "react";

import useResize from "./hooks/useResize";
import Header from "./Header";
import styles from "./PastWork.module.scss";

import acc1 from "./../img/accessory/astor_body.webp";
import acc2 from "./../img/accessory/wrist_hairy.webp";
import acc9 from "./../img/accessory/beach.webp";
import acc6 from "./../img/accessory/black_tote.webp";
import acc5 from "./../img/accessory/vote_wallet.webp";
import acc15 from "./../img/accessory/wallet_model.webp";
import acc14 from "./../img/accessory/wallace_interior.webp";
import acc3 from "./../img/accessory/workshop.webp";
import acc17 from "./../img/accessory/wrist_strap.webp";

// import acc4 from "./../img/accessory/float_bag.webp";
// import acc7 from "./../img/accessory/brown_tote.webp";
// import acc8 from "./../img/accessory/wallet_fan.webp";
// import acc10 from "./../img/accessory/screenprint.webp";
// import acc11 from "./../img/accessory/key_fac.webp";
// import acc12 from "./../img/accessory/red_handle.webp";
// import acc13 from "./../img/accessory/wrist_lineup.webp";
// import acc16 from "./../img/accessory/red_bags.webp";

function PastWork() {
  const [ isMobile, isDesktop ] = useResize();

  return (
    <>
      <div className={styles.pastWorkWrapper}>
        {
          isMobile ?
            <Header />
          : null
        }
        Past Work
        <div className={styles.imgContainer}>
          <img src={acc1} alt="tote on model" className={`${"accItem-1"}`}/>
          <img src={acc2} alt="hairy wristlet" className={`${"accItem-2"}`}/>
          <img src={acc9} alt="bags on beach" className={`${"accItem-9"}`}/>
          <img src={acc6} alt="black tote cloesup" className={`${"accItem-6"}`}/>
          <img src={acc5} alt="wallet embossed with vote" className={`${"accItem-5"}`}/>
          <img src={acc15} alt="wallet with model" className={`${"accItem-15"}`} />
          <img src={acc14} alt="wallet interior" className={`${"accItem-14"}`} />
          <img src={acc3} alt="workshop" className={`${"accItem-3"}`}/>
          <img src={acc17} alt="red bags on table" className={`${"accItem-17"}`} />

          {/* <img src={acc4} alt="black bag on glass float" className={`${"accItem-4"}`}/>
          <img src={acc7} alt="brown tote on model" className={`${"accItem-7"}`}/>
          <img src={acc8} alt="stacked wallets" className={`${"accItem-8"}`}/>
          <img src={acc10} alt="screenprinter with logo screen" className={`${"accItem-10"}`}/>
          <img src={acc11} alt="fanned key rings" className={`${"accItem-11"}`}/>
          <img src={acc12} alt="bag on lap" className={`${"accItem-12"}`}/>
          <img src={acc13} alt="four wristlets in a line" className={`${"accItem-13"}`}/>
          <img src={acc16} alt="red bags on table" className={`${"accItem-16"}`} /> */}

        </div>
      </div>
    </>
  );
}

export default PastWork;