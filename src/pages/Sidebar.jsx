import styles from "../styles/sidebar.module.css";
import { useState } from "react";

import avatar from "../images/avatar..png";
import { Link, useNavigate } from "react-router-dom";
import category from "../images/category.svg";
import security from "../images/Frame 7917.svg"
import person from "../images/Frame 7915.svg";
import arrow from "../images/arrow_forward_ios.svg"
import scores from "../images/emoji_events.svg";
import logout from "../images/logout.svg";
import thumbspin from "../images/Thumbpin.svg";
import terms from "../images/Frame 7916.svg";
import faq from "../images/Frame 7918.svg"

const getUser = () => {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
    console.log(user);
  } else {
    user = null;
  }
  return user;
};

const Modal = ({ isOpen, onClose, categories, handleSave, showSuccess }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <img
          src={thumbspin}
          alt="thumb spin"
          className={styles.thumbspin}
          onClick={onClose}
        />

        <ul>
          <li className={styles.linkNavigation}>
            <div>
              <img src={person} alt="person icon" />
              <Link
                to={"/quizapp/profilesettings"}
                className={styles.linkModal}
              >
                Profile Settings
              </Link>
            </div>

            <img src={arrow} className={styles.arrow} alt="person icon" />
          </li>
          <li className={styles.linkNavigation}>
            <div>
              <img src={security} alt="terms and conditions" />
              <Link to={"/quizapp/security"} className={styles.linkModal}>
                Security
              </Link>
            </div>

            <img src={arrow} className={styles.arrow} alt="person icon" />
          </li>
          <li className={styles.linkNavigation}>
            <div>
              <img src={terms} alt="change password" />
              <Link to={"/quizapp/security"} className={styles.linkModal}>
                Terms and Conditions
              </Link>
            </div>

            <img src={arrow} className={styles.arrow} alt="person icon" />
          </li>
          <li className={styles.linkNavigation}>
            <div>
              <img src={faq} alt="person icon" />
              <Link to={"/quizapp/security"} className={styles.linkModal}>
                FAQ
              </Link>
            </div>

            <img src={arrow} className={styles.arrow} alt="person icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [user, setUser] = useState(getUser());

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/Quizapp");
  };

  return (
    <div className={styles.quizCategoriesSidebar}>
      <div className={styles.right}>
        <div className={styles.left}>
          <button onClick={toggleModal} className={styles.sidebarbutton}>
            <img src={avatar} alt="avatar" />
          </button>

          <h3>{user && user.fullname}</h3>
          <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
        <span className={styles.navspan}>
          <div className={styles.sidebarNavigation}>
            <img src={category} alt="manage categories" />
            <Link to={"/quizApp/managecategories"} className={styles.link}>
              Quiz Categories
            </Link>
          </div>
          <div
            className={`${styles.sidebarNavigation} ${styles.marginBottom}  `}
          >
            <img src={scores} alt="user scores" />
            <Link to={"/"} className={styles.link}>
              User Scores
            </Link>
          </div>
          <div className={styles.sidebarNavigation}>
            <img src={logout} alt="logout" />
            <button onClick={handleLogout} className={styles.logoutbutton}>
              Log Out
            </button>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
