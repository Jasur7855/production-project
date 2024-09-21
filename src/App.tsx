import "./styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense} from "react";
import { useTheme } from "./styles/theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";


export const App = () => {
  const{theme,toggleTheme}=useTheme()
  return (
    <div className={classNames("App",{},[theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to="/">Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loader...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
