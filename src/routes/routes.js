import Login from "../pages/Login";
import WelcomeAdmin from "../pages/WelcomeAdmin";
import WelcomeUser from "../pages/WelcomeUser";
import Createquiz from "../pages/Createquiz";
import RegisterPage from "../pages/RegisterPage";
import LandingPage from "../pages/LandingPage";
import ManageCategories from "../pages/ManageCategories";
import GetCategories from "../pages/GetCategoriesAdmin";
import EditQuiz2 from "../pages/EditQuiz2";
import ProfileSettings from "../pages/ProfileSettings";
import Security from "../pages/Security";

const routes = [
  {
    element: <WelcomeAdmin />,
    path: "/QuizApp/welcomeadmin",
  },
  {
    element: <WelcomeUser />,
    path: "/QuizApp/welcomeuser",
  },
  {
    element: <Createquiz />,
    path: "/QuizApp/createquiz",
  },
  {
    element: <RegisterPage />,
    path: "/QuizApp/signup",
  },
  {
    element: <Login />,
    path: "/QuizApp/login",
  },


  {
    element: <ManageCategories />,
    path: "/QuizApp/managecategories",
  },
  {
    element: <GetCategories />,
    path: "/QuizAppgetcategories",
  },
  {
    element: <EditQuiz2 />,
    path: "/quizapp/editquiz/:uuid", 
  },
  {
    element: <ProfileSettings />,
    path: "/quizapp/profilesettings", 
  },

  {
    element: <Security />,
    path: "/quizapp/security", 
  },


  { element: <LandingPage />, path: "/QuizApp" },
];

export default routes;
