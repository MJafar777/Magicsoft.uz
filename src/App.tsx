import { Suspense } from "react";
import { Outlet } from 'react-router-dom';

import Theme from "./styles/Theme";
import { Footer, Header } from "./layouts";
import { Loader } from "./components/Loading";
import ThemeLocalization from "./locales/ThemeLocalization";

import "./locales/i18n";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Theme>
        <ThemeLocalization>
          <Header />
          <Outlet />
          <Footer />
        </ThemeLocalization>
      </Theme>
    </Suspense>
  );
}

export default App;
