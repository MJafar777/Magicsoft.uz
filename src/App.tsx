import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Theme from "./styles/Theme";
import { Footer, Header } from "./layouts";
import { Loader } from "./components/Loading";
import ThemeLocalization from "./locales/ThemeLocalization";
import "./locales/i18n";
import { ButtonContextProvider } from "./context/ButtonContext";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <ButtonContextProvider>
        <Theme>
          <ThemeLocalization>
            <Header />
            <Outlet />
            {location.pathname != "/" ? <Footer /> : ""}
          </ThemeLocalization>
        </Theme>
      </ButtonContextProvider>
    </Suspense>
  );
}

export default App;
