import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GetCategories from "./GetCategoriesAdmin";

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
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <>
      {user ? (
        <div>
          <aside>
            <section className="settings">
              WelcomeAdmin {user.email}
              <GetCategories/>
            </section>
          </aside>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default WelcomeAdmin;
