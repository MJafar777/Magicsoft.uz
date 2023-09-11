import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Theme from "./styles/Theme";
import { Footer, Header } from "./layouts";
import { Loader } from "./components/Loading";
import ThemeLocalization from "./locales/ThemeLocalization";
import "./locales/i18n";
import { ButtonContextProvider } from "./context/ButtonContext";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ButtonContextProvider>
        <Theme>
          <ThemeLocalization>
            <Header />
            <Outlet />
            {/* <Footer /> */}
          </ThemeLocalization>
        </Theme>
      </ButtonContextProvider>
    </Suspense>
  );
}

export default App;
