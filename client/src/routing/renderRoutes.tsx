import { Route, Routes } from "react-router-dom";
import { routing } from ".";

export default function (routes: typeof routing) {
  return (
    <Routes>
      {routes.map((page, i) => (
        <Route path={page.path} key={i} element={<page.component />} />
      ))}
    </Routes>
  );
}
