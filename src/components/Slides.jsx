import React from "react";

import styles from "./Slides.module.scss";
import personaPic from "./../img/personaImg.webp";

function Slides(props) {
  const { slideIndex, handleCircleClick } = props;

  const carouselHeader = [ "pain points", "persona", "user journey map" ];

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
  
  const jmCategory = [ "action", "task list", "emotions", "improvement opportunities"];

  const journeyMapText = [[
                            "Organize materials to count inventory",
                            "Open inventory app, start new counting session",
                            "Count goods and record",
                            "Repeat counting till all goods inventoried",
                            "Complete inventory",
                          ],
                          [
                            [ "Organize & straighten food and paper goods", "Clean surfaces" ],
                            [ "Open app", "Select language", "Start new inventory session - enter date, name, time" ],
                            [ "Select category, then item to count", "Count item, record count number, review & submit" ],
                            [ "Select next item in category, enter count for item", "Repeat till all items counted in category", "Select next category" ],
                            [ "Click 'Finish' to complete inventory", "Review final inventory", "Click 'Submit' to finish inventory" ],
                          ],
                          [
                            [ "Apprehension for task at hand", "Hope for efficiency while counting goods" ],
                            [ "Readying environment so no distractions", "Grateful for ability to complete task in home language" ],
                            [ "Focused on counting, recording count correctly in app", "Images help with quick recognition of item to count" ],
                            [ "Established good rhythm for counting goods", "Starting to feel fatigued" ],
                            [ "Feeling relieved that task is complete" ],
                          ],
                          [
                            [ "Clean or minimal UI; try to alleviate task anxiety", "Bright high contrast colors; easily navigate site" ],
                            [ "Date and time auto-filled", "Dropdown menu to add employee names to inventory" ],
                            [ "When invoices inputted in system, goods updated with new quantity" ],
                            [ "Ability to organize list of goods as organized in food cart/restaurant" ],
                            [ "App is connected to POS - estimate of good quantity calculated based on sales & invoice ordering" ]
                          ]];
  
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
                {jmCategory.map((cell, index) =>
                  <>
                    <div className={styles.ujCol1}>
                      <h2 className={styles.ujCol1Header}>{cell}</h2>
                    </div>
                  
                    {journeyMapText[index].map((info, index2) => 
                      index === 0 ?
                        <div className={styles.row1Head}>
                          <h2 className={styles.actionHeader}>{info}</h2>
                        </div>
                      :
                      <div className={styles.ujInfo}>
                        <ul className={styles.ujInfoList}>
                          {journeyMapText[index][index2].map((list) =>
                            <li>{list}</li>
                          )}
                        </ul>
                      </div>
                    )}

                  </>
                )}
                
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

