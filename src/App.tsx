import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import HealthyStructure from "./pages/HealthyStructure";
import Problematic from "./pages/Problematic";
import DetailsPage from "./pages/DetailsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/healthy-structure":
        title = "";
        metaDescription = "";
        break;
      case "/problematic":
        title = "";
        metaDescription = "";
        break;
      case "/details-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/healthy-structure" element={<HealthyStructure />} />
      <Route path="/problematic" element={<Problematic />} />
      <Route path="/details-page" element={<DetailsPage />} />
    </Routes>
  );
}
export default App;
