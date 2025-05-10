import { UrlPages } from "./shared/utils/UrlPages";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";

const App = () => {
  return (
    <Routes>
      {Object.entries(UrlPages).map(([path, item]) => (
        <Route key={path} path={path} element={<item.page />} />
      ))}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
