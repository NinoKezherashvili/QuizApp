import Login from "../pages/Login";
import WelcomeAdmin from "../pages/WelcomeAdmin";
import WelcomeUser from "../pages/WelcomeUser";
import Createquiz from "../pages/Createquiz";
import RegisterPage from "../pages/RegisterPage";
import LandingPage from "../pages/LandingPage";
import QuizCategories from "../pages/QuizCategories";

const routes = [
  {
    element: <WelcomeAdmin />,
    path: "/welcomeadmin",
  },
  {
    element: <WelcomeUser />,
    path: "/welcomeuser",
  },
  {
    element: <Createquiz />,
    path: "/createquiz",
  },
  {
    element: <RegisterPage />,
    path: "/signup",
  },
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <QuizCategories />,
    path: "/quizcategories",
  },

  { element: <LandingPage />, path: "/" },
];

export default routes;
