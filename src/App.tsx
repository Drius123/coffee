import "./App.scss";
import { Route, Routes } from "react-router-dom";
import routeNames from "./routing/routs";
import AppLayout from "./app-layout/appLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={routeNames.PATH} element={<AppLayout />} />
      </Routes>
    </div>
  );
}

export default App;
