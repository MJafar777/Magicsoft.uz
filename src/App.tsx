import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Theme from "./styles/Theme";
import { Footer, Header } from "./layouts";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Theme>
        {/* <Header /> */}
        <Outlet />
        <Footer />
      </Theme>
    </Suspense>
  );
}

export default App;
