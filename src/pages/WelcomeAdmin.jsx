import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GetCategories from "./GetCategoriesAdmin";
import styles from "../styles/homepageadmin.module.css";
import Sidebar from "../pages/Sidebar";

const getUser = () => {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
};

const WelcomeAdmin = () => {
  const [user] = useState(getUser());
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
          <div className={styles.content}>
            <GetCategories />
          </div>
        </div>
      ) : (
        navigate("/quizapp")
      )}
    </>
  );
};
export default WelcomeAdmin;
