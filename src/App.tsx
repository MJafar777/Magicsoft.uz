import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Theme from "./styles/Theme";
import { Footer, Header } from "./layouts";
import { Loader } from "./components/Loading";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Theme>
        <Header />
        <Outlet />
        <Footer />
      </Theme>
    </Suspense>
  );
}

export default App;
