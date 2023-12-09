import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import routeNames from "./routing/routs";
import AppLayout from "./app-layout/appLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={routeNames.PATH} element={<AppLayout />}>
          <Route
            path={routeNames.PATH}
            element={<Navigate to={routeNames.HOME} />}
          />
          <Route path={routeNames.HOME} element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
