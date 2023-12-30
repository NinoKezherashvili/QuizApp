import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/landingpage.module.css";
import img from "../images/quiz.png";

const LandingPage = () => {
  return (
    <>
      <nav className={styles.dFlex}>
        <h2 className={`${styles.f20} ${styles.f200} `}> Quiz</h2>
        <div className={styles.dFlex}>
          <Link
            to="/"
            className={`${styles.f15} ${styles.f200} ${styles.cBlack}`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`${styles.f15} ${styles.f200} ${styles.cBlack}`}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`${styles.f15} ${styles.f200} ${styles.cBlack}`}
          >
            About Us
          </Link>
        </div>

        <Link
          to="/login"
          className={`${styles.f20} ${styles.f200} ${styles.cBlack} `}
        >
          Login
        </Link>
      </nav>
      <>
        <div className={`${styles.G1wrapper}`}>
          <div
            className={`${styles.f20} ${styles.f200} ${styles.GTopBox} ${styles.a}`}
          >
            A
          </div>

          <div
            className={`${styles.f20} ${styles.f200} ${styles.GTopBox} ${styles.B}`}
          >
            B
          </div>
        </div>

        <div className={`${styles.G2wrapper}`}>
          <div
            className={`${styles.f20} ${styles.f200} ${styles.GBottomBox} ${styles.G3Box} ${styles.C}`}
          >
            C
          </div>
          <div
            className={`${styles.f20} ${styles.f200} ${styles.GBottomBox} ${styles.D}`}
          >
            D
          </div>
          
        </div>
        <img src={img} alt="quiz" className={`${styles.imgOnTop}`} />
      </>
    </>
  );
};

export default LandingPage;
