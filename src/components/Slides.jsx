import React from "react";

import styles from "./Slides.module.scss";
import personaPic from "./../img/personaImg.webp";

function Slides(props) {
  const { slideIndex, handleCircleClick } = props;

  console.log('prop',slideIndex)

  const carouselHeader = [ "pain points", "persona", "user journey" ];
  const painPointsInfo = [{ 
                          header: "human error", 
                          par1: "Two areas subject to human error; inventory miscounts and invoice data entry.",
                          par2: "A counting system with visual cues or prompts, synchronized with counted goods, could eliminate incorrect counts. Or, for invoice uploads, a setup that completely eliminates human line entry."
                        },{
                          header: "time consuming", 
                          par1: "Both tasks, invoice entry and inventory counts, are time consuming responsibilities for business owners.",
                          par2: "All application design decisions should focus on ways to expedite these processes; through user flows, goods organization, or using advantageous modern technologies to complete tasks."
                        }, {
                          header: "task fatigue", 
                          par1: "Invoice data entry and inventory counting is monotonous, can cause fatigue.",
                          par2: "Finding methods to keep the user focused on the task is essential for a successful application. Asset design could cater to multiple senses, or break a task into smaller segments, or simply eliminate the task all together."
                        }, {
                          header: "cluttered interface", 
                          par1: "Overwhelmingly, an application redesign of a traditional inventory management system was requested through user research.",
                          par2: "An interface that prioritizes essential information, and makes secondary information easily accessible, but out of view, not overly crowding the screen."
                        }];
  
  return (
    <>
      <div className={styles.oneCarousel}>
        <div className={styles.carouselContent}>
          <h2 className={styles.carouselHead}>{carouselHeader[slideIndex]}</h2>
          { slideIndex === 0 ?
            <div className={styles.painPoints}>
              {painPointsInfo.map((info, index) =>
                <div className={styles.ppColumn}>
                  <div className={styles.ppNum}>{index + 1}</div>
                  <h3 className={styles.ppHeader}>{info.header}</h3>
                  <p className={styles.ppParagraph}>{info.par1}</p>
                  <p className={styles.ppParagraph}>{info.par2}</p>
                </div>
              )}  
            </div>
            : slideIndex === 1 ?
              <div className={styles.persona}>
                <div className={styles.personaColumn}>
                  <img src={personaPic} alt="business owner standing by food cart" />
                  <div className={styles.personaName}>
                    Cheri
                  </div>
                  <div className={styles.demographics}>
                    <h5 className={styles.demo1}>
                      age:<br />
                      education:<br />
                      hometown:<br />
                      family:<br />
                      occupation:<br />
                    </h5>
                    <div className={styles.demo2}>
                    53<br />
                    culinary degree<br />
                    Seattle, WA<br />
                    partner, 2 kids<br />
                    food truck owner<br />
                    </div>
                  </div>
                  <p className={styles.quote}>“Food is more than just sustenance; it&apos;s a way to connect, to share, and to savor life&apos;s flavors together”</p>
                </div>
                <div className={styles.probState}>
                  <h2 className={`${styles.probStateHeader} ${styles.slideHeader}`}>
                    problem statement
                  </h2>
                  <p className={styles.probStatePara}>
                    Cheri is a food truck owner who needs a better system for managing inventory. It&apos;s a necessity to have correct data on all items stocked in their trucks, and a hindrance to maintain accurate and current numbers. A tool that allows quick invoice entry, and maintaining precise counts of goods, would be beneficial for their business.
                  </p>
                </div>
                <div className={styles.goals}>
                  <div className={`${styles.slideHeader} ${styles.goalsHeader}`}>
                    goals
                  </div>
                  <ul className={styles.goalsPara}>
                    <li>Develop ordering system that cuts food costs without sacrificing quality menus</li>
                    <li>Establish and maintain a unique creative environment for customers and staff</li>
                    <li>Grow business; open brick-&-mortar restaurant while preserving successful food trucks</li>
                  </ul>
                </div>
                <div>
                  <div className={`${styles.slideHeader} ${styles.frustrationsHeader}`}>
                    frustrations
                  </div>
                  <ul className={styles.goalsPara}>
                    <li>Rising and fluctuating food costs; a need to easily cost menu items so marketing & social can adjust campaigns</li>
                    <li>Paperwork; would benefit from systems that eliminate (or alleviate) these timely tasks</li>
                    <li>Labor; necessity of hiring quality employees and avoid turnover</li>
                  </ul>
                </div>
                <div className={styles.personaBio}>
                  <div className={styles.bioBox}>
                    <p className={`${styles.probStatePara} ${styles.bioPara}`}>Cheri is sole owner of several food trucks in a medium sized city. They are responsible for employee management, ordering, inventory, and marketing for each truck. They also thoughtfully developed menus, specials, and price points to cater to the unique demographics of their customer and the surrounding neighborhoods.</p>
                  </div>
                </div>
              </div>
              :
              <div className={styles.userJourney}>
              
              </div>
          }
          <div className={styles.circleGroup}>
            {carouselHeader.map((page, index) =>
              <div className={`${styles.clickableCircle} ${(slideIndex === index) ? styles.clickedCircle : null}`} onClick={() => handleCircleClick(index)}></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slides;