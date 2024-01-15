import styles from "../styles/sidebar.module.css";
import { useState } from "react";

import avatar from "../images/avatar..png";
import { Link } from "react-router-dom";
import category from "../images/category.png";
import security from "../images/security.png";
import person from "../images/person.png";
import arrow from "../images/arrow_forward_ios (2).png";

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
        <span className={styles.closeButton} onClick={onClose}>
          X
        </span>{" "}
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
              <img src={security} alt="person icon" />
              <Link to={"/quizapp/security"} className={styles.linkModal}>
                Security
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
  const [user] = useState(getUser());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.quizCategoriesSidebar}>
      <div className={styles.right}>
        <div className={styles.left}>
          <button onClick={toggleModal} className={styles.sidebarbutton}>
            <img src={avatar} alt="avatar" />
          </button>

          <h3>{user.fullname}</h3>
          <Modal isOpen={isModalOpen} onClose={toggleModal} />
        </div>
        <span className={styles.navspan}>
          <div className={styles.sidebarNavigation}>
            <img src={category} alt="category-icon" />
            <Link to={"/quizApp/managecategories"} className={styles.link}>
              Quiz Categories
            </Link>
          </div>
          <div className={styles.sidebarNavigation}>
            <img src={category} alt="category-icon" />
            <Link to={"/"} className={styles.link}>
              User Scores
            </Link>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
