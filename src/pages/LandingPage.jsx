import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/landingpage.module.css";
import img from "../images/quiz.png";
import arrow from "../images/arrow_right_alt.png";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>
          X
        </span>{" "}
        <Link
          to="/quizapp/login"
          className={`${styles.f20} ${styles.f200} ${styles.cWhite}   ${styles.login} `}
        >
          Log In
        </Link>
        <div className={styles.greenLine}></div>
        <p className={`${styles.f20} ${styles.f200} `}>
          Don't have an account?
        </p>
        <div className={styles.signupnavigation}>
          <Link
            to="/quizapp/signup"
            className={`${styles.f20} ${styles.f200} ${styles.cBlack} ${styles.signup}`}
          >
            Sign up
          </Link>

          <Link
            to="/quizapp/signup"
            className={`${styles.f20} ${styles.f200} ${styles.cBlack} ${styles.signup}`}
          >
            <img src={arrow} alt="arrow for sign upF" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="landingPage">
        <nav className={`${styles.dFlex} ${styles.navigation} `}>
          <h2 className={`${styles.f20} ${styles.f200} `}> Quiz</h2>
          <div className={`${styles.dFlex} ${styles.about}`}>
            <Link
              to="/"
              className={`${styles.f15} ${styles.f200} ${styles.cWhite}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`${styles.f15} ${styles.f200} ${styles.cWhite}`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`${styles.f15} ${styles.f200} ${styles.cWhite}`}
            >
              About Us
            </Link>
          </div>

          <button
            to="/login"
            className={`${styles.f20} ${styles.f200}  ${styles.loginButton} `}
            onClick={toggleModal}
          >
            Login
          </button>
        </nav>
        <>
          <div className={`${styles.G1wrapper}`}>
            <div
              className={`${styles.f20} ${styles.f200} ${styles.GTopBox} ${styles.a}`}
            ></div>

            <div
              className={`${styles.f20} ${styles.f200} ${styles.GTopBox} ${styles.B}`}
            ></div>
          </div>

          <div className={`${styles.G2wrapper}`}>
            <div
              className={`${styles.f20} ${styles.f200} ${styles.GBottomBox} ${styles.G3Box} ${styles.C}`}
            ></div>
            <div
              className={`${styles.f20} ${styles.f200} ${styles.GBottomBox} ${styles.G4Box}  ${styles.D}`}
            ></div>
          </div>
          <img src={img} alt="quiz" className={`${styles.imgOnTop}`} />
        </>
        <Modal isOpen={isModalOpen} onClose={toggleModal} />
      </div>
    </>
  );
};

export default LandingPage;
