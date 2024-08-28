import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Home.module.scss";
import ppCard from "./../img/pantryProCard.webp";

function HomeProject(props) {
  const { projectClick } = props;
  const cardArr = ["one", "two", "three"];
  
  return (
    <>
      <div className={styles.homeWrapper}>

        <div className={styles.picture}>
          <Link to={"/projects/pantrypro"} className={styles.linkCardStyle} onClick={projectClick}>
            <img className={styles.imgMask} src={ppCard} />
          </Link>
        </div>
  
        {cardArr.map((entry, index) => 
        <div className={styles.projectCard}>
          <h1>{entry}</h1>
          <h2>{index}</h2>
        </div>
        )}
      </div>
    </>
  );
}

HomeProject.propTypes = {
  projectClick: PropTypes.func
};

export default HomeProject;