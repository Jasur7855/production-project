import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./provider/router";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./provider/ThemeProvider";
import { SideBar } from "widgets/SideBar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";


export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("App", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
       
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
