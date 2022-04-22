import { Routes, Route } from "react-router-dom";
import {lazy , Suspense } from "react";
import PublicLayout from "./layout/PublicLayout";
import Error from "./components/Error";

const HomePage = lazy(() => import('./pages/home/HomePage'));
const AboutPage = lazy(() => import('./pages/About/AboutPage'));

const Application = () => {
  return(
      <Routes>
          <Route path="/" element={<PublicLayout />}>
              <Route index element={<Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><AboutPage /></Suspense>} />
          </Route>

          <Route path="*" element={<Error />} />
      </Routes>
  )
}

export default Application;