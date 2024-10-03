import { AboutPage } from "pages/AboutPage";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { routeConfig } from "shared/config/routConfig/routConfig";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loader...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<div>Загрузка...</div>}>
                <div className="page-wrapper">{element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};
